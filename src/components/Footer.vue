<template>
  <section class="footer">
    <nav class="social-media">
      <a href="https://www.facebook.com/aska.takahashi.10" target="_blank" rel="noopener">
        <div class="icon facebook">
          <i class="facebook-icon fa fa-facebook-official" aria-hidden="true"></i>
        </div>
      </a>
      <a href="https://www.instagram.com/aska62bean" target="_blank" rel="noopener">
        <div class="icon instagram">
          <i class="instagram-icon fa fa-instagram" aria-hidden="true"></i>
        </div>
      </a>
      <a href="https://twitter.com/aska62bean" target="_blank" rel="noopener">
        <div class="icon twitter">
          <i class="twitter-icon fa fa-twitter-square" aria-hidden="true"></i>
        </div>
      </a>
    </nav>
    <div class="footer-box">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  height: 70px;
  width: 100vw;
  background-color: #f5f514;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right:0;
  z-index: 2;
}

.social-media {
  height: 100%;
  display: flex;
  align-items: center;
}

.icon {
  height: 20px;
  width: 38px;
  margin: 6px;
  font-size: 20px;
  color:#666617;
  align-items: center;
  text-align: center;
}

.facebook-icon:hover, .instagram-icon:hover, .twitter-icon:hover {
  cursor: pointer;
  color: #c94242;
  font-size: 24px;
}

.footer-box {
  height: 100%;
  width: 120px;
  background-color: #ffffbd;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 800px) {
  .footer {
    z-index: 5;
  }
  .footer-box {
    display: none;
  }
}
</style>