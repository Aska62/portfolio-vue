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
  width: calc(100% - 120px);
  min-width: 800px;
  height: 75vh;
  min-height: 700px;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.form-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
}
.contact-mail {
  font-size: 58px;
  margin-bottom: 25px;
  transition-duration: .6s;
}
.contact-mail:hover {
  color: #eb7171;
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
.mail-sm {
  display: none;
}
.mail-icon {
  color:rgba(245, 245, 20, .5);
}

@media screen and (max-width: 800px) {
  .form-wrapper {
    margin: 0;
  }
}

@media screen and (min-width: 801px) and (max-width: 1200px) {
  .mail {
    display: none;
  }
  .mail-sm {
    width: 100%;
    height: 77vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .mail-icon {
    font-size: 120px;
    margin: 8px;
    color:rgba(245, 245, 20, .2);
  }
  .mail-icon:hover {
    color:rgba(245, 245, 20, .4);
  }
}

@media screen and (max-width: 800px) {
  .contact-content {
    width: 100vw;
    min-width: 200px;
    height: 75vh;
    min-height: 300px;
    margin: 0 auto;
  }
  .mail {
    display: none;
  }
  .mail-sm {
    width: 100vw;
    height: 77vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .mail-icon {
    font-size: 90px;
    margin: 5px;
    color:rgba(245, 245, 20, .2);
  }
  .mail-icon:hover {
    color:rgba(245, 245, 20, .4);
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



