<template>
  <section class="header">
    <router-link to="/" class="link-home"><h2>Aska Takahashi</h2></router-link>
    <h1 class="page-title" v-bind:class="{ titlePreload: beforeLoading }">{{ pageTitle }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      beforeLoading: true,
    }
  },
  props: {
    pageTitle: {
      type: String,
      default: '',
      required: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.beforeLoading = false;
    }, 2000);
  }
}
</script>

<style scoped>
.header {
  height: 70px;
  width: calc(100vw - 120px);
  position:relative;
  z-index: 0;
}

.link-home {
  text-decoration: none;
  color: #c94242;
  position: absolute;
  left: 20px;
  top: -150%;
  transform: translateY(-50%);
  animation: load 3s ease-in-out forwards;
}

.link-home:hover {
  cursor: pointer;
  color: #eb7171;
}

.page-title {
  font-size: 80px;
  font-style:italic;
  text-align: center;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to right, #666617 0%, #e3e327 30%, #666617 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 100%;
  background-position: 100% 0;
}

.titlePreload {
  top: -150vh;
  animation: load 2s ease-in-out forwards;
}

.page-title:hover {
  cursor: pointer;
  animation: title-shine 8s linear infinite;
}

@keyframes title-shine {
  0% {
    background-position: 100% 0;
  }
  30% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes load {
  0%{
    top: -150%;
    opacity: 0;
  }
  80% {
    top: 50%;
    opacity: .6;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
}

@keyframes load-sm {
  0%{
    left: -150vw;
    opacity: 0;
  }
  80% {
    left: 50%;
    opacity: .6;
  }
  100% {
    left: 50%;
    opacity: 1;
  }
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  .link-home {
    width: 80px;
  }
}

@media screen and (max-width: 800px) {
  .header {
    width: 100vw;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .link-home {
    font-size: 14px;
  }
  .page-title {
    font-size: 65px;
  }
}

@media screen and (max-width: 600px) {
  .header {
    height: 85px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .link-home {
    height: 40px;
    font-size: 15px;
    left: -150vw;
    top: 0;
    transform: translateX(-50%);
    line-height: 1;
    opacity: 0;
    animation: load-sm 3s ease-in-out forwards;
  }
  .page-title {
    font-size: 65px;
    line-height: 1;
    position: absolute;
    left: 50%;
    top: 32px;
    transform: translateX(-50%);
    opacity: 1;
  }
  .titlePreload {
    left: -150vw;
    animation: load-sm 2.5s ease-in-out forwards;
  }
}
</style>