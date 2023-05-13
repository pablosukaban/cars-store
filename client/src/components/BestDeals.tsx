import UnderlineBlock from '../UI/UnderlineBlock';
import { useAppSelector } from '../hooks/redux';
import CarsList from './CarsList';

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
