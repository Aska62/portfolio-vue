<template>
  <section class="home-content">
    <ul class="category-container">
      <li class="category-text code-sm"><router-link to="/code" class="code">Code</router-link></li>
      <li class="category-text write-sm"><router-link to="/write" class="write">Write</router-link></li>
      <li class="category-text dive-sm"><router-link to="/dive" class="dive">Dive</router-link></li>
      <li class="category-text travel-sm"><router-link to="/travel" class="travel">Travel</router-link></li>
      <li class="category-text capture-sm"><router-link to="/capture" class="capture">Capture</router-link></li>
    </ul>
    <router-link to="/about">
      <h1 class="name"
        v-bind:class="{ namePreload: boforeLoading, nameFadeBack: nameMouseOut}"
        @mouseout="changeNameColerToOrig">
          Aska Takahashi
      </h1>
        </router-link>
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
  },
  data() {
    return {
      pageTitle: "Home",
      boforeLoading: true,
      nameMouseOut: false,
    }
  },
  methods: {
    changeNameColerToOrig() {
      this.nameMouseOut = true;
      setTimeout(() => {
        this.nameMouseOut = false;
      }, 5000);
    }
  },
  mounted() {
    setTimeout(() => {
      this.boforeLoading = false
    }, 5000);
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
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  /* animation: load-category-text 3s linear forwards; */
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
  font-size: 40px;
  font-style:italic;
  opacity: 1;
  background: linear-gradient(to right, #e3e327 30%, #666617 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400%;
  background-position: 100%;
}
.name:hover {
  animation: name-shine .5s linear forwards;
}

.nameFadeBack {
  animation: name-remove-shine .5s linear forwards;
}

.namePreload {
  animation: load-name 5s ease-out forwards;
}


@keyframes load-code {
  0% {
    opacity: 0;
  }
  90% {
    color: #666617;
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load-write {
  0% {
    opacity: 0;
  }
  70% {
    color: #666617;
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load-dive {
  0% {
    opacity: 0;
  }
  50% {
    color: #666617;
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load-travel {
  0% {
    opacity: 0;
  }
  30% {
    color: #666617;
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load-capture {
  0% {
    opacity: 0;
  }
  10% {
    color: #666617;
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
}
@keyframes load-code-sm {
  0% {
    color: #666617;
    bottom: 100vh;
  }
  100% {
    color: #fafaf5;
    bottom: calc(70px + 80%);
  }
}

@keyframes load-write-sm {
  0% {
    color: #666617;
    bottom: 100vh;
  }
  100% {
    color: #fafaf5;
    bottom: calc(70px + 60%);
  }
}

@keyframes load-dive-sm {
  0% {
    color: #666617;
    bottom: 100vh;
  }
  100% {
    color: #fafaf5;
    bottom: calc(70px + 40%);
  }
}

@keyframes load-travel-sm {
  0% {
    color: #666617;
    bottom: 100vh;
  }
  100% {
    color: #fafaf5;
    bottom: calc(70px + 20%);
  }
}

@keyframes load-capture-sm {
  0% {
    color: #666617;
    bottom: 100vh;
  }
  100% {
    color: #fafaf5;
    bottom: 70px;
  }
}

@keyframes name-shine {
  0%{
    background-position: 100%;
  }
  50% {
    background-position: 50%;
  }
  100% {
    background-position: 0%;
  }
}

@keyframes name-remove-shine {
  0%{
    background-position: 0%;
  }
  50% {
    background-position: 10%;
  }
  100% {
    background-position: 100%;
  }
}

@keyframes load-name {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* @media screen and (min-width: 421px) { */
  .code {
    animation: load-code 3s ease-in-out forwards;
  }
  .write {
    animation: load-write 3s ease-in-out forwards;
  }
  .dive {
    animation: load-dive 3s ease-in-out forwards;
  }
  .travel {
    animation: load-travel 3s ease-in-out forwards;
  }
  .capture {
    animation: load-capture 3s ease-in-out forwards;
  }
/* } */

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
    align-items: center;
    margin: 0 auto;
  }
  .category-text {
    font-size: 88px;
    line-height: 1;
    position: fixed;
    bottom: 100vh;
  }

  .code-sm {
    animation: load-code-sm 3s ease-in-out forwards;
  }

  .write-sm {
    animation: load-write-sm 3s ease-in-out forwards;
  }

  .dive-sm {
    animation: load-dive-sm 3s ease-in-out forwards;
  }

  .travel-sm {
    animation: load-travel-sm 3s ease-in-out forwards;
  }

  .capture-sm {
    animation: load-capture-sm 3s ease-in-out forwards;
  }

  .name {
    font-size: 40px;
    top: 28%;
  }
}

</style>
