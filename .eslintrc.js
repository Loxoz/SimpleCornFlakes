module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true,
        "amd": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "no-console": "warn",
        "no-unused-vars": "warn",
        "no-inner-declarations": "off"
    }
};