<template>
  <div style="width: 100%;"
    color="primary"
    class="top-bar">
    <div class="top-bar-left">
      <el-button icon="fa fa-bars"
        circle
        @click="openMenuList"></el-button>
    </div>
    <div class="top-bar-right">
      <el-button icon="fa fa-map-marked"
        circle
        @click="$store.dispatch('changeMapShow')"></el-button>
      <el-dropdown trigger="click"
        @command="changeMapTheme">
        <el-button icon="fa fa-globe-asia"
          circle></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, i) in mapthemes"
            :key="i"
            :command="item.val">{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click"
        @command="changeUserItem">
        <el-button icon="fa fa-user"
          circle></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  data () {
    return {
      maptheme: '',
      theme: '',
      timer: '',
      date: '',
      mapthemes: [
        { name: 'normal', val: 'normal' },
        { name: 'light', val: 'light' },
        { name: 'dark', val: 'dark' },
        { name: 'grassgreen', val: 'grassgreen' },
        { name: 'midnight', val: 'midnight' },
        { name: 'pink', val: 'pink' },
        { name: 'bluish', val: 'bluish' },
        { name: 'grayscale', val: 'grayscale' }
      ]
    }
  },
  computed: {
    myMapContent () {
      return this.$store.getters.myMapContent
    },
    myMapType () {
      return this.$store.getters.myMapType
    }
  },
  watch: {
    myMapType () {
      if (this.myMapType) {
        this.maptheme = this.Cookies.get('maptheme') || this.mapthemes[0]
        this.$nextTick(() => {
          this.myMapContent.setMapStyle({ style: this.maptheme })
        })
      }
    }
  },
  mounted () {
  },
  methods: {
    changeMapTheme (theme) {
      this.myMapContent.setMapStyle({ style: theme })
      this.maptheme = theme
      this.Cookies.set('maptheme', theme)
    },
    openMenuList () {
      this.$store.dispatch('addDefaultBox', {
        id: 'menu-list',
        name: 'menuList',
        width: 200,
        params: {}
      })
    },
    logout () {
      this.Cookies.set('yuanli-token', '')
      this.$router.push('/login')
    },
    changeUserItem (item) {
      this[item]()
    }
  }
}
</script>

<style scoped lang="scss">
.fa {
  font-size: 16px;
}
.top-bar {
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0 10px;
  box-sizing: border-box;
  .top-bar-left {
    float: left;
  }
  .top-bar-right {
    float: right;
  }
  .is-circle {
    width: 40px;
    height: 40px;
    margin: 5px 5px;
  }
  .el-button {
    border-color: #fff;
  }
  .logo {
    height: 35px;
    vertical-align: middle;
    margin-left: 10px;
  }
}
</style>
