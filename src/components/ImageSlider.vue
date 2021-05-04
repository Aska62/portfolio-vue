<template>
<div class='slider-container'>
  <i class="fa fa-caret-left button btn-left" @click="shiftToLeft"></i>
  <img
    class='image-container'
    v-bind:class="{ left: storeLeft, right: storeRight }"
    v-for="image in images"
    :key="image"
    :src=image.image
    :id=image.id
  >
  <i class="fa fa-caret-right button btn-right" @click="shiftToRight"></i>
</div>
</template>

<script>
export default {
  name: 'ImageSlider',
  data() {
    return {
      nextId: 0,
      previousId: 0,
      displayedId: 0,
      storeLeft: false,
      storeRight: false,
    }
  },
  props: {
    images: {
      type: Array,
      default: []
    }
  },
  methods: {
    loadImages() {
      this.displayedId = 1;
      this.nextId = 2;
      this.previousId = 0;
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
  opacity: 1;
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