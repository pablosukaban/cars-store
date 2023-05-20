export const HOME_ROUTE = '/';
export const NEW_ROUTE = '/new';
export const ALL_ROUTE = '/all';
export const ADMIN_ROUTE = '/admin';
export const BAKET_ROUTE = '/basket';
export const CAR_ROUTE = '/car';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const CREDIT_ROUTE = '/credit';
export const PROFILE_ROUTE = '/profile';
export const ORDER_ROUTE = '/order';

export const isAuthLinks = [
    {
        name: 'Главная',
        to: '/',
    },
    {
        name: 'Новые поступления',
        to: '/new',
    },
    {
        name: 'Все машины',
        to: '/all',
    },
    {
        name: 'Кредитование',
        to: '/credit',
    },
    {
        name: 'Профиль',
        to: '/profile',
    },
];

export const notAuthLinks = [
    {
        name: 'Главная',
        to: '/',
    },
    {
        name: 'Новые поступления',
        to: '/new',
    },
    {
        name: 'Все машины',
        to: '/all',
    },
    {
        name: 'Кредитование',
        to: '/credit',
    },
    {
        name: 'Авторизация',
        to: '/login',
    },
];

export const pageVariants = {
    initial: {
        opacity: 0,
        x: '-100vw',
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: '100vw',
    },
};

export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.75,
};
