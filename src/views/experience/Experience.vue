<template>
  <div class="experience">
    <h1>{{ $t('__workExperience') }}</h1>
    <div class="ex-contents">
      <Company
        v-for="(company, c_index) in companyList"
        :key="'company_' + c_index"
        :company-name="company.companyName"
        :during-time="company.duringTime"
        :title="company.title"
        :projects="company.projects"
      />
    </div>
  </div>
</template>
<script>
import Company from '@/views/experience/components/company'
export default {
  components: {
    Company
  },
  data() {
    return {
      companyList: [{
        companyName: this.$t('__experience') + this.$t('__three') + ' ' + this.$t('__solartech'),
        duringTime: '2019 ' + this.$t('__year') + ' 3 ' + this.$t('__month') + ' - 2020 ' + this.$t('__year') + ' 7 ' + this.$t('__month'),
        title: this.$t('__frontEndSr') + '(' + this.$t('__jobTitle') + ')',
        projects: [{
          name: this.$t('__smzb'),
          desp: [this.$t('__smzbContent1'), this.$t('__smzbContent2'), this.$t('__smzbContent3')],
          site_url: '//smzb.cn'
        }, {
          name: this.$t('__clientSite'),
          desp: [this.$t('__clientContent1'), this.$t('__clientContent2')],
          site_url: '//kl99.tv'
        }, {
          name: this.$t('__navSite'),
          desp: [this.$t('__navContent1'), this.$t('__navContent2'), this.$t('__navContent3')],
          site_url: '//ggzb.io'
        }]
      },
      {
        companyName: this.$t('__experience') + this.$t('__two') + ' ' + this.$t('__solartech'),
        duringTime: '2019 ' + this.$t('__year') + ' 3 ' + this.$t('__month') + ' - 2020 ' + this.$t('__year') + ' 7 ' + this.$t('__month'),
        title: this.$t('__frontEndSr') + '(' + this.$t('__jobTitle') + ')',
        projects: [{
          name: this.$t('__smzb'),
          desp: [this.$t('__smzbContent1'), this.$t('__smzbContent2'), this.$t('__smzbContent3')],
          site_url: '//smzb.cn'
        }, {
          name: this.$t('__clientSite'),
          desp: [this.$t('__clientContent1'), this.$t('__clientContent2')],
          site_url: '//kl99.tv'
        }, {
          name: this.$t('__navSite'),
          desp: [this.$t('__navContent1'), this.$t('__navContent2'), this.$t('__navContent3')],
          site_url: '//ggzb.io'
        }]
      }]
    }
  }
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
    padding-bottom: 50px;
  }
}
</style>
