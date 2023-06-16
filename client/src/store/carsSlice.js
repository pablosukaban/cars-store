import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  models: [],
  cars: [],
  currentPage: 1, // текущая страница
  totalCount: 0, // всего записей,
  limit: 6, // сколько записей на странице
  currentModel: "",
  currentBrand: "",
  currentPriceFrom: "",
  currentPriceTo: "",
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
    setCurrentModel: (state, action) => {
      state.currentPage = 1;
      state.currentModel = action.payload;
    },
    setCurrentBrand: (state, action) => {
      state.currentPage = 1;
      state.currentBrand = action.payload;
    },
    setCurrentPriceFrom: (state, action) => {
      state.currentPage = 1;
      state.currentPriceFrom = action.payload;
    },
    setCurrentPriceTo: (state, action) => {
      state.currentPage = 1;
      state.currentPriceTo = action.payload;
    },
  },
});
