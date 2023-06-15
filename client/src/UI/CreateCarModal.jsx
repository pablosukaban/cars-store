import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { createCar } from "../http/carAPI";

const CreateCarModal = ({ isOpened, setIsOpened }) => {
  const { brands, models } = useAppSelector((state) => state.car);

  const firstBrand = brands.length > 0 ? brands[0].car_brand_name : "";
  const firstModel = models.length > 0 ? models[0].car_model_name : "";

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [info, setInfo] = useState([]);
  const [price, setPrice] = useState(30000);
  const [year, setYear] = useState(2000);
  const [file, setFile] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setBrand(firstBrand);
    setModel(firstModel);
  }, [firstBrand, firstModel]);

  // нужно хранить объект с брендом и айди, в таблице то хранится айдишники моделей и бренда

  const modalContainerRef = useRef(null);
  const formRef = useRef(null);

  const addInfo = () => {
    setInfo([...info, { id: Date.now(), title: "", description: "" }]);
  };

  const deleteInfo = (id) => {
    setInfo(info.filter((item) => item.id !== id));
  };

  const changeInfo = (key, description, id) => {
    setInfo(info.map((i) => (i.id === id ? { ...i, [key]: description } : i)));
  };

  const changeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (brand.length === 0 || model.length === 0) {
      alert("Выберите бренд и модель автомобиля");
      return;
    }

    if (info.length === 0) {
      alert("Добавьте информацию о автомобиле");
      return;
    }

    if (file === "") {
      alert("Добавьте фото автомобиля");
      return;
    }

    setLoading(true);

    const formData = new FormData(formRef.current);

    const brandId = brands.find((b) => b.car_brand_name === brand).id;
    const modelId = models.find((m) => m.car_model_name === model).id;

    formData.append("car_model_id", modelId);
    formData.append("car_brand_id", brandId);
    formData.append("year_of_manufacture", `${year}`);
    formData.append("body_type", "Sedan");
    formData.append("car_color", "red");
    formData.append("car_price", `${price}`);
    formData.append("car_image", file);
    formData.append("info", JSON.stringify(info));

    createCar(formData)
      .then(() => setLoading(false))
      .then(() => {
        setIsOpened(false);
        formRef.current.reset();
      });
  };

  const handleContainerClick = (e) => {
    if (e.target === modalContainerRef.current) {
      setIsOpened(false);
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[100] flex h-screen w-full items-center justify-center bg-gray-900 bg-opacity-50 p-4 ${
        isOpened ? "" : "hidden"
      }`}
      onClick={handleContainerClick}
      ref={modalContainerRef}>
      <form
        ref={formRef}
        className="flex w-full max-w-[600px] flex-col items-center justify-center gap-4 overflow-y-scroll rounded-lg bg-white p-6">
        <h1 className="w-full border-b border-slate-300 p-1 text-2xl font-bold">Добавить автомобиль</h1>
        <select
          id={"brand"}
          className="w-full rounded border px-4 py-2"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}>
          <option disabled={true}>Выберите бренд авто</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.car_brand_name}>
              {brand.car_brand_name}
            </option>
          ))}
        </select>
        <select className="w-full rounded border px-4 py-2" value={model} onChange={(e) => setModel(e.target.value)}>
          <option disabled={true}>Выберите модель авто</option>
          {models.map((model) => (
            <option key={model.id} value={model.car_model_name}>
              {model.car_model_name}
            </option>
          ))}
        </select>
        <label className={"w-full"}>
          Цена, руб.
          <input
            type="number"
            placeholder="Цена"
            className="w-full border px-6 py-3"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </label>
        <label className={"w-full"}>
          Год выпуска
          <input
            type="number"
            placeholder="Год выпуска"
            className="w-full border px-6 py-3"
            value={year}
            onChange={(e) => setYear(+e.target.value)}
          />
        </label>
        <label className={"cursor-pointer self-start bg-secondaryGray p-4 text-white"}>
          {file.length === 0 ? "Добавить фото" : file.name}
          <input type="file" onChange={changeFile} className="hidden" />
        </label>
        <button onClick={addInfo} type="button" className="self-start bg-secondaryGray px-4 py-4 text-white">
          Добавить новое свойство
        </button>
        <div className="max-h-[220px] space-y-2 overflow-y-scroll">
          {info.length > 0 &&
            info.map((item) => (
              <div key={item.id} className="flex w-full items-center justify-between gap-2">
                <input
                  type="text"
                  placeholder="Название"
                  className="w-full border px-4 py-3"
                  value={item.titlle}
                  onChange={(e) => changeInfo("title", e.target.value, item.id)}
                />
                <input
                  type="text"
                  placeholder="Значение"
                  className="w-full border px-4 py-3"
                  value={item.description}
                  onChange={(e) => changeInfo("description", e.target.value, item.id)}
                />
                <button
                  type="button"
                  className="w-full border border-red-400 px-4 py-3"
                  onClick={() => deleteInfo(item.id)}>
                  Удалить
                </button>
              </div>
            ))}
        </div>
        <div className="flex w-full items-center justify-start gap-2">
          <button
            onClick={handleSubmit}
            className={`bg-primaryOrange px-4 py-3 ${loading ? "cursor-wait opacity-50" : ""}`}
            disabled={loading}>
            Подтвердить
          </button>
          <button type="button" onClick={() => setIsOpened(false)}>
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCarModal;
