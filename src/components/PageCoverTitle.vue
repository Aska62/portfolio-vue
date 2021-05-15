<template>
  <h1 class="title">{{ pageCoverTitle }}</h1>
</template>

<script>
export default {
  name: 'PageCoverTitle',
  props: {
    pageCoverTitle: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 50px;
}

@media screen and (max-width: 420px) {
  .title {
    font-size: 35px;
    margin: 10px auto;
  }
}
</style>