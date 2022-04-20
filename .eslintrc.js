module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/attribute-hyphenation': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
        allowFirstLine: true,
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'no-use-before-define': 0,
    // 禁止对象字面量中出现重复的 key
    'no-empty': 1,
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 指定程序中允许的最大环路复杂度
    complexity: ['error', 5],
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 1,
    // 强制所有控制语句使用一致的括号风格
    curly: 2,
    // 要求使用 === 和 !==
    eqeqeq: 2,
    // 强制每个文件中包含的的类的最大数量
    'max-classes-per-file': ['error', 1],
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 2,
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 2,
    // 禁止使用空解构模式
    'no-empty-pattern': 2,
    // 禁用 eval()
    'no-eval': 2,
    // 禁止扩展原生类型
    'no-extend-native': 2,
    // 禁止 case 语句落空
    'no-fallthrough': 2,
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    // 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': 0,
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止出现多个空格
    'no-multi-spaces': 2,
    // 禁止多行字符串
    'no-multi-str': 2,
    // 禁止重新声明变量
    'no-redeclare': 2,
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 2,
    // 禁用不必要的 return await
    'no-return-await': 2,
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 2,
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 2,
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 2,
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 禁止出现未使用过的变量
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
