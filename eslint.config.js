import pluginVue from "eslint-plugin-vue"

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      "vue/html-closing-bracket-newline": "off",
    }
  }
]
