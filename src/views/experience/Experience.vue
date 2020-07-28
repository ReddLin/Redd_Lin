<template>
  <div class="experience">
    <h1>{{ $t('__workExperience') }}</h1>
    <div class="ex-contents">
      <h2>{{ $t('__experience') }}{{ $t('__three') }} {{ $t('__solartech') }}</h2>
      <h2>2019 {{ $t('__year') }} 3 {{ $t('__month') }} - 2020 {{ $t('__year') }} 7 {{ $t('__month') }}</h2>
      <h3>{{ $t('__frontEndSr') }}({{ $t('__jobTitle') }})</h3>
      <div class="duty-contents">
        <div class="border-block" />
        <div class="work-project">
          <h3>{{ $t('__smzb') }}</h3>
          <ul>
            <li>{{ $t('__smzbContent1') }}</li>
            <li>{{ $t('__smzbContent2') }}</li>
            <li>{{ $t('__smzbContent3') }}</li>
            <li>
              <a href="//smzb.cn" target="_blank">{{ $t('__siteLink') }}</a>
            </li>
          </ul>
        </div>
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

.experience {
  margin: auto 30px;
  color: $color-white;
  h1 {
    text-align: center;
  }
  .ex-contents {
    max-width: 900px;
    margin: 0 auto;
    h2 {
      text-align: left;
    }
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
      .work-project {
        flex: 9;
        h3 {
          color: $color-header-menu;
          margin-top: 0;
        }
      }
    }
  }
}
</style>
