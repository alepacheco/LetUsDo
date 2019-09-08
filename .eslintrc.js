var OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["airbnb", "prettier"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    'react/destructuring-assignment': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'import/no-extraneous-dependencies': OFF,
    'comma-dangle': OFF,
    'import/no-named-as-default': OFF,
  }
};
