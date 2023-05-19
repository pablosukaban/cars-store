import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    brands: [],
    models: [
        {
            id: 1,
            car_model_name: 'Camry',
        },
    ],
    cars: [
        {
            id: 1,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
        {
            id: 2,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
        {
            id: 3,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
        {
            id: 4,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
        {
            id: 5,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
        {
            id: 6,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
        {
            id: 7,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
        {
            id: 8,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
        {
            id: 9,
            body_type: 'Sedan',
            car_color: 'Red',
            car_image:
                'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg',
            car_price: '100000',
            year_of_manufacture: 2021,
        },
    ],
    // cars: new Array<CarType>(9).fill(),
};

export const carSlice = createSlice({
    name: 'car',
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
