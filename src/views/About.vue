<template>
  <Header :pageTitle="pageTitle" />
  <SideBar :displayedPage=pageTitle />
  <section class="about-content">
    <div class="profile-pic"></div>
    <div class="history-container">
      <div class="hist hist1">
        <p class="year yearD">1986</p>
        <div class="hist-event">
          <div class="h-line lineD"></div>
          <p class="event eventD">Born in Saitama, Japan</p>
        </div>
      </div>
      <div class="hist hist2">
        <p class="year yearB">2000</p>
        <div class="hist-event">
          <div class="h-line line"></div>
          <p class="event eventB">First travel abroad</p>
        </div>
      </div>
      <div class="hist hist3">
        <p class="year yearB">2002</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event yearB">Start photography with SLR</p>
        </div>
      </div>
      <div class="hist hist4">
        <p class="year yearA">2009</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event yearA">Graduate from International Christian University, Tokyo. Bachelor of Liberal Arts</p>
        </div>
      </div>
      <div class="hist hist5">
        <p class="year yearB">2010</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event eventB">Certified as a Japanese Language Teacher<br/>
              Move to Singapore to work as a Japanese teacher</p>
        </div>
      </div>
      <div class="hist hist6">
        <p class="year yearA">2013</p>
        <div class="hist-event">
          <div class="h-line lineA"></div>
          <p class="event eventA">Start writing & editing for a Japanese magazine</p>
        </div>
      </div>
      <div class="hist hist7">
        <p class="year yearB">2015</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event eventB">Move back to Japan. Work for a web media as a writer/ editor/ translator</p>
        </div>
      </div>
      <div class="hist hist8">
        <p class="year yearA">2017</p>
        <div class="hist-event">
          <div class="h-line lineA"></div>
          <p class="event eventA">Move to Bangkok, Thailand to work for an e-commerce as a writer/ editor/ translator</p>
        </div>
      </div>
      <div class="hist hist9">
        <p class="year yearB">2020</p>
        <div class="hist-event">
          <div class="h-line lineB"></div>
          <p class="event eventBS">Start scuba diving. Get certified as an Advanced Open Water Diver</p>
        </div>
      </div>
      <div class="hist hist10">
        <p class="year yearA">2021</p>
        <div class="hist-event">
          <div class="h-line lineA"></div>
          <p class="event eventA">Start coding. Get addicted</p>
        </div>
      </div>
      <div class="hist hist11">
        <p class="year no-year"></p>
        <div class="hist-event">
          <div class="h-line no-line"></div>
          <p class="event eventB">Move back to Japan</p>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    SideBar
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
  width: 88vw;
  min-width: 800px;
  height: 75vh;
  min-height: 700px;
  z-index: 0;
  overflow: scroll;
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
}

.hist {
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

</style>