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
}

li a {
  text-decoration: none;
  background: linear-gradient(to right, #adad02 30%,#fafaf5 80%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 450%;
  background-position: 100%;
}

li a:hover {
  background-position: 0;
  cursor: pointer;
}

.category-text {
  font-size: 130px;
  /* font-style: italic; */
  line-height: 1;
}

.code, .write, .dive, .travel, .capture {
  transition-duration: 1.5s;
}

.name {
  position: fixed;
  top: 35%;
  transform: translateY(-70%);
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  /* font-style: italic; */
  padding-right: 5px;
  opacity: 1;
  background: linear-gradient(to right, #b87e21 30%, #666617 70%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 450%;
  background-position: 100%;
}
.name:hover {
  animation: name-shine .5s linear forwards;
  -webkit-animation: name-shine .5s linear forwards;
  -moz-animation: name-shine .5s linear forwards;
  -o-animation: name-shine .5s linear forwards;
  -ms-animation: name-shine .5s linear forwards;
}

.nameFadeBack {
  animation: name-remove-shine .5s linear forwards;
  -webkit-animation: name-remove-shine .5s linear forwards;
  -moz-animation: name-remove-shine .5s linear forwards;
  -o-animation: name-remove-shine .5s linear forwards;
  -ms-animation: name-remove-shine .5s linear forwards;
}

.namePreload {
  animation: load-name 5s ease-out forwards;
  -webkit-animation: load-name 5s ease-out forwards;
  -moz-animation: load-name 5s ease-out forwards;
  -o-animation: load-name 5s ease-out forwards;
  -ms-animation: load-name 5s ease-out forwards;
}

.code {
  animation: load-code 3s ease-in-out none;
  -webkit-animation: load-code 3s ease-in-out none;
  -moz-animation: load-code 3s ease-in-out none;
  -o-animation: load-code 3s ease-in-out none;
  -ms-animation: load-code 3s ease-in-out none;
}
.write {
  animation: load-write 3s ease-in-out none;
  -webkit-animation: load-write 3s ease-in-out none;
  -moz-animation: load-write 3s ease-in-out none;
  -o-animation: load-write 3s ease-in-out none;
  -ms-animation: load-write 3s ease-in-out none;
}
.dive {
  animation: load-dive 3s ease-in-out none;
  -webkit-animation: load-dive 3s ease-in-out none;
  -moz-animation: load-dive 3s ease-in-out none;
  -o-animation: load-dive 3s ease-in-out none;
  -ms-animation: load-dive 3s ease-in-out none;
}
.travel {
  animation: load-travel 3s ease-in-out none;
  -webkit-animation: load-travel 3s ease-in-out none;
  -moz-animation: load-travel 3s ease-in-out none;
  -o-animation: load-travel 3s ease-in-out none;
  -ms-animation: load-travel 3s ease-in-out none;
}
.capture {
  animation: load-capture 3s ease-in-out none;
  -webkit-animation: load-capture 3s ease-in-out none;
  -moz-animation: load-capture 3s ease-in-out none;
  -o-animation: load-capture 3s ease-in-out none;
  -ms-animation: load-capture 3s ease-in-out none;
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
    -webkit-animation: load-code-sm 3s ease-in-out forwards;
    -moz-animation: load-code-sm 3s ease-in-out forwards;
    -o-animation: load-code-sm 3s ease-in-out forwards;
    -ms-animation: load-code-sm 3s ease-in-out forwards;
  }

  .write-sm {
    animation: load-write-sm 3s ease-in-out forwards;
    -webkit-animation: load-write-sm 3s ease-in-out forwards;
    -moz-animation: load-write-sm 3s ease-in-out forwards;
    -o-animation: load-write-sm 3s ease-in-out forwards;
    -ms-animation: load-write-sm 3s ease-in-out forwards;
  }

  .dive-sm {
    animation: load-dive-sm 3s ease-in-out forwards;
    -webkit-animation: load-dive-sm 3s ease-in-out forwards;
    -moz-animation: load-dive-sm 3s ease-in-out forwards;
    -o-animation: load-dive-sm 3s ease-in-out forwards;
    -ms-animation: load-dive-sm 3s ease-in-out forwards;
  }

  .travel-sm {
    animation: load-travel-sm 3s ease-in-out forwards;
    -webkit-animation: load-travel-sm 3s ease-in-out forwards;
    -moz-animation: load-travel-sm 3s ease-in-out forwards;
    -o-animation: load-travel-sm 3s ease-in-out forwards;
    -ms-animation: load-travel-sm 3s ease-in-out forwards;
  }

  .capture-sm {
    animation: load-capture-sm 3s ease-in-out forwards;
    -webkit-animation: load-capture-sm 3s ease-in-out forwards;
    -moz-animation: load-capture-sm 3s ease-in-out forwards;
    -o-animation: load-capture-sm 3s ease-in-out forwards;
    -ms-animation: load-capture-sm 3s ease-in-out forwards;
  }

  .name {
    font-size: 40px;
    top: 28%;
  }
}


@keyframes load-code {
  0% { opacity: 0; background-position: 0;}
  85% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-webkit-keyframes load-code {
  0% { opacity: 0; background-position: 0;}
  85% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-moz-keyframes load-code {
  0% { opacity: 0; background-position: 0;}
  85% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-o-keyframes load-code {
  0% { opacity: 0; background-position: 0;}
  85% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-ms-keyframes load-code {
    0% { opacity: 0; background-position: 0;}
  85% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}

@keyframes load-write {
  0% { opacity: 0; background-position: 0;}
  65% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-webkit-keyframes load-write {
  0% { opacity: 0; background-position: 0;}
  65% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-moz-keyframes load-write {
  0% { opacity: 0; background-position: 0;}
  65% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-o-keyframes load-write {
  0% { opacity: 0; background-position: 0;}
  65% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-ms-keyframes load-write {
  0% { opacity: 0; background-position: 0;}
  65% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}

@keyframes load-dive {
  0% { opacity: 0; background-position: 0;}
  45% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-webkit-keyframes load-dive {
  0% { opacity: 0; background-position: 0;}
  45% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-moz-keyframes load-dive {
  0% { opacity: 0; background-position: 0;}
  45% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-o-keyframes load-dive {
  0% { opacity: 0; background-position: 0;}
  45% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-ms-keyframes load-dive {
  0% { opacity: 0; background-position: 0;}
  45% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}

@keyframes load-travel {
  0% { opacity: 0; background-position: 0;}
  25% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-webkit-keyframes load-travel {
  0% { opacity: 0; background-position: 0;}
  25% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-moz-keyframes load-travel {
  0% { opacity: 0; background-position: 0;}
  25% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-o-keyframes load-travel {
  0% { opacity: 0; background-position: 0;}
  25% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-ms-keyframes load-travel {
  0% { opacity: 0; background-position: 0;}
  25% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}

@keyframes load-capture {
  0% { opacity: 0; background-position: 0;}
  5% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-webkit-keyframes load-capture {
  0% { opacity: 0; background-position: 0;}
  5% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-moz-keyframes load-capture {
  0% { opacity: 0; background-position: 0;}
  5% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-o-keyframes load-capture {
  0% { opacity: 0; background-position: 0;}
  5% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}
@-ms-keyframes load-capture {
  0% { opacity: 0; background-position: 0;}
  5% { opacity: .8; background-position: 80%;}
  100% { opacity: 1; background-position: 100%; }
}

@keyframes load-code-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 80%); }
}
@-webkit-keyframes load-code-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 80%); }
}
@-moz-keyframes load-code-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 80%); }
}
@-o-keyframes load-code-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 80%); }
}
@-ms-keyframes load-code-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 80%); }
}

@keyframes load-write-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 60%); }
}
@-webkit-keyframes load-write-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 60%); }
}
@-moz-keyframes load-write-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 60%); }
}
@-o-keyframes load-write-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 60%); }
}
@-ms-keyframes load-write-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 60%); }
}

