<template>
  <div class="intro">
    <div class="first-block">
      <div class="self-intro">
        <h1>{{ $t('__chineseName') }} ({{ $t('__englishName') }})</h1>
        <h3>{{ $t('__topIntro') }}</h3>
      </div>
      <div class="self-img">
        <img src="@/assets/img/self-pic.jpg" alt="">
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
  color: $color-white;
  .first-block {
    display: flex;
    padding: 0 30px;
    max-width: 1200px;
    margin: 0 auto;
    .self-img {
      flex: 1;
      height: auto;
      text-align: center;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .self-intro {
      flex: 1;
      text-align: left;
      display: flex;
      justify-content: center;
      flex-direction: column;
      h3 {
        letter-spacing: 5px;
        color: $color-intro-h3;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    .first-block {
      flex-direction: column;
    }
  }
}
</style>
