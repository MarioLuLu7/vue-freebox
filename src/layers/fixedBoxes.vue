<template>
  <div
    class="fixed-box"
    ref="fixedBox"
  >
    <div
      class="fixed-box-item mu-pagebk"
      v-for="item in fixedBoxList"
      :key="item.id"
      :style="getStyle(item)"
      v-drag
    >

      <router-view
        :name="item.name"
        :boxid="item.id"
        :params="item.parmas"
        v-if="refreshid !== item.id"
        :ref="item.id"
      ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fixedBox',
  data() {
    return {
      isFirst: true
    }
  },
  computed: {
    fixedBoxList() {
      return this.$store.getters.fixed_box_list
    },
    refreshid() {
      return this.$store.getters.refreshid
    },
    topbar_top() {
      return this.$store.getters.topbar_top
    }
  },
  directives: {
    drag: {
      bind: function(el, binding, vm) {
        let odiv = el
        var vmt = vm.context
        el.onmousedown = e => {
          let move = vmt.fixedBoxList.filter(res => {
            return res.id === vm.key
          })
          if (!vmt.canDrag(e.target) || (move[0] && !move[0].move)) {
            return
          }
          let disX = e.clientX - odiv.offsetLeft
          let disY = e.clientY - odiv.offsetTop
          document.onmousemove = e => {
            let left = e.clientX - disX
            let top = e.clientY - disY
            let windowWidth = document.body.clientWidth
            let windowHeight = document.body.clientHeight
            let maxLeft = windowWidth - odiv.clientWidth
            if (left >= maxLeft) {
              left = maxLeft
            } else if (left <= 0) {
              left = 0
            }
            let maxTop = windowHeight - odiv.clientHeight - vmt.topbar_top
            if (top >= maxTop) {
              top = maxTop
            } else if (top <= 0) {
              top = 0
            }
            odiv.style.left = left + 'px'
            odiv.style.top = top + 'px'
          }
          document.onmouseup = () => {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    }
  },
  watch: {
    // fixedBoxList() {
    //   if (!this.isFirst) {
    //     this.setRefs()
    //   }
    // }
  },
  mounted() {
    this.setRefs()
  },
  methods: {
    getStyle(item) {
      let style = {
        width: Number(item.width),
        height: Number(item.height),
        left: Number(item.position[3]),
        right: Number(item.position[1]),
        top: Number(item.position[0]),
        bottom: Number(item.position[2])
      }
      if (item.width) {
        if (!style.left) {
          delete style.left
        }
        if (!style.right) {
          delete style.right
        }
      }
      if (item.height) {
        if (!style.top) {
          delete style.top
        }
        if (!style.bottom) {
          delete style.bottom
        }
      }
      for (let key in style) {
        style[key] = style[key] + 'px'
      }
      return style
    },
    canDrag(target) {
      let isbody = false
      while (
        (!target.className.indexOf ||
          target.className.indexOf('fixed-darg-none') < 0) &&
        !isbody
      ) {
        target = target.parentNode
        if (target.nodeName.toLowerCase() === 'body') {
          isbody = true
        }
      }
      return isbody
    },
    setRefs() {
      setTimeout(() => {
        this.isFirst = false
        if (this.fixedBoxList.length) {
          let arr = []
          this.fixedBoxList.forEach(item => {
            let vm = this.$refs[item.id]
            arr.push({
              id: item.id,
              type: 'fixed',
              ref: Array.isArray(vm) ? vm[0] : vm
            })
          })
          this.$store.dispatch('addRefs', arr)
        }
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss">
.fixed-box-item {
  position: absolute;
  overflow: hidden;
  -webkit-box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
    0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12);
}
</style>
