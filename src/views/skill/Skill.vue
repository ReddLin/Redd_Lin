<template>
  <div class="skill">
    <h1>{{ $t('__skill') }}</h1>
    <div class="skill-content">
      <div v-for="(card, c_index) in cards" :key="'pro-circle_' + c_index" class="skill-card">
        <h2>{{ card.title }}</h2>
        <Progress-circle
          v-for="(info, i_index) in card.list"
          :key="'info-' + i_index"
          :name="info.name"
          :percent="info.percent"
          :fill="info.fill"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProgressCircle from '@/components/ProgressCircle/ProgressCircle'
export default {
  components: {
    ProgressCircle
  },
  data() {
    return {
      cards: [{
        'title': 'Front-end',
        'list': [{
          'name': 'Jquery',
          'percent': 90,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'Bootstrap',
          'percent': 85,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'CSS(SCSS)',
          'percent': 80,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'AngularJs',
          'percent': 60,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'Vue',
          'percent': 90,
          'fill': { color: '#ff1e41' }
        }]
      }, {
        'title': 'Back-end',
        'list': [{
          'name': 'JAVA',
          'percent': 70,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'PlayFramework',
          'percent': 70,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'MySQL',
          'percent': 75,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'nodeJs',
          'percent': 70,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'mongoDB',
          'percent': 65,
          'fill': { color: '#ff1e41' }
        }]
      }, {
        'title': 'Tools',
        'list': [{
          'name': 'BitBucket',
          'percent': 70,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'SVN',
          'percent': 70,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'Webpack',
          'percent': 70,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'websocket',
          'percent': 80,
          'fill': { color: '#ff1e41' }
        }, {
          'name': 'sourcetree',
          'percent': 80,
          'fill': { color: '#ff1e41' }
        }]
      }]
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
  .skill-content {
    display: flex;
    text-align: left;
    max-width: 900px;
    padding-bottom: 50px;
    margin: 0 auto;
    .skill-card {
      flex: 1;
      margin: 15px;
      border-top: $color-intro-h3 2px solid;
      display: flex;
      flex-wrap: wrap;
      h2 {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    .skill-content {
      flex-direction: column;
      text-align: center;
      .skill-card {
        display: block;
      }
    }
  }
}
p {
    margin: 0;
}
</style>
