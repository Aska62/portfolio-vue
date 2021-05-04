<template>
<section>
  <div class="large-article-box" v-bind:class="{ showLargeArticle: showArticle }">
    <i class="fa fa-times close-icon" @click="hideArticle"></i>
    <img class="large-article" :src=imageUrl>
    <p>{{ imageDesc }}</p>
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
  left: 25%;
}
.large-article {
  max-width: 700px;
  /* height: 90%; */
  max-height: 700px;
  margin: 50px 40px 40px 40px;
  padding: 0;
  text-align: center;
  z-index: 10;
  left: 800px;
}

.showLargeArticle {
  display: block;
}

.close-icon {
  width: 33px;
  height: 33px;
  font-size: 33px;
  border-radius: 50%;
  border: 5px solid #666617;
  position: absolute;
  right: 6px;
  top: 6px;
}

.close-icon:hover {
  cursor: pointer;
  color: rgba(102, 102, 23, .7);
  border: 5px solid rgba(102, 102, 23, .5);
}

</style>