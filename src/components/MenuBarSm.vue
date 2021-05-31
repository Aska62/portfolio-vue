<template>
  <div class="menu-btn" @click="displayMenu">MENU</div>
  <div class="menu-container" v-bind:class="{ menu__visible: menu__isVisible }">
    <div class="menu-items" v-bind:class="{menuitems__visible: menu__isVisible }">
      <router-link to="/code"><p class="menu-title">Code</p></router-link>
      <router-link to="/write"><p class="menu-title">Write</p></router-link>
      <router-link to="/dive"><p class="menu-title">Dive</p></router-link>
      <router-link to="/capture"><p class="menu-title">Capture</p></router-link>
      <router-link to="/travel"><p class="menu-title">Travel</p></router-link>
      <router-link to="/about"><p class="menu-title">About</p></router-link>
      <router-link to="/contact"><p class="menu-title">Contact</p></router-link>
    </div>
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

@media screen and (max-width: 800px) {
  .menu-container {
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    background-color: rgba(250, 250, 232, .9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    position: fixed;
    top: 100vh;
    left: -10vh;
    transform: translateX(-50%);
    z-index: 2;
    transition-duration: 1s;
  }
  .menu__visible {
    width: 180vh;
    height: 180vh;
    top: 0;
    left: -30vh;
  }
  .menu-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    /* background-color: #c94242; */
    background: linear-gradient(to right, rgba(201, 66, 66, 1) 30%,#cc7070 60%);
    background-size: 400%;
    background-position: 100%;
    color: #fafae8;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 6;
    transition-duration: .7s;
  }
  .menu-btn:hover {
    cursor: pointer;
    background-position: 0;
  }
  .menu-items {
    /* background-color: teal; */
    width: 50%;
    margin: 0 0 0 50%;
    position: fixed;
    bottom: 50%;
    right: 0;
    display: none;
    flex-direction: column;
    justify-content: space-around;
  }
  .menuitems__visible {
    display: flex;
  }
  .menu-title {
    font-size: 3vh;
    background: linear-gradient(to right, #b87e21 30%, #666617 60%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 450%;
    background-position: 100%;
    margin: 0 0 5vh 50%;
    line-height: 1;
    align-self: center;
    transition-duration: .7s;
  }
  .menu-title:hover {
    background-position: 0;
  }
  a:link {
    text-decoration: none;
  }

  .displayed {
    color:#d6d694;
  }
}


</style>