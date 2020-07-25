<template>
  <div class="skill-card">
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
    }
  }
}
</script>
<style lang="scss" scope>
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
</style>
