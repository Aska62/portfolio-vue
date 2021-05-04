<template>
  <Header :pageTitle=pageTitle />
  <SideBar />
  <section class="dive-content">
    <div class="dive-vid-container">
      <iframe class="video" src="https://youtube.com/embed/V8UJM5Ttflo" control></iframe>
    </div>
    <PageText :text1=text1 :text2=text2 :text3=text3 :text4=text4 :textDesc=textDesc />
  </section>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import PageText from '@/components/PageText.vue'

export default {
  name: 'Dive',
  components: {
    Header,
    Footer,
    SideBar,
    PageText
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
  width: 88vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}

.dive-vid-container {
  margin-top: 18px;
}

.video {
  width: 672px;
  height: 378px;
  border: 0;
  outline: 0;
  box-shadow: 0px 5px 7px 6px rgba(69, 69, 3,.4);
}

</style>