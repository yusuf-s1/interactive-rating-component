/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html, js}"],
    theme: {
        extend: {
            fontFamily: {
                Overpass: ['Overpass', 'sans-serif'],
            },
        },
        colors: {
            primary: 'hsl(25, 97%, 53%)',
            neutral1: 'hsl(0, 0%, 100%)',
            neutral2: 'hsl(217, 12%, 63%)',
            neutral3: 'hsl(216, 12%, 54%)',
            neutral4: 'hsl(213, 19%, 18%)',
            neutral5: 'hsl(216, 12%, 8%)',
            radial1: 'hsl(215, 12%, 12%)',
            radial2: 'hsl(215, 25%, 12%)',
        },
        fontSize: {
            sm: '0.8rem',
            base: '0.932rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
        },

    },
    plugins: [],
}
