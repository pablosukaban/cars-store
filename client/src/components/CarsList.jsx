import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import Loader from './Loader';
import { getCarName } from '../utils/utils';

const CarLi = ({ item, models, brands, handleItemClick }) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle(getCarName(brands, item.carBrandId, models, item.carModelId));
    }, [brands, item, models]);

    return (
        <li
            className='flex cursor-pointer flex-col items-center justify-center text-center text-gray-500'
            onClick={() => handleItemClick(item.id)}
        >
            <div className='px-6'>
                <img
                    className='rounded'
                    src={import.meta.env.VITE_API_URL + item.car_image}
                />
            </div>
            <h3 className='mt-4 text-xl font-bold'>{title}</h3>
            <h4>{item.year_of_manufacture}</h4>
            {/* <p className='max-w-[405px] text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                repudiandae!
            </p> */}
        </li>
    );
};

const CarsList = ({ givenArr }) => {
    const { brands, models } = useAppSelector((state) => state.car);

    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

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

    const handleItemClick = (itemId) => {
        navigate('/car/' + itemId);
    };

    if (!brands) return <Loader />;

    return (
        <ul className='grid grid-cols-1 gap-y-16 bg-secondaryLightGray md:grid-cols-2 lg:grid-cols-3'>
            {copy.map((item, index) => (
                <CarLi
                    key={index}
                    item={item}
                    brands={brands}
                    models={models}
                    handleItemClick={handleItemClick}
                />
            ))}
        </ul>
    );
};

export default CarsList;
