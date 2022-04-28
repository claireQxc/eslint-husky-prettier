## CSS 基础规范

#### 命名规范

1. 文件名采用小驼峰命名，例如： 
productCard.css, eleDialog.css

2. 变量名，采用小写命名，若有多个单词，采用中划线（a-b-c）命名，例：
```css

/* bad */
.mainTitle {
  color: #333;
}

/* bad */
.main_title {
  color: #333;
}

/* bad */
.maintitle {
  color: #333;
}

/* good */
.main-title {
  color: #333;
}

/* good */
.sub-title {
  color: #999;
}

```

3. 命名单词，尽量贴近模块名，例：
```css

// 开发一个商品组件
.product-card {
  
}
.product-card .header {

}
.product-card .body {

}
.product-card .footer {

}

// 开发一个搜索组件
.search {

}

.search .search-form {

}

.search .search-button {

}
.search .search-button[data-type=submit] {

}
.search .search-button[data-type=reset] {
  
}

```

4. 若单词过长，可采用缩写, 能表达字面意思即可：
```css

/* bad */
.card .description {

}

/* bad */
.header .navigation {

}

/* good */
.card .desc {

}

/* good */
.header .nav {

}

```

5. 尽量不要使用元素选择器(全局除外) ,例:
```css

/* bad */
button {
  font-size: 20px;
}

/* good */
.btn {
  font-size: 20px;
}

```

#### 格式规范

1. 选择器与大括号之间保留一个空格
2. 每个属性值后要加一个分号
3. 逗号后面要一个空格
4. 所有属性都要换行
5. 多个选择器要换行

```css

/* bad */
.header{
  color:#222
}

/* bad */
.header{ color: #333; font-size: 20px; }

/* bad */
.header, .body, .footer{
  font-size: 14px;
  color: #333;
}

/* good */
.header {
  color: #222;
}

/* good */
.header,
.body,
.footer {
  font-size: 14px;
  color: #333;
}

```

6. 当属性值为0时，尽量使用0，而不是0px，0em，例：
```css

// bad
.header {
  margin: 0px;
}

// good
.header {
  margin: 0;
}

```

7. 属性的先后顺序，尽量按布局，绘制的顺序来，例：
```css

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #333;
  background-color: #333;
  color: #333;
  font-size: 14px;
}

```

8. 避免使用类型选择器
```css

/* bad */
div.header {

}

/* bad */
li.first {

}

/* good */
.header {

}

/* good */
.first {

}

```

8. 选择器尽量不大于3级继承，例：
```css

/* bad */
.el-dialog .content .list .operator .edit {

}


/* good */
.el-dialog .operate-edit {

}

```


## sass
#### 项目css写法采用BEM，OOCSS, SMACSS, 任意规范来写,（规范写法google一下）

```scss

/* BEM */
.header {
  .tab-list {
    &__item {
      height: 100%;
      &--hot {
        color: #722344;
      }
    }
    &__link {
      width: 100%;
      height: 100%;
      padding: 10px 20px;
      &--selected {
        color: #722344;
      }
    }
  }
}

/* OOCSS (BootStrap)*/ 
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: @label-color;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
  //省略
}

.label-default {
  .label-variant(@label-default-bg);
}

.label-primary {
  .label-variant(@label-primary-bg);
}

.label-success {
  .label-variant(@label-success-bg);
}

.label-info {
  .label-variant(@label-info-bg);
}

.label-warning {
  .label-variant(@label-warning-bg);
}

.label-danger {
  .label-variant(@label-danger-bg);
}

/* SMACSS */
.layout-header {}
.layout-container {}
.layout-sidebar {}
.layout-content {}
.layout-footer {}

.card-container {}
.card-header {}
.card-content {}
.card-footer {}

.is-collapsed {}
.is-expanded {}
.is-active {}
.is-highlighted {}
.is-hidden {}
.is-shown {}
.is-successful {}

.button-primary {}
.button-large {}
.button-mini {}

```