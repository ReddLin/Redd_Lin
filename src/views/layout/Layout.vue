<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/Header/Header'
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
body {
    overflow: scroll;
}
</style>
