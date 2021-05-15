<template>
<section>
  <div class="large-article-box" v-bind:class="{ showLargeArticle: showArticle }">
    <i class="fa fa-times close-icon" @click="hideArticle"></i>
    <p class="image-desc">{{ imageDesc }}</p>
    <img class="large-article" :src=imageUrl>
  </div>
</section>
</template>

<script>
export default {
  name: 'LargeArticle',
  props: {
    imageUrl: {
      type: URL,
      default: '#'
    },
    imageDesc: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      showArticle: false,
    }
  },
  methods: {
    displayArticle() {
      this.showArticle = true;
    },
    hideArticle() {
      this.showArticle = false;
    }
  }
}
</script>

<style scoped>

.large-article-box{
  display: none;
  width: fit-content;
  max-width: 800px;
  background-color:rgba(255, 255, 189, .9);
  box-shadow: 2px 2px 6px 8px rgba(69, 69, 3,.4);
  border-radius: 8px;
  position: fixed;
  top: 90px;
  left: 7%;
  z-index: 6;
}
.large-article {
  max-width: 700px;
  max-height: 700px;
  margin: 5px 40px 15px 40px;
  padding: 0;
  text-align: center;
  z-index: 4;
  /* left: 800px; */
}

.showLargeArticle {
  display: block;
}

.close-icon {
  width: 33px;
  height: 33px;
  font-size: 33px;
  border-radius: 50%;
  border: 3px solid #666617;
  position: absolute;
  right: 3px;
  top: 3px;
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
}

@media screen and (max-width: 420px) {
  .large-article-box{
    max-width: 95vw;
    top: 20px;
    left: 10px;
  }
  .large-article {
    max-width: 95%;
    max-height: 700px;
    margin: 0 20px 5px 10px;
    text-align: center;
  }

  .close-icon {
    border: 3px solid #666617;
  }

  .close-icon:hover {
    cursor: pointer;
    color: rgba(102, 102, 23, .7);
    border: 3px solid rgba(102, 102, 23, .5);
  }

  .image-desc {
    font-size: 22px;
    margin-bottom: 10px;
  }
}

</style>