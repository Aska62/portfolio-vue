<template>
  <section
  class="page-cover"
  v-bind:class="{ fade: isFading, shrink: hasShrank, pageCoverInitLoad: isInitLoad }"
  @click="enlargeCover">
    <div class="close-icon" @click="shrinkCover" v-bind:class="{ hidden: isHidden}">
      <div class="close-icon__left" v-bind:class="{ hidden: isHidden}"></div>
      <div class="close-icon__right" v-bind:class="{ hidden: isHidden}"></div>
    </div>
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
      isInitLoad: true,
    }
  },
  methods: {
    hideCover() {
      this.isHidden = true;
      this.isInvisible = true;
    },
    shrinkCover() {
      this.isInvisible = true;
      this.hasShrank = true;
      const body = document.querySelector(".body");
      body.classList.remove("body-fixed");
      setTimeout(this.hideCover,200);
      console.log(body.classList);
    },
    enlargeCover() {
      if (this.isHidden === true) {
        const body = document.querySelector(".body");
        console.log(body);
        body.classList.add("body-fixed");
        this.hasShrank = false;
        this.isHidden = false;
        this.isInvisible = false;
        console.log(body.classList)
      }
    },
    loadCover() {
      const body = document.querySelector(".body");
      if (this.isInitLoad === true) {
        console.log('this is the initial load')
        body.classList.add("body-fixed");
        setTimeout(() => {
          this.isInitLoad = false;
        }, 2000);
      }
    }
  }
}
</script>

<style scoped>
.page-cover {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(232, 232, 232, .95);
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

.invisible {
  display: none;
}

.shrink {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(102, 102, 23, .5);
  box-shadow: unset;
  position: fixed;
  margin: 0;
  top: 30px;
  left: 78%;
}

.pageCoverInitLoad {
  animation: loadCover .5s ease-in forwards;
  -webkit-animation: loadCover .5s ease-in forwards;
  -moz-animation: loadCover .5s ease-in forwards;
  -o-animation: loadCover .5s ease-in forwards;
  -ms-animation: loadCover .5s ease-in forwards;
}

.shrink:hover {
  cursor: pointer;
  background-color: rgba(102, 102, 23, .8);
}

.close-icon {
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: 4%;
  right: 5%;
  transition-duration: 0.3s;
}

.close-icon:hover {
  cursor: pointer;
  opacity: .6;
}

.close-icon__left {
  width: 8%;
  height: 80%;
  background-color: #666617;
  position: absolute;
  left: 0;
  top: 0;
  transform: skew(-45deg, 45deg);
}

.close-icon__right {
  width: 8%;
  height: 80%;
  background-color: #666617;
  position: absolute;
  left: 0;
  top: 0;
  transform: skew(45deg, -45deg);
}

.body-fixed {
  height: 100vh;
  overflow: hidden;
}

.btn-disabled {
  pointer-events: none;
}

@keyframes loadCover {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes loadCover {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes loadCover {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes loadCover {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes loadCover {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@media screen and (min-width: 421px) and (max-width: 800px) {
  .shrink {
    width: 30px;
    height: 30px;
    min-height: unset;
    border-radius: 50%;
    padding: 0;
    position: fixed;
    top: 10px;
    left: 88%;
  }
}

@media screen and (max-width: 600px) {
  .shrink {
    width: 30px;
    height: 30px;
    padding: 0;
    position: fixed;
    top: 10px;
    left: 88%;
  }
}
</style>
