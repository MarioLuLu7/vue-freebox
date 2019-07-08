<template>
  <div class="handel-bar clear">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'handel',
  props: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.handel-bar {
  height: 50px;
  padding: 5px 10px;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  .left {
    float: left;
    > * > * {
      margin: 0 5px;
    }
  }
  .right {
    float: right;
    > * > * {
      margin: 0 5px;
    }
  }
  .is-circle {
    width: 40px;
    height: 40px;
  }
  .el-button {
    border-color: #fff;
  }
  .input {
    margin: 4px 0;
    width: 150px;
  }
  .button {
    margin: 4px 0;
  }
}
</style>