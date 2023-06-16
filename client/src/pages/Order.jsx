import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { useEffect, useState } from "react";
import { fetchOneCar } from "../http/carAPI";
import Loader from "../components/Loader";
import { getCarName } from "../utils/utils";
import { createOrder } from "../http/orderAPI";

const Order = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);
  const { brands, models } = useAppSelector((state) => state.car);

  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const [car, setCar] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setEmail(user.email);
  }, [user]);

  useEffect(() => {
    fetchOneCar(id).then((data) => {
      setCar(data);
    });
  }, [id]);

  if (!car) return <Loader />;

  const carName = getCarName(brands, car.carBrandId, models, car.carModelId);

  const cancelOrder = () => {
    navigate("/");
  };

  const submitOrder = (e) => {
    e.preventDefault();
    if (!email || !firstName || !lastName || !date || !phone) {
      alert("Заполните все поля");
      return;
    }

    const formData = new FormData();
    formData.append("user_email", email);
    formData.append("user_name", firstName + " " + lastName);
    formData.append("user_phone", phone);
    formData.append("car_id", car.id);
    formData.append("total_price", car.car_price);
    formData.append("date", date);
    formData.append("user_id", user.id);
    formData.append("manager_id", 1);

    createOrder(formData).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="mt-10 grid h-[85vh] place-items-center overflow-hidden bg-secondaryLightGray px-4 md:mt-0">
      <form className="rounded border border-secondaryLightGray bg-white px-8 py-6 shadow-lg sm:px-16 sm:py-12">
        <h1 className="mb-4 text-center text-2xl font-bold">Оформление заказа {carName}</h1>
        <h2 className="mb-4 text-left text-xl font-bold">Цена: {car.car_price}</h2>
        {/* <h2 className='mb-4 text-left text-xl font-bold'>
                    Дата: {date}
                </h2> */}
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 block w-full rounded border border-secondaryLightGray px-4 py-2 placeholder-secondaryLightGray focus:border-secondaryLightGray focus:outline-none"
        />
        <input
          type="text"
          required
          placeholder="Ваше Имя"
          className="mb-4 block w-full rounded border border-secondaryLightGray px-4 py-2 placeholder-secondaryLightGray focus:border-secondaryLightGray focus:outline-none"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Ваша Фамилия"
          className="mb-4 block w-full rounded border border-secondaryLightGray px-4 py-2 placeholder-secondaryLightGray focus:border-secondaryLightGray focus:outline-none"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="tel"
          required
          placeholder="Ваш номер телефона"
          className="mb-4 block w-full rounded border border-secondaryLightGray px-4 py-2 placeholder-secondaryLightGray focus:border-secondaryLightGray focus:outline-none"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mb-4 block w-full rounded border border-secondaryLightGray px-4 py-2 placeholder-secondaryLightGray focus:border-secondaryLightGray focus:outline-none"
        />
        <div className="flex w-full items-center justify-start gap-2">
          <button onClick={submitOrder} className="bg-primaryOrange px-4 py-3">
            Подтвердить
          </button>
          <button type="button" onClick={cancelOrder} className="">
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
