<template>
  <div :class="scrolled ? 'header scrolled' : 'header'">
    <div class="header-container">
      <div class="header-menu-flex">
        <h1 class="header-logo">
          <a @click="goToSomewhoere('')">Redd Lin</a>
        </h1>
      </div>
      <div class="header-options">
        <ul class="header-menu-info">
          <li><a @click="goToSomewhoere('intro')">intro</a></li>
          <li><a @click="goToSomewhoere('project')">project</a></li>
          <li><a @click="goToSomewhoere('skill')">skill</a></li>
        </ul>
      </div>
      <button :class="!mobile_list ? 'hamburger-icon' : 'hamburger-icon on'" @click="triggerMobileList">
        <span class="icon-bar one" />
        <span class="icon-bar two" />
        <span class="icon-bar three" />
      </button>
    </div>
    <div :class="!mobile_list ? 'header-menu-mobile' : 'header-menu-mobile on'">
      <div class="header-menu-mobile-info">
        <ul>
          <li><a @click="goToSomewhoere('intro')">intro</a></li>
          <li><a @click="goToSomewhoere('project')">project</a></li>
          <li><a @click="goToSomewhoere('skill')">skill</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile_list: false,
      scrolled: false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    goToSomewhoere(path) {
      this.$router.push('/Redd_Lin/' + path)
    },
    triggerMobileList() {
      this.mobile_list = !this.mobile_list
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0
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
  .header-container {
    max-width: 1200px;
    width: 100%;
    margin: auto;
    padding: 0 30px;
    height: 80px;
    display: flex;
    z-index: 999;
    background: $color-bg-dark;
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
            &:hover, &:active {
              color: $color-header-menu;
            }
            &::before {
              position: absolute;
              content: "";
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
    @media only screen and (max-width: 650px) {
      .header-options {
        display: none;
      }
    }
    button {
      padding: 0;
      background: none;
      outline: none;
    }
    .hamburger-icon {
      display: none;
      border: none;
      cursor: pointer;
      .icon-bar {
        background: $color-bg-icon-bar;
        display: block;
        height: 3px;
        margin: 0 auto 6px;
        width: 30px;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
        border-radius: 10px;
      }
      &:hover .icon-bar {
        background: $color-header-menu;
      }
    }
    .hamburger-icon.on {
      .one {
        transform: rotate(45deg) translateX(6px) translateY(6px);
      }
      .two {
        opacity: 0;
      }
      .three {
        transform: rotate(-45deg) translateX(6px) translateY(-7px);
      }
    }
    @media only screen and (max-width: 650px) {
      .hamburger-icon {
        display: block;
      }
    }
  }
  .header-menu-mobile {
    display: none;
    position: fixed;
    top: -100px;
    width: 100%;
    background: $color-bg-dark;
    border: none;
    transition: all 0.5s;
    z-index: 900;
    .header-menu-mobile-info {
      ul {
        list-style: none;
        list-style-type: none;
        a {
          cursor: pointer;
          color: $color-white;
          display: block;
          padding: 15px 0 15px 0;
          font-size: 16px;
          letter-spacing: 1px;
          position: relative;
          &:hover, &:active {
            color: $color-header-menu;
          }
          &::before {
            position: absolute;
            content: "";
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
  @media only screen and (max-width: 650px) {
    .header-menu-mobile {
      display: block;
    }
  }
  .header-menu-mobile.on {
    // display: block;
    top: 80px;
  }
}
.header.scrolled {
  .header-container {
    background: $color-header-scrolled-dark;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
  }
}
</style>
