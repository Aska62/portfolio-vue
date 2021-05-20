<template>
<section>
  <div class="large-article-box" v-bind:class="{ showLargeArticle: showArticle, visible: isVisible }">
    <i class="fa fa-times close-icon" @click="hideArticle"></i>
    <p class="image-desc">{{ imageDesc }}</p>
    <img class="large-article" :id=imageId :src=imageUrl @mouseover="imageZoom" >
    <div v-if="isWritePage" >
      <Zoomer :imageId=imageId ref="zoomer" :lens=lens :resultWindow=resultWindow />
    </div>
  </div>
</section>
</template>

<script>
import Zoomer from '@/components/Zoomer'

export default {
  name: 'LargeArticle',
  components: {
    Zoomer
  },
  props: {
    imageUrl: {
      type: String,
      default: '#'
    },
    imageDesc: {
      type: String,
      default: ''
    },
    imageId: {
      type: String,
      dafault: ''
    },
    currentPage: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showArticle: false,
      isVisible: false,
      isWritePage: false,
      lens: {},
      resultWindow: {}
    }
  },
  methods: {
    changeOpacity() {
      if (this.isVisible === false) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
    changeDisplay() {
      if (this.showArticle === false) {
        this.showArticle = true;
      } else {
        this.showArticle = false;
      }
    },
    hideArticle() {
      this.changeOpacity();
      setTimeout(this.changeDisplay, 800);
    },
    getLens() {
      this.$refs.zoomer.getLens();
    },
    getResultWindow() {
      this.$refs.zoomer.getResultWindow();
    },
    imageZoom() {
      this.$refs.zoomer.imageZoom();
    }
  },
  mounted() {
    if(this.currentPage == "Write") {
      this.isWritePage = true;
    } else {
      this.isWritePage = false;
    }
  }
}
</script>

<style scoped>

.large-article-box{
  display: none;
  opacity: 0;
  width: fit-content;
  max-width: 95vw;
  height: fit-content;
  max-height: 98vh;
  background-color:rgba(255, 255, 189, .9);
  box-shadow: 2px 2px 6px 8px rgba(69, 69, 3,.4);
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 7;
  padding: 60px 0 0 0;
  transition-duration: .8s;
}
.large-article {
  max-width: calc(100vw - 170px);
  max-height: calc(100vh - 150px);
  margin: 5px 40px 15px 40px;
  padding: 0;
  text-align: center;
}

.showLargeArticle {
  display: block;
}

.visible {
  opacity: 1;
}

.close-icon {
  width: 33px;
  height: 33px;
  font-size: 33px;
  border-radius: 50%;
  border: 3px solid #666617;
  position: absolute;
  right: 3px;
  top: 5px;
}

.close-icon:hover {
  cursor: pointer;
  color: rgba(102, 102, 23, .7);
  border: 5px solid rgba(102, 102, 23, .5);
}

.image-desc {
  font-size: 24px;
  line-height: 1;
  margin: 10px 0 0 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 600px) {
  .large-article {
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 80px);
  }
  .close-icon {
    border: 3px solid #666617;
  }

  .close-icon:hover {
    border: 3px solid rgba(102, 102, 23, .5);
  }

  .image-desc {
    font-size: 22px;
    margin-bottom: 10px;
  }
}

</style>