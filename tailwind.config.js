module.exports = {
    purge: ['./dist/*.html', './dist/contact/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#E02B88'
                },
                secondary: {
                    DEFAULT: '#232853'
                },
                tertiary: {
                    DEFAULT: '#fbba00'
                },
                quaternary: {
                    DEFAULT: '#bace00'
                },
                gris: {
                    DEFAULT: '#F8F8F9',
                    100: '#162240',
                },
                bleu: {
                    DEFAULT: '#232853'
                }
            },
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            caveat: ['Caveat', 'cursive'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
