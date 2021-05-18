<template>
<Header :pageTitle=pageTitle />
<SideBar :displayedPage=pageTitle />
<section class="capture-content">
  <div class='slider-container'>
    <i class="fa fa-caret-left button btn-left" @click="shiftToLeft"></i>
    <img
      class='image-container right'
      v-for="image in images"
      :key="image"
      :id=image.id
      :src=image.image
      @load="displayInitImgs"
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
</section>
<MenuBarSm :menuBarDisplayedPage=pageTitle />
<Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import MenuBarSm from '@/components/MenuBarSm.vue'
import PageText from '@/components/PageText.vue'
import axios from 'axios'
import captureImages from '../data/capture_imgs.json'

export default {
  name: 'Capture',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm,
    PageText
  },
  data() {
    return {
      pageTitle: "Capture",
      text1: "I am a ",
      text2: "Photographer.",
      text3: "Fun-Loving",
      textDesc: "Ever since I held my first SLR, loving to capture everyday scene into frame.",
      images: captureImages,
      nextId: 0,
      previousId: 0,
      displayedId: 0,
      storeLeft: false,
      storeRight: false,
      initialRoad: true,
    }
  },
  methods: {
    // async loadImages() {
      // await this.fetchImages().then(()=> {
      //   this.displayInitImgs();
      // })
    //   displayInitImgs();
    // },
    // async fetchImages() {
    //   await axios.get(`https://portfolio-backend-9b834.web.app/photographs`).then((response) => {
    //     this.images = response.data;
    //     this.displayedId = this.images[0].id;
    //     this.nextId = this.images[1].id;
    //     this.previousId = this.images[14].id;
    //   })
    // },
    displayInitImgs() {
      const sliderImgs = document.querySelectorAll('.image-container');
      if(this.initialRoad === true){
        for(let i=0; i<sliderImgs.length; i++) {
          if(sliderImgs[i].id == 1) {
            sliderImgs[i].classList.remove("right");
            this.displayedId = 1;
            this.nextId = 2;
            this.previousId = sliderImgs.length;
            this.initialRoad = false;
          }
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
      if(this.displayedId == this.images.length) {
        for(let i=0; i<this.images.length; i++) {
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
    },
    shiftToLeft() {
      let allImgs = document.querySelectorAll('.image-container');
      let displayedImg = document.getElementById(`${this.displayedId}`);
      let previousImg = document.getElementById(`${this.previousId}`);
      // move displayed image to right
      displayedImg.classList.add("right");
      this.nextId = this.displayedId;
      // display previous image
      // if the displayed image is the first, move the last image from right
      if(this.displayedId == 1) {
        for(let i=0; i<this.images.length; i++) {
          allImgs[i].classList.remove("right");
          allImgs[i].classList.add("left");
        }
        this.displayedId = this.images.length;
      } else {
        this.displayedId--;
      }
      previousImg.classList.remove("left");
      // set the previous image
      // if the previous image is the last, assign the first image to the previous
      if(this.previousId == 1) {
        this.previousId = this.images.length;
      } else {
        this.previousId--;
      }
    }
  },
  mounted () {
    setInterval(this.shiftToRight, 7000);
  }
}
</script>

<style scoped>
.capture-content {
  width: calc(100vw - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 78px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.slider-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  position: relative;
}

.image-container {
  width: 600px;
  max-width: 64vw;
  max-height: 50vh;
  box-shadow: 0px 5px 7px 6px rgba(69, 69, 3,.4);
  transition: all 1s ease-in-out;
}

.button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 80px;
  color: rgba(102, 102, 23, .3);
  transition-duration: .3s;
}

.button:hover {
  cursor: pointer;
  color: rgba(102, 102, 23, .9);
  font-size: 100px;
}

.btn-left {
  left: 15%;
  transform: translateX(-85%);
}

.btn-right {
  right: 15%;
  transform: translateX(85%);
}

.right {
  position: absolute;
  right: -2000px;
  opacity: 0;
}

.left {
  position: absolute;
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
  position: fixed;
  right: 120px;
  top: 18px;
  color: rgba(201, 66, 66, .9);
  z-index: 5;
}
.link-insta:hover {
  cursor: pointer;
  font-size: 70px;
  color: rgba(201, 66, 66, .6);
  background-color:rgba(255, 255, 255, .5);
}
.insta-msg {
  font-size: 15px;
  margin: -5px 0 -5px 0;
  padding: 0;
}

@media screen and (min-width: 801px) and (max-width: 1100px) {
  .btn-left {
    left: 10%;
    transform: translateX(-90%);
  }
  .btn-right {
    right: 10%;
    transform: translateX(90%);
  }
}

@media screen and (max-width: 800px) {
  .capture-content {
    width: 100vw;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .link-insta {
    right: 0;
    top: 30px;
  }
}

@media screen and (min-width: 421px) and (max-width: 600px) {
  .link-insta {
    right: 0;
    top: 120px;
  }
}

@media screen and (max-width: 600px) {
  .slider-container {
    margin: 60px auto 20px auto;
  }
  .button {
    font-size: 50px;
    transition-duration: .3s;
  }
  .button:hover {
    font-size: 55px;
  }
  .link-insta {
    font-size: 50px;
    right: -3%;
  }
  .insta-msg {
    font-size: 12px;
    letter-spacing: -1px;
    margin: -3px 0 -3px 0;
    padding: 0;
  }
}

@media screen and (max-width: 420px) {
  .link-insta {
    right: -8%;
    top: unset;
    bottom: 30px;
  }
  .insta-msg {
    display: none;
  }
}
</style>