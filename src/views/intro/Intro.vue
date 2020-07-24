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
        <p>{{ $t('__jobName') }}</p>
        <br>
        <h3>{{ $t('__education') }}</h3>
        <p class="education-content">  {{ $t('__educationTime') }}</p>
        <p class="education-content">  {{ $t('__educationTitle') }}</p>
        <br>
        <p>{{ $t('__address') }}</p>
        <p>
          {{ $t('__mail') }}
          <a :href="'mailto:' + mail" class="intro-mail">{{ mail }}</a>
        </p>
        <p>
          {{ $t('__phone') }}
          <a :href="'tel:' + phone" class="intro-phone">+886-930-941-228</a>
        </p>
        <br>
        <h3 class="follow-me">{{ $t('__followMe') }}</h3>
        <a :href="facebook_url" target="_blank">
          <i class="icofont-facebook icofont-1x" />
        </a>
        <a :href="github_url" target="_blank">
          <i class="icofont-github icofont-1x" />
        </a>
        <a :href="linkedin_url" target="_blank">
          <i class="icofont-linkedin icofont-1x" />
        </a>
        <a :href="instagram_url" target="_blank">
          <i class="icofont-instagram icofont-1x" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mail: 's9016030303@gmail.com',
      phone: '0930941228',
      facebook_url: 'https://www.facebook.com/ken.q.lin?ref=bookmarks',
      github_url: 'https://github.com/ReddLin?tab=repositories',
      linkedin_url: 'https://www.linkedin.com/in/redd-lin-9009aa152/',
      instagram_url: 'https://www.instagram.com/redd_lin0330/'
    }
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
    // height: 200px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    background: $color-intro-second-block-bg;
    padding-bottom: 20px;
    h1 {
      line-height: 150px;
      margin: 0;
    }
    .aboutMe-content {
      max-width: 900px;
      text-align: left;
      padding: 0 30px;
      p, h3 {
        margin: 0;
      }
      .education-content {
        white-space: pre-wrap;
      }
      .intro-mail, .intro-phone {
        text-decoration: none;
        color: $color-header-menu;
        &:hover {
          color: $color-intro-mail-hover;
          transition: .5s all;
        }
      }
      .follow-me {
        margin-bottom: 10px;
      }
      a {
        text-decoration: none;
        color: $color-intro-follow-me-icon;
        i {
          font-size: 1.2em;
        }
        &:first-child {
          margin-left:0;
        }
        & + a {
          margin-left: 15px;
        }
        &:hover {
          color: $color-header-menu;
          transition: all .5s;
        }
      }
    }
  }
}
</style>
<style>
@import '~@/assets/icon/icofont.min.css';
</style>
