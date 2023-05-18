import axios, { AxiosRequestConfig } from 'axios';

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const authInterceptor = (config: AxiosRequestConfig) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
