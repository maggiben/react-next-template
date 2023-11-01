const config = require("@fravega-it/react-next-template-config/config/eslint/.eslintrc.json");
const { rules, ...others } = config;

module.exports = {
  ...others,
  rules: {
    ...rules,

    /* Add custom rules here.*/
  },
};
