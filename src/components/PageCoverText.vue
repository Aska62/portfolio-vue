<template>
  <ul
    class="page-cover-text">
    <li v-for="text in pageCoverText" :key="text">{{ text }}</li>
  </ul>
</template>

<script>
export default {
  name: 'PageCoverText',
  props: {
    pageCoverText: {
      type: Array,
      default: [],
      required: false
    },
  }
}
</script>

<style scoped>
.page-cover-text {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
}
.page-cover-string {
  font-size: 28px;
}

@media screen and (max-width: 420px) {
  .page-cover-text {
    font-size: 24px;
  }

}
</style>