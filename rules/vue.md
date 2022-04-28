## Vue 基础规范

#### 命名

1. 组件名应采用大驼峰命名，且以多个单词命名，避免单个单词命名，例, ElUpload.vue, ProductCard.vue

2. data属性声明必须是一个函数， 根实例除外，例：
```js

// bad
export default {
  data: {

  }
}

// good
export default {
  data() {
    return {

    }
  }
}

```

3. 声明Prop需指定类型，例：
```js

// bad
export default {
  props: ['status']
}

//good
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: function (value) {
        return [
          'syncing',
          'synced',
          'version-conflict',
          'error'
        ].indexOf(value) !== -1
      }
    }
  }
}

```

4. 组件基本属性顺序，为了统一规范，尽量靠拢，例：
```js

export default {
  name: '',
  components: {},
  // directives: {},
  filter: {},
  // mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // beforeCreate() {},
  created() {},
  // beforeMount() {},
  mounted() {},
  // beforeUpdate() {},
  update() {},
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  destroyed() {},
  methods: {},
  render() {}
}

```

#### 模板

1. 属性顺序，style, class, v-for,, v-if, v-show, ref, key,v-model,v-on,v-html, v-text等等及其他方法名，例：
```html

<el-input
  class="form-input"
  v-model="form.name"
  size="mini"
  clearable
  @input="onInput"
  @change="onChange"
/>

<el-select
  style="width: 100%"
  v-if="isState"
  v-model="form.status"
  placeholder="please choose status">
  <el-option
    v-for="item in statusOptions"
    :key="item"
    :value="item"
    :label="item"
  />
<el-select>

```

2. 引用的组件名，若不存在插槽内容，则以 < />结尾，例：
```html

<!-- bad -->
<el-input v-model="form.name"></el-input>

<!-- good -->
<el-input v-model="form.name" />
```

3. 当一个元素属性大于等于3时，应换行撰写，例：
```html

<!-- bad -->
<div class="container">
  <ul class="list">
    <li v-for="(v, i) in list" :key="v.id" data-id="v.id">
      // ...todo
    </li>
  </ul>
</div>

<!-- good -->
<div class="container">
  <ul class="list">
    <li 
      v-for="(v, i) in list" 
      :key="v.id" 
      data-id="v.id">
      // ...todo
    </li>
  </ul>
</div>

```

4. vue单文件总行数尽量不要超过300行