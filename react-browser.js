const reactBase = require("eslint-config-base/react-base");
const eslintMerge = require("eslint-config-base/eslintMerge");

module.exports = eslintMerge(reactBase, {
  env: {
    browser: true,
  },
});
