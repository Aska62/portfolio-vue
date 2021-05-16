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

@media screen and (min-width: 421px) and (max-width: 600px) {
  .title {
    font-size: 38px;
    margin: 18px auto;
  }
}

@media screen and (max-width: 420px) {
  .title {
    font-size: 32px;
    margin: 10px auto;
  }
}
</style>