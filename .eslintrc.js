module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint",
    rules: {
        indent: ["error", 4, {SwitchCase: 1}],
        quotes: ["error", "double"],
        "no-console": "error",
        semi: ["error", "always"],
        "react/no-deprecated": "off"
    },
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true
        }
    },
    env: {
        browser: true,
        node: true
    }
};
