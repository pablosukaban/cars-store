import { useEffect, useState } from 'react';
import CreateBrandModal from '../UI/CreateBrandModal';
import CreateModelModal from '../UI/CreateModelModal';
import CreateCarModal from '../UI/CreateCarModal';
import { useAppDispatch } from '../hooks/redux';
import { userSlice } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { getAllOrders, removeOrder } from '../http/orderAPI';

const Admin = () => {
    const [brandOpened, setBrandOpened] = useState(false); //марка
    const [modelOpened, setModelOpened] = useState(false);
    const [carOpened, setCarOpened] = useState(false);
    // const [confirmDeleteOpened, setConfirmDeleteOpened] = useState(false);

    const [orders, setOrders] = useState([]);

    const dispatch = useAppDispatch();
    const { setIsAuth, setUser } = userSlice.actions;

    const navigate = useNavigate();

    const logOut = () => {
        dispatch(setIsAuth(false));
        dispatch(
            setUser({
                email: '',
                password: '',
            })
        );
        navigate('/login');
    };

    const handleRowClick = (id) => {
        const answer = confirm('Удалить заказ ' + id + '?');
        if (!answer) return;

        removeOrder(id).then(() =>
            getAllOrders().then((res) => setOrders(res))
        );
    };

    useEffect(() => {
        getAllOrders().then((res) => setOrders(res));
    }, []);

    return (
        <div className='relative h-[85vh]'>
            <div className='mx-auto flex h-full max-w-5xl flex-col justify-center gap-4 px-4'>
                <button
                    className='absolute right-5 top-5 rounded bg-secondaryGray bg-opacity-40 px-4 py-2 text-white'
                    onClick={logOut}
                >
                    Выйти
                </button>
                <button
                    className='rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray'
                    onClick={() => setCarOpened(true)}
                >
                    Добавить Автомобиль
                </button>
                <button
                    className='rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray'
                    onClick={() => setModelOpened(true)}
                >
                    Добавить Модель
                </button>
                <button
                    className='rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray'
                    onClick={() => setBrandOpened(true)}
                >
                    Добавить бренд
                </button>
                <div className='table-container'>
                    <table>
                        <caption>Orders</caption>
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
                                    <tr
                                        key={item.id}
                                        onClick={() => handleRowClick(item.id)}
                                    >
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
                </div>
            </div>
            <CreateBrandModal
                isOpened={brandOpened}
                setIsOpened={setBrandOpened}
            />
            <CreateModelModal
                isOpened={modelOpened}
                setIsOpened={setModelOpened}
            />
            <CreateCarModal isOpened={carOpened} setIsOpened={setCarOpened} />
        </div>
    );
};

export default Admin;
