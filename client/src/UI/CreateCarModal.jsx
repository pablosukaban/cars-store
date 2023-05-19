import { useRef } from 'react';
import { useAppSelector } from '../hooks/redux';

const CreateCarModal = ({ isOpened, setIsOpened }) => {
    const modalContainerRef = useRef(null);
    const { brands, models } = useAppSelector((state) => state.car);

    const handleContainerClick = (e) => {
        if (e.target === modalContainerRef.current) {
            setIsOpened(false);
        }
    };

    const handleSubmit = () => {};

    return (
        <div
            className={`fixed left-0 top-0 z-[100] flex min-h-screen w-full items-center justify-center bg-gray-900 bg-opacity-50 ${
                isOpened ? '' : 'hidden'
            }`}
            onClick={handleContainerClick}
            ref={modalContainerRef}
        >
            <div className='flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6'>
                <select>
                    {brands.map((brand) => (
                        <option key={brand.id}>{brand.car_brand_name}</option>
                    ))}
                </select>
                <select>
                    {models.map((model) => (
                        <option key={model.id}>{model.car_model_name}</option>
                    ))}
                </select>
                <input type='file' />
                <input
                    type='text'
                    placeholder='Enter car name'
                    className='border px-6 py-4'
                />
                <div className='flex w-full items-center justify-between px-2'>
                    <button onClick={handleSubmit} className=''>
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

export default CreateCarModal;
