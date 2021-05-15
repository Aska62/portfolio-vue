<template>
  <Header :pageTitle=pageTitle />
  <SideBar :displayedPage=pageTitle />
  <PageCover
    :pageCoverTitle="pageCoverTitle"
    :pageCoverText="pageCoverString"
    :page="pageTitle"
  />
  <section class="travel-content">
    <div class="image-container">
      <div class="icon-box" v-for="image in images" :key="image">
        <ArticleIcon :image=image.image :imageDesc=image.location />
      </div>
    </div>
  </section>
  <MenuBarSm :menuBarDisplayedPage=pageTitle />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import MenuBarSm from '@/components/MenuBarSm.vue'
import PageCover from '@/components/PageCover.vue'
import ArticleIcon from '@/components/ArticleIcon.vue'
import axios from 'axios'
import travelImages from '../data/travel_imgs.json'

export default {
  name: 'Travel',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm,
    PageCover,
    ArticleIcon
  },
  data() {
    return {
      pageTitle: "Travel",
      pageCoverTitle: "I have visited 35 countries and areas.",
      pageCoverString: ["Hong Kong, Malaysia, Italy, Vatican, Australia, Czech Republic, France, Switzerland, Uzbekistan, Canada, USA, Mexico, China, Taiwan, Morocco, Turkey, Singapore, Myammar, Indonesia, Cambodia, Thailand, Laos, Vietnam, South Korea, UAE, Austria, Slovenia, Croatia, Bosnia and Herzegovina, Serbia, Hungary, Slovakia, Ethiopia, Nepal, Philippines"],
      images: travelImages
    }
  },
  // methods: {
  //   async fetchImages() {
  //     await axios.get(`https://portfolio-backend-9b834.web.app/travelPics`).then((response) => {
  //       this.images = response.data;
  //     })
  //   }
  // },
  // mounted() {
  //   this.fetchImages()
  // }
}
</script>

<style scoped>
.travel-content {
  width: 88vw;
  min-width: 800px;
  height: 75vh;
  min-height: 700px;
  z-index: 0;
}

.image-container {
  width: 900px;
  /* height: 600px; */
  margin: 45px auto 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}

.icon-box {
  border-radius: 1%;
  width: 100px;
  height: 100px;
  margin: 12px 1px;
  padding: 0;
}

@media screen and (max-width: 420px) {
  .travel-content {
    width: 100vw;
    min-width: 200px;
    height: 70vh;
    min-height: unset;
  }
  .image-container {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .icon-box {
    width: 100px;
    margin: 15px;
  }
  .icon-box:nth-last-of-type(1) {
    padding-bottom: 140px;
  }

}
</style>