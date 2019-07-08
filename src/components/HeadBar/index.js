import MyHeadBar from './HeadBar.vue'

const HeadBar = {
  install: function (Vue) {
    Vue.component('HeadBar', MyHeadBar)
  }
}

export default HeadBar