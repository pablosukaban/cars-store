import { useRef, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { createCar } from "../http/carAPI";

const str =
  "Toyota Camry 2018 - это изысканный седан, который сочетает в себе элегантный дизайн, просторный и комфортабельный салон, а также передовые технологии. Он обеспечивает плавное и динамичное вождение, благодаря различным вариантам мощных и экономичных двигателей. С системой безопасности Toyota Safety Sense и современными функциями инфотейнмента, Toyota Camry 2018 предлагает уверенность и удовольствие от каждой поездки. Этот автомобиль идеально подходит для тех, кто ценит стиль, комфорт и надежность.";

const CreateCarModal = ({ isOpened, setIsOpened }) => {
  const { brands, models } = useAppSelector((state) => state.car);

  // const firstBrand = brands.length > 0 ? brands[0].car_brand_name : "";
  // const firstModel = models.length > 0 ? models[0].car_model_name : "";

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [info, setInfo] = useState([
    {
      id: Date.now() + 1,
      title: "Комплектация",
      description: "",
    },
    {
      id: Date.now() + 2,
      title: "Коробка",
      description: "",
    },
    {
      id: Date.now() + 3,
      title: "Пробег, км",
      description: "",
    },
  ]);
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState(str);

  const [loading, setLoading] = useState(false);

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

    if (!price || price <= 0) {
      alert("Введите цену автомобиля");
      return;
    }

    if (file.name.split(".")[1] !== "jpg" && file.name.split(".")[1] !== "png") {
      alert("Фото должно быть в формате jpg или png");
      return;
    }

    if (info.some((item) => item.title === "" || item.description === "")) {
      alert("Заполните все поля");
      return;
    }

    setLoading(true);

    const formData = new FormData(formRef.current);

    const brandId = brands.find((b) => b.car_brand_name === brand).id;
    const modelId = models.find((m) => m.car_model_name === model).id;

    formData.append("car_model_id", modelId);
    formData.append("car_brand_id", brandId);
    formData.append("year_of_manufacture", `${year}`);
    formData.append("body_type", bodyType);
    formData.append("car_color", color);
    formData.append("car_price", `${price}`);
    formData.append("car_image", file);
    formData.append("info", JSON.stringify(info));
    formData.append("car_description", description);

    createCar(formData)
      .then(() => setLoading(false))
      .then(() => {
        setIsOpened(false);
        formRef.current.reset();
      })
      .then(() => {
        setBrand("");
        setModel("");
        setInfo([
          {
            id: Date.now() + 1,
            title: "Комплектация",
            description: "",
          },
          {
            id: Date.now() + 2,
            title: "Коробка",
            description: "",
          },
          {
            id: Date.now() + 3,
            title: "Пробег, км",
            description: "",
          },
        ]);
        setPrice("");
        setYear("");
        setBodyType("");
        setColor("");
        setFile("");
      });
  };

  const handleContainerClick = (e) => {
    if (e.target === modalContainerRef.current) {
      setIsOpened(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex h-screen w-full items-center justify-center overflow-y-scroll bg-gray-900 bg-opacity-50 p-4 ${
        isOpened ? "" : "hidden"
      }`}
      onClick={handleContainerClick}
      ref={modalContainerRef}>
      <form
        ref={formRef}
        className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-4 overflow-y-scroll rounded-lg bg-white p-6">
        <h1 className="w-full border-b border-slate-300 p-1 text-2xl font-bold">Добавить автомобиль</h1>
        <div className={"flex w-full flex-col justify-center gap-4 lg:flex-row"}>
          <div className={"flex h-full flex-col items-center justify-between gap-4"}>
            <label className={"w-full"}>
              Бренд
              <select
                id={"brand"}
                className="w-full rounded border px-4 py-2"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}>
                <option value={""}>Выберите бренд авто</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.car_brand_name}>
                    {brand.car_brand_name}
                  </option>
                ))}
              </select>
            </label>
            <label className={"w-full"}>
              Модель
              <select
                className="w-full rounded border px-4 py-2"
                value={model}
                onChange={(e) => setModel(e.target.value)}>
                <option value={""}>Выберите модель авто</option>
                {models.map((model) => (
                  <option key={model.id} value={model.car_model_name}>
                    {model.car_model_name}
                  </option>
                ))}
              </select>
            </label>
            <div className={"grid grid-cols-1 gap-2 md:grid-cols-2"}>
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
              <label className={"w-full"}>
                Тип кузова
                <input
                  placeholder="Тип кузова"
                  className="w-full border px-6 py-3"
                  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value)}
                />
              </label>
              <label className={"w-full"}>
                Цвет
                <input
                  placeholder="Цвет"
                  className="w-full border px-6 py-3"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className={"flex h-full flex-col items-center justify-between gap-4"}>
            <label className={"cursor-pointer self-start bg-secondaryGray p-4 text-white"}>
              {file.length === 0 ? "Добавить фото" : file.name}
              <input type="file" onChange={changeFile} className="hidden" />
            </label>
            <button onClick={addInfo} type="button" className="self-start bg-secondaryGray px-4 py-4 text-white">
              Добавить информацию
            </button>
            <div className="max-h-[300px] space-y-2 overflow-y-scroll">
              {info.length > 0 &&
                info.map((item) => (
                  <div key={item.id} className="flex w-full items-center justify-between gap-2">
                    <input
                      type="text"
                      placeholder="Название"
                      className="w-full border px-4 py-3"
                      value={item.title}
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
          </div>
        </div>
        <label className={"w-full"}>
          Описание
          <textarea
            placeholder="Описание"
            className="h-[200px] w-full border px-6 py-3"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
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
