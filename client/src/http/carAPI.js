import { $authHost, $host } from '.';

export const createBrand = async (brand) => {
    const response = await $authHost.post('/api/brand', brand);
    return response.data;
};

export const fetchBrands = async () => {
    const response = await $host.get('/api/brand');
    return response.data;
};

export const fetchOneBrand = async (id) => {
    const response = await $host.get(`/api/brand/${id}`);
    return response.data;
};

export const createModel = async (model) => {
    const response = await $authHost.post('/api/model', model);
    return response.data;
};

export const fetchModels = async () => {
    const response = await $host.get('/api/model');
    return response.data;
};

export const createCar = async (car) => {
    const response = await $authHost.post('/api/car', car);
    return response.data;
};

export const fetchAllCars = async () => {
    const response = await $host.get('/api/car');
    return response.data;
};

export const fetchOneCar = async (id) => {
    const response = await $host.get(`/api/car/${id}`);
    return response.data;
};

// export const login = async (email, password) => {
//     const response = await $host.post('/api/user/login', {
//         email,
//         password,
//     });
//     localStorage.setItem('token', response.data.token);
//     return jwt_decode(response.data.token);
// };

// export const check = async () => {
//     const response = await $authHost.get('/api/user/auth');
//     localStorage.setItem('token', response.data.token);
//     return jwt_decode(response.data.token);
// };
