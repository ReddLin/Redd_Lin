<template>
  <div class="intro">
    <div class="first-block">
      <div class="self-intro">
        <h2>{{ $t('__chineseName') }} ({{ $t('__englishName') }})</h2>
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
    .self-img {
      flex: 1;
      height: auto;
      text-align: center;
      img {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
      }
    }
    .self-intro {
      flex: 1;
      text-align: left;
      h3 {
        letter-spacing: 5px;
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
