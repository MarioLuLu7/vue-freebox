<template>
  <div
    class="map-box"
    ref="mapbox"
    v-show="mapshow"
  >
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'map-box',
  data() {
    return {
      refs: [],
      mylist: [],
      infowindow: {}
    }
  },
  computed: {
    myMap() {
      return this.$store.getters.myMap
    },
    myMapType() {
      return this.$store.getters.myMapType
    },
    myMapContent() {
      return this.$store.getters.myMapContent
    },
    map_box_list() {
      return this.$store.getters.map_box_list
    },
    infobox() {
      return this.$store.getters.infobox
    },
    mapshow() {
      return this.$store.getters.mapshow
    }
  },
  watch: {
    myMapType() {
      this.init()
    },
    map_box_list() {
      if (this.myMapType) {
        this.madeMapBox()
      }
    }
  },
  mounted() {
    if (this.myMapType) {
      this.init()
    }
  },
  methods: {
    init() {
      let map
      if (this.myMapType === 'BD') {
        require('@/assets/js/BMapLib_InfoBox.js')
        this.$store.dispatch('setInfoBox', {
          infobox: window.BMapLib
        })
        map = new this.myMap.Map(this.$refs.mapbox)
        this.$store.dispatch('setMyMapContent', map)
        window.mapConfigs(this.myMap, map)
        this.madeMapBox()
      }
    },
    madeMapBox() {
      this.mylist.forEach(myitem => {
        let state = false
        this.map_box_list.forEach(item => {
          if (myitem.id === item.id) {
            state = true
          }
        })
        if (!state) {
          if (this.myMapType === 'BD') {
            // 因close方法不支持2.0，故使用删除dom方式删除infobox
            let child = document.getElementById(myitem.id).parentNode
            child.parentNode.removeChild(child)
            // this.infowindow[myitem.id].close()
          }
        }
      })
      this.mylist = []
      this.map_box_list.forEach((item, i) => {
        this.mylist.push({
          id: item.id,
          name: item.name
        })
        this.madeMapBoxByData(item, i)
      })
    },
    madeMapBoxByData(data, index) {
      if (this.myMapType === 'BD') {
        if (!document.getElementById(data.id)) {
          let params = {
            map: this.myMapContent,
            content:
              '<div id="' +
              data.id +
              '" class="mu-pagebk"><div id="freebox-' +
              data.id +
              '"><div></div>',
            opts: {
              boxStyle: {
                width: data.width + 'px',
                height: data.height + 'px',
                background: '#fff'
              }
            }
          }
          this.infowindow[data.id] = new this.infobox.InfoBox(
            params.map,
            params.content,
            params.opts
          )
          let point = new this.myMap.Point(data.lonlat[0], data.lonlat[1])
          this.infowindow[data.id].open(point)
          this.infowindow[data.id].disableAutoPan()
        }
        let views = this.$route.matched.filter(item => {
          return item.path === ''
        })
        let app = Vue.extend(views[0].components[data.name])
        setTimeout(() => {
          let vm = new app({
            propsData: {
              boxid: data.id,
              params: data.parmas
            }
          })
          vm.$store = this.$store
          vm.$mount(document.getElementById('freebox-' + data.id))
          this.refs.push({
            id: data.id,
            type: 'map',
            ref: Array.isArray(vm) ? vm[0] : vm
          })
          if (index == this.map_box_list.length - 1) {
            this.$store.dispatch('addRefs', this.refs)
          }
        }, 0)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.map-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
