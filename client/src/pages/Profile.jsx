import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import Admin, { OrdersTable } from "./Admin";
import { changeInfo, check } from "../http/userAPI";
import { getOrdersByUserId } from "../http/orderAPI.js";

const Profile = () => {
  const { user } = useAppSelector((state) => state.user);

  // console.log(user);

  const dispatch = useAppDispatch();
  const { setIsAuth, setUser } = userSlice.actions;
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  const [userOrders, setUserOrders] = useState([]);

  const [newInfo, setNewInfo] = useState({
    newFirstName: "",
    newLastName: "",
    newTel: "",
  });

  const startEdit = () => {
    setIsEdit(true);
  };

  const cancelEdit = () => {
    setNewInfo({
      newFirstName: "",
      newLastName: "",
      newTel: "",
    });
    setIsEdit(false);
  };

  const saveEdit = () => {
    if (newInfo.newFirstName !== "" && newInfo.newLastName !== "" && newInfo.newTel !== "") {
      changeInfo(user.id, newInfo.newFirstName, newInfo.newLastName, newInfo.newTel).then(() => {
        // dispatch(
        //   setUser({
        //     ...user,
        //     firstName: newInfo.newFirstName,
        //     lastName: newInfo.newLastName,
        //     phone: newInfo.newTel,
        //   })
        // );
      });
      cancelEdit();
    }
  };

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

  useEffect(() => {
    check().then((data) => {
      // console.log(data)
      dispatch(setIsAuth(true));
      dispatch(setUser(data));
    });
  }, [dispatch, setIsAuth, setUser]);

  useEffect(() => {
    getOrdersByUserId(user.id).then((data) => {
      setUserOrders(data);
    });
  }, []);

  if (user.role === "ADMIN") {
    return <Admin />;
  }

  return (
    <div className="relative mt-10 grid h-[85vh] place-items-center overflow-hidden bg-secondaryLightGray px-4 md:mt-0">
      <button
        className="absolute right-5 top-5 rounded bg-secondaryGray bg-opacity-40 px-4 py-2 text-white"
        onClick={logOut}>
        Выйти
      </button>
      <div className="flex flex-col gap-2 rounded border border-secondaryLightGray bg-white px-8 py-6 shadow-lg sm:px-16 sm:py-12">
        <h1 className="text-center text-lg font-semibold">Профиль</h1>
        {/*<div className="flex items-baseline gap-2 p-2 text-lg">*/}
        {/*  <span>Имя: </span>*/}
        {/*  {isEdit ? (*/}
        {/*    <input*/}
        {/*      value={newInfo.newFirstName}*/}
        {/*      onChange={(e) =>*/}
        {/*        setNewInfo({*/}
        {/*          ...newInfo,*/}
        {/*          newFirstName: e.target.value,*/}
        {/*        })*/}
        {/*      }*/}
        {/*      type="text"*/}
        {/*      className="inline-block w-full border p-2"*/}
        {/*    />*/}
        {/*  ) : (*/}
        {/*    <span>{user.first_name || ""}</span>*/}
        {/*  )}*/}
        {/*</div>*/}
        {/*<div className="flex items-baseline gap-2 p-2 text-lg">*/}
        {/*  <span>Фамилия: </span>*/}
        {/*  {isEdit ? (*/}
        {/*    <input*/}
        {/*      value={newInfo.newLastName}*/}
        {/*      onChange={(e) =>*/}
        {/*        setNewInfo({*/}
        {/*          ...newInfo,*/}
        {/*          newLastName: e.target.value,*/}
        {/*        })*/}
        {/*      }*/}
        {/*      type="text"*/}
        {/*      className="inline-block w-full border p-2"*/}
        {/*    />*/}
        {/*  ) : (*/}
        {/*    <span>{user.lastName || ""}</span>*/}
        {/*  )}*/}
        {/*</div>*/}

        {/*<div className="flex items-baseline gap-2 p-2 text-lg">*/}
        {/*  <span>Телефон:</span>*/}
        {/*  {isEdit ? (*/}
        {/*    <input*/}
        {/*      value={newInfo.newTel}*/}
        {/*      onChange={(e) =>*/}
        {/*        setNewInfo({*/}
        {/*          ...newInfo,*/}
        {/*          newTel: e.target.value,*/}
        {/*        })*/}
        {/*      }*/}
        {/*      type="tel"*/}
        {/*      className="inline-block w-full border p-2"*/}
        {/*    />*/}
        {/*  ) : (*/}
        {/*    <span>{user.phone || ""}</span>*/}
        {/*  )}*/}
        {/*</div>*/}
        <div className="p-2 text-lg">ID: {user.id}</div>
        <div className="p-2 text-lg">email: {user.email}</div>
        <div className="p-2 text-lg">role: {user.role}</div>
        {isEdit ? (
          <div className="flex items-center justify-between">
            <button className="self-end" onClick={saveEdit}>
              Сохранить
            </button>
            <button className="self-end" onClick={cancelEdit}>
              Отменить
            </button>
          </div>
        ) : (
          <></>
        )}
        {userOrders.length > 0 && <OrdersTable orders={userOrders} handleRowClick={() => console.log("yo")} />}
      </div>
    </div>
  );
};

export default Profile;
