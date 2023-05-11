import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserType = {
    email: string;
    password: string;
};

type StateType = {
    isAuth: boolean;
    user: UserType;
};

const initialState: StateType = {
    isAuth: false,
    user: {
        email: 'mail@gmail.ru',
        password: '123123123',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload;
        },
    },
});
