<template>
  <section class="page-cover" v-bind:class="{ fade: isFading, shrink: hasShrank }" @click="enlargeCover">
    <i class="fa fa-times close-icon2" @click="shrinkCover" v-bind:class="{ hidden: isHidden}"></i>
    <PageCoverTitle
      :pageCoverTitle="pageCoverTitle"
      v-bind:class="{ hidden: isHidden}"/>
    <PageCoverText
      :pageCoverText="pageCoverText"
      :page="page"
      v-bind:class="{ hidden: isHidden}"/>
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
    },
    page: {
      type: String,
      default: '',
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
  z-index: 2;
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

@media screen and (max-width: 420px) {
  .page-cover {
    z-index: 5;
    width: 92%;
    height: fit-content;
    padding: 40px 2px;
    box-shadow: none;
  }
  .close-icon2 {
    width: 40px;
    height: 40px;
    font-size: 40px;
    border: 3px solid #666617;
    top: 25px;
    right: 18px;
  }
  .close-icon2:hover {
    border: 3px solid rgba(102, 102, 23, .5);
  }
  .shrink {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    padding: 0;
    position: fixed;
    top: 0;
    left: 83%;
    opacity: .8;
  }
  .shrink:hover {
    cursor: pointer;
    opacity: .6;
  }
}
</style>
