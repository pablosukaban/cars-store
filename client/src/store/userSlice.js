import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    role: "USER",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
