import { useEffect, useState } from "react";
import CreateBrandModal from "../UI/CreateBrandModal";
import CreateModelModal from "../UI/CreateModelModal";
import CreateCarModal from "../UI/CreateCarModal";
import { useAppDispatch } from "../hooks/redux";
import { userSlice } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { getAllOrders, removeOrder } from "../http/orderAPI";
import { getAllUsers } from "../http/userAPI";
import { deleteBrand, deleteCar, deleteModel, fetchAllCars, fetchBrands, fetchModels } from "../http/carAPI.js";
import { fetchCredits } from "../http/creditAPI.js";

export const OrdersTable = ({ orders, handleRowClick }) => {
  if (orders.length === 0) return <h1 className="mt-2 text-center text-2xl font-bold">Заказов нет</h1>;

  return (
    <table>
      <caption className="text-center">Заказы</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>user_email</th>
          <th>user_name</th>
          <th>user_phone</th>
          <th>car_id</th>
          <th>total_price</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {orders.length > 0 &&
          orders.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
              <td>{item.id}</td>
              <td>{item.user_email}</td>
              <td>{item.user_name}</td>
              <td>{item.user_phone}</td>
              <td>{item.car_id}</td>
              <td>{item.total_price}</td>
              <td>{item.date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const UsersTable = ({ users, handleRowClick }) => {
  if (users.length === 0) return <h1 className="mt-2 text-center text-2xl font-bold">Пользователей нет</h1>;
  return (
    <table>
      <caption className="text-center">Пользователи</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>email</th>
          {/* <th>password</th> */}
          <th>first_name</th>
          <th>last_name</th>
          <th>phone</th>
          <th>role</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 &&
          users.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              {/* <td>{item.password}</td> */}
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.phone}</td>
              <td>{item.role}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const CarTable = ({ cars, handleRowClick }) => {
  if (cars.length === 0) return <h1 className="mt-2 text-center text-2xl font-bold">Автомобилей нет</h1>;

  return (
    <table>
      <caption className="text-center">Автомобили</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>brand</th>
          <th>model</th>
          <th>price</th>
          <th>year</th>
        </tr>
      </thead>
      <tbody>
        {cars.length > 0 &&
          cars.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
              <td>{item.id}</td>
              <td>{item.carBrandId}</td>
              <td>{item.carModelId}</td>
              <td>{item.car_price}</td>
              <td>{item.year_of_manufacture}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const ModelTable = ({ models, handleRowClick }) => {
  if (models.length === 0) return <h1 className="mt-2 text-center text-2xl font-bold">Моделей нет</h1>;

  return (
    <table>
      <caption className="text-center">Модели</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>model</th>
        </tr>
      </thead>
      <tbody>
        {models.length > 0 &&
          models.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
              <td>{item.id}</td>
              <td>{item.car_model_name}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const CreditTable = ({ credits, handleRowClick }) => {
  if (credits.length === 0) return <h1 className="mt-2 text-center text-2xl font-bold">Кредитов нет</h1>;

  return (
    <table>
      <caption className="text-center">Кредиты</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>user_email</th>
          <th>user_name</th>
          <th>user_phone</th>
          <th>message</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {credits.length > 0 &&
          credits.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
              <td>{item.id}</td>
              <td>{item.user_email}</td>
              <td>{item.user_name}</td>
              <td>{item.user_phone}</td>
              <td>{item.message}</td>
              <td>{item.date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
const BrandTable = ({ brands, handleRowClick }) => {
  if (brands.length === 0) return <h1 className="mt-2 text-center text-2xl font-bold">Брендов нет</h1>;

  return (
    <table>
      <caption className="text-center">Бренды</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>brand</th>
        </tr>
      </thead>
      <tbody>
        {brands.length > 0 &&
          brands.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
              <td>{item.id}</td>
              <td>{item.car_brand_name}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const Admin = () => {
  const [brandOpened, setBrandOpened] = useState(false); //марка
  const [modelOpened, setModelOpened] = useState(false);
  const [carOpened, setCarOpened] = useState(false);
  // const [confirmDeleteOpened, setConfirmDeleteOpened] = useState(false);

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [cars, setCars] = useState([]);
  const [credits, setCredits] = useState([]);

  const dispatch = useAppDispatch();
  const { setIsAuth, setUser } = userSlice.actions;

  const [tabs] = useState(["users", "orders", "brands", "models", "cars", "credits"]);
  const [currentTab, setCurrentTab] = useState("users");

  const changeTab = (tabName) => {
    setCurrentTab(tabName);
  };

  const navigate = useNavigate();

  const logOut = () => {
    navigate("/");
    dispatch(setIsAuth(false));
    dispatch(
      setUser({
        email: "",
        password: "",
      })
    );
  };

  const handleOrderRowClick = (id) => {
    const answer = confirm("Удалить заказ " + id + "?");
    if (!answer) return;

    removeOrder(id).then(() => getAllOrders().then((res) => setOrders(res)));
  };

  const handleBrandRowClick = (id) => {
    const answer = confirm("Удалить бренд " + id + "?");
    if (!answer) return;

    deleteBrand(id).then(() => fetchBrands().then((res) => setBrands(res)));
  };

  const handleModelRowClick = (id) => {
    const answer = confirm("Удалить модель " + id + "?");
    if (!answer) return;

    deleteModel(id).then(() => fetchModels().then((res) => setModels(res)));
  };

  const handleCarRowClick = (id) => {
    const answer = confirm("Удалить автомобиль " + id + "?");
    if (!answer) return;

    deleteCar(id).then(() => fetchAllCars().then((res) => setCars(res.rows)));
  };

  useEffect(() => {
    getAllOrders().then((res) => setOrders(res));
    getAllUsers().then((res) => setUsers(res));
    fetchBrands().then((res) => setBrands(res));
    fetchModels().then((res) => setModels(res));
    fetchAllCars().then((res) => setCars(res.rows));
    fetchCredits().then((res) => setCredits(res));
  }, [brandOpened, modelOpened, carOpened]);

  // console.log(cars);

  return (
    <div className="relative h-full px-2 py-2">
      <div className="mx-auto h-full max-w-7xl px-4">
        <div className="flex w-full justify-end py-4">
          <button className="rounded bg-secondaryGray bg-opacity-40 px-4 py-2 text-white" onClick={logOut}>
            Выйти
          </button>
        </div>
        <div className="flex h-full flex-col justify-start gap-4 ">
          <div className="mb-4 flex flex-col items-stretch justify-between gap-2 rounded-md border p-4 shadow md:flex-row md:items-center">
            <button
              className="rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray"
              onClick={() => setCarOpened(true)}>
              Добавить Автомобиль
            </button>
            <button
              className="rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray"
              onClick={() => setModelOpened(true)}>
              Добавить Модель
            </button>
            <button
              className="rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray"
              onClick={() => setBrandOpened(true)}>
              Добавить бренд
            </button>
          </div>
          <div className="table-container rounded-md border p-4 shadow">
            <h1 className="mb-4 text-center text-3xl font-bold">Информация</h1>
            <div className="mb-2 flex w-full flex-col items-stretch gap-4 md:flex-row md:items-center">
              {tabs.map((item) => (
                <button
                  key={item}
                  className={`w-full cursor-pointer rounded border-2 border-primaryOrange px-4 py-2 text-xl font-bold ${
                    currentTab === item && "bg-primaryOrange text-secondaryGray"
                  }
                    `}
                  onClick={() => changeTab(item)}>
                  {item}
                </button>
              ))}
            </div>
            {currentTab === "orders" && <OrdersTable orders={orders} handleRowClick={handleOrderRowClick} />}
            {currentTab === "users" && <UsersTable users={users} handleRowClick={() => console.log("yo")} />}
            {currentTab === "brands" && <BrandTable brands={brands} handleRowClick={handleBrandRowClick} />}
            {currentTab === "models" && <ModelTable models={models} handleRowClick={handleModelRowClick} />}
            {currentTab === "cars" && <CarTable cars={cars} handleRowClick={handleCarRowClick} />}
            {currentTab === "credits" && <CreditTable credits={credits} />}
          </div>
        </div>
      </div>
      <CreateBrandModal isOpened={brandOpened} setIsOpened={setBrandOpened} />
      <CreateModelModal isOpened={modelOpened} setIsOpened={setModelOpened} />
      <CreateCarModal isOpened={carOpened} setIsOpened={setCarOpened} />
    </div>
  );
};

export default Admin;
