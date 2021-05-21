<template>
  <div class="btn-container">
    <div class="arrow">
      <div class="arrow-top"></div>
      <div class="arrow-bottom"></div>
    </div>
    <p class="btn-letter">TOP</p>
    <div class="page-top-btn"></div>
    <a href="#page-top"><div class="page-top-btn-cover"></div></a>
  </div>
</template>

<script>
export default {
  name: 'ToPageTopBtn'
}

</script>

<style scoped>
.btn-container {
  width: 80px;
  height: 80px;
  position: fixed;
  right: 125px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-top-btn {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(201, 66, 66, 1);
  text-align: center;
  z-index: 1;
}

.page-top-btn-cover {
  width: 61px;
  height: 61px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, .5);
  z-index: 5;
  transition-duration: .7s;
}

.page-top-btn-cover:hover {
  background-color: rgba(255, 255, 255, .2);
}

.btn-letter {
  color: rgba(255, 255, 255, .9);
  margin: 0;
  line-height: 60px;
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -42%);
  z-index: 2;
}
.arrow {
  width: 120px;
  height: 120px;
  position: relative;
  opacity: .8;
  margin-top: 60px;
  z-index: 2;
}
.arrow-top {
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%, -95%) rotate(45deg);
}
.arrow-bottom {
  width: 35px;
  height: 35px;
  background-color: rgba(201, 66, 66, 1);
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -95%) rotate(45deg);
  z-index: 3;
}

@media screen and (max-width: 800px) {
  .btn-container {
    right: 8px;
  }
}


</style>