<template>
  <div class="duty-contents">
    <div :class="end ? 'border-block-end' : 'border-block'" />
    <div class="work-project">
      <h3>{{ project.name }}</h3>
      <ul>
        <li v-for="(desp, d_index) in project.desp" :key="'desp_' + d_index">
          {{ desp }}
        </li>
        <li v-show="project.site_url">
          <a :href="project.site_url" target="_blank">{{ $t('__siteLink') }}</a>
        </li>
        <li v-show="project.video_url">
          <a :href="project.video_url" target="_blank">{{ $t('__cocoVideo') }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default: null
    },
    end: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/theme";

.duty-contents {
  display: flex;
  position: relative;
  .border-block {
    flex: 1;
    position: static;
    &::before {
      content: ' ';
      width: 9px;
      height: 9px;
      border-radius: 50%;
      position: absolute;
      display: inline-block;
      background-color: #a8a8a8;
      margin-top: 10px;
      margin-left: .5px;
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: #979797;
      display: block;
      margin-left: 4.5px;
      top: 10px;
      z-index: 0;
    }
  }
  .border-block-end {
    flex: 1;
    position: static;
    &::before {
      content: ' ';
      width: 9px;
      height: 9px;
      border-radius: 50%;
      position: absolute;
      display: inline-block;
      background-color: #a8a8a8;
      margin-top: 10px;
      margin-left: .5px;
      z-index: 1;
    }
  }
  .work-project {
    flex: 9;
    h3 {
      color: $color-header-menu;
      margin-top: 0;
    }
    a {
      text-decoration: none;
      color: #0bbfc5;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
