import { $authHost, $host } from '.';
import jwt_decode from 'jwt-decode';

export const registration = async (email: string, password: string) => {
    const response = await $host.post('/api/user/registration', {
        email,
        password,
        role: 'ADMIN',
    });
    localStorage.setItem('token', response.data.token);
    return jwt_decode(response.data.token);
};

export const login = async (email: string, password: string) => {
    const response = await $host.post('/api/user/login', {
        email,
        password,
    });
    localStorage.setItem('token', response.data.token);
    return jwt_decode(response.data.token);
};

// export const check = async () => {};
