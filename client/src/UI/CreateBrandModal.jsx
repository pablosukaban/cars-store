import { useEffect, useRef, useState } from "react";
import { createBrand, fetchBrands } from "../http/carAPI";
import { carSlice } from "../store/carsSlice";
import { useAppDispatch } from "../hooks/redux";
import { useSelector } from "react-redux";

const CreateBrandModal = ({ isOpened, setIsOpened }) => {
  const { brands } = useSelector((state) => state.car);
  const modalContainerRef = useRef(null);
  const inputRef = useRef(null);

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { setBrands } = carSlice.actions;
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundBrand = brands.find((brand) => brand.car_brand_name.toLowerCase() === value.toLowerCase());

    if (foundBrand) {
      alert("Такой бренд уже существует");
      return;
    }

    if (value.length === 0) {
      alert("Введие бренд");
      return;
    }

    setLoading(true);
    createBrand({ car_brand_name: value })
      .then(() => {
        setValue("");
        setIsOpened(false);
      })
      .then(() => fetchBrands())
      .then((data) => dispatch(setBrands(data)));
    setLoading(false);
  };

  const handleContainerClick = (e) => {
    if (e.target === modalContainerRef.current) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, [isOpened]);

  return (
    <div
      className={`fixed left-0 top-0 z-[100] flex min-h-screen w-full items-center justify-center bg-gray-900 bg-opacity-50 ${
        isOpened ? "" : "hidden"
      }`}
      onClick={handleContainerClick}
      ref={modalContainerRef}>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white p-6">
        <h1 className="w-full border-b border-slate-300 p-1 text-2xl font-bold">Добавить бренд</h1>
        <input
          ref={inputRef}
          placeholder="Название бренда"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border px-6 py-4"
        />
        <div className="flex w-full items-center justify-between gap-4 ">
          <button
            className={`bg-primaryOrange px-4 py-3 ${loading ? "cursor-wait opacity-50" : ""}`}
            disabled={loading}>
            Подтвердить
          </button>
          <button type={"button"} onClick={() => setIsOpened(false)} className="">
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBrandModal;
