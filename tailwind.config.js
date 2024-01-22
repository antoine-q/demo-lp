module.exports = {
    purge: ['./dist/*.html', './dist/contact/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#232853'
                },
                secondary: {
                    DEFAULT: '#e02b88'
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
