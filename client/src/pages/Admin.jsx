import { useRef, useState } from 'react';
import CreateBrandModal from '../UI/CreateBrandModal';
import CreateModelModal from '../UI/CreateModelModal';
import CreateCarModal from '../UI/CreateCarModal';

const ModalContainer = ({ isOpened, setIsOpened, children }) => {
    const modalContainerRef = useRef(null);

    const handleSubmit = () => {
        setIsOpened(false);
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
            <div className='flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6'>
                {children}
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

const Admin = () => {
    const [brandOpened, setBrandOpened] = useState(false); //марка
    const [modelOpened, setModelOpened] = useState(false);
    const [carOpened, setCarOpened] = useState(false);

    // const handleBrandClick = () => {};

    return (
        <div className='relative h-[85vh]'>
            <div className='mx-auto flex h-full max-w-2xl flex-col justify-center gap-4'>
                <button
                    className='rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray'
                    onClick={() => setCarOpened(true)}
                >
                    Добавить Автомобиль
                </button>
                <button
                    className='rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray'
                    onClick={() => setModelOpened(true)}
                >
                    Добавить Модель
                </button>
                <button
                    className='rounded bg-secondaryGray px-6 py-4 text-xl font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray'
                    onClick={() => setBrandOpened(true)}
                >
                    Добавить Марку
                </button>
            </div>
            <ModalContainer isOpened={brandOpened} setIsOpened={setBrandOpened}>
                <CreateBrandModal />
            </ModalContainer>
            <ModalContainer isOpened={modelOpened} setIsOpened={setModelOpened}>
                <CreateModelModal />
            </ModalContainer>
            <ModalContainer isOpened={carOpened} setIsOpened={setCarOpened}>
                <CreateCarModal />
            </ModalContainer>
        </div>
    );
};

export default Admin;
