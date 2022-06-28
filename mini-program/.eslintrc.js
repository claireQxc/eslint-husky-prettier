/*
 * Eslint config file
 * Documentation: https://eslint.org/docs/user-guide/configuring/
 * Install the Eslint extension before using this feature.
 */
module.exports = {
  'env': {
    'es6': true,
    'browser': true,
    'node': true
  },
  // parser: "@babel/eslint-parser",
  // 'ecmaFeatures': {
  //   'modules': true
  // },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'globals': {
    'wx': true,
    'App': true,
    'Page': true,
    'getCurrentPages': true,
    'getApp': true,
    'Component': true,
    'requirePlugin': true,
    'requireMiniProgram': true,
    'console': true,
  },
  // extends: "eslint:recommended",
  'rules': {
    'indent': [2, 2, { 'SwitchCase': 2 }],
    'space-before-function-paren': 0,
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
    'complexity': ['error', 10],
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 1,
    // 强制所有控制语句使用一致的括号风格
    'curly': 2,
    // 要求使用 === 和 !==
    'eqeqeq': 2,
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
    // 默认配置always，要求在行末加上分号
    'semi': [1, 'never'],
    // 单引号
    'quotes': [2, 'single', { 
      'avoidEscape': true, 
      'allowTemplateLiterals': true
    }],
    'semi-spacing': [
      2, 
      { 
        'before': false, 
        'after': true 
      }],
    // 强制二元运算符左右各有一个空格
    'space-infix-ops': 2,
    // 箭头间距
    'arrow-spacing': [2, { 
      'before': true, 
      'after': true 
    }],
    'space-unary-ops': [2, { 
      'words': true, 
      'nonwords': false 
    }],
    // 快间距
    'block-spacing': [2, 'always'],
    // 逗号间距
    'comma-spacing': [2, { 
      'before': false, 
      'after': true
    }],
    // 关键字后空格
    'keyword-spacing': 2,
    // 块必须至少有一个先前的空间
    'space-before-blocks': [2, 'always'],
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 禁止出现未使用过的变量
    'no-unused-vars': 1,
    // "@typescript-eslint/explicit-module-boundary-types": 0,
    // "@typescript-eslint/no-explicit-any": 0,
    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': 1,
    'no-console': 'off',
    'no-debugger': 'off',
  },
  'overrides': [
    {
      'files': ['*.wxml'],
      'rules': {
        'wxml/report-wxml-syntax-error': 'error'
      },
      'plugins': ['wxml'],
      'processor': 'wxml/wxml',
      'parser': '@wxml/parser'
    }
  ]
};
