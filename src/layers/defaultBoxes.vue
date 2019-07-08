<template>
  <div class="default-box"
    ref="defaultBox"
    :style="moveState?movestyle:{}"
    v-drag>
    <div v-for="item in defaultBoxList"
      :key="item.id"
      class="default-box-item"
      :style="{width:getWidth(item.width)}">
      <router-view :name="item.name"
        :boxid="item.id"
        :params="item.params"
        v-if="refreshid !== item.id"
        :ref="item.id">
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'defaultBox',
  data() {
    return {
      isFirst: true,
      moveState: true,
      movestyle: {
        transition: 'left 0.6s',
        '-moz-transition': 'left 0.6s',
        '-webkit-transition': 'left 0.6s',
        '-o-transition': 'left 0.6s'
      }
    }
  },
  computed: {
    defaultBoxList() {
      return this.$store.getters.default_box_list
    },
    sunWidth() {
      let width = 0
      this.$store.getters.default_box_list.forEach(item => {
        width += item.width
      })
      return width
    },
    refreshid() {
      return this.$store.getters.refreshid
    },
    maxLeft() {
      let left = 0
      let list = this.$store.getters.default_box_list
      list.forEach((item, i) => {
        if (i < list.length - 1) {
          left = left + item.width + 1
        }
      })
      return left * -1
    }
  },
  watch: {
    maxLeft() {
      if (this.$refs.defaultBox.offsetLeft < this.maxLeft) {
        this.$refs.defaultBox.style.left = this.maxLeft + 'px'
      }
    },
    defaultBoxList() {
      if (!this.isFirst) {
        this.setRefs()
      }
    },
    sunWidth() {
      this.setLeft()
    }
  },
  directives: {
    drag: {
      bind: function(el, binding, vm) {
        let odiv = el
        var vmt = vm.context
        el.onmousedown = e => {
          if (!vmt.canDrag(e.target)) {
            return
          }
          vmt.moveState = false
          let disX = e.clientX - odiv.offsetLeft
          document.onmousemove = e => {
            let left = e.clientX - disX
            if (left >= 0) {
              left = 0
            } else if (left <= vmt.maxLeft) {
              left = vmt.maxLeft
            }
            odiv.style.left = left + 'px'
          }
          document.onmouseup = () => {
            vmt.moveState = true
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    }
  },
  mounted() {
    this.setRefs()
    this.setLeft()
    let self = this
    window.onresize = function() {
      self.setLeft()
    }
  },
  methods: {
    getWidth(width) {
      return Number(width) + 'px'
    },
    canDrag(target) {
      let isbody = false
      while (
        (!target.className.indexOf ||
          target.className.indexOf('default-darg-none') < 0) &&
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
        if (this.defaultBoxList.length) {
          let arr = []
          this.defaultBoxList.forEach(item => {
            let vm = this.$refs[item.id]
            arr.push({
              id: item.id,
              type: 'default',
              ref: Array.isArray(vm) ? vm[0] : vm
            })
          })
          this.$store.dispatch('addRefs', arr)
        }
      }, 100)
    },
    setLeft() {
      let temp = this.sunWidth - window.innerWidth
      if (temp > 0 && this.$refs.defaultBox) {
        this.$refs.defaultBox.style.left = temp * -1 + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.default-box {
  height: 100%;
  width: auto;
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
}

.default-box-item {
  display: inline-block;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border-right: 1px solid #dcdfe6;
  background: #fff;
  position: relative;
}
</style>