import { useEffect, useState } from 'react';
import UnderlineBlock from '../UI/UnderlineBlock';
import { useAppSelector } from '../hooks/redux';
import { CarType } from '../store/carsSlice';

type CarsListProps = {
    givenArr: CarType[];
};

export const CarsList = ({ givenArr }: CarsListProps) => {
    const [width, setWidth] = useState(window.innerWidth);

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

        window.addEventListener('resize', resizeFunc);

        return () => window.removeEventListener('resize', resizeFunc);
    }, []);

    return (
        <ul className='grid grid-cols-1 gap-y-16 bg-white md:grid-cols-2 lg:grid-cols-3'>
            {copy.map((item, index) => (
                <li
                    key={index}
                    className='flex flex-col items-center justify-center text-center text-gray-500
                            '
                >
                    <div className='px-6'>
                        <img src={item.car_image} />
                    </div>
                    <h3 className='mt-4 text-xl font-bold'>Title</h3>
                    <p className='max-w-[405px] text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam, repudiandae!
                    </p>
                </li>
            ))}
        </ul>
    );
};

const BestDeals = () => {
    const { cars } = useAppSelector((state) => state.car);
    return (
        <section className='mx-auto max-w-7xl space-y-8 px-4 py-12'>
            <div className='flex flex-col items-center justify-center gap-16'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='mb-4 text-4xl font-bold text-secondaryGray sm:text-6xl md:text-8xl'>
                        Лучшие <br className='block md:hidden' /> сделки
                    </h1>
                    <p className='text-lg font-semibold uppercase text-gray-500 md:text-2xl'>
                        отличные автомобили по отличным ценам
                    </p>
                    <div className='mt-8'>
                        <UnderlineBlock />
                    </div>
                </div>
                <div>
                    <CarsList givenArr={cars} />
                </div>
                <button className='rounded bg-primaryOrange px-12 py-4 font-semibold uppercase transition hover:bg-secondaryGray hover:text-white'>
                    Подробнее
                </button>
            </div>
        </section>
    );
};

export default BestDeals;
