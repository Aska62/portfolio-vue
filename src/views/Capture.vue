<template>
<Header :pageTitle=pageTitle />
<SideBar :displayedPage=pageTitle />
<div class='slider-container'>
  <i class="fa fa-caret-left button btn-left" @click="shiftToLeft"></i>
  <img
    class='image-container'
    v-for="image in images"
    :key="image"
    :id=image.id
    :src=image.image
  >
  <i class="fa fa-caret-right button btn-right" @click="shiftToRight"></i>
</div>
<PageText :text1=text1 :text2=text2 :text3=text3 :textDesc=textDesc />
<a href="https://www.instagram.com/aska62bean/" target="_blank" rel="noopener">
  <div class="link-insta">
    <p class="insta-msg">Visity My</p>
    <i class="instagram-icon fa fa-instagram capt-insta" aria-hidden="true"></i>
    <p class="insta-msg">Instagram!</p>
  </div>
</a>
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
      storeRight: false,
    }
  },
  methods: {
    async loadImages() {
      await this.fetchImages().then(()=> {
        this.displayInitImgs();
      })
    },
    async fetchImages() {
      await axios.get(`https://portfolio-backend-9b834.web.app/photographs`).then((response) => {
        this.images = response.data;
        this.displayedId = this.images[0].id;
        this.nextId = this.images[1].id;
        this.previousId = this.images[14].id;
      })
    },
    displayInitImgs() {
      const sliderImgs = document.querySelectorAll('.image-container');
      for(let i=0; i<sliderImgs.length; i++) {
        if(sliderImgs[i].id != 1) {
          sliderImgs[i].classList.add("right");
        }
      }
    },
    shiftToRight() {
      let allImgs = document.querySelectorAll('.image-container');
      let displayedImg = document.getElementById(`${this.displayedId}`);
      let nextImg = document.getElementById(`${this.nextId}`);
      // move displayed image to left
      displayedImg.classList.add("left");
      this.previousId = this.displayedId;
      // display next image
      // if the displayed image is the last, move the first image from left
      if(this.displayedId == 15) {
        for(let i=0; i<allImgs.length; i++) {
          allImgs[i].classList.remove("left");
          allImgs[i].classList.add("right");
        }
        this.displayedId = 1;
      } else {
        this.displayedId++;
      }
      nextImg.classList.remove("right");
      // set the next image
      // if the next image is the last, assign the first image to the next
      if(this.nextId == this.images.length) {
        this.nextId = 1;
      } else {
        this.nextId++;
      }
      console.log(`next id is ${this.nextId}`)
    },
    shiftToLeft() {
      let allImgs = document.querySelectorAll('.image-container');
      let displayedImg = document.getElementById(`${this.displayedId}`);
      let previousImg = document.getElementById(`${this.previousId}`);
      // move displayed image to right
      displayedImg.classList.add("right");
      this.nextId = this.displayedId;
      // display previous image
      // if the displayed image is the last, move the last image from right
      previousImg.classList.remove("right");
      if(this.previousId == 1) {
        this.displayedId = this.previousId;
        this.previousId = allImgs.length;
      } else {
        this.displayedId = this.previousId;
        this.previousId--;
      }
    }
  },
  mounted() {
    this.loadImages()
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

.link-insta {
  background-color: rgba(255, 255, 255, 0);
  width: 120px;
  height: 92px;
  border-radius: 30%;
  font-size: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 12vw;
  top: 60vh;
  color: rgba(201, 66, 66, .9);
  z-index: 5;
}
.link-insta:hover {
  cursor: pointer;
  font-size: 80px;
  color: rgba(201, 66, 66, 1);
  background-color:rgba(255, 255, 255, .5);
}
.insta-msg {
  font-size: 15px;
  margin: -5px 0 -5px 0;
  padding: 0;
}
</style>