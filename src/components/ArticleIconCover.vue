<template>
<div class="article-icon-cover" v-bind:class="{ coverVisible: coverVisible }"></div>
</template>

<script>
export default {
  name: "ArticleIconCover",
  data: function() {
    return {
      coverVisible: false
    }
  },
  methods: {
    showCover() {
      this.coverVisible = true;
    },
    hideCover() {
      this.coverVisible = false;
    }
  }
}
</script>

<style scoped>
.article-icon-cover {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .6);
  display: none;
  transition-duration: 0.3s;
}
.coverVisible {
  display: block;
}
</style>