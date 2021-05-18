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
  width: 80vw;
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
  z-index: 7;
}

.fade {
  opacity: 0;
}

.hidden {
  display: none;
}

.shrink {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #666617;
  position: fixed;
  margin: 0;
  top: 30px;
  left: 78%;
  opacity: .8;
}

.shrink:hover {
  cursor: pointer;
  opacity: .6;
}

.close-icon2 {
  width: 50px;
  height: 50px;
  font-size: 50px;
  border-radius: 50%;
  border: 3px solid #666617;
  position: absolute;
  top: 40px;
  right: 15%;
}

.close-icon2:hover {
  cursor: pointer;
  color: rgba(102, 102, 23, .7);
  border: 3px solid rgba(102, 102, 23, .5);
}

@media screen and (min-width: 800px) and (max-width: 1200px) {
  .close-icon2 {
    top: 20px;
    right: 20px;
  }
}

@media screen and (min-width: 421px) and (max-width: 800px) {
  .page-cover {
    width: 90vw;
    height: fit-content;
    min-height: 85vh;
  }
  .close-icon2 {
    top: 10px;
    right: 10px;
  }
  .shrink {
    width: 38px;
    height: 38px;
    min-height: unset;
    border-radius: 50%;
    padding: 0;
    position: fixed;
    top: 10px;
    left: 88%;
  }
}

@media screen and (max-width: 600px) {
  .page-cover {
    width: 92%;
    height: fit-content;
    min-height: 77vh;
    padding: 40px 2px;
    box-shadow: none;
  }
  .close-icon2 {
    width: 40px;
    height: 40px;
    font-size: 40px;
  }
  .shrink {
    width: 38px;
    min-height: 38px;
    border-radius: 50%;
    padding: 0;
    position: fixed;
    top: 10px;
    left: 88%;
  }
}
@media screen and (max-width: 420px) {
  .close-icon2 {
    top: 25px;
    right: 18px;
  }
  .shrink {
    left: 88%;
  }
}
</style>
