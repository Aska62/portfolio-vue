<template>
  <Header :pageTitle="pageTitle" />
  <PageCover
    :pageCoverTitle="pageCoverTitle"
    :pageCoverText="pageCoverText"
    />
  <section class="write-content">
    <div class="writing-container">
      <div class="icon-box" v-for="image in images" :key="image">
        <ArticleIcon :image=image.image :imageId=image.id :currentPage=pageTitle />
      </div>
    </div>
  </section>
  <ToPageTopBtn />
  <SideBar :displayedPage=pageTitle />
  <MenuBarSm :menuBarDisplayedPage=pageTitle />
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import MenuBarSm from '@/components/MenuBarSm.vue'
import PageCover from '@/components/PageCover.vue'
import ArticleIcon from '@/components/ArticleIcon.vue'
import axios from 'axios'
import articlesData from "../data/articles.json"
import ToPageTopBtn from '@/components/ToPageTopBtn.vue'

export default {
  name: 'Write',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm,
    PageCover,
    ArticleIcon,
    ToPageTopBtn
  },
  data() {
    return {
      pageTitle: "Write",
      pageCoverTitle: "Since 2013, magazine and web writing/editing has been my major career.",
      pageCoverText: ["Japanese lifestyle magazine in Singapore", "Web media about Science and Technology", "E-Commerce platform for beauty products", "Travel Magazine and leaflets", "Product review website"],
      images: articlesData,
      clickedImage: ""
    }
  },
  // methods: {
  //   async fetchImages() {
  //     await axios.get(`https://portfolio-backend-9b834.web.app/articles`).then((response) => {
  //       this.images = response.data;
  //       console.log(this.images);
  //     })
  //   }
  // },
  // mounted() {
  //   this.fetchImages()
  //   console.log('image data fetched')
  // }
}
</script>

<style scoped>

.write-content {
  width: calc(100vw - 120px);
  z-index: 0;
}

.writing-container {
  width: 700px;
  height: 600px;
  margin: 45px auto 120px auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

.icon-box {
  border-radius: 1%;
  width: 110px;
  height: 90px;
  margin: 5px 10px;
}

@media screen and (min-width: 801px) and (max-width: 900px) {
  .writing-container {
    width: 680px;
    height: fit-content;
  }
  .icon-box {
    width: 105px;
    margin: 3px;
  }
}

@media screen and (max-width: 800px) {
  .write-content {
    width: 100vw;
  }
  .writing-container {
    width: 95%;
    height: fit-content;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .icon-box {
    width: 105px;
    margin: 15px;
  }
}

@media screen and (min-width: 421px) and (max-width: 600px) {
  .icon-box {
    width: 105px;
    margin: 13px;
  }
}

@media screen and (max-width: 420px) {
  .icon-box {
    width: 100px;
    margin: 15px;
  }
}

</style>