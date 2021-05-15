<template>
  <div class="menu-btn" @click="displayMenu">MENU</div>
  <div class="menu-container" v-bind:class="{ menu__visible: menu__isVisible }">
    <router-link to="/code"><p class="menu-title">Code</p></router-link>
    <router-link to="/write"><p class="menu-title">Write</p></router-link>
    <router-link to="/dive"><p class="menu-title">Dive</p></router-link>
    <router-link to="/capture"><p class="menu-title">Capture</p></router-link>
    <router-link to="/travel"><p class="menu-title">Travel</p></router-link>
    <router-link to="/about"><p class="menu-title">About</p></router-link>
    <router-link to="/contact"><p class="menu-title">Contact</p></router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuBarSm',
  data: function() {
    return {
      isDisplayed: false,
      menu__isVisible: false,
      currentPage: false
    }
  },
  props: {
    menuBarDisplayedPage: {
      type: String,
      default: ''
    }
  },
  methods: {
    displayMenu() {
      if (this.isDisplayed === false) {
        this.isDisplayed = true;
        this.menu__isVisible = true;
        this.menuBarHighlightTitle();
      } else {
        this.isDisplayed = false;
        this.menu__isVisible = false;
      }
    },
    menuBarHighlightTitle() {
      const menuBarTitles = document.querySelectorAll('.menu-title');
      for(let i = 0; i < menuBarTitles.length; i++) {
        if (this.menuBarDisplayedPage == menuBarTitles[i].textContent) {
          menuBarTitles[i].classList.add("displayed");
          break;
        }
      }
    }
  }
}
</script>

<style scoped>
.menu-container, .menu-btn {
  display: none;
}

@media screen and (max-width: 420px) {
  .menu-container {
    width: 30px;
    height: 30px;
    padding-top: 150px;
    border-radius: 50%;
    background-color: rgba(250, 250, 232, .9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    position: fixed;
    bottom: -100px;
    left: -20px;
    z-index: 2;
    transition-duration: 1s;
  }
  .menu__visible {
    width: 1000px;
    height: 1000px;
    bottom: -400px;
    left: -600px;
  }
  .menu-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #c94242;
    color: #fafae8;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 6;
  }
  .menu-btn:hover {
    cursor: pointer;
    opacity: .9;
  }
  .menu-title {
    font-size: 30px;
    color:#666617;
    margin: 20px 0 10px 350px;
    align-self: center;
  }
  .menu-title:hover {
    color: #c94242;
  }
  a:link {
    text-decoration: none;
  }

  .displayed {
    color:#d6d694;
  }
}


</style>