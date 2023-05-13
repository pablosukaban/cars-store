import CarsList from '../components/CarsList';
import SubHero from '../components/SubHero';
import { useAppSelector } from '../hooks/redux';

const imageLink =
    'https://static.wixstatic.com/media/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg/v1/fill/w_1500,h_701,al_c,q_85,enc_auto/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg';

const Filter = () => {
    return (
        <div className='border-2 border-black p-8'>
            <input placeholder='Поиск по объявлениям' />
            <input type='text' placeholder='Цена от' />
            <input type='text' placeholder='Цена до' />
            <select placeholder='Марка'>
                <option>Test</option>
                <option>Test</option>
                <option>Test</option>
                <option>Test</option>
                <option>Test</option>
            </select>
            <select placeholder='Модель'>
                <option>Test</option>
                <option>Test</option>
                <option>Test</option>
                <option>Test</option>
            </select>
        </div>
    );
};

const AllCars = () => {
    const { cars } = useAppSelector((state) => state.car);
    return (
        <main>
            <SubHero imageLink={imageLink} mainText='Все автомобили' />
            <div className='bg-white py-16'>
                <div className='mx-auto w-full max-w-7xl '>
                    <Filter />
                    <CarsList givenArr={cars} />
                </div>
            </div>
        </main>
    );
};

export default AllCars;
