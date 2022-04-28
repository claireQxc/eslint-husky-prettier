## 格式化

#### 项目均使用eslint 做强校验，prettier插件作为基础，进行代码格式化，安装步骤见官方文档

1. <b>eslint</b>, 校验规则见[.eslintrc.js](/eslintrc.js)

2. prettier, 格式化规则见[.prettierc](../.prettierc)

3. git hooks

    在提交git时， 对代码进行强制格式化，依赖于.prettierc 基础配置

```bash

npx mrm lint-staged 或 npm i lint-staged husky -D

```
pageage.json 添加配置

```json

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


#### husky说明 (git hooks, 主要为了规范commit，以及提交代码前，进行拦截而执行其他shell来满足需求)
1. 
```bash

npm install husky -D

```

2.
```bash 

npx husky install

```

3.
```bash

npm set-script prepare 'husky install'

```

4. 步骤3之后 package.json 会自动添加prepare shell：

```json
// prepare 会在npm install 后自动执行
{
  "scripts": {
    "prepare": "husky install"
  }
}

```

2. 添加git hooks
```bash

npx husky add .husky/pre-commit "npx lint-staged"

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 

```