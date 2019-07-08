<template>
  <div>
    <head-bar title="defaultPageChild"
      :boxid="boxid"></head-bar>
    <div>I am defaultPageChild</div>
    <p>data from {{data}}</p>
  </div>
</template>

<script>
export default {
  name: 'defaultPageChild',
  props: ['boxid'],
  data () {
    return {
      data: ''
    }
  },
  mounted () { },
  methods: {
    getData (params) {
      this.data = params
    }
  }
}
</script>
<style scoped lang="scss">
</style>