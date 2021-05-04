<template>
<Header :pageTitle="pageTitle"/>
<SideBar />
<section class="contact-content">
  <div class="mail">
    <i class="fa fa-envelope mail-icon"></i>
  </div>
  <div class="form-wrapper">
    <p class="contact-msg">Drop Me a Message!</p>
    <p class="contact-mail">aska.jpg@gmail.com</p>
    <p class="contact-phone">Or call @</p>
    <p class="contact-phone">+81(80)55030532</p>
  </div>
</section>
<Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer,
    SideBar
  },
  data() {
    return {
      pageTitle: "Contact"
    }
  }
}
</script>

<style scoped>
.contact-content {
  width: 88vw;
  min-width: 800px;
  height: 75vh;
  min-height: 700px;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-wrapper {
  width: 70vw;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  align-self: center;
  padding: 5px 2px 5px 2px;
}
.contact-mail {
  font-size: 58px;
  margin-bottom: 25px;
}
.contact-msg {
  font-size: 45px;
}
.contact-phone {
  font-size: 40px;
  margin: 0;
}
.mail {
  width: 70vw;
  height: 420px;
  padding: 0;
  font-size: 700px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mail-icon {
  color:rgba(245, 245, 20, .5);
}
</style>



