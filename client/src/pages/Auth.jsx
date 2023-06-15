import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { NavLink } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { userSlice } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const isLoginPage = location.pathname === LOGIN_ROUTE;

    const dispatch = useAppDispatch();
    const { setUser, setIsAuth } = userSlice.actions;

    const handleButtonClick = async () => {
        try {
            setLoading(true)
            let newUser;

            if (isLoginPage) {
                newUser = await login(email, password);
            } else {
                newUser = await registration(email, password);
            }

            dispatch(setUser(newUser));
            dispatch(setIsAuth(true));

            navigate('/');
        } catch (error) {
            alert(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mt-10 grid h-[86vh] place-items-center overflow-hidden bg-secondaryLightGray px-4 md:mt-0'>
            <div className='rounded border border-secondaryLightGray bg-white px-8 py-6 shadow-lg sm:px-16 sm:py-12'>
                <h1 className='mb-4 text-center text-2xl font-bold'>
                    {isLoginPage ? 'Авторизация' : 'Регистрация'}
                </h1>
                <div className='mb-4 space-y-6'>
                    {!isLoginPage && (
                        <input
                            className='block w-full border px-4 py-4 text-lg transition focus:border-secondaryGray'
                            type='text'
                            placeholder='Введите ваше имя...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    )}
                    <input
                        className='block w-full border px-4 py-4 text-lg transition focus:border-secondaryGray'
                        type='email'
                        placeholder='Введите ваш email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='block w-full border px-4 py-4 text-lg transition focus:border-secondaryGray'
                        type='password'
                        placeholder='Введите ваш пароль...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className=' flex flex-wrap items-start justify-between gap-8'>
                    {isLoginPage ? (
                        <div className=''>
                            Нет аккаунта?{' '}
                            <NavLink
                                to={REGISTRATION_ROUTE}
                                className={
                                    'text-primaryOrange transition hover:underline'
                                }
                            >
                                Зарегистрироваться
                            </NavLink>
                        </div>
                    ) : (
                        <div className=''>
                            Есть аккаунт?{' '}
                            <NavLink
                                to={LOGIN_ROUTE}
                                className={
                                    'text-primaryOrange transition hover:underline'
                                }
                            >
                                Войти
                            </NavLink>
                        </div>
                    )}
                    <button
                        className={`rounded border bg-secondaryGray px-6 py-2 text-lg font-bold text-white transition hover:bg-primaryOrange hover:text-secondaryGray ${loading && 'opacity-50 cursor-wait'}`}
                        onClick={handleButtonClick}
                        disabled={loading}
                    >
                        {isLoginPage ? 'Вход' : 'Регистрация'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
