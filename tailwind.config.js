const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
         "./pages/**/*.{js,jsx}",
         "./components/**/*.{js,jsx}",
       ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        xs: "540px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        faith: [ 'Sans']
      },
      
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   content: [
//     "./pages/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       screens:{
//        xs: "540px",
//       },
//       fontFamily: {
//         rapid: ['Open Sans', ...defaultTheme.fontFamily.sans],
//     },
//   }
//   },
//   plugins: [],
// }
