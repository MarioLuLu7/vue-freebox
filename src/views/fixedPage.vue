<template>
  <div class="fixedPage">
    <head-bar title="fixedPage"
      :boxid="boxid"></head-bar>
    <div>I am fixedPage</div>
    <button @click="sentData">sent data to DefaultPageChild</button>
  </div>
</template>

<script>
export default {
  name: 'fixedPage',
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
        params: 'fixedPage'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.fixedPage {
  height: 100%;
  background: #fff;
}
</style>