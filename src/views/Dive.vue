<template>
  <Header :pageTitle=pageTitle />
  <SideBar :displayedPage=pageTitle />
  <section class="dive-content">
    <div class="dive-vid-container">
      <iframe class="video" src="https://youtube.com/embed/V8UJM5Ttflo" control></iframe>
    </div>
    <PageText :text1=text1 :text2=text2 :text3=text3 :text4=text4 :textDesc=textDesc />
  </section>
  <ToPageTopBtn />
  <MenuBarSm :menuBarDisplayedPage=pageTitle />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import MenuBarSm from '@/components/MenuBarSm.vue'
import PageText from '@/components/PageText.vue'
import ToPageTopBtn from '@/components/ToPageTopBtn.vue'

export default {
  name: 'Dive',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm,
    PageText,
    ToPageTopBtn
  },
  data() {
    return {
      pageTitle: "Dive",
      text1: "I am an",
      text2: "Open Water",
      text3: "Advanced",
      text4: "Diver.",
      textDesc: "Going underwater is a beautiful experience where we learn to be calm, be aware of our breath, and let ourselves be. Each dive let us find something new."
    }
  }
}

</script>

<style scoped>
.dive-content {
  width: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 78px;
  overflow: scroll;
}

.dive-vid-container {
  margin: 18px auto 0 auto;
}

.video {
  width: 672px;
  height: 378px;
  border: 0;
  outline: 0;
  box-shadow: 0px 5px 7px 6px rgba(69, 69, 3,.4);
}

@media screen and (max-width: 800px) {
  .dive-content {
    width: 100vw;
  }
  .dive-content {
    margin: 0 auto;
  }
}

@media screen and (min-width: 601px) and (max-width: 720px) {
  .video {
    width: 591px;
    height: 332px;
  }
}

@media screen and (max-width: 600px) {
  .dive-vid-container {
    width: fit-content;
    height: fit-content;
    margin: 40px auto 20px auto;
  }
}

@media screen and (min-width: 421px) and (max-width: 600px) {
  .video {
    width: 414px;
    height: 233px;
  }
}

@media screen and (max-width: 420px) {
  .video {
    width: 100vw;
    height: 56.28vw;
  }
}

</style>