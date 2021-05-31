<template>
<Header :pageTitle=pageTitle />
<SideBar :displayedPage=pageTitle />
<section class="capture-content">
  <ImageSlider />
  <PageText :text1=text1 :text2=text2 :text3=text3 :textDesc=textDesc />
  <a href="https://www.instagram.com/aska62bean/" target="_blank" rel="noopener">
    <div class="link-insta">
      <p class="insta-msg">Visity My</p>
      <i class="instagram-icon fa fa-instagram capt-insta" aria-hidden="true"></i>
      <p class="insta-msg">Instagram!</p>
    </div>
  </a>
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
import ImageSlider from '@/components/ImageSlider.vue'
import ToPageTopBtn from '@/components/ToPageTopBtn.vue'

export default {
  name: 'Capture',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm,
    PageText,
    ImageSlider,
    ToPageTopBtn
  },
    data() {
    return {
      pageTitle: "Capture",
      text1: "I am a ",
      text2: "Photographer.",
      text3: "Fun-Loving",
      textDesc: "Ever since I held my first SLR, loving to capture everyday scene into frame.",
    }
  },
}
</script>

<style scoped>

.capture-content {
  width: calc(100vw - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
}
.link-insta {
  background-color: rgba(255, 255, 255, 0);
  width: 120px;
  height: 92px;
  border-radius: 30%;
  font-size: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: 120px;
  top: 18px;
  background: linear-gradient(to right, rgba(201, 66, 66, .9) 30%, rgba(201, 66, 66, .6) 50%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 450%;
  background-position: 100%;
  transition-duration: 1.5s;
  z-index: 5;
}
.link-insta:hover {
  cursor: pointer;
  background-position: 0;
}
.insta-msg {
  font-size: 15px;
  margin: -5px 0 -5px 0;
  padding: 0;
}

@media screen and (max-width: 800px) {
  .capture-content {
    width: 100vw;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .link-insta {
    right: 0;
    top: 30px;
  }
}

@media screen and (min-width: 421px) and (max-width: 600px) {
  .link-insta {
    right: 0;
    top: 20px;
  }
}

@media screen and (max-width: 600px) {
  .link-insta {
    font-size: 50px;
    right: -3%;
  }
  .insta-msg {
    font-size: 12px;
    letter-spacing: -1px;
    margin: -3px 0 -3px 0;
    padding: 0;
  }
}

@media screen and (max-width: 420px) {
  .link-insta {
    right: -8%;
    top: 63vh;
  }
  .insta-msg {
    display: none;
  }
}
</style>