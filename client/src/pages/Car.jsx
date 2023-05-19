import { useAppDispatch, useAppSelector } from '../hooks/redux';
import CarsList from '../components/CarsList';
import SubHero from '../components/SubHero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { getCarName, shuffleArray } from '../utils/utils.js';
import { fetchAllCars, fetchOneCar } from '../http/carAPI';
import { carSlice } from '../store/carsSlice';

const imageLink =
    'https://static.wixstatic.com/media/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg/v1/fill/w_980,h_862,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg';

const Car = () => {
    const { cars, brands, models } = useAppSelector((state) => state.car);
    const { id } = useParams();

    const [car, setCar] = useState({ info: [] });

    const { setCars } = carSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchAllCars().then((data) => dispatch(setCars(data.rows)));
    }, [dispatch, setCars]);

    useEffect(() => {
        fetchOneCar(id).then((data) => {
            setCar(data);
        });
    }, [cars, id]);

    if (!car) return <Loader />;

    const title = getCarName(brands, car.carBrandId, models, car.carModelId);

    return (
        <main className=''>
            <SubHero imageLink={imageLink} mainText={title} />
            <div className='bg-secondaryLightGray'>
                <div className='mx-auto max-w-7xl space-y-8  px-6 py-16 sm:px-6 lg:px-8'>
                    <div className='flex flex-col gap-x-6 gap-y-4 md:flex-row md:items-start  md:justify-between'>
                        <div className='md:flex-1'>
                            <h1 className='mb-2 flex flex-wrap justify-between text-xl font-bold md:mb-4 lg:text-2xl'>
                                <span>
                                    {title}, {car.year_of_manufacture}
                                </span>
                                <span className='text-gray-500'>
                                    {car.car_price} руб.
                                </span>
                            </h1>
                            <div className=''>
                                <img
                                    src={
                                        import.meta.env.VITE_API_URL +
                                        car.car_image
                                    }
                                    className='w-full rounded'
                                />
                            </div>
                        </div>
                        <div className='md:flex-1'>
                            <h1 className='text-lg font-bold md:text-xl lg:text-2xl'>
                                Характеристики
                            </h1>
                            {car.info.length > 0 &&
                                car.info.map((item, index) => (
                                    <div
                                        key={index}
                                        className='flex justify-between border-b pb-1 pt-2 lg:text-xl'
                                    >
                                        <span>{item.title}</span>
                                        <span>{item.description}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <h1 className='mb-2 text-lg font-bold lg:text-2xl'>
                            Описание
                        </h1>
                        <p className='lg:text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde aut reiciendis repellendus laborum
                            tempore nemo impedit eligendi voluptates. Nobis
                            reiciendis veniam nostrum at ab dignissimos aliquam
                            quod facere consequuntur doloribus.
                        </p>
                    </div>
                    <div>
                        <h1 className='mb-2 text-lg font-bold lg:text-2xl'>
                            Расположение
                        </h1>
                        <p className='lg:text-xl'>
                            Москва, Дмитровское ш., 157с1
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-x-8 gap-y-4  md:flex-row'>
                        <button className='w-full rounded bg-primaryOrange px-6 py-3 font-semibold uppercase transition hover:bg-secondaryGray hover:text-white sm:w-auto sm:px-12 sm:py-4'>
                            Оформить заказ
                        </button>
                        <button className='w-full rounded bg-primaryOrange px-6 py-3 font-semibold uppercase transition hover:bg-secondaryGray hover:text-white sm:w-auto sm:px-12 sm:py-4'>
                            В кредит от 4.9%
                        </button>
                        {/*   <button className='rounded bg-primaryOrange px-12 py-4 font-semibold uppercase transition hover:bg-secondaryGray hover:text-white'>
                                Тест-драйв
                            </button> */}
                    </div>
                    <div>
                        <h1 className='mb-2 text-lg font-bold lg:text-2xl'>
                            Другие объявления
                        </h1>
                        <CarsList givenArr={shuffleArray(cars).slice(0, 3)} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Car;
