/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryOrange: '#ffda1f',
                secondaryGray: '#2f2e2e',
                secondaryLightGray: '#f2f0f0',
            },
        },
    },
    plugins: [],
};
