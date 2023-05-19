import { useState } from 'react';
import CreateBrandModal from '../UI/CreateBrandModal';
import CreateModelModal from '../UI/CreateModelModal';
import CreateCarModal from '../UI/CreateCarModal';
import { useAppDispatch } from '../hooks/redux';
import { userSlice } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [brandOpened, setBrandOpened] = useState(false); //марка
    const [modelOpened, setModelOpened] = useState(false);
    const [carOpened, setCarOpened] = useState(false);

    const dispatch = useAppDispatch();
    const { setIsAuth, setUser } = userSlice.actions;

    const navigate = useNavigate();

    const logOut = () => {
        dispatch(setIsAuth(false));
        dispatch(
            setUser({
                email: '',
                password: '',
            })
        );
        navigate('/login');
    };

    return (
        <div className='relative h-[85vh]'>
            <div className='mx-auto flex h-full max-w-2xl flex-col justify-center gap-4'>
                <button
                    className='absolute right-5 top-5 rounded bg-secondaryGray bg-opacity-40 px-4 py-2 text-white'
                    onClick={logOut}
                >
                    Выйти
                </button>
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
                    Добавить бренд
                </button>
            </div>
            <CreateBrandModal
                isOpened={brandOpened}
                setIsOpened={setBrandOpened}
            />
            <CreateModelModal
                isOpened={modelOpened}
                setIsOpened={setModelOpened}
            />
            <CreateCarModal isOpened={carOpened} setIsOpened={setCarOpened} />

            {/* <ModalContainer isOpened={brandOpened} setIsOpened={setBrandOpened}>
                <CreateBrandModal />
            </ModalContainer>
            <ModalContainer isOpened={modelOpened} setIsOpened={setModelOpened}>
                <CreateModelModal />
            </ModalContainer>
            <ModalContainer isOpened={carOpened} setIsOpened={setCarOpened}>
                <CreateCarModal />
            </ModalContainer> */}
        </div>
    );
};

export default Admin;
