<template>
  <div :class="'company company-' + index">
    <h2>{{ companyName }}</h2>
    <h2>{{ duringTime }}</h2>
    <h3>{{ title }}</h3>
    <CompanyProject
      v-for="(project, p_index) in projects"
      :key="'project_' + p_index"
      :index="p_index"
      :project="project"
      :end="p_index === projects.length-1 ? true : false"
    />
  </div>
</template>
<script>
import CompanyProject from '@/views/experience/components/companyProject'

export default {
  components: {
    CompanyProject
  },
  props: {
    index: {
      type: Number,
      default: -1
    },
    companyName: {
      type: String,
      default: ''
    },
    duringTime: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    projects: {
      type: Array,
      default: null
    }
  },
  methods: {
    addAnimate() {
      // console.log('company-' + this.index)
      const element = document.getElementsByClassName('company-' + this.index)
      // console.log(element)
      if (element.length > 1) {
        for (const ele of element) {
          ele.classList.add('animate__animated', 'animate__fadeInLeft')
        }
      } else {
        element[0].classList.add('animate__animated', 'animate__fadeInLeft')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.company {
  h2 {
    text-align: left;
  }
}
</style>
