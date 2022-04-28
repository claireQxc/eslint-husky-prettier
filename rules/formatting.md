## 格式化

#### 项目均使用eslint 做强校验，prettier插件作为基础，进行代码格式化，安装步骤见官方文档

1. <b>eslint</b>, 校验规则见[.eslintrc.js](http://git.devops.zhizukj.com/shijianjun/front-end-rules/-/blob/master/.eslintrc.js)

2. <b>prettier</b>, 格式化规则见[.prettierc](http://git.devops.zhizukj.com/shijianjun/front-end-rules/-/blob/master/.prettierrc.js)
## git hooks说明
#### husky: 主要为了执行lint-staged, commitlint等hook

#### lint-staged: 匹配文件执行shell命令， 比如prettier --write, eslint --fix, 
#### commitlint 规范commit
1. 
```bash

npm i husky lint-staged @commitlint/cli @commitlint/config-conventional -D

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
5. pageage.json 添加配置

```json

{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "**/*": [
      "prettier --write --ignore-unknown",
      "eslint --fix"
    ]
  }
}


```

6. 添加git hooks
```bash

npx husky add .husky/pre-commit "npx lint-staged"

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 

```

7. 添加.commitlintrc.js(或commitlintrc.config.js)
```js

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ]
}

```


#### commit 提交规范
```bash

git commit -m <type>[optional scope]: <description>

```

- type ：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？ 

- optional scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。

- description：一句话描述此次提交的主要内容，做到言简意赅。

|  类型   | 描述  |
|  ----  | ----  |
| build  | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore  | 其他修改, 比如改变构建流程、或者增加依赖库、工具等 |
| ci  | 持续集成修改 |
| docs  | 文档修改 |
| feat  | 新特性、新功能 |
| fix  | 修改bug |
| perf  | 优化相关，比如提升性能、体验 |
| refactor  | 代码重构 |
| revert  | 回滚到上一个版本 |
| style  | 代码格式修改, 注意不是 css 修改 |
| test  | 测试用例修改 |