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
  height: 10vh;
  width: 90vw;
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
  top: 10px;
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
  .header {
    align-items: flex-end;
  }
  .link-home {
    width: 80px;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0;
  }
  .link-home {
    height: 40px;
    font-size: 15px;
    margin-top: 20px;
    position:unset;
  }
  .page-title {
    font-size: 65px;
    margin: 0;
  }
}
</style>