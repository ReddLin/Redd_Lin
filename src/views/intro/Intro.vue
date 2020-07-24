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
    <div class="second-block">
      <h1>{{ $t('__aboutMe') }}</h1>
      <div class="aboutMe-content">
        <AboutMe />
        <h3 class="follow-me">{{ $t('__followMe') }}</h3>
        <FollowMe />
      </div>
    </div>
    <div class="third-block">
      <h1>{{ $t('__skill') }}</h1>
    </div>
  </div>
</template>
<script>
import FollowMe from '@/views/intro/components/followMe'
import AboutMe from '@/views/intro/components/aboutMe'
export default {
  components: {
    FollowMe,
    AboutMe
  }
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
  .second-block {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    background: $color-intro-second-block-bg;
    padding-bottom: 20px;
    h1 {
      line-height: 150px;
      margin: 0;
      display: initial;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        bottom: -10px;
        left: 0;
        right: 0;
        width: 70px;
        height: 3px;
        background: $color-header-menu;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        margin: 0 auto;
      }
    }
  }
  .third-block {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    background: $color-intro-second-block-bg;
    padding-bottom: 20px;
    h1 {
      line-height: 150px;
      margin: 0;
      display: initial;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        bottom: -10px;
        left: 0;
        right: 0;
        width: 40px;
        height: 3px;
        background: $color-header-menu;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        margin: 0 auto;
      }
    }
  }
}
</style>

