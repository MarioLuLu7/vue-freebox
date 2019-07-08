<template>
  <div class="menu-list">
    <head-bar title="菜单"
      :boxid="boxid"></head-bar>
    <div class="my-content default-darg-none">
      <default-menu-list :data="menuData"></default-menu-list>
    </div>
  </div>
</template>

<script>
import DefaultMenuList from '../components/DefaultMenuList'
export default {
  name: 'menu-list',
  props: ['boxid'],
  components: {
    'default-menu-list': DefaultMenuList
  },
  data () {
    return {
      menuData: [
        {
          // 给组件用的
          name: 'defaultPage',
          type: 'addDefaultBox',
          icon: 'fa fa-user',
          // 生成页面的参数
          params: {
            id: 'defaultPage',
            name: 'defaultPage',
            width: 500,
            // 通过哪个页面生成的（由此可更方便与父页面通信）
            from: this.boxid,
            // 传递给页面的参数 页面用props接收
            params: {}
          }
        },
        {
          name: 'fixedPage',
          type: 'addFixedBox',
          icon: 'fa fa-user',
          params: {
            id: 'fixedPage',
            name: 'fixedPage',
            width: 250,
            height: 250,
            position: [100, 100, 0, 0],
            move: true,
            from: this.boxid,
            params: {}
          }
        },
        {
          name: 'mapPage',
          type: 'addMapBox',
          icon: 'fa fa-user',
          params: {
            id: 'mapPage',
            name: 'mapPage',
            width: 250,
            height: 100,
            lonlat: [121.7, 29.8],
            from: this.boxid,
            params: {}
          }
        }
      ]
    }
  },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang="scss">
.menu-list {
  height: 100%;
}
</style>