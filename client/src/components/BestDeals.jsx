import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import UnderlineBlock from '../UI/UnderlineBlock';
import { useAppSelector } from '../hooks/redux';
import CarsList from './CarsList';
import { NEW_ROUTE } from '../utils/constants';

const BestDeals = () => {
    const { cars } = useAppSelector((state) => state.car);

    const navigate = useNavigate();

    return (
        <section className='bg-secondaryLightGray'>
            <div className='mx-auto max-w-7xl space-y-8 px-4 py-12'>
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
                    <Button
                        isOrange={true}
                        onClick={() => navigate(NEW_ROUTE)}
                    />
                </div>
            </div>
        </section>
    );
};

export default BestDeals;
