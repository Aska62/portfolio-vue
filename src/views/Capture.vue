<template>
<Header :pageTitle=pageTitle />
<SideBar />
<div class='slider-container'>
  <i class="fa fa-caret-left button btn-left" @click="shiftToLeft"></i>
  <img
    class='image-container'
    v-for="image in images"
    :key="image"
    :id=image.id
    :src=image.image
    v-bind:class="{ left: storeLeft, right: storeRight }"
  >
  <i class="fa fa-caret-right button btn-right" @click="shiftToRight"></i>
</div>
<PageText :text1=text1 :text2=text2 :text3=text3 :textDesc=textDesc />
<Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import PageText from '@/components/PageText.vue'
import axios from 'axios'

export default {
  name: 'Capture',
  components: {
    Header,
    Footer,
    SideBar,
    PageText
  },
  data() {
    return {
      pageTitle: "Capture",
      text1: "I am a ",
      text2: "Photographer.",
      text3: "Fun-Loving",
      textDesc: "Ever since I held my first SLR, loving to capture everyday scene into frame.",
      images: [],
      nextId: 0,
      previousId: 0,
      displayedId: 0,
      storeLeft: false,
      storeRight: true,
      // firstImage: true
    }
  },
  methods: {
    async fetchImages() {
      await axios.get(`http://localhost:5000/capture-images`).then((response) => {
        this.images = response.data;
        this.displayedId = this.images[0].id;
        this.nextId = this.images[1].id;
        this.previousId = this.images[14].id;
        // this.loadInitImg()
        // if(this.$refs.sliderImage.id === 1) {
        //   this.storeLeft = false;
        //   this.storeRight = false;
        // } else {
        //   this.storeLeft = false;
        //   this.storeRight = true;
        // }
      })
    },
    loadInitImg() {
      // this.displayedId = this.images[0].id;
      // this.nextId = this.images[1].id;
      // this.previousId = this.images[14].id;
      // if(this.$refs.sliderImage.id === 1) {
      //   this.storeLeft = false;
      //   this.storeRight = false;
      // } else {
      //   this.storeLeft = false;
      //   this.storeRight = true;
      // }
    }
  },
  mounted() {
    this.fetchImages()
  }
}
</script>

<style scoped>
.slider-container {
  width: 88vw;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.image-container {
  width: 600px;
  max-width: 64vw;
  max-height: 50vh;
  box-shadow: 0px 5px 7px 6px rgba(69, 69, 3,.4);
  transition: all 1s ease-in-out;
}

.button {
  position: fixed;
  top: 350px;
  font-size: 50px;
  color: rgba(102, 102, 23, .3);
  margin: 0 25px;
  transition-duration: .3s;
}

.button:hover {
  cursor: pointer;
  color: rgba(102, 102, 23, .9);
  font-size: 100px;
}

.btn-left {
  left: 70px;
}

.btn-right {
  right: 170px;
}

.right {
  position: fixed;
  right: -2000px;
  opacity: 0;
}

.left {
  position: fixed;
  left: -2000px;
  opacity: 0;
}
</style>