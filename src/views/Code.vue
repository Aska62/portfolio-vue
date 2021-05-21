<template>
  <Header :pageTitle="pageTitle" />
  <PageCover
    :pageCoverTitle="pageCoverTitle"
    :pageCoverText="pageCoverText"
    :page="pageTitle" />
  <section class="code-content">
    <div class="code-data" v-for="data in videosData" :key="data">
      <p class="code-title">{{ data.name }}</p>
      <iframe class="video" :src="data.video" control></iframe>
      <a class="github-link" :href="data.link" target="_blank" rel="noopener">View Code on GitHub</a>
    </div>
  </section>
  <ToPageTopBtn />
  <SideBar :displayedPage=pageTitle />
  <MenuBarSm :menuBarDisplayedPage=pageTitle />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import MenuBarSm from '@/components/MenuBarSm.vue'
import PageCover from '@/components/PageCover.vue'
import ToPageTopBtn from '@/components/ToPageTopBtn.vue'
import axios from 'axios'
import videosData from "../data/videos.json"

export default {
  name: 'Code',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm,
    PageCover,
    ToPageTopBtn
  },
  data() {
    return {
      pageTitle: "Code",
      pageCoverTitle: "I am a Code Addict since 2020.",
      pageCoverText: ["HTML5, CSS", "JavaScript", "Vue.js", "Node.js, Express", "Python, Flask, Django", "SQL", "Java 11"],
      videosData: videosData
    }
  },
  // methods: {
  //   async fetchCodeData() {
  //     await axios.get(`https://portfolio-backend-9b834.web.app/videos`).then((response) => {
  //       this.codeData = response.data;
  //     })
  //   }
  // },
  // mounted() {
  //   this.fetchCodeData()
  // }
}
</script>

<style scoped>
.code-content {
  width: calc(100vw - 120px);
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 78px;
}

.code-content:hover{
  cursor: pointer;
}

.code-data {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 50px auto;
}

.code-title {
  font-size: 45px;
  margin: 5px 0 8px 0;
  transition-duration: .4s;
}

.code-title:hover{
  color: #eb7171;
  cursor: pointer;
}

.video {
  width: 560px;
  height: 315px;
  border: 0;
  outline: 0;
  box-shadow: 0px 5px 7px 6px rgba(69, 69, 3,.4);
}

.github-link {
  font-size: 23px;
  color:#666617;
  text-decoration: none;
  margin-top: 9px;
}

.github-link:hover {
  cursor: pointer;
  color: #eb7171;
  transition-duration: .4s;
}

@media screen and (max-width: 800px) {
  .code-content {
    width: 100vw;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .code-data {
    width: 90%;
  }
  .code-title {
    font-size: 38px;
    text-align: center;
  }
  .github-link {
    font-size: 22px;
    margin-bottom: 0;
  }
}

@media screen and (min-width: 421px) and (max-width: 600px) {
  .video {
    width: 414px;
    height: 233px;
  }
}

@media screen and (max-width: 600px) {
  .code-data {
    width: 90%;
  }
  .code-title {
    font-size: 30px;
    text-align: center;
  }
  .github-link {
    font-size: 20px;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 420px) {
  .video {
    width: 364px;
    height: 204px;
  }
}
</style>