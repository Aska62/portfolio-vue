<template>
  <section class="header">
    <router-link to="/" class="link-home" id="page-top"><h2>Aska Takahashi</h2></router-link>
    <h1 class="page-title" v-bind:class="{ titlePreload: beforeLoading, titleFlash: titleFlash }">{{ pageTitle }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      beforeLoading: true,
      titleFlash: false,
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
    setInterval(() => {
        this.titleFlash = true;
      }, 8000);
    setInterval(() => {
    this.titleFlash = false;
    }, 9000);
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
  background: linear-gradient(to right, rgba(201, 66, 66, .4) 30%, rgba(201, 66, 66, 1) 50%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 450%;
  background-position: 100%;
  position: absolute;
  left: 20px;
  top: -150%;
  transform: translateY(-50%);
  animation: load 3s ease-in-out forwards;
  -webkit-animation: load 3s ease-in-out forwards;
  -moz-animation: load 3s ease-in-out forwards;
  -o-animation: load 3s ease-in-out forwards;
  -ms-animation: load 3s ease-in-out forwards;
  transition-duration: .5s;
  z-index: 1;
}

.link-home:hover {
  cursor: pointer;
  background-position: 0;
}

.page-title {
  font-size: 80px;
  text-align: center;
  line-height: 1;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(-45deg, #666617 50%, #e3e327 55%, #666617 60%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 100%;
  background-position: 100% 0;
  padding-right: 10px;
  z-index: 0;
}

.titlePreload {
  top: -150vh;
  animation: load 2s ease-in-out forwards;
  -webkit-animation: load 2s ease-in-out forwards;
  -moz-animation: load 2s ease-in-out forwards;
  -o-animation: load 2s ease-in-out forwards;
  -ms-animation: load 2s ease-in-out forwards;
}

.page-title:hover {
  cursor: pointer;
  animation: title-shine 1s ease-in-out forwards;
  -webkit-animation: title-shine 1s ease-in-out forwards;
  -moz-animation: title-shine 1s ease-in-out forwards;
  -o-animation: title-shine 1s ease-in-out forwards;
  -ms-animation: title-shine 1s ease-in-out forwards;
}

.titleFlash {
  animation: title-shine 1s ease-in-out forwards;
  -webkit-animation: title-shine 1s ease-in-out forwards;
  -moz-animation: title-shine 1s ease-in-out forwards;
  -o-animation: title-shine 1s ease-in-out forwards;
  -ms-animation: title-shine 1s ease-in-out forwards;
}

@keyframes title-shine {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@-webkit-keyframes title-shine {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@-moz-keyframes title-shine {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@-o-keyframes title-shine {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@-ms-keyframes title-shine {
  0% {
    background-position: 100% 0;
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

@-webkit-keyframes load {
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

@-moz-keyframes load {
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

@-o-keyframes load {
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

@-ms-keyframes load {
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

@media screen and (max-width: 800px) {
  .link-home {
    letter-spacing: -1px;
  }
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
    top: -7px;
    transform: translateX(-50%);
    line-height: 1;
    opacity: 0;
    animation: load-sm 3s ease-in-out forwards;
  }
  .page-title {
    font-size: 60px;
    line-height: 1;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
    opacity: 1;
  }
  .titlePreload {
    left: -150vw;
    animation: load-sm 2.5s ease-in-out forwards;
  }
}

@media screen and (max-width: 380px) {
  .link-home {
    font-size: 13px;
  }
}
</style>