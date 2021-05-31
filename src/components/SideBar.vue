<template>
  <section class="side-bar">
    <div
      @click="displayMenu"
      class="hamburger-box"
      v-bind:class="{ cross: isCross }">
      <div class="hamburger" v-bind:class="{hamburger__cross_left: hamburger__isCross}"></div>
      <div class="hamburger" v-bind:class="{hamburger__cross_middle: hamburger__isCross}"></div>
      <div class="hamburger" v-bind:class="{hamburger__cross_right: hamburger__isCross}"></div>
    </div>
    <div class="menu-container">
      <router-link to="/code" class="menu menu__code" v-bind:class="{ menu__visible: menu__isVisible }">Code</router-link>
      <router-link to="/write" class="menu menu__write" v-bind:class="{ menu__visible: menu__isVisible }">Write</router-link>
      <router-link to="/dive" class="menu menu__dive" v-bind:class="{ menu__visible: menu__isVisible }">Dive</router-link>
      <router-link to="/capture" class="menu menu__capture" v-bind:class="{ menu__visible: menu__isVisible }">Capture</router-link>
      <router-link to="/travel" class="menu menu__travel" v-bind:class="{ menu__visible: menu__isVisible }">Travel</router-link>
      <router-link to="/about" class="menu menu__about" v-bind:class="{ menu__visible: menu__isVisible }">About</router-link>
      <router-link to="/contact" class="menu menu__contact" v-bind:class="{ menu__visible: menu__isVisible }">Contact</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SideBar',
  data: function() {
    return {
      isCross: false,
      hamburger__isCross: false,
      menu__isVisible: false,
      currentPage: false
    }
  },
  props: {
    displayedPage: {
      type: String,
      default: ''
    }
  },
  methods: {
    displayMenu() {
      if (this.isCross === false) {
        this.isCross = true;
        this.hamburger__isCross = true;
        this.menu__isVisible = true;
        this.highlightPageTitle();
      } else {
        this.isCross = false;
        this.hamburger__isCross = false;
        this.menu__isVisible = false;
      }
    },
    highlightPageTitle() {
      console.log(`displayed page is ${this.displayedPage}`);
      const titles = document.querySelectorAll('.menu');
      for(let i = 0; i < titles.length; i++) {
        console.log(`checking menu title ${titles[i].textContent}`);
        if (this.displayedPage === titles[i].textContent) {
          titles[i].classList.add("displayed");
          console.log(titles[i].classList);
          break;
        }
      }
    }
  }
}
</script>

<style scoped>
.side-bar {
  width: 120px;
  height: 100vh;
  background-color:#fafae8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
}
.hamburger-box {
  width: 35%;
  height: 3%;
  margin: 12% auto;
  position: relative;
}
.hamburger-box:hover {
  cursor: pointer;
  opacity: .7;
}
.hamburger {
  width: 100%;
  height: 15%;
  background-color: #666617;
  margin-bottom: 10px;
  display: block;
  transition-duration: .5s;
}

.hamburger__cross_left {
  width: 60%;
  background-color: #666617;
  transform: skew(-45deg, 45deg);
  position: absolute;
  top: 50%;
  left: 10%;
}
.hamburger__cross_middle {
  display: none;
}
.hamburger__cross_right {
  width: 60%;
  transform: skew(45deg, -45deg);
  position: absolute;
  top: 50%;
  left: 10%;
}

.menu-btn {
  display: none;
}

.close {
  display: none;
}

.menu-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition-duration: 1s;
}

.menu {
  font-size: 20px;
  margin: 4vh 0 0 0;
  line-height: 1;
  background: linear-gradient(to right, #b87e21 30%, #666617 60%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: 150%;
  background-size: 450%;
  background-position: 100%;
  transition-duration: .7s;
}

.menu:hover {
  background-position: 0;
}

.menu__code {
  transition-duration: .2s;
}

.menu__write {
  transition-duration: .3s;
}

.menu__dive {
  transition-duration: .4s;
}

.menu__capture {
  transition-duration: .5s;
}

.menu__travel {
  transition-duration: .6s;
}

.menu__about {
  transition-duration: .7s;
}

.menu__contact {
  transition-duration: .8s;
}

.menu__visible {
  padding-left: 0;
}

a:link {
  text-decoration: none;
}

.displayed {
  background-position: 0;
}

@media screen and (max-width: 800px) {
  .side-bar {
    display: none;
  }
}

</style>