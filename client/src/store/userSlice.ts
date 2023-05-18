import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserType = {
    name?: string;
    phone?: string;
    email: string;
    password: string;
    isAdmin?: boolean;
};

type StateType = {
    isAuth: boolean;
    user: UserType;
};

const initialState: StateType = {
    isAuth: false,
    user: {
        email: '',
        password: '',
        isAdmin: true,
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
