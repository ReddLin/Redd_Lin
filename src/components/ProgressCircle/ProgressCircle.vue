<template>
  <div class="progress-block">
    <vue-circle
      :progress="percent"
      :size="90"
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
    }
  },
  data() {
    return {
      fill: {}
    }
  },
  beforeMount() {
    this.check_circle_color()
  },
  methods: {
    progress(event, progress, stepValue) {
      // console.log(stepValue)
    },
    progress_end(event) {
      // console.log('Circle progress end')
    },
    check_circle_color() {
      if (this.percent >= 90) {
        this.fill = { color: '#28a745' }
      } else if (this.percent >= 75 && this.percent < 90) {
        this.fill = { color: '#007bff' }
      } else if (this.percent >= 60 && this.percent < 75) {
        this.fill = { color: '#ffc107' }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/theme";

p {
  margin: 0;
  transition: all .5s;
}
.progress-block {
  display: inline-flex;
  margin: 5px;
  &:hover {
    p {
      color: $color-header-menu;
    }
  }
}
</style>
