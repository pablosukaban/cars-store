import { $authHost } from '.';

export const createOrder = async (order) => {
    const { data } = await $authHost.post('api/order', order);
    return data;
};
