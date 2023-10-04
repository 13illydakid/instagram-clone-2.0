/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addComponents }) {
      addComponents({
        '.navBtn': {
          display: 'none',
          height: '1.5rem',
          '@screen md': {
            display: 'inline-flex',
          },
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.25)',
          },
          transitionProperty: 'all',
          transitionDuration: '150ms',
          transitionTimingFunction: 'ease-out',
        },
        '.btn': {
          height: '1.75rem',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.25)',
          },
          transitionProperty: 'all',
          transitionDuration: '150ms',
          transitionTimingFunction: 'ease-out',
        },
      })
    }),
  ],
};


// /** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');

// module.exports = {
//   mode: 'jit',
//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   media: false,
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [
//   require("@tailwindcss/forms"),
//   require("tailwind-scrollbar"),
//   require("tailwind-scrollbar-hide"),
//     plugin(function ({ addComponents }) {
//       addComponents({
//         '.navBtn': {
//           display: 'none',
//           height: '1.5rem',
//           '@screen md': {
//             display: 'inline-flex',
//           },
//           cursor: 'pointer',
//           '&:hover': {
//             transform: 'scale(1.25)',
//           },
//           transitionProperty: 'all',
//           transitionDuration: '150ms',
//           transitionTimingFunction: 'ease-out',
//         },
//       })
//     }),
//   ],
// };
