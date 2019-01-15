module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-import": {},
    precss: {},
    "postcss-url": {},
    "postcss-inline-svg": {},
    "postcss-color-function": {},
    "postcss-preset-env": {
      stage: 0
    },
    "postcss-browser-reporter": {},
    "postcss-reporter": {
      clearReportedMessages: true
    }
  }
};
