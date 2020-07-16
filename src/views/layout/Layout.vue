<template>
  <div>
    <Header />
    <router-view style="margin-top: 100px;" />
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

</style>
