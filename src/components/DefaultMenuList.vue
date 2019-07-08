<template>
  <div class="default-menu-list">
    <div class="my-content">
      <el-menu @select="handleSelect">
        <template v-for="(item,index) in data">
          <el-menu-item v-if="!item.child"
            :key="index"
            :index="index+''">
            <b>
              <i :class="item.icon"></i>
            </b>
            <span>{{item.name}}</span>
          </el-menu-item>
          <el-submenu v-if="item.child"
            :key="index"
            :index="index+''">
            <template>
              <b>
                <i :class="item.icon"></i>
              </b>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="(ite,ind) in item.child"
              :key="ind"
              :index="index+'-'+ind">
              {{ite.title}}
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultMenuList',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      listClick: ''
    }
  },
  methods: {
    openPage(item) {
      this.listClick = item.params.id
      this.$store.dispatch(item.type, item.params)
    },
    handleSelect(key) {
      let item = ''
      let keys = key.split('-')
      if (keys.length > 1) {
        item = this.data[keys[0]][key[1]]
      } else {
        item = this.data[keys[0]]
      }
      this.$store.dispatch(item.type, item.params)
    }
  }
}
</script>

<style lang="scss" scoped>
b {
  margin-right: 10px;
}
</style>