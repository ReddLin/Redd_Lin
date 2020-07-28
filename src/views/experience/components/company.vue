<template>
  <div class="company">
    <h2>{{ companyName }}</h2>
    <h2>{{ duringTime }}</h2>
    <h3>{{ title }}</h3>
    <CompanyProject
      v-for="(project, p_index) in projects"
      :key="'project_' + p_index"
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
