<template>
  <div class="article-icon"
    v-on:mouseover="showCover"
    v-on:mouseout="hideCover"
    v-bind:class="{ loadImg: imageLoaded }"
    :style="{ 'backgroundImage': `url(${image})` }"
    @click="displayArticle"
  >
    <ArticleIconCover ref="cover" />
  </div>
  <LargeArticle
    :imageUrl="imageUrl"
    :imageDesc="imageDesc"
    :imageId="imageId"
    :currentPage="currentPage"
    class="large-article"
    ref="largeArticle"
  />
</template>

<script>
import ArticleIconCover from '@/components/ArticleIconCover'
import LargeArticle from '@/components/LargeArticle'

export default {
  name: 'ArticleIcon',
  components: {
    ArticleIconCover,
    LargeArticle
  },
  data() {
    return {
      imageUrl: "",
      imageDesc: "",
      imageLoaded: true,
    }
  },
  props: {
    image: {
      type: URL,
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
  methods: {
    showCover() {
      this.$refs.cover.showCover();
    },
    hideCover() {
      this.$refs.cover.hideCover();
    },
    displayArticle() {
      this.changeDisplay();
      setTimeout(this.changeOpacity, 100);
    },
    changeOpacity() {
      this.$refs.largeArticle.changeOpacity();
    },
    changeDisplay() {
      this.$refs.largeArticle.changeDisplay();
    }
  },
  mounted() {
    this.imageUrl = this.image
  }
}
</script>

<style scoped>
  .article-icon {
    width: 120%;
    height: 120%;
    background-size: 200px;
    background-position: center;
    box-shadow: 1px 1px 3px 2px rgba(69, 69, 3,.4);
  }

  .article-icon:hover {
    cursor: pointer;
  }

  .loadImg {
    background-image: url(`${this.image}`);
  }

</style>
