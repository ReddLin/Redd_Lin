<template>
  <div>
    <Header />
    <router-view style="margin-top: 100px;" />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
@import "@/scss/theme";
body {
  background: $color-bg-dark;
}
body::-webkit-scrollbar {
  display: none;
}
</style>
