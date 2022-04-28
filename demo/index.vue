<template>
  <div>
    <span
      v-for="item in 12"
      :key="item"
      placeholder="!23"
    >tom</span>

    <el-input
      v-model="form.name"
      placeholder="123"
      data-type="123"
      @click="openModal"
    />
    <el-select>
      <el-option
        v-for="item in list"
        :key="item"
        :label="item"
        :value="item"
      />
      {{ asdf }}
    </el-select>
    <el-button
      type="primary"
      size="small"
      @click="onClickButton"
    >
      BUTTON
    </el-button>
    <el-form>
      <el-form-item label="username">
        <el-input
          style="width: 100%"
          type="number"
          @click="onClick"
        />
      </el-form-item>

      <el-form-item label>
        <el-button type="primary" size="small">
          BUTTON
        </el-button>
      </el-form-item>
      <div class="container">
        <div class="header" @click="onClick">
          <ul v-for="item in 10" :key="item">
            <li data-type="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import Vue from 'vue'
// import TheButton from 'components/The.Button'
Vue.components('todo-item', {})
export default {
  name: 'Component',
  props: {
    user: String,
  },
  data() {
    return {
      form: {
        name: '',
      },
      list: [1, 2, 3],
    }
  },
  computed: {
    a: function () {
      return this.form.name
    },
  },
  watch: {
    list: function (val) {
      console.log(val)
    },
  },
  methods: {
    getList() {
      const arr = this.list
      const user = '123'
      console.log(user)
      return 13
    },
    openModal() {
      this.form.name = 123
    },
  },
}
</script>
<style scoped></style>
