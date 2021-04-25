module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   extends: [
      "plugin:vue/vue3-essential",
      "airbnb-base",
   ],
   parserOptions: {
      ecmaVersion: 12,
      parser: "@typescript-eslint/parser",
      sourceType: "module",
   },
   plugins: [
      "vue",
      "@typescript-eslint",
   ],
   rules: {
      // 双引号
      quotes: ["error", "double"],

      // 空格缩进
      indent: ["error", 3, { SwitchCase: 1 }],

      "linebreak-style": "off",

      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

      // 只有一个导出时使用默认导出
      "import/prefer-default-export": "off",

      "import/extensions": [
         "error",
         "ignorePackages",
         {
            js: "never",
            ts: "never",
         },
      ],
   },
   settings: {
      "import/resolver": {
         node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
         },
      },
   },
};
