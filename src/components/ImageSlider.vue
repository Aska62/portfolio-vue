<template>
<div class="slider-container">
  <div
    class='image-box'
    v-bind:class="{ left: storeLeft, right: storeRight }"
    v-for="image in images"
    :key="image"
    :style="{ backgroundImage: `url(' ${image.image}')`}"
    :id=image.id>
  </div>
  <div class="btn btn-left" @click="shiftToRight">
    <div class="btn__line btn-left__line_top">
    </div>
    <div class="btn__line btn-left__line_bottom"></div>
  </div>
  <div class="btn btn-right" @click="shiftToLeft">
    <div class="btn__line btn-right__line_top"></div>
    <div class="btn__line btn-right__line_bottom"></div>
  </div>
  <div class="marker-container">
    <div
      class='marker'
      v-for="image in images"
      :key="image"
      :id="`marker${image.id}`"
      @click="jumpToClickedImage(image.id)">
    </div>
  </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import captureImages from '../data/capture_imgs.json'

export default {
  name: 'ImageSlider',
  data() {
    return {
      images: captureImages,
      nextImgId: 0,
      currentImgId: 0,
      previousImgId: 0,
      storeLeft: false,
      storeRight: false,
      initialLoad: true,
      imageShifted: true,
      sliderContainer: {},
      markerContainer: {},
      clickedMarkerId: 0,
    }
  },
  methods: {
    shiftToLeft() {
      // Shift shown image to left
      let newPreviousImg = document.getElementById(this.currentImgId);
      newPreviousImg.classList.remove("current");
      newPreviousImg.classList.add("left");
      // Bring previous image to right
      let oldPreviousImg = document.getElementById(this.previousImgId);
      oldPreviousImg.classList.add("right");
      oldPreviousImg.classList.remove("left");
      // Show the next image
      let newCurrentImg = document.getElementById(this.nextImgId);
      newCurrentImg.classList.remove("right");
      newCurrentImg.classList.add("current");
      // Set the new next image
      let newNextImgId;
      if (this.nextImgId == this.images.length) {
        newNextImgId = 1;
      } else {
        newNextImgId = parseInt(this.nextImgId) + 1;
      };
      let allRightImgs = document.querySelectorAll(".right");
      let allLeftImgs = document.querySelectorAll(".left");
      if(allRightImgs.length === 0) {
        allLeftImgs.forEach(img => {
          img.classList.remove("left");
          img.classList.add("right");
        });
      };
      // Update ids
      this.previousImgId = newPreviousImg.id;
      this.currentImgId = newCurrentImg.id;
      this.nextImgId = newNextImgId;
      // Update markers
      this.changeMarker();
      this.imageShifted = true;
    },
    shiftToRight() {
      // Shift shown image to right
      let newPreviousImg = document.getElementById(this.currentImgId);
      newPreviousImg.classList.remove("current");
      newPreviousImg.classList.add("right");

      // Bring the last image in right side to left. assign previous img
      let oldLastRightImg;
      let oldLastRightImgId;
      if (this.previousImgId == 1) {
        oldLastRightImgId = this.images.length;
      } else {
        oldLastRightImgId = this.previousImgId - 1;
      };
      oldLastRightImg = document.getElementById(oldLastRightImgId);
      oldLastRightImg.classList.remove("right");
      oldLastRightImg.classList.add("left");

      // Show the previous image
      let newCurrentImg = document.getElementById(this.previousImgId);

      newCurrentImg.classList.remove("left");
      newCurrentImg.classList.add("current");

      // Set the new previous image
      let newNextImgId = this.currentImgId;

      // Update ids
      this.previousImgId = oldLastRightImg.id;
      this.currentImgId = newCurrentImg.id;
      this.nextImgId = newNextImgId;

      // Update marker
      this.changeMarker();

      this.imageShifted = true;
    },
    jumpToClickedImage(id) {
      let allImgs = document.querySelectorAll(".image-box");
      // let markerId = marker.id;
      allImgs.forEach(img => {
      // Set images in right position
        if(id == img.id) {
          img.classList.add("current");
          img.classList.remove("left");
          img.classList.remove("right");
          this.currentImgId = img.id;
          if(img.id == 5) {
            this.nextImgId = 1;
          } else {
            this.nextImgId = parseInt(img.id) + 1;
          };
          if(img.id == 1) {
            this.previousImgId = 5;
          } else {
            this.previousImgId = parseInt(img.id) - 1;
          };
          // if the image is before the clicked one, set it to left
        } else if ((id == parseInt(img.id) + 1) || (id == 1 && img.id == 5)) {
          img.classList.add("left");
          img.classList.remove("current");
          img.classList.remove("right");
        } else {
          img.classList.add("right");
          img.classList.remove("current");
          img.classList.remove("left");
        };
      });
      this.changeMarker();
      this.imageShifted = true;
    },
    // Function to change marker color
    changeMarker() {
      let markers = document.querySelectorAll('.marker');
      markers.forEach(marker => {
        if (marker.id == `marker${this.currentImgId}`) {
          marker.classList.add('current-marker');
        } else {
          marker.classList.remove("current-marker");
        };
      })
    },
  },
  mounted() {
    this.sliderContainer = document.querySelector(".slider-container");
    this.markerContainer = document.querySelector(".marker-container");
    const loadedImgs = document.querySelectorAll(".image-box");
    loadedImgs.forEach(img => {
      if (img.id == 1) {
        img.classList.add("current");
      } else if (img.id == this.images.length) {
        img.classList.add("left");
      } else {
        img.classList.add("right");
      };
      this.currentImgId = 1;
      this.nextImgId = 2;
      this.previousImgId = this.images.length;

      // Load dot
      this.changeMarker();
    });
    setInterval(() => {
      if (this.imageShifted === true) {
        this.imageChanged = false,
        this.shiftToLeft();
        this.imageShifted = true;
      }
    }, 7000)
  }
}
</script>

