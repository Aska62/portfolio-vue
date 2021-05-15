<template>
<div class="text-container">
  <p class="text1">{{ text1 }}</p>
  <p class="text3">{{ text3 }}</p>
  <p class="text2">{{ text2 }}</p>
  <p class="text4">{{ text4 }}</p>
</div>
<div class="text-desc">
  <p>{{ textDesc }}</p>
</div>
</template>

<script>
export default {
  name: 'PageText',
  props: {
    text1: {
      type: String,
      default: '',
      required: true
    },
    text2: {
      type: String,
      default: '',
      required: true
    },
    text3: {
      type: String,
      default: '',
      required: true
    },
    text4: {
      type: String,
      default: '',
      required: false
    },
    textDesc: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style>
.text-container {
  width: 78%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  color:#8c8c23;
  margin-top: 5px;
}

.text1 {
  font-size: 38px;
  line-height: 1;
  margin: 0;
}

.text2 {
  font-size: 52px;
  line-height: 1;
  margin: 0;
}

.text3, .text4 {
  font-size: 68px;
  line-height: 1;
  margin: 0;
  padding: 0 15px;
}

.text-desc {
  width: 80%;
  font-size: 30px;
  text-align: center;
  color:#8c8c23;
  padding: 0;
  line-height: 1.2;
}

@media screen and (max-width: 420px) {
  .text1 {
    font-size: 28px;
  }
  .text2 {
    font-size: 42px;
  }
  .text3, .text4 {
    font-size: 58px;
  }
  .text-desc {
    font-size: 20px;
  }
}

</style>