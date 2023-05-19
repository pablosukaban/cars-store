import { useRef, useState } from 'react';
import { createBrand, fetchBrands } from '../http/carAPI';
import { carSlice } from '../store/carsSlice';
import { useAppDispatch } from '../hooks/redux';

const CreateBrandModal = ({ isOpened, setIsOpened }) => {
    const modalContainerRef = useRef(null);

    const [value, setValue] = useState('');

    const { setBrands } = carSlice.actions;
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        if (value.length === 0) {
            alert('Введие бренд');
            return;
        }

        createBrand({ car_brand_name: value })
            .then(() => {
                setValue('');
                setIsOpened(false);
            })
            .then(() => fetchBrands())
            .then((data) => dispatch(setBrands(data)));
    };

    const handleContainerClick = (e) => {
        if (e.target === modalContainerRef.current) {
            setIsOpened(false);
        }
    };

    return (
        <div
            className={`fixed left-0 top-0 z-[100] flex min-h-screen w-full items-center justify-center bg-gray-900 bg-opacity-50 ${
                isOpened ? '' : 'hidden'
            }`}
            onClick={handleContainerClick}
            ref={modalContainerRef}
        >
            <div className='flex flex-col items-center justify-center gap-6 rounded-lg bg-white p-6'>
                <h1 className='w-full border-b border-slate-300 p-1 text-2xl font-bold'>
                    Добавить бренд
                </h1>
                <input
                    placeholder='Название бренда'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='border px-6 py-4'
                />
                <div className='flex w-full items-center justify-between gap-4 '>
                    <button
                        onClick={handleSubmit}
                        className='bg-primaryOrange px-4 py-3'
                    >
                        Подтвердить
                    </button>
                    <button onClick={() => setIsOpened(false)} className=''>
                        Отменить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateBrandModal;