<style scoped>
.slider-container {
  width: calc(95vw - 120px);
  max-width: 950px;
  height: calc(73vw - 120px);
  max-height: 730px;
  margin: 50px auto;
  overflow: hidden;
  box-shadow: 0px 5px 7px 6px rgba(69, 69, 3, .4);
  position: relative;
}

@media screen and (max-width: 800px) {
  .slider-container {
    width: 95vw;
    height: 73vw;
    margin-top: 30px;
  }
}

.image-box {
  width: 100%;
  height: 100%;
  background-size: 120%;
  background-position: center;
  opacity: 1;
  transition: left right;
  transition-duration: 1.5s;
  transition-timing-function: ease-in-out;
  z-index: 0;
  position: absolute;
  left: 0;
}

.right {
  left: 100%;
  opacity: 0;
  transition: left right;
  transition-duration: 1s;
}

.left {
  left: -100%;
  opacity: 0;
  transition: left right;
  transition-duration: 1s;
}

.btn {
  width: 5%;
  height: 10%;
  position: absolute;
  top: 50%;
  opacity: 0.3;
  transform: opacity background-color;
  transition-duration: .5s;
}

.btn:hover {
  opacity: .6;
  cursor: pointer;
}

.btn-left {
  left: 0;
  z-index: 1;
  transform: translateY(-50%);
}

.btn-right {
  right: 0;
  z-index: 1;
  transform: translateY(-50%);
}

.btn__line {
  width: 23%;
  height: 50%;
  background-color: #666617;
  position: absolute;
}

.btn-left__line_top {
  transform: skewX(-45deg);
  left: 50%;
}

.btn-left__line_bottom {
  transform: skewX(45deg);
  left: 50%;
  top: 50%;
}

.btn-right__line_top {
  transform: skewX(45deg);
  right: 50%;
}

.btn-right__line_bottom {
  transform: skewX(-45deg);
  right: 50%;
  top: 50%;
}
.marker-container {
  width: 100%;
  height: 5%;
  opacity: .5;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.marker {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: white;
  opacity: .5;
  margin: 3px;
  transition-duration: .7s;
}

.marker:hover {
  height: 15px;
  width: 15px;
  opacity: .9;
  cursor: pointer;
}

.current-marker {
  height: 15px;
  width: 15px;
  background-color: #666617;
  opacity: .9;
}
</style>