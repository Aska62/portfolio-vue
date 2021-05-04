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
  top: 15px;
}

.link-home:hover {
  cursor: pointer;
  color: #eb7171;
}

.page-title {
  font-size: 80px;
  font-style:italic;
  text-align: center;
}
</style>