<template>
  <header class="header">
    <div class="navbar">
      <div class="title">Redd Lin</div>
      <div class="nav-item">
        <a @click="goToSomewhoere()">intro</a>
        <a>skill</a>
        <a>project</a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    goToSomewhoere() {
      this.$router.push('/Redd_Lin/second')
    }
  }
}
</script>
<style lang="scss" scoped>
$color-white: #ffffff;
$color-bg-dark: #2b2c2c;
$color-header-dark: #303131;
.header {
    background-image: linear-gradient(180deg, rgb(74, 178, 233), rgb(48, 141, 215));
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    // min-width: 768px;
    .navbar {
        color: $color-white;
        height: 80px;
        line-height: 80px;
        display: flex;
        justify-content: space-between;
    }
    .title {
        display: flex;
        justify-content: flex-start;
        flex: 1;
        margin: 0 20px;
        font-size: 36px;
    }
    .nav-item {
        display: flex;
        justify-content: flex-end;
        flex: 1;
        font-size: 24px;
        a {
            margin: 0 15px;
            cursor: pointer;
        }
    }

}
</style>
