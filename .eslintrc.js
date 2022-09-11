module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        map: [["src", "./packages/client/src"]],
        extensions: [".js", ".json"],
      },
    },
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    mocha: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    chrome: true,
    process: true,
  },
  rules: {
    "linebreak-style": 0,
    "non-interactive": "off",

    "import/no-unresolved": "off",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "default-param-last": 0,
    camelcase: 0,
    // we have multiple methods without 'this'
    // but will obviously fail with static
    "class-methods-use-this": 1,
    "consistent-return": 1,
    "no-return-assign": 1,
    "react/prop-types": 1,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],

    // these are simple formatting, like space, quotes etc.
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 80,
      },
    ],

    // TODO: probably should use a debugging tool instead
    "no-console": ["error", { allow: ["warn", "error", "debug"] }],
  },
};
