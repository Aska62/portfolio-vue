<template>
  <Header :pageTitle="pageTitle" />
  <SideBar :displayedPage=pageTitle class="side-bar"/>
  <section class="about-content">
    <div class="profile-pic"></div>
    <div class="history-container">
      <div class="hist">
        <p class="year yearD">1986</p>
        <div class="hist-event">
          <div class="h-line lineD"></div>
          <p class="event eventD">Born in Saitama, Japan</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearB">2000</p>
        <div class="hist-event">
          <div class="h-line line"></div>
          <p class="event eventB">First travel abroad</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearB">2002</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event yearB">Start photography with SLR</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearA">2009</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event yearA">Graduate from International Christian University, Tokyo. Bachelor of Liberal Arts</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearB">2010</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event eventB">Certified as a Japanese Language Teacher<br/>
              Move to Singapore to work as a Japanese teacher</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearA">2013</p>
        <div class="hist-event">
          <div class="h-line lineA"></div>
          <p class="event eventA">Start writing & editing for a Japanese magazine</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearB">2015</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event eventB">Move back to Japan. Work for a web media as a writer/ editor/ translator</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearA">2017</p>
        <div class="hist-event">
          <div class="h-line lineA"></div>
          <p class="event eventA">Move to Bangkok, Thailand to work for an e-commerce as a writer/ editor/ translator</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearB">2020</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event eventBS">Start scuba diving. Get certified as an Advanced Open Water Diver</p>
        </div>
      </div>
      <div class="hist">
        <p class="year yearA">2021</p>
        <div class="hist-event">
          <div class="h-line lineA"></div>
          <p class="event eventA">Start coding. Get addicted</p>
        </div>
      </div>
      <div class="hist">
        <p class="year no-year"></p>
        <div class="hist-event">
          <div class="h-line no-line"></div>
          <p class="event eventB">Move back to Japan</p>
        </div>
      </div>
    </div>
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
import ToPageTopBtn from '@/components/ToPageTopBtn.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    SideBar,
    MenuBarSm,
    ToPageTopBtn
  },
  data() {
    return {
      pageTitle: "About"
    }
  }
}
</script>

<style scoped>
.about-content {
  width: calc(100vw - 120px);
  min-width: 800px;
  z-index: 0;
}

.profile-pic {
  background-image: url("https://i.imgur.com/0lslr5j.jpg");
  background-size: 800px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-position-x: 505px;
  background-position-y: -240px;
  position: absolute;
  right: 15vw;
  top: 10vh;
  z-index: 1;
}

.history-container {
  width: 80%;
  max-width: 1000px;
  margin: 20px auto 0 auto;
  background: linear-gradient(to bottom, rgba(102, 102, 23, 1)50%,  rgba(102, 102, 23, 0)51%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100% 800vh;
  background-position-y: 100%;
  opacity: 0;
  animation: content-load 3s ease-in-out forwards;
  -webkit-animation: content-load 3s ease-in-out forwards;
  -moz-animation: content-load 3s ease-in-out forwards;
  -o-animation: content-load 3s ease-in-out forwards;
  -ms-animation: content-load 3s ease-in-out forwards;
}

.hist {
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.hist:nth-last-of-type(1) {
  margin-bottom: 78px;
}

.year {
  width: 50px;
  height: 50px;
  margin: 0;
}

.hist-event {
  width: 90%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-left: 1px solid #666617;
}

.h-line {
  width: 30px;
  height: 1px;
  background-color: #666617;
  margin: 8px 10px 0 0;
}

.lineB {
  height: 2px;
}

.event {
  width: 80%;
  max-width: 800px;
  height: fit-content;
  min-height: 50px;
  margin: 0 0 15px 0;
  padding: 0;
  font-size: 18px;
}

.eventA {
  font-size: 35px;
}

.eventB {
  font-size: 28px;
}

.eventC {
  font-size: 25px;
}

@keyframes content-load {
  0% {
    background-position-y: -800vh;
  }
  50% {
    background-position-y: -400vh;
    opacity: .3;
  }
  100% {
    background-position-y: 0;
    opacity: 1;
  }
}

@-webkit-keyframes content-load {
  0% {
    background-position-y: -800vh;
  }
  50% {
    background-position-y: -400vh;
    opacity: .3;
  }
  100% {
    background-position-y: 0;
    opacity: 1;
  }
}

@-moz-keyframes content-load {
  0% {
    background-position-y: -800vh;
  }
  50% {
    background-position-y: -400vh;
    opacity: .3;
  }
  100% {
    background-position-y: 0;
    opacity: 1;
  }
}

@-o-keyframes content-load {
  0% {
    background-position-y: -800vh;
  }
  50% {
    background-position-y: -400vh;
    opacity: .3;
  }
  100% {
    background-position-y: 0;
    opacity: 1;
  }
}

@-ms-keyframes content-load {
  0% {
    background-position-y: -800vh;
  }
  50% {
    background-position-y: -400vh;
    opacity: .3;
  }
  100% {
    background-position-y: 0;
    opacity: 1;
  }
}

@media screen and (min-width: 601px) and (max-width: 800px) {
  .about-content {
    width: 100vw;
    min-width: 600px;
    margin: 0 auto;
  }
  .profile-pic {
    background-size: 650px;
    width: 130px;
    height: 130px;
    background-position-x: 413px;
    background-position-y: -197px;
    right: 3%;
    top: 3%;
  }
}

@media screen and (max-width: 600px) {
  .about-content {
    width: 100vw;
    min-width: 200px;
    max-width: 600px;
    z-index: 0;
  }
  .profile-pic {
    margin: 20px auto;
    background-size: 600px;
    width: 120px;
    height: 120px;
    background-position-x: 380px;
    background-position-y: -190px;
    position: unset;
  }
}

@media screen and (max-width: 420px) {
  .history-container {
    width: 90%;
    max-width: 400px;
    margin: 20px auto 70px auto;
  }
  .eventA {
    font-size: 30px;
  }

  .eventB {
      font-size: 23px;
  }

  .eventC {
      font-size: 20px;
  }
}

</style>