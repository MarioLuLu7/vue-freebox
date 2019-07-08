<template>
  <div class="defaultPage">
    <head-bar title="defaultPage"
      :boxid="boxid"></head-bar>
    <div>I am defaultPage</div>
    <button @click="addChildPage">openDefaultPage</button>
    <button @click="addFixedPage">openFixedPage</button>
    <button @click="addMapPage">openMapPage</button>
    <br />
    <button @click="sentData">sent data to DefaultPageChild</button>
  </div>
</template>

<script>
export default {
  name: 'defaultPage',
  props: ['boxid'],
  data () {
    return {

    }
  },
  mounted () { },
  methods: {
    addChildPage () {
      this.$store.dispatch('addDefaultBox', {
        id: 'defaultPageChild',
        name: 'defaultPageChild',
        width: 400,
        from: this.boxid,
        params: {}
      })
    },
    addFixedPage () {
      this.$store.dispatch('addFixedBox', {
        id: 'fixedPage',
        name: 'fixedPage',
        width: 250,
        height: 250,
        position: [100, 100, 0, 0],
        // 是否可拖动，默认为无法拖动
        move: true,
        from: this.boxid,
        params: {}
      })
    },
    addMapPage () {
      this.$store.dispatch('addMapBox', {
        id: 'mapPage',
        name: 'mapPage',
        width: 250,
        height: 100,
        lonlat: [121.7, 29.8],
        from: this.boxid,
        params: {}
      })
    },
    sentData () {
      this.$store.dispatch('trigger', {
        id: 'defaultPageChild',
        method: 'getData',
        params: 'defaultPage'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.defaultPage {
  height: 100px;
}
button {
  display: block;
  margin: 20px auto;
  width: 200px;
}
</style>