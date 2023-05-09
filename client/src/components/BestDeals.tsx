import { useEffect, useState } from 'react';
import UnderlineBlock from '../UI/UnderlineBlock';

const exampleCarImg =
    'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg';

type exapleCar = {
    img: string;
    title: string;
    description: string;
};

const exapleArr = new Array<exapleCar>(9).fill({
    img: exampleCarImg,
    title: 'Athos R8',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque.',
});

type CarsListProps = {
    givenArr: exapleCar[];
};

const CarsList = ({ givenArr }: CarsListProps) => {
    const [width, setWidth] = useState(window.innerWidth);

    const isFirstBrakpoint = width < 766;
    const isSecondBreakpoint = width > 766 && width < 1024;
    const isThirdBrakPoint = width > 1024;

    console.log('render');

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
        <ul className='grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3'>
            {copy.map((item, index) => (
                <li
                    key={index}
                    className='flex flex-col items-center justify-center text-center text-gray-500
                            '
                >
                    <div className='px-6'>
                        <img src={item.img} />
                    </div>
                    <h3 className='mt-4 text-xl font-bold'>{item.title}</h3>
                    <p className='max-w-[405px] text-lg'>{item.description}</p>
                </li>
            ))}
        </ul>
    );
};

const BestDeals = () => {
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
                    <CarsList givenArr={exapleArr} />
                </div>
                <button className='rounded bg-primaryOrange px-12 py-4 font-semibold uppercase transition hover:bg-secondaryGray hover:text-white'>
                    Подробнее
                </button>
            </div>
        </section>
    );
};

export default BestDeals;
