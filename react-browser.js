const reactBase = require("eslint-config-base/react-base");

module.exports = {
  ...reactBase,
  env: {
    ...reactBase?.env,
    browser: true,
  },
};