@keyframes load-dive-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 40%);}
}
@-webkit-keyframes load-dive-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 40%);}
}
@-moz-keyframes load-dive-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 40%);}
}
@-o-keyframes load-dive-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 40%);}
}
@-ms-keyframes load-dive-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 40%);}
}

@keyframes load-travel-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 20%); }
}
@-webkit-keyframes load-travel-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 20%); }
}
@-moz-keyframes load-travel-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 20%); }
}
@-o-keyframes load-travel-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 20%); }
}
@-ms-keyframes load-travel-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: calc(70px + 20%); }
}

@keyframes load-capture-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: 70px; }
}
@-webkit-keyframes load-capture-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: 70px; }
}
@-moz-keyframes load-capture-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: 70px; }
}
@-o-keyframes load-capture-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: 70px; }
}
@-ms-keyframes load-capture-sm {
  0% { color: #adad02; bottom: 100vh; }
  100% { color: #fafaf5; bottom: 70px; }
}

@keyframes name-shine {
  0%{ background-position: 100%;}
  50% { background-position: 50%; }
  100% { background-position: 0%; }
}
@-webkit-keyframes name-shine {
  0%{ background-position: 100%;}
  50% { background-position: 50%; }
  100% { background-position: 0%; }
}
@-moz-keyframes name-shine {
  0%{ background-position: 100%;}
  50% { background-position: 50%; }
  100% { background-position: 0%; }
}
@-o-keyframes name-shine {
  0%{ background-position: 100%;}
  50% { background-position: 50%; }
  100% { background-position: 0%; }
}
@-ms-keyframes name-shine {
  0%{ background-position: 100%;}
  50% { background-position: 50%; }
  100% { background-position: 0%; }
}

@keyframes name-remove-shine {
  0%{ background-position: 0%; }
  50% { background-position: 10%; }
  100% { background-position: 100%; }
}
@-webkit-keyframes name-remove-shine {
  0%{ background-position: 0%; }
  50% { background-position: 10%; }
  100% { background-position: 100%; }
}
@-moz-keyframes name-remove-shine {
  0%{ background-position: 0%; }
  50% { background-position: 10%; }
  100% { background-position: 100%; }
}
@-o-keyframes name-remove-shine {
  0%{ background-position: 0%; }
  50% { background-position: 10%; }
  100% { background-position: 100%; }
}
@-ms-keyframes name-remove-shine {
  0%{ background-position: 0%; }
  50% { background-position: 10%; }
  100% { background-position: 100%; }
}

@keyframes load-name {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
@-webkit-keyframes load-name {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes load-name {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes load-name {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
@-ms-keyframes load-name {
  0% { opacity: 0; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
