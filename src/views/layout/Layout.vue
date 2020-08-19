<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view style="margin-top: 100px;" />
    </transition>
    <Footer />
    <!-- <Firebase /> -->
  </div>
</template>
<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
// import Firebase from '@/components/Firebase/firebase'
export default {
  components: {
    Header,
    Footer
    // Firebase
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
* {
  letter-spacing: 1px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
