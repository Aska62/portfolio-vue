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
  width: calc(100vw - 120px);
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.category-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;
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
  transition-duration: 1s;
}

.category-text:hover {
  color: #adad02;
  cursor: pointer;
}

.name {
  position: fixed;
  top: 35%;
  transform: translateY(-70%);
  left: 50%;
  transform: translateX(-50%);
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

@media screen and (min-width: 801px) and (max-width: 1284px) {
  .category-text {
    line-height: 1.3;
  }
}

@media screen and (max-width: 800px) {
  .home-content {
    width: 100vw;
  }
  .category-text {
    font-size: 95px;
    line-height: 1;
  }
}

@media screen and (max-width: 420px) {
  .category-container {
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
  }
  .category-text {
    font-size: 88px;
    line-height: 1;
  }

  .name {
    font-size: 40px;
    top: 28%;
  }
}

</style>
