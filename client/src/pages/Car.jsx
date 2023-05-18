import { useAppSelector } from '../hooks/redux';
import CarsList from '../components/CarsList';
import SubHero from '../components/SubHero';

const imageLink =
    'https://static.wixstatic.com/media/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg/v1/fill/w_980,h_862,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg';

const Car = () => {
    const { cars } = useAppSelector((state) => state.car);
    const exampleCar = {
        id: 1,
        body_type: 'Sedan',
        car_color: 'Red',
        car_name: 'Toyota RAV4',
        car_image:
            'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
        car_price: '100000',
        year_of_manufacture: 2021,
    };

    return (
        <main className=''>
            <SubHero imageLink={imageLink} mainText={exampleCar.car_name} />
            <div className='bg-secondaryLightGray'>
                <div className='mx-auto max-w-7xl space-y-8  px-6 py-16 sm:px-6 lg:px-8'>
                    <div className='flex flex-col gap-x-6 gap-y-4 md:flex-row md:items-start  md:justify-between'>
                        <div className='md:flex-1'>
                            <h1 className='mb-2 flex flex-wrap justify-between text-xl font-bold md:mb-4 lg:text-2xl'>
                                <span>
                                    {exampleCar.car_name},{' '}
                                    {exampleCar.year_of_manufacture}
                                </span>
                                <span className='text-gray-500'>
                                    {exampleCar.car_price} руб.
                                </span>
                            </h1>
                            <div className=''>
                                <img
                                    src={exampleCar.car_image}
                                    className='w-full rounded'
                                />
                            </div>
                        </div>
                        <div className='md:flex-1'>
                            <h1 className='text-lg font-bold md:text-xl lg:text-2xl'>
                                Характеристики
                            </h1>
                            {new Array(6).fill(0).map((_, index) => (
                                <div
                                    key={index}
                                    className='flex justify-between border-b pb-1 pt-2 lg:text-xl'
                                >
                                    <span>Год выпуска</span>
                                    <span>
                                        {exampleCar.year_of_manufacture}
                                    </span>
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
                        <CarsList givenArr={[...cars].slice(0, 3)} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Car;