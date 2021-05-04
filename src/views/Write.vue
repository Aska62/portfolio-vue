<template>
  <Header :pageTitle="pageTitle" />
  <PageCover
    :pageCoverTitle="pageCoverTitle"
    :pageCoverText="pageCoverText"
    />
  <section class="write-content">
    <div class="writing-container">
      <div class="icon-box" v-for="image in images" :key="image">
        <ArticleIcon :image=image.image />
      </div>
    </div>
  </section>
  <SideBar :displayedPage=pageTitle />
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
  name: 'Write',
  components: {
    Header,
    Footer,
    SideBar,
    PageCover,
    ArticleIcon
  },
  data() {
    return {
      pageTitle: "Write",
      pageCoverTitle: "Since 2013, magazine and web writing/editing has been my major career.",
      pageCoverText: ["Japanese lifestyle magazine in Singapore", "Web media about Science and Technology", "E-Commerce platform for beauty products", "Travel Magazine and leaflets", "Product review website"],
      images: [],
      clickedImage: ""
    }
  },
  methods: {
    async fetchImages() {
      await axios.get(`http://localhost:5000/writing-images`).then((response) => {
        this.images = response.data;
        console.log(this.images);
      })
    }
  },
  mounted() {
    this.fetchImages()
    console.log('image data fetched')
  }
}
</script>

<style scoped>

.write-content {
  width: 88vw;
  min-width: 800px;
  height: 75vh;
  min-height: 700px;
  z-index: 0;
}

.writing-container {
  width: 700px;
  height: 600px;
  margin: 45px auto 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

.icon-box {
  border-radius: 1%;
  width: 110px;
  height: 90px;
  margin: 5px 10px;
}
</style>