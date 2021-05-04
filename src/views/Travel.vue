<template>
  <Header :pageTitle=pageTitle />
  <SideBar />
  <PageCover
    :pageCoverTitle="pageCoverTitle"
    :pageCoverText="pageCoverString"
  />
  <section class="travel-content">
    <div class="image-container">
      <div class="icon-box" v-for="image in images" :key="image">
        <ArticleIcon :image=image.image :imageDesc=image.location />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import PageCover from '@/components/PageCover.vue'
import ArticleIcon from '@/components/ArticleIcon.vue'
import axios from 'axios'

export default {
  name: 'Travel',
  components: {
    Header,
    Footer,
    SideBar,
    PageCover,
    ArticleIcon
  },
  data() {
    return {
      pageTitle: "Travel",
      pageCoverTitle: "I have visited 35 countries and areas.",
      pageCoverString: ["Hong Kong, Malaysia, Italy, Vatican, Australia, Czech Republic, France, Switzerland, Uzbekistan, Canada, USA, Mexico, China, Taiwan, Morocco, Turkey, Singapore, Myammar, Indonesia, Cambodia, Thailand, Laos, Vietnam, South Korea, UAE, Austria, Slovenia, Croatia, Bosnia and Herzegovina, Serbia, Hungary, Slovakia, Ethiopia, Nepal, Philippines"],
      images: []
    }
  },
  methods: {
    async fetchImages() {
      await axios.get(`http://localhost:5000/travel-images`).then((response) => {
        this.images = response.data;
      })
    }
  },
  mounted() {
    this.fetchImages()
  }
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
</style>