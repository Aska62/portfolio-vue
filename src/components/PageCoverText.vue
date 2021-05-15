<template>
  <ul
    class="page-cover-text">
    <li
      v-for="text in pageCoverText"
      :key="text"
      v-bind:class="{travel: isTravel}">
      {{ text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PageCoverText',
  data() {
    return {
      isTravel: false
    }
  },
  props: {
    pageCoverText: {
      type: Array,
      default: [],
      required: false
    },
    page: {
      type: String,
      default: '',
      required: true
    }
  },
  mounted() {
    if (this.page == "Travel") {
      this.isTravel = true;
    }
  }
}
</script>

<style scoped>
.page-cover-text {
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  overflow: scroll;
}

@media screen and (max-width: 420px) {
  .page-cover-text {
    font-size: 23px;
  }
  .travel {
    font-size: 20px;
  }
}
</style>