<template>
  <div class="skill">
    <h1>{{ $t('__skill') }}</h1>
    <vue-circle
      :progress="80"
      :size="100"
      :reverse="false"
      line-cap="round"
      :fill="fill"
      empty-fill="rgba(0, 0, 0, .1)"
      :animation-start-value="0.0"
      :start-angle="0"
      insert-mode="append"
      :thickness="10"
      :show-percent="true"
      @vue-circle-progress="progress"
      @vue-circle-end="progress_end"
    >
      <p>Vue</p>
    </vue-circle>
  </div>
</template>
<script>
import VueCircle from 'vue2-circle-progress'
export default {
  components: {
    VueCircle
  },
  data() {
    return {
      fill: { color: '#ff1e41' }
    }
  },
  methods: {
    progress(event, progress, stepValue) {
      console.log(stepValue)
    },
    progress_end(event) {
      console.log('Circle progress end')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/theme";

.skill {
  margin: auto 30px;
  color: $color-white;
  text-align: center;
}
p {
    margin: 0;
}
</style>
