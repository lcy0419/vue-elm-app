<template>
  <div>
    <div class="backgroundImg">
      <div class="pic"></div>

      <svg class="icon" viewBox="0 0 2048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M382.976 526.336a634.88 307.2 0 1 0 1269.76 0 634.88 307.2 0 1 0-1269.76 0Z"
          fill="#dbdbdb"
          p-id="1187"
          data-spm-anchor-id="a313x.7781069.0.i6"
          class="iconPath"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  methods: {
    swiperImg() {
      var pic = document.querySelector(".pic");
      console.log(pic);
      var value = 0;
      setInterval(function() {
        value -= 2.5;
        if (value <= -2.5 * 7) {
          value = 0;
        }
        pic.style.backgroundPositionY = value + "rem";
      }, 600);
    }
  },
  mounted() {
    this.swiperImg();
  }
  // created() {
  //   this.swiperImg();
  // }
};
</script>

<style scoped>
.backgroundImg {
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: 1px solid red; */
}
.pic {
  width: 100%;
  height: 100%;
  background: url("../../assets/loading.png") no-repeat 0 0;
  background-size: 2.5rem auto;
  transform: translateY(0);
  position: relative;
  z-index: 11;
  animation: load 0.6s infinite ease-in-out;
}
.icon {
  position: absolute;
  width: 5rem;
  height: 2rem;
  top: 2.7rem;
  left: -1.2rem;
  z-index: 10;
  animation: icon 0.6s infinite ease-in-out;
}

@keyframes load {
  0% {
    top: -1rem;
  }

  50% {
    top: 1rem;
  }

  100% {
    top: -1rem;
  }
}

@keyframes icon {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>
