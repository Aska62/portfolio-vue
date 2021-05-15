<template>
  <section class="home-content">
    <ul class="category-container">
      <li class="category-text"><router-link to="/code">Code</router-link></li>
      <li class="category-text"><router-link to="/write">Write</router-link></li>
      <li class="category-text"><router-link to="/dive">Dive</router-link></li>
      <li class="category-text"><router-link to="/travel">Travel</router-link></li>
      <li class="category-text"><router-link to="/capture">Capture</router-link></li>
    </ul>
    <router-link to="/about"><h1 class="name">Aska Takahashi</h1></router-link>
  </section>
  <SideBar :displayedPage=pageTitle />
  <MenuBarSm :menuBarDisplayedPage=pageTitle />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import MenuBarSm from '@/components/MenuBarSm.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    SideBar,
    MenuBarSm
  }
}
</script>

<style scpoed>
.home-content {
  width: 88vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
}

.category-container {
  width: 90%;
  height: 95%;
  min-height: 800px;
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;
  list-style: none;
}

.categroy-link {
  text-decoration: none;
}

li a {
  text-decoration: none;
  color: #fafaf5;
  transition-duration: 1s;
}

li a:hover {
  color: #adad02;
  cursor: pointer;
}

.category-text {
  color: #fafaf5;
  font-size: 130px;
  font-style:italic;
  line-height: 2;
  margin-bottom: 200px;
  transition-duration: 1s;
}

.category-text:hover {
  color: #adad02;
  cursor: pointer;
}

.name {
  position: fixed;
  top: 35%;
  left: 30%;
  color:#666617;
  font-size: 40px;
  font-style:italic;
  transition-duration: .5s;
}
.name:hover {
  color: #c94242;
  font-size: 60px;
  transition-duration: .5s;
}

@media screen and (max-width: 420px) {
  .category-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 80vh;
  }

  .category-text {
    font-size: 100px;
    line-height: 1;
    margin: 0;
    color: #edede1;
  }

  .name {
    font-size: 40px;
    position: fixed;
    top: 30vh;
  }
}

</style>
