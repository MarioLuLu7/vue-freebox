<template>
  <div>
    <head-bar title="mapPage"
      :boxid="boxid"></head-bar>
    <div>I am mapPage</div>
    <button @click="sentData">sent data to DefaultPageChild</button>
  </div>
</template>

<script>
export default {
  name: 'mapPage',
  props: ['boxid'],
  data () {
    return {

    }
  },
  mounted () { },
  methods: {
    sentData () {
      this.$store.dispatch('trigger', {
        id: 'defaultPageChild',
        method: 'getData',
        params: 'mapPage'
      })
    }
  }
}
</script>
<style scoped lang="scss">
</style>