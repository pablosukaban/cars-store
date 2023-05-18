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
        navigate('/');
    };

    return (
        <div>
            Профиль пользователя
            <br />
            <div>{user.email}</div>
            <div>{user.password}</div>
            <button onClick={logOut}>выйти</button>
        </div>
    );
};

export default Profile;
