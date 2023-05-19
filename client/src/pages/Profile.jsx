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
        <div className='relative'>
            <button
                className='absolute right-5 top-5 rounded bg-secondaryGray bg-opacity-40 px-4 py-2 text-white'
                onClick={logOut}
            >
                Выйти
            </button>
            Профиль пользователя
            <br />
            <div>{user.email}</div>
            <div>{user.password}</div>
        </div>
    );
};

export default Profile;
