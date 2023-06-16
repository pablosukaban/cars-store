import { $authHost } from ".";

export const createOrder = async (order) => {
  const { data } = await $authHost.post("api/order", order);
  return data;
};

export const getAllOrders = async () => {
  const { data } = await $authHost.get("api/order");
  return data;
};

export const removeOrder = async (id) => {
  const { data } = await $authHost.delete(`api/order/${id}`);
  return data;
};

export const getOrdersByUserId = async (id) => {
  const { data } = await $authHost.get(`api/order/user/${id}`);
  return data;
}