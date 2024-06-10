const js = require('@eslint/js');
const babelParser = require("@babel/eslint-parser");
const vue = require("eslint-plugin-vue");

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        plugins: {
            vue: vue
        }
    },
    {
        languageOptions: {
            parser: babelParser
        }
    },
];