/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryOrange: '#ffda1f',
                secondaryGray: '#2f2e2e',
            },
        },
    },
    plugins: [],
};
