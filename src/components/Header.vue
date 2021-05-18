<template>
  <section class="header">
    <router-link to="/" class="link-home"><h2>Aska Takahashi</h2></router-link>
    <h1 class="page-title">{{ pageTitle }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    pageTitle: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped>
.header {
  height: 70px;
  width: calc(100vw - 120px);
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.link-home {
  text-decoration: none;
  color: #c94242;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
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
    position:unset;
    left: unset;
    top: unset;
    transform: unset;
    line-height: 1;
  }
  .page-title {
    font-size: 65px;
    line-height: 1;
  }
}
</style>