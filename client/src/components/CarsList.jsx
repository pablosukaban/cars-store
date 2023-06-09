import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import Loader from "./Loader";
import { getCarName } from "../utils/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";

dayjs.extend(relativeTime);
dayjs.locale("ru");

const CarLi = ({ item, models, brands, handleItemClick }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(getCarName(brands, item.carBrandId, models, item.carModelId));
  }, [brands, item, models]);

  return (
    <li
      className="flex cursor-pointer flex-col items-center justify-center text-gray-500"
      onClick={() => handleItemClick(item.id)}>
      <div className="px-4">
        <img className="rounded" src={import.meta.env.VITE_API_URL + item.car_image} />
      </div>
      <h3 className="mt-4 w-full px-6 text-xl font-bold">
        <span>{title}, </span>
        <span className="">{item.year_of_manufacture} год</span>
      </h3>
      <h4 className="w-full px-6 text-left">{item.car_price} ₽</h4>
      <h5 className="w-full px-6 text-left font-thin">{dayjs(item.createdAt).fromNow()}</h5>
    </li>
  );
};

const CarsList = ({ givenArr }) => {
  const { brands, models } = useAppSelector((state) => state.car);

  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const isFirstBrakpoint = width < 766;
  const isSecondBreakpoint = width > 766 && width < 1024;
  const isThirdBrakPoint = width > 1024;

  const getRigthArr = () => {
    if (isFirstBrakpoint) {
      return [...givenArr].slice(0, 3);
    } else if (isSecondBreakpoint) {
      return [...givenArr].slice(0, 6);
    } else if (isThirdBrakPoint) {
      return [...givenArr];
    }
    return [...givenArr];
  };

  const copy = getRigthArr();

  useEffect(() => {
    const resizeFunc = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeFunc);

    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  const handleItemClick = (itemId) => {
    navigate("/car/" + itemId);
  };

  if (!brands) return <Loader />;

  return (
    <ul className="grid grid-cols-1 gap-4 bg-secondaryLightGray md:grid-cols-2 lg:grid-cols-3">
      {copy.map((item, index) => (
        <CarLi key={index} item={item} brands={brands} models={models} handleItemClick={handleItemClick} />
      ))}
    </ul>
  );
};

export default CarsList;
