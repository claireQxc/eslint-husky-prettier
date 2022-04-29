module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-recommended-vue'
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  overrides: [
    // 若需格式化vue单文件，则
    {
      "files": ["*.vue", "**/*.vue"],
    }
  ],
  rules: {}
}