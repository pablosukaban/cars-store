import { $authHost, $host } from '.';
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
    // const login = email.split('@')[0];
    // let role;
    // if (login === 'admin') {
    //     role = 'ADMIN';
    // } else {
    //     role = 'USER';
    // }

    const response = await $host.post('/api/user/registration', {
        email,
        password,
        role: 'USER',
    });

    localStorage.setItem('token', response.data.token);
    return jwt_decode(response.data.token);
};

export const login = async (email, password) => {
    const response = await $host.post('/api/user/login', {
        email,
        password,
    });
    localStorage.setItem('token', response.data.token);
    return jwt_decode(response.data.token);
};

export const check = async () => {
    const response = await $authHost.get('/api/user/auth');
    localStorage.setItem('token', response.data.token);
    return jwt_decode(response.data.token);
};

export const getAllUsers = async () => {
    const response = await $authHost.get('/api/user/');
    return response.data;
};

export const changeInfo = async (id, firstName, lastName, phone) => {
    const response = await $authHost.put('/api/user/' + id, {
        first_name: firstName,
        last_name: lastName,
        phone,
    });
    return response.data;
};
