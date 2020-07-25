<template>
  <div>
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
</template>
<script>
export default {
  data() {
    return {
      facebook_url: 'https://www.facebook.com/ken.q.lin?ref=bookmarks',
      github_url: 'https://github.com/ReddLin?tab=repositories',
      linkedin_url: 'https://www.linkedin.com/in/redd-lin-9009aa152/',
      instagram_url: 'https://www.instagram.com/redd_lin0330/'
    }
  }
}
</script>
<style>
@import '~@/assets/icon/icofont.min.css';
</style>
<style lang="scss" scope>
@import "@/scss/theme";

.follow-me {
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: $color-intro-follow-me-icon;
  i {
    font-size: 1.3em !important;
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
</style>
