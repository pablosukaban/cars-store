import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import Admin from './Admin';

const Profile = () => {
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const { setIsAuth, setUser } = userSlice.actions;
    const navigate = useNavigate();

    if (user.role === 'ADMIN') {
        return <Admin />;
    }

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
        <div className='relative mt-10 grid h-[85vh] place-items-center overflow-hidden bg-secondaryLightGray px-4 md:mt-0'>
            <button
                className='absolute right-5 top-5 rounded bg-secondaryGray bg-opacity-40 px-4 py-2 text-white'
                onClick={logOut}
            >
                Выйти
            </button>
            <div className='rounded border border-secondaryLightGray bg-white px-8 py-6 shadow-lg sm:px-16 sm:py-12'>
                <h1 className='text-center'>Профиль</h1>
                <div className='flex items-baseline gap-2 p-2 text-lg'>
                    <span>Имя: </span>
                    <input
                        type='text'
                        className='inline-block w-full border p-2'
                        value={''}
                    />
                </div>
                <div className='flex items-baseline gap-2 p-2 text-lg'>
                    Телефон: {user.name || ''}
                    <input
                        type='tel'
                        className='inline-block w-full border p-2'
                        value={''}
                    />
                </div>
                <div className='p-2 text-lg'>ID: {user.id}</div>
                <div className='p-2 text-lg'>email: {user.email}</div>
                <div className='p-2 text-lg'>role: {user.role}</div>
            </div>
        </div>
    );
};

export default Profile;
