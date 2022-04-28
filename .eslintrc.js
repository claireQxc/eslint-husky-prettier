module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/essential',
    // 'plugin:vue/vue3-essential',
    // 'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    // 'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier'
    // '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // 'prettier/prettier': [1, { parser: 'babel' }],
    // 组件属性名称是否强制连字符  0 = off 1 = warn 2 = error
    'vue/attribute-hyphenation': 1,
    'vue/multi-word-component-names': [
      'error',
      {
        'ignores': [],
      },
    ],
    // watch必须使用function声明
    'vue/no-arrow-functions-in-watch': 1,
    // computed 禁止使用延迟API
    'vue/no-async-in-computed-properties': 1,
    // data属性禁止引用computed属性
    'vue/no-computed-properties-in-data': 1,
    // 防止在计算属性和函数中产生副作用的代码, 比如修改computed里修改data属性
    'vue/no-side-effects-in-computed-properties': 1,
    // class与:class  style与:style是否共存
    'vue/no-duplicate-attributes': [
      'error',
      {
        'allowCoexistClass': true,
        'allowCoexistStyle': true,
      },
    ],
    // attribute 单行或多行最多1个属性
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': 1,
        'multiline': 1,
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        'singleline': 'beside',
        'multiline': 'below',
      },
    ],
    // 单行（singleline）或多行（multiline）属性闭合标签： never在同一行 always换行
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    // 元素换行规则
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        'ignoreWhenEmpty': true,
        // 'ignoreWhenNoAttributes': true,
        // 'ignores': ['pre', 'textarea'],
        'allowEmptyLines': true, // 是否允许有空行
      },
    ],
    // props 是否带默认值
    'vue/require-default-prop': 0,
    // attribute 排序规则
    'vue/attributes-order': 1,
    // secirpt template style 排序规则
    'vue/component-tags-order': [
      1,
      {
        'order': [['template', 'script'], 'style'],
      },
    ],
    'vue/no-lone-template': 0,
    'vue/no-v-html': 1,
    'indent': 0,
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
    // 默认配置always，要求在行末加上分号
    'semi': [1, 'never'],
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 2,
    // 禁止出现未使用过的变量
    'no-unused-vars': 1,
    // '@typescript-eslint/explicit-module-boundary-types': 0,
    // '@typescript-eslint/no-explicit-any': 0,
    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
