<template>
  <div id="app">
    <div v-if="allshow_state === 2">
      <top-bar ref="topbar"></top-bar>
      <div class="layerbox"
        :style="{top:topbar_top + 'px'}">
        <map-box></map-box>
        <default-box></default-box>
        <fixed-box></fixed-box>
      </div>
    </div>
    <div v-if="allshow_state === 1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import topBar from './layers/topBar'
import mapBox from './layers/mapBoxes'
import defaultBox from './layers/defaultBoxes'
import fixedBox from './layers/fixedBoxes'
export default {
  name: 'app',
  components: {
    mapBox,
    defaultBox,
    fixedBox,
    topBar
  },
  data () {
    return {
      allshow_state: 0,
      allshow_routers: ['/login']
    }
  },
  watch: {
    $route () {
      let temp = this.allshow_routers.filter(item => {
        return item === this.$route.path
      })
      if (temp.length) {
        this.allshow_state = 1
      } else {
        this.allshow_state = 2
        this.$nextTick(() => {
          this.$store.dispatch(
            'setTopbarTop',
            this.$refs.topbar.$el.clientHeight
          )
        })
      }
    }
  },
  computed: {
    topbar_top () {
      return this.$store.getters.topbar_top
    }
  },
  mounted () {
  }
}
</script>

<style>
body,
html {
  height: 100%;
  color: #606266;
}
.layerbox {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.anchorBL {
  display: none;
}
.my-content {
  height: calc(100% - 100px);
  overflow-y: auto;
}
.my-content2 {
  height: calc(100% - 50px);
  overflow-y: auto;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.my-content > .el-scrollbar__wrap,
.my-content2 > .el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.el-form-item {
  margin-bottom: 10px !important;
}
.subtitle {
  background: #eef1f6;
  line-height: 30px;
  font-size: 14px;
  padding: 0 10px;
  margin: 0;
}

/* .sroll {
  overflow-y: auto;
}
.my-content::-webkit-scrollbar,
.sroll::-webkit-scrollbar {
  width: 6px;
}

.my-content::-webkit-scrollbar-track,
.sroll::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #eee;
}

.my-content::-webkit-scrollbar-thumb,
.sroll::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #3db6a4;
} */
</style>
