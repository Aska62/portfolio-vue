<template>
  <section class="side-bar">
    <div
      @click="displayMenu"
      class="hamburger-box"
      v-bind:class="{ round: isRound }">
      <div class="hamburger line1" v-bind:class="{hamburger__visible: hamburger__isVisible}"></div>
      <div class="hamburger line2" v-bind:class="{hamburger__visible: hamburger__isVisible}"></div>
      <div class="hamburger line3" v-bind:class="{hamburger__visible: hamburger__isVisible}"></div>
    </div>
    <div class="menu-container" v-bind:class="{ menu__visible: menu__isVisible }">
      <router-link to="/code"><p class="menu">Code</p></router-link>
      <router-link to="/write"><p class="menu">Write</p></router-link>
      <router-link to="/dive"><p class="menu">Dive</p></router-link>
      <router-link to="/capture"><p class="menu">Capture</p></router-link>
      <router-link to="/travel"><p class="menu">Travel</p></router-link>
      <router-link to="/about"><p class="menu">About</p></router-link>
      <router-link to="/contact"><p class="menu">Contact</p></router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SideBar',
  data: function() {
    return {
      isRound: false,
      hamburger__isVisible: true,
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
      if (this.isRound === false) {
        this.isRound = true;
        this.hamburger__isVisible = false;
        this.menu__isVisible = true;
        this.highlightPageTitle();
      } else {
        this.isRound = false;
        this.hamburger__isVisible = true;
        this.menu__isVisible = false;
      }
    },
    highlightPageTitle() {
      const titles = document.querySelectorAll('.menu');
      for(let i = 0; i < titles.length; i++) {
        if (this.displayedPage === titles[i].textContent) {
          titles[i].classList.add("displayed")
          break;
        }
      }
    }
  }
}
</script>

<style scoped>
.side-bar {
  width: 12vw;
  height: 100vh;
  background-color:#fafae8;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
}
.hamburger-box {
  width: 35%;
  height: 6%;
  margin: 12% 0 12% 0;
  transition-duration: 0.3s;
}
.hamburger-box:hover {
  cursor: pointer;
}
.hamburger {
  width: 100%;
  height: 10%;
  background-color: #666617;
  margin-bottom: 10px;
  display: none;
}

.hamburger__visible {
  display: block;
}

.close {
  display: none;
}
.round {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #666617;
  transition-duration: 0.3s;
}
.menu-container {
  display: none;
  transition-duration: 1s;
}

.menu__visible {
  display: block;
}

.menu {
  font-size: 20px;
  margin: 30px 0 25px 0;
  color:#666617;
}

.menu:hover {
  color: #c94242;
}

a:link {
  text-decoration: none;
}

.displayed {
  color:#d6d694;
}
</style>