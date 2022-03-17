module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        babelOptions: {
            configFile: "./babel.config.json"
        }
    },
    env: { browser: true, node: true, es6: true },
    extends: ["eslint:recommended", "google"],
    rules: {
        semi: [2, "always"],
        indent: ["error", 4],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        quotes: [
            "error",
            "double",
            { allowTemplateLiterals: true, avoidEscape: true }
        ],
        "multiline-ternary": ["error", "always-multiline"],
        "comma-dangle": ["error", "only-multiline"],
        "no-new": "error",
        "no-whitespace-before-property": "error",
        "quote-props": ["error", "as-needed"],
        "object-curly-spacing": ["error", "always", { objectsInObjects: true }],
        "require-jsdoc": "off",
        "operator-linebreak": [
            "error",
            "after",
            { overrides: { "?": "before", ":": "before" } }
        ]
    }
};
