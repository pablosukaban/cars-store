import CarsList from '../components/CarsList';
import SubHero from '../components/SubHero';
import { useAppSelector } from '../hooks/redux';

const imageLink =
    'https://static.wixstatic.com/media/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg/v1/fill/w_1500,h_701,al_c,q_85,enc_auto/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg';

const ModelFilter = () => {
    const { models } = useAppSelector((state) => state.car);
    return (
        <select
            className='w-full rounded border px-4 py-2'
            placeholder='Модель машины'
        >
            <option value=''>Все модели</option>
            {models.map((model) => (
                <option key={model.id} value={model.id}>
                    {model.car_model_name}
                </option>
            ))}
        </select>
    );
};

const BrandFilter = () => {
    const { brands } = useAppSelector((state) => state.car);
    return (
        <select
            className='w-full rounded border px-4 py-2'
            placeholder='Марка машины'
        >
            <option value=''>Все марки</option>
            {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                    {brand.car_brand_name}
                </option>
            ))}
        </select>
    );
};

const PriceFromFilter = () => {
    return (
        <input
            className='rounded border p-2'
            placeholder='Цена, от'
            type='number'
        />
    );
};

const PriceToFilter = () => {
    return (
        <input
            className='rounded border p-2'
            placeholder='Цена, до'
            type='number'
        />
    );
};

const CarNameFilter = () => {
    return <input className='rounded border p-4' placeholder='Поиск по авто' />;
};

const AllCars = () => {
    const { cars } = useAppSelector((state) => state.car);

    return (
        <main>
            <SubHero imageLink={imageLink} mainText='Все автомобили' />
            <div className='bg-secondaryLightGray py-16'>
                <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 '>
                    <div className='mb-12 flex flex-col justify-between gap-2 rounded border bg-white p-6 shadow-sm'>
                        <h1 className='text-center text-2xl font-bold'>
                            Фильтр
                        </h1>
                        <CarNameFilter />
                        <div className='flex flex-col flex-wrap gap-2 md:flex-row md:items-center lg:flex-nowrap'>
                            <ModelFilter />
                            <BrandFilter />
                            <PriceFromFilter />
                            <PriceToFilter />
                            <button className='rounded bg-secondaryGray  px-3 py-2 font-bold text-white'>
                                Поиск
                            </button>
                        </div>
                    </div>
                    <CarsList givenArr={cars} />
                    <div className='mt-8 flex items-center justify-end gap-2'>
                        {[1, 2, 3, 4, 5].map((el) => (
                            <button
                                key={el}
                                className='border bg-secondaryGray px-2 py-1 text-lg font-bold text-white transition hover:text-primaryOrange'
                            >
                                {el}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AllCars;
