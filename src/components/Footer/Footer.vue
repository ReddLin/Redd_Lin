<template>
  <div class="footer">
    <p>
      {{ $t('__copyright') }}
      <span>ReddLin</span>
    </p>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "@/scss/theme";

.footer {
  background: $color-bg-dark;
  width: 100%;
  color: $color-footer-copyright;
  text-align: center;
  position: fixed;
  bottom: 0;
  z-index: 2;
  p {
    font-weight: bold;
    span {
      color: $color-header-menu;
    }
  }
}
</style>
