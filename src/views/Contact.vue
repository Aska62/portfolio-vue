<template>
<Header :pageTitle="pageTitle"/>
<SideBar :displayedPage=pageTitle />
<section class="contact-content">
  <div class="mail">
    <i class="fa fa-envelope mail-icon"></i>
  </div>
  <div class="mail-sm">
    <i class="fa fa-envelope mail-icon" v-for="n in 100" :key="n"></i>
  </div>
  <div class="form-wrapper">
    <p class="contact-msg">Drop Me a Message!</p>
    <p class="contact-mail">aska.jpg@gmail.com</p>
    <p class="contact-phone">Or call @</p>
    <p class="contact-phone">+81(80)55030532</p>
  </div>
</section>
<MenuBarSm :menuBarDisplayedPage=pageTitle />
<Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'
import MenuBarSm from '@/components/MenuBarSm.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm
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
  width: calc(100vw - 120px);
  height: calc(100vh - 140px);
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.form-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.contact-msg {
  font-size: 45px;
  line-height: 1;
  margin: 0;
}
.contact-mail {
  font-size: 58px;
  line-height: 1;
  margin: 20px auto 40px auto;
  transition-duration: .6s;
}
.contact-mail:hover {
  color: #eb7171;
}

.contact-phone {
  font-size: 40px;
  margin: 0;
  line-height: .9;
}
.mail {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mail-sm {
  width: 100%;
  height: 100%;
  display: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.mail-icon {
  font-size: 600px;
  color:rgba(245, 245, 20, .2);
}
.mail-icon:hover {
  color:rgba(245, 245, 20, .4);
}

@media screen and (max-width: 1200px) {
  .mail {
    display: none;
  }
  .mail-icon {
    font-size: 120px;
    margin: 8px;
  }
  .mail-sm {
    display: flex;
  }
}

@media screen and (max-width: 800px) {
  .contact-content {
    width: 100vw;
  }
  .mail-icon {
    font-size: 90px;
    margin: 5px;
  }
  .form-wrapper {
    width: 90vw;
    height: 200px;
    text-align: center;
    justify-content: space-between;
    position: fixed;
    top: 260px;
  }
  .contact-mail {
    font-size: 28px;
    margin-bottom: 25px;
  }
  .contact-msg {
    font-size: 35px;
  }
  .contact-phone {
    font-size: 20px;
    margin: 0;
  }
}
</style>



