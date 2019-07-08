<template>
  <div class="footer-bar clear">
    <div class="content">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.footer-bar {
  height: 50px;
  .content {
    padding: 9px 10px;
    box-sizing: border-box;
    overflow: hidden;
    height: 50px;
    position: relative;
    background: #f8f8f8;
    width: calc(100% - 1px);
    position: absolute;
    bottom: 0;
  }
  .left {
    float: left;
    > button {
      margin-right: 10px;
    }
  }
  .right {
    float: right;
    > button {
      margin-left: 10px;
    }
  }
}
</style>