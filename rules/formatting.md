## 格式化

#### 项目均使用eslint 做强校验，prettier插件作为基础，进行代码格式化，安装步骤见官方文档

1. <b>eslint</b>, 校验规则见[.eslintrc.js](/eslintrc.js)

2. prettier, 格式化规则见[.prettierc](/.prettierc)

3. git hooks

    在提交git时， 对代码进行强制格式化，依赖于.prettierc 基础配置

```bash

npx mrm lint-staged 或 npm install lint-staged husky --dev --save

```
pageage.json 添加配置

```js

{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}


```



