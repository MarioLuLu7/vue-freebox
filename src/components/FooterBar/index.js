import MyFooterBar from './FooterBar.vue'

const FooterBar = {
  install: function (Vue) {
    Vue.component('FooterBar', MyFooterBar)
  }
}

export default FooterBar