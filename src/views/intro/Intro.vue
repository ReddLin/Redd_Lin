<template>
  <div class="intro">
    <div class="first-block">
      <div class="self-intro">
        <h1>{{ $t('__chineseName') }} ({{ $t('__englishName') }})</h1>
        <h3>{{ $t('__topIntro') }}</h3>
      </div>
      <div class="self-img fadeInRight">
        <img src="@/assets/img/self-pic.jpg" alt="">
      </div>
    </div>
    <div class="second-block">
      <h1>{{ $t('__aboutMe') }}</h1>
      <div class="aboutMe-content">
        <AboutMe />
        <h2 class="follow-me">{{ $t('__followMe') }}</h2>
        <FollowMe />
      </div>
    </div>
    <div v-observe-visibility="visibilityChanged" class="third-block">
      <h1>{{ $t('__skill') }}</h1>
      <div class="skill-content">
        <SkillCard
          v-for="(card, c_index) in cards"
          :key="'card_' + c_index"
          :title="card.title"
          :skill-list="card.list"
          :class-key="'card_' + c_index"
        />
      </div>
    </div>
  </div>
</template>
<script>
import FollowMe from '@/views/intro/components/followMe'
import AboutMe from '@/views/intro/components/aboutMe'
import SkillCard from '@/views/intro/components/skillCard'

export default {
  components: {
    FollowMe,
    AboutMe,
    SkillCard
  },
  data() {
    return {
      cards: [{
        'title': 'Front-end',
        'list': ['Jquery', 'Bootstrap', 'CSS(SCSS)', 'AngularJs', 'Vue']
      }, {
        'title': 'Back-end',
        'list': ['JAVA', 'PlayFramework', 'MySQL', 'nodeJs', 'mongoDB']
      }, {
        'title': 'Tools',
        'list': ['BitBucket', 'SVN', 'Webpack', 'websocket', 'sourcetree']
      }]
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      console.log(isVisible)
      console.log(entry)
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
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
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
    // max-width: 1200px;
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
    // max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    background: $color-intro-third-block-bg;
    padding-bottom: 40px;
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
    .skill-content {
      display: flex;
      max-width: 900px;
      margin: 0 auto;
    }
    @media only screen and (max-width: 650px) {
      .skill-content {
        flex-direction: column;
      }
    }
  }
}
@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(300px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
</style>

