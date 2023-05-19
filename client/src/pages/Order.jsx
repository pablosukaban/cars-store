import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { useEffect, useState } from 'react';
import { fetchOneCar } from '../http/carAPI';
import Loader from '../components/Loader';
import { getCarName } from '../utils/utils';
import { createOrder } from '../http/orderAPI';

const Order = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const { user } = useAppSelector((state) => state.user);
    const { brands, models } = useAppSelector((state) => state.car);

    const [email, setEmail] = useState('');
    const [date, setDate] = useState('2023-05-20');
    const [car, setCar] = useState(null);

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
        navigate('/');
    };

    const submitOrder = () => {
        const formData = new FormData();
        formData.append('car_id', car.id);
        formData.append('user_email', email);
        formData.append('date', date);
        formData.append('total_price', car.car_price);
        createOrder(formData).then((data) => {
            console.log(data);
        });
    };

    return (
        <div className='mt-10 grid h-[85vh] place-items-center overflow-hidden bg-secondaryLightGray px-4 md:mt-0'>
            <div className='rounded border border-secondaryLightGray bg-white px-8 py-6 shadow-lg sm:px-16 sm:py-12'>
                <h1 className='mb-4 text-center text-2xl font-bold'>
                    Оформление заказа {carName}
                </h1>
                <h2 className='mb-4 text-left text-xl font-bold'>
                    Цена: {car.car_price}
                </h2>
                <h2 className='mb-4 text-left text-xl font-bold'>
                    Дата: 01.05.2002
                </h2>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mb-4 block w-full rounded border border-secondaryLightGray px-4 py-2 placeholder-secondaryLightGray focus:border-secondaryLightGray focus:outline-none'
                />
                <input
                    type='text'
                    placeholder='Ваше Имя'
                    className='mb-4 block w-full rounded border border-secondaryLightGray px-4 py-2 placeholder-secondaryLightGray focus:border-secondaryLightGray focus:outline-none'
                />
                {/* <input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='mb-4 block w-full rounded border border-secondaryLightGray px-4 py-2 placeholder-secondaryLightGray focus:border-secondaryLightGray focus:outline-none'
                /> */}
                <div className='flex w-full items-center justify-start gap-2'>
                    <button
                        onClick={submitOrder}
                        className='bg-primaryOrange px-4 py-3'
                    >
                        Подтвердить
                    </button>
                    <button type='button' onClick={cancelOrder} className=''>
                        Отменить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
