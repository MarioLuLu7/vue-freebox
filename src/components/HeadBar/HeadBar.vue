<template>
  <div class="head-bar clear">
    <div class="content">
      <h2 class="htext">{{title}}</h2>
      <span @click="close">
        <i class="fa fa-times"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    boxid: String
  },
  methods: {
    close() {
      this.$store.dispatch('deleteBox', this.boxid)
    }
  }
}
</script>

<style lang="scss" scoped>
.head-bar {
  height: 50px;
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  h2 {
    font-size: 14px;
    line-height: 50px;
    margin: 0;
    padding: 0;
  }

  span {
    position: absolute;
    right: 10px;
    top: 10px;
    line-height: 30px;
    cursor: pointer;
    color: #909090;
  }
  .content {
    padding: 0 10px;
    box-sizing: border-box;
    overflow: hidden;
    height: 50px;
    position: relative;
    background: #f8f8f8;
    width: calc(100% - 1px);
    position: absolute;
    top: 0;
  }
}
</style>