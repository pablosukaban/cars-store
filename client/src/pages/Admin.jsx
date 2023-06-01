import { useEffect, useState } from 'react';
import CreateBrandModal from '../UI/CreateBrandModal';
import CreateModelModal from '../UI/CreateModelModal';
import CreateCarModal from '../UI/CreateCarModal';
import { useAppDispatch } from '../hooks/redux';
import { userSlice } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { getAllOrders, removeOrder } from '../http/orderAPI';
import { getAllUsers } from '../http/userAPI';

const OrdersTable = ({ orders, handleRowClick }) => {
    if (orders.length === 0)
        return (
            <h1 className='mt-2 text-center text-2xl font-bold'>Заказов нет</h1>
        );

    return (
        <table>
            <caption className='text-center'>Заказы</caption>
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
    );
};

const UsersTable = ({ users, handleRowClick }) => {
    return (
        <table>
            <caption className='text-center'>Пользователи</caption>
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
                        <tr
                            key={item.id}
                            onClick={() => handleRowClick(item.id)}
                        >
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

const Admin = () => {
    const [brandOpened, setBrandOpened] = useState(false); //марка
    const [modelOpened, setModelOpened] = useState(false);
    const [carOpened, setCarOpened] = useState(false);
    // const [confirmDeleteOpened, setConfirmDeleteOpened] = useState(false);

    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);

    const dispatch = useAppDispatch();
    const { setIsAuth, setUser } = userSlice.actions;

    const [currentTab, setCurrentTab] = useState('orders');

    const changeTab = (tabName) => {
        setCurrentTab(tabName);
    };

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
        getAllUsers().then((res) => setUsers(res));
    }, []);

    return (
        <div className='relative h-full px-2 py-2'>
            <div className='mx-auto h-full max-w-5xl px-4'>
                <div className='flex w-full justify-end py-4'>
                    <button
                        className='rounded bg-secondaryGray bg-opacity-40 px-4 py-2 text-white'
                        onClick={logOut}
                    >
                        Выйти
                    </button>
                </div>
                <div className='flex h-full flex-col justify-start gap-4'>
                    <div className='mb-4 flex items-center justify-between gap-2'>
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
                    </div>
                    <div className='table-container'>
                        <h1 className='mb-2 text-center text-3xl font-bold'>
                            Таблицы
                        </h1>
                        <div className='flex w-full items-center gap-4'>
                            <button
                                className={`w-full cursor-pointer rounded border-2 border-primaryOrange p-4 text-xl font-bold ${
                                    currentTab === 'orders' &&
                                    'bg-primaryOrange text-secondaryGray'
                                }`}
                                onClick={() => changeTab('orders')}
                            >
                                ORDERS
                            </button>
                            <button
                                className={`w-full cursor-pointer rounded border-2 border-primaryOrange p-4 text-xl font-bold ${
                                    currentTab === 'users' &&
                                    'bg-primaryOrange text-secondaryGray'
                                }`}
                                onClick={() => changeTab('users')}
                            >
                                USERS
                            </button>
                        </div>
                        {currentTab === 'orders' && (
                            <OrdersTable
                                orders={orders}
                                handleRowClick={handleRowClick}
                            />
                        )}
                        {currentTab === 'users' && (
                            <UsersTable
                                users={users}
                                handleRowClick={() => console.log('yo')}
                            />
                        )}
                    </div>
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
