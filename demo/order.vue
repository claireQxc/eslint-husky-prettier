<template>
  <div>order</div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {

    }
  },
  watch: {},
  methods: {
    getList() {
      for (let i = 0; i < 100; i++) {
        console.log(i)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.a {
  width: 100px;
  height: 100px;
  color: red;
}
</style>
