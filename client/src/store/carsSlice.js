import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  models: [],
  cars: [],
  currentPage: 1, // текущая страница
  totalCount: 0, // всего записей,
  limit: 6, // сколько записей на странице
  // cars: new Array<CarType>(9).fill(),
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setModels: (state, action) => {
      state.models = action.payload;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    addBrand: (state, brand) => {
      state.brands.push(brand.payload);
    },
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    increasePageByOne: (state) => {
      state.currentPage += 1;
    },
    decreasePageByOne: (state) => {
      state.currentPage -= 1;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});
