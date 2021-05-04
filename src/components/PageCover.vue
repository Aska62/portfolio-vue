<template>
  <section class="page-cover" v-bind:class="{ fade: isFading, shrink: hasShrank }" @click="enlargeCover">
    <i class="fa fa-times close-icon2" @click="shrinkCover" v-bind:class="{ hidden: isHidden}"></i>
    <PageCoverTitle :pageCoverTitle="pageCoverTitle" v-bind:class="{ hidden: isHidden}"/>
    <PageCoverText :pageCoverText="pageCoverText" v-bind:class="{ hidden: isHidden}"/>
  </section>
</template>

<script>
import PageCoverTitle from '@/components/PageCoverTitle'
import PageCoverText from '@/components/PageCoverText'

export default {
  name: 'PageCover',
  components: {
    PageCoverTitle,
    PageCoverText
  },
  props: {
    pageCoverTitle: {
      type: String,
      default: '',
      required: true
    },
    pageCoverText: {
      type: Array,
      default: [],
      required: true
    }
  },
  data: function() {
    return {
      isFading: false,
      isHidden: false,
      hasShrank: false,
    }
  },
  methods: {
    hideCover() {
      this.isHidden = true;
    },
    shrinkCover() {
      this.hasShrank = true;
      setTimeout(this.hideCover,200);
    },
    enlargeCover() {
      if (this.isHidden === true) {
        this.hasShrank = false;
        this.isHidden = false;
      }
    }
  }
}
</script>

<style scoped>
.page-cover {
  z-index: 1;
  width: 85vw;
  height: 86vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(212, 212, 193, .9);
  border-radius: 20px;
  margin: 20px;
  box-shadow: 5px 5px 5px #666617;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition-duration: 1.2s;
}

.page-cover:hover {
  background-color: rgba(212, 212, 193, .9);
}

.fade {
  opacity: 0;
}

.hidden {
  display: none;
}

.shrink {
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-color: #666617;
  position: fixed;
  top: 0;
  left: 75%;
}

.close-icon2 {
  width: 83px;
  height: 83px;
  font-size: 80px;
  border-radius: 50%;
  border: 5px solid #666617;
  position: fixed;
  top: 45px;
  right: 220px;
}

.close-icon2:hover {
  cursor: pointer;
  color: rgba(102, 102, 23, .7);
  border: 5px solid rgba(102, 102, 23, .5);
}

.enlarge-btn {
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-color: #666617;
  box-shadow: 5px 5px 5px #666617;
  position: fixed;
  top: 3%;
  right: 18%;
}

</style>
