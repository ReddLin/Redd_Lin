<template>
  <div :class="classKey + ' skill-card'">
    <h2>{{ title }}</h2>
    <p v-for="(skill, s_index) in skillList" :key="'skill_' + s_index">{{ skill }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    skillList: {
      type: Array,
      default: null
    },
    classKey: {
      type: String,
      default: ''
    }
  },
  mounted() {
  },
  methods: {
    addAnimate() {
      const element = document.getElementsByClassName('skill-card')
      if (element.length > 1) {
        for (const ele of element) {
          if (window.innerWidth >= 650) {
            ele.classList.add('animate__animated', 'animate__fadeInUp')
          } else {
            ele.classList.add('animate__animated', 'animate__fadeInLeft')
          }
        }
      }
    },
    removeAnimate() {
      const element = document.getElementsByClassName('skill-card')
      if (element.length > 1) {
        for (const ele of element) {
          ele.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__fadeInLeft')
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/theme";

.skill-card {
  flex: 1;
  margin: 0 15px 20px 15px;
  border-top: $color-intro-h3 2px solid;
  text-align: left;
  h2 {
    margin: 30px 0;
    font-weight: initial;
    font-size: 28px;
  }
  p {
    color: $color-intro-h3;
    margin: 5px;
    font-size: 18px;
  }
}
.card_0 {
  animation-delay: 0.3s
}
.card_1 {
  animation-delay: 0.4s
}
.card_2 {
  animation-delay: 0.5s
}
</style>
