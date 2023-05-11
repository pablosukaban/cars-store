import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { carSlice } from './carsSlice';

export const rootReducer = combineReducers({
    user: userSlice.reducer,
    car: carSlice.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
