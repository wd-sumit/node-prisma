const { resolve } = require('path');
const { load } = require('dotenv-extended');

load({
  encoding: 'utf8',
  silent: true,
  path: resolve(__dirname, '.env'),
  defaults: resolve(__dirname, '.env'),
  schema: resolve(__dirname, '.env.example'),
  errorOnMissing: process.env.NODE_ENV === 'development',
  errorOnExtra: false,
  errorOnRegex: false,
  includeProcessEnv: false,
  assignToProcessEnv: true,
  overrideProcessEnv: false,
});
