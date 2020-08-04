<template>
  <div class="experience">
    <h1>{{ $t('__workExperience') }}</h1>
    <div class="ex-contents">
      <Company
        v-for="(company, c_index) in companyList"
        :key="'company_' + c_index"
        ref="company"
        v-observe-visibility="{callback: (isVisible, entry) => visibilityChanged(isVisible, entry, c_index), once: true}"
        :index="c_index"
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
        companyName: this.$t('__experience') + this.$t('__two') + ' ' + this.$t('__dlink'),
        duringTime: '2018 ' + this.$t('__year') + ' 7 ' + this.$t('__month') + ' - 2019 ' + this.$t('__year') + ' 3 ' + this.$t('__month'),
        title: this.$t('__frontEndSr'),
        projects: [{
          name: this.$t('__nuclias'),
          desp: [this.$t('__nuContent1'), this.$t('__nuContent2'), this.$t('__nuContent3')],
          site_url: ''
        }, {
          name: this.$t('__dnh100'),
          desp: [this.$t('__dnhContent1'), this.$t('__dnhContent2')],
          site_url: ''
        }]
      },
      {
        companyName: this.$t('__experience') + this.$t('__one') + ' ' + this.$t('__walkgame'),
        duringTime: '2014 ' + this.$t('__year') + ' 12 ' + this.$t('__month') + ' - 2018 ' + this.$t('__year') + ' 6 ' + this.$t('__month'),
        title: this.$t('__softEngineer'),
        projects: [{
          name: this.$t('__camerabay'),
          desp: [this.$t('__caContent1'), this.$t('__caContent2'), this.$t('__caContent3')],
          site_url: '//www.camerabay.tv/'
        }, {
          name: this.$t('__camerabaySports'),
          desp: [this.$t('__caSportContent1')],
          site_url: '//sports.camerabay.tv/'
        }, {
          name: this.$t('__databank'),
          desp: [this.$t('__dbContent1'), this.$t('__dbContent2'), this.$t('__dbContent3')],
          site_url: ''
        }, {
          name: this.$t('__streetFight'),
          desp: [this.$t('__stContent1')],
          site_url: '//www.camerabay.tv/event/cbsuperleague'
        }, {
          name: this.$t('__qwalk'),
          desp: [this.$t('__qwalkContent1'), this.$t('__qwalkContent2')],
          site_url: '//www.camerabay.tv/'
        }, {
          name: this.$t('__coco'),
          desp: [this.$t('__cocoContent1'), this.$t('__cocoContent2'), this.$t('__cocoContent3')],
          video_url: '//vimeo.com/245745543'
        }]
      }]
    }
  },
  methods: {
    visibilityChanged(isVisible, entry, c_index) {
      if (isVisible) {
        // for (const proj of this.$refs.companyProject) {
        //   proj.addAnimate()
        // }
        this.$refs.company[c_index].addAnimate()
      }
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
