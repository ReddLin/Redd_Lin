<template>
  <div class="header">
    <div class="header-menu-flex">
      <h1 class="header-logo">
        <a @click="goToSomewhoere('')">Redd Lin</a>
      </h1>
    </div>
    <div class="header-options">
      <ul class="header-menu-info">
        <li><a>intro</a></li>
        <li><a>project</a></li>
        <li><a>skill</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToSomewhoere(path) {
      this.$router.push('/Redd_Lin/' + path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/theme";

.header {
    background: $color-bg-dark;
    width: 100%;
    top: 0;
    position: fixed;
    height: 80px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 30px;
    .header-menu-flex {
      display: flex;
      -moz-box-align: center;
      justify-content: flex-start;
      flex: 1;
      .header-logo {
        color: $color-white;
        text-decoration: none;
        cursor: pointer;
        display: block;
      }
    }
    .header-options {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row-reverse;
      -webkit-box-orient: horizontal;
      .header-menu-info {
        display: flex;
        list-style: none;
        list-style-type: none;
        li {
          margin-left: 42px;
          &:first-child {
            margin-left: 0;
          }
          a {
            position: relative;
            height: 80px;
            display: block;
            line-height: 80px;
            cursor: pointer;
            color: $color-white;
            font-size: 20px;
            transition: all 0.3s;
            &:hover {
              color: $color-header-menu;
            }
            &::before {
              position: absolute;
              content: ".";
              bottom: 10px;
              left: 0;
              width: 0;
              height: 2px;
              background: $color-header-menu;
              -webkit-transition: all 0.3s;
              transition: all 0.3s;
            }
            &:hover::before {
              width: 30px;
            }
          }
        }
      }
    }

}
</style>
