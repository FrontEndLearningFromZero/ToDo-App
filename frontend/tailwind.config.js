/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        screens: {
            sm: '390x',
            // => @media (min-width: 576px) { ... }

            md: '960px',
            // => @media (min-width: 960px) { ... }

            lg: '1440px',
            // => @media (min-width: 1440px) { ... }
        },
    },
    plugins: [],
}
