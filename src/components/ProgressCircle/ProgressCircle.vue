<template>
  <div class="progress-block">
    <vue-circle
      :progress="percent"
      :size="100"
      :reverse="false"
      line-cap="round"
      :fill="fill"
      empty-fill="rgba(0, 0, 0, .1)"
      :animation-start-value="0.0"
      :start-angle="0"
      insert-mode="append"
      :thickness="5"
      :show-percent="true"
      @vue-circle-progress="progress"
      @vue-circle-end="progress_end"
    >
      <p>{{ name }}</p>
    </vue-circle>
  </div>
</template>
<script>
import VueCircle from 'vue2-circle-progress'
export default {
  components: {
    VueCircle
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    percent: {
      type: Number,
      default: 0
    },
    fill: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
    }
  },
  methods: {
    progress(event, progress, stepValue) {
      // console.log(stepValue)
    },
    progress_end(event) {
      // console.log('Circle progress end')
    }
  }
}
</script>
<style lang="scss" scoped>
p {
  margin: 0;
}
.progress-block {
  display: inline-flex;
}
</style>
