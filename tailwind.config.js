export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      '1sm': {min: '320px', max: '479px'}, //320
      'sm': {min: '480px', max: '767px'}, //480
      '1md': {min: '768px', max: '979px'}, //768
      'md': {min: '980px', max: '1023px'}, //980
      'xl': {min: '1024px', max: '1279px'}, //1024
      '2xl': {min: '1280px', max: '1599px'}, //1280
      '3xl': {min: '1600px', max: '1920px'}, //1600
      '4xl': {min: '1921px'}, //1920
    },
    extend: {},
    fontFamily: {
      'raleway': [
        'Raleway',
        {
          fontFeatureSettings: '"lnum"',
        }
      ],
    },
  },
  plugins: [],
}

