<template>
  <div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      mail: 's9016030303@gmail.com',
      phone: '0930941228'
    }
  }
}
</script>
<style lang="scss" scope>
@import "@/scss/theme";

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
}
</style>
