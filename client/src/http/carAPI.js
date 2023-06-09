import { $authHost, $host } from ".";

export const createBrand = async (brand) => {
  const response = await $authHost.post("/api/brand", brand);
  return response.data;
};

export const fetchBrands = async () => {
  const response = await $host.get("/api/brand");
  return response.data;
};

export const fetchOneBrand = async (id) => {
  const response = await $host.get(`/api/brand/${id}`);
  return response.data;
};

export const deleteBrand = async (id) => {
  const response = await $host.delete(`/api/brand/${id}`);
  return response.data;
};

export const createModel = async (model) => {
  const response = await $authHost.post("/api/model", model);
  return response.data;
};

export const fetchModels = async () => {
  const response = await $host.get("/api/model");
  return response.data;
};

export const deleteModel = async (id) => {
  const response = await $host.delete(`/api/model/${id}`);
  return response.data;
};

export const createCar = async (car) => {
  const response = await $authHost.post("/api/car", car);
  return response.data;
};

export const fetchAllCars = async (modelId, brandId, page, limit, priceFrom, priceTo) => {
  const response = await $host.get("/api/car", {
    params: {
      carModelId: modelId,
      carBrandId: brandId,
      page,
      limit,
      priceFrom,
      priceTo
    },
  });
  return response.data;
};

export const fetchOneCar = async (id) => {
  const response = await $host.get(`/api/car/${id}`);
  return response.data;
};

export const deleteCar = async (id) => {
  const response = await $host.delete(`/api/car/${id}`);
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
