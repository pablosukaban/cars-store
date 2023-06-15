import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  models: [],
  cars: [],
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
  },
});
