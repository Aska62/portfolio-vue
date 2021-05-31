<template>
  <a href="#page-top" class="btn-container hidden">
    <div class="arrow">
      <div class="arrow-top"></div>
      <div class="arrow-bottom"></div>
    </div>
    <p class="btn-letter">TOP</p>
  </a>
</template>

<script>
export default {
  name: 'ToPageTopBtn',
  methods: {
    // FADE IN TO-TOP BUTTON WHEN SCROLLED TILL DESIGNED POSITION
    displayToTopBtn () {
      const toTopBtn = document.querySelector(".btn-container");
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      if (scrollY >= windowHeight * 0.6) {
        toTopBtn.classList.remove("hidden");
      } else {
        toTopBtn.classList.add("hidden");
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.displayToTopBtn)
  },
}

</script>

<style scoped>
.btn-container {
  text-decoration: none;
  width: 50px;
  height: 50px;
  position: fixed;
  right: 125px;
  bottom: 80px;
  border-radius: 50%;
  text-align: center;
  background: linear-gradient(to right, rgba(201, 66, 66, 1) 30%, rgba(201, 66, 66, .7) 50%);
  background-size: 450%;
  background-position: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition-duration: .8s;
}

.btn-container:hover {
  background-position: 0;
}

.arrow {
  width: 50px;
  height: 20px;
  opacity: .8;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.arrow-top {
  width: 15px;
  height: 2.5px;
  background-color: rgba(255, 255, 255, 1);
  transform: skew(0deg, -45deg);
  padding: 0;
}
.arrow-bottom {
  width: 15px;
  height: 2.5px;
  background-color: rgba(255, 255, 255, 1);
  transform: skew(0deg, 45deg);
  z-index: 3;
}

.btn-letter {
  color: rgba(255, 255, 255, .9);
  margin: 0;
  line-height: 1;
  z-index: 2;
  font-size: 12px;
}

.hidden {
  opacity: 0;
}

@media screen and (max-width: 800px) {
  .btn-container {
    right: 8px;
  }
}


</style>