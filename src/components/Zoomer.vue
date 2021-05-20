<template>
  <div class="zoom-lens" width="40px"></div>
  <div id="myresult" class="img-zoom-result"></div>
</template>

<script>
export default {
  name: 'Zoomer',
  data() {
    return {
      imageId: this.imageId,
      lens:{},
      result:{}
    }
  },
  props: {
    imageId: {
      type: String,
      dafault: ''
    },
    // lens: {
    //   type: Object
    // },
    // resultWindow: {
    //   type: Object
    // }
  },
  methods: {
    imageZoom() {
      console.log(`image zoom of id ${this.imageId} called!`)
      var img, lens, result, cx, cy;
      img = document.getElementById(this.imageId);
      console.log(`img width is ${img.width}`);
      console.log(`img height is ${img.height}`);
      lens = this.lens;
      result = this.result;
      console.log(`result is ${result}`);
      console.log(`result width is ${this.result.style.offsetWidth}`);
      /* Calculate the ratio between result DIV and lens: */
      cx = result.offsetWidth / lens.offsetWidth;
      cy = result.offsetHeight / lens.offsetHeight;

      /* Set background properties for the result DIV */
      result.style.backgroundImage = "url('" + img.src + "')";
      result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
      /* Execute a function when someone moves the cursor over the image, or the lens: */
      lens.addEventListener("mousemove", moveLens);
      img.addEventListener("mousemove", moveLens);
      /* And also for touch screens: */
      lens.addEventListener("touchmove", moveLens);
      img.addEventListener("touchmove", moveLens);

      function moveLens(e) {
        var pos, x, y, rx, ry;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        /* Calculate the position of the lens: */
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);

        /* Prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) {
          x = img.width - lens.offsetWidth;
          result.style.left = "0px";
        } else if (x < 0) {
          x = 0;
          result.style.left = "0px";
        }
        if (y > img.height - lens.offsetHeight) {
          y = img.height - lens.offsetHeight;
          result.style.top = "0px";
        } else if (y < 0) {
          y = 0;
          result.style.top = "0px";
        }
        /* Set the position of the lens: */
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /* Display what the lens "sees": */
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";

        // Set the position of the result box
        if (pos.x > img.width || pos.x < 0) {
          result.style.left = "0px";
        } else if (pos.x > (img.width / 2) && pos.x <= img.width) {
          rx = pos.x - 210;
        } else {
          rx = pos.x + 10;
        };

        if (pos.y > img.height || pos.y < 0) {
          result.style.top = "0px";
        } else if (pos.y > (img.height / 2) && pos.y <= img.height) {
          ry = pos.y - 210;
        } else {
          ry = pos.y + 10;
        }

        result.style.left = `${rx}px`;
        result.style.top = `${ry}px`;
      }

      function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;

        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();

        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
      }
    }
  },
  mounted() {
    const lensInfo = document.querySelector(".zoom-lens");
    // console.log(`lens info is ${lensInfo}`);
    this.lens = lensInfo;
    const resultWindow = document.querySelector("#myresult");
    this.resultWindow = resultWindow;
    // console.log(lensInfo.clientWidth);
    // console.log(resultWindow)
  }
}
</script>

<style scoped>
.zoom-lens {
  position: absolute;
  border: 1px solid #d4d4d4;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.img-zoom-result {
  border: 1px solid #d4d4d4;
  /*set the size of the result div:*/
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: fixed;
  bottom: 0;
  left: 0;
}

</style>