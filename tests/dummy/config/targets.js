/* eslint-env node */
const browsers = ['ie 11', 'last 1 Chrome versions', 'last 1 Firefox versions', 'last 1 Safari versions'];

const isCI = !!process.env.CI;
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  browsers.push('ie 9');
}

module.exports = {
  browsers,
};
