<template>
  <div class="intro">
    <div class="first-block">
      <img class="self-img" src="https://images.cakeresume.com/s9016030303/48c17451-b8d8-4bef-b619-25acfdf35cfa.png" alt="">
      <div class="self-intro">
        Redd Lin
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/scss/theme";
.intro {
  margin: auto 30px;
  color: $color-white;
  .first-block {
    display: flex;
    .self-img {
      width: 50%;
      max-width: 100%;
      height: auto;
      // display: flex;
      text-align: center;
      // flex: 1;
      border-radius: 50%;
    }
    .self-intro {
      // display: flex;
      flex: 1;
    }
  }
}
</style>
