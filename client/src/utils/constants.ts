export const HOME_ROUTE = '/';
export const NEW_ROUTE = '/new';
export const ALL_ROUTE = '/all';
export const ADMIN_ROUTE = '/admin';
export const BAKET_ROUTE = '/basket';
export const CAR_ROUTE = '/car';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const CREDIT_ROUTE = '/credit';

type linksType = {
    name: string;
    to: string;
};

export const isAuthLinks: linksType[] = [
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

export const notAuthLinks: linksType[] = [
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