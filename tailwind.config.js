module.exports = {
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/dealers': { page: '/dealers' },
      '/for-business': { page: '/for-business' },
      '/for-home': { page: '/for-home' },
      '/kanal': { page: '/kanal' },
      '/node2': { page: '/node2' },
      '/node4': { page: '/node4' },
      '/node5': { page: '/node5' },
      '/service': { page: '/service' },
    }
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: '#99cc33',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
