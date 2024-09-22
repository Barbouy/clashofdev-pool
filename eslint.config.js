import pluginVue from "eslint-plugin-vue"

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      "quotes": ["error", "double"],
      "vue/html-closing-bracket-newline": [
        "error", {
          "singleline": "never",
          "multiline": "never",
          "selfClosingTag": {
            "singleline": "never",
            "multiline": "never"
          }
        }
      ]
    }
  }
]
