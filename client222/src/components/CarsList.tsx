import { useEffect, useState } from 'react';
import { CarType } from '../store/carsSlice';
import { useNavigate } from 'react-router-dom';

type CarsListProps = {
    givenArr: CarType[];
};

const CarsList = ({ givenArr }: CarsListProps) => {
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

    const handleItemClick = (itemId: number) => {
        navigate('/car/' + itemId);
    };

    return (
        <ul className='grid grid-cols-1 gap-y-16 bg-secondaryLightGray md:grid-cols-2 lg:grid-cols-3'>
            {copy.map((item, index) => (
                <li
                    key={index}
                    className='flex cursor-pointer flex-col items-center justify-center text-center text-gray-500'
                    onClick={() => handleItemClick(item.id)}
                >
                    <div className='px-6'>
                        <img className='rounded' src={item.car_image} />
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

export default CarsList;
