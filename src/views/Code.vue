<template>
  <Header :pageTitle="pageTitle" />
  <PageCover
    :pageCoverTitle="pageCoverTitle"
    :pageCoverText="pageCoverText" />
  <section class="code-content">
    <div class="code-data" v-for="data in videosData" :key="data">
      <p class="code-title">{{ data.name }}</p>
      <iframe class="video" :src="data.video" control></iframe>
      <a class="github-link" :href="data.link" target="_blank" rel="noopener">View Code on GitHub</a>
    </div>
  </section>
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
import axios from 'axios'
import videosData from "../data/videos.json"

export default {
  name: 'Code',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm,
    PageCover
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
  width: 88vw;
  z-index: 0;
}

.code-content:hover{
  cursor: pointer;
}

.code-data {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0 auto;
}

.code-title {
  font-size: 58px;
  margin: 5px 0 8px 0;
}

.code-title:hover{
  color: red;
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
  font-size: 28px;
  color:#666617;
  text-decoration: none;
  margin: 9px 0 130px 0;
}

.github-link:hover {
  cursor: pointer;
  color: #eb7171;
  font-size: 45px;
  transition-duration: .4s;
}

@media screen and (max-width: 420px) {
  .code-data {
    margin: 50px auto 40px auto;
    width: 90%;
  }
  .code-data:nth-last-of-type(1) {
    margin-bottom: 160px;
  }
  .code-title {
    font-size: 30px;
    text-align: center;
  }
  .video {
    width: 90%;
    height: 90%;
  }
  .github-link {
    font-size: 20px;
    margin-bottom: 0;
  }
}
</style>