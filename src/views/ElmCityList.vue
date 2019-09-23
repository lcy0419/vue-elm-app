<template>
  <div>
    <header id="head_top">
      <span class="head_logo">ele.me</span>
      <router-link v-if="showLogin" to="/login" class="head_login">登录|注册</router-link>
      <router-link v-if="!showLogin" to="/My" class="head_login">
        <svg data-v-cec0c0c0 class="user_avatar">
          <use data-v-cec0c0c0 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user">
            <svg viewBox="0 0 28 33" id="user">
              <path
                fill-rule="evenodd"
                d="M20.798 19.289c2.636-2.002 4.215-5.091 4.215-8.437 0-5.886-4.845-10.647-10.808-10.647S3.397 4.966 3.397 10.852c0 3.345 1.578 6.433 4.212 8.435l.264-2.678C4.358 18.32 1.591 21.403.168 25.187l1.478.556v-1.579c-1.485.73-1.485.73-1.501 1.079-.054.188-.054.188-.069.278a2.58 2.58 0 0 0-.026.229 9.112 9.112 0 0 0-.019.4c-.008.265-.014.617-.018 1.039-.005.511-.006 1.037-.006 1.451v.027c-.004 1.732 1.41 3.129 3.154 3.129h22.082a3.18 3.18 0 0 0 3.172-3.153l.011-1.305.008-.897.003-.296.001-.083v-.022-.006-.001l.002-.278-.093-.262c-1.385-3.918-4.203-7.122-7.812-8.88l.263 2.678zm-1.911-2.516l-2.045 1.553 2.309 1.125c2.856 1.392 5.106 3.949 6.218 7.093l-.09-.54V26.033l-.001.083-.003.296-.008.897-.011 1.305c0 .01-.011.021-.013.021H3.161c-.007 0 .005.011.005.032v-.031c0-.404.001-.92.006-1.418.004-.4.01-.732.017-.969.004-.121.008-.212.012-.262l-.006.043c-.009.06-.009.06-.058.229-.01.336-.01.336-1.49 1.063H2.74l.385-1.024c1.141-3.035 3.35-5.495 6.131-6.849l2.309-1.124-2.045-1.554c-1.859-1.412-2.964-3.576-2.964-5.92 0-4.129 3.418-7.488 7.649-7.488s7.649 3.359 7.649 7.488c0 2.344-1.106 4.509-2.966 5.921z"
                class="path1"
              />
            </svg>
          </use>
        </svg>
      </router-link>
    </header>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市:</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="{name:'city',params:{nowCity:guessCity}}" class="guess_city">
        <span>{{guessCity.name}}</span>
        <svg data-v-3ea254f4 class="arrow_right">
          <use
            data-v-3ea254f4
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#arrow-right"
          >
            <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon">
              <path
                d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                class="selected"
              />
            </svg>
          </use>
        </svg>
      </router-link>
    </nav>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <li v-for="(hotCity,index) in hotCitys" :key="index">
          <router-link
            :to="{name:'city',params:{nowCity:hotCity}}"
            class="route-hotCity"
          >{{hotCity.name}}</router-link>
        </li>
      </ul>
    </section>
    <section class="group_city_container">
      <ul class="letter_classify">
        <li v-for="(groupCity,index) in newCity" :key="index" class="letter_classify_li">
          <h4 class="city_title">
            {{index}}
            <span v-if="index == 'A'">(按字母顺序)</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <li class="ellipsis" v-for="(city,index) in groupCity" :key="index">
              <router-link :to="{name:'city',params:{nowCity:city}}">{{city.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  // beforeRouteEnter(to, from, next) {
  //   if (from.name == "login") {
  //     next(vm => vm.changeLogin());
  //   } else {
  //     next();
  //   }
  // },
  data() {
    return {
      guessCity: {},
      hotCitys: [],
      groupCitys: {},
      newCity: {},
      cityIndex: 65,
      showLogin: true
    };
  },
  created() {
    this.getGuessCity();
    this.getHotCity();
    this.getGroupCity();
    this.getUser();
  },
  methods: {
    changeLogin() {
      this.showLogin = false;
    },
    getGuessCity() {
      this.$axios.get("/v1/cities?type=guess").then(res => {
        this.guessCity = res.data;
      });
    },
    getHotCity() {
      this.$axios.get("/v1/cities?type=hot").then(res => {
        this.hotCitys = res.data;
      });
    },
    getGroupCity() {
      this.$axios.get("/v1/cities?type=group").then(res => {
        // console.log(res.data);
        this.groupCitys = res.data;
        while (this.cityIndex < 91) {
          if (
            this.cityIndex != 73 &&
            this.cityIndex != 79 &&
            this.cityIndex != 85 &&
            this.cityIndex != 86
          )
            this.newCity[String.fromCharCode(this.cityIndex)] =
              res.data[String.fromCharCode(this.cityIndex)];
          this.cityIndex++;
        }
        // console.log(this.newCity);
      });
    },
    getUser() {
      if (localStorage.getItem("user")) {
        this.changeLogin();
      }
    }
  }
};
</script>

<style scoped>
a,
article,
aside,
b,
body,
button,
dd,
div,
dl,
dt,
figcaption,
figure,
footer,
h1,
h2,
h3,
h4,
h5,
h6,
header,
input,
li,
nav,
p,
section,
select,
span,
textarea,
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.clear {
  zoom: 1;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}
.head_logo {
  font-weight: 400;
  color: #fff;
  font-size: 0.7rem;
  width: 2.3rem;
  height: 0.7rem;
  position: absolute;
  left: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
}
.head_login {
  position: absolute;
  right: 0.55rem;
  font-size: 0.65rem;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
}
.city_nav {
  padding-top: 2.35rem;
  border-top: 1px solid #e4e4e4;
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.city_nav .city_tip {
  display: flex;
  justify-content: space-between;
  line-height: 1.45rem;
  padding: 0 0.45rem;
}
.city_nav .city_tip span:first-of-type {
  font-size: 0.55rem;
  color: #666;
}
.city_nav .city_tip span:nth-of-type(2) {
  font-size: 0.475rem;
  color: #9f9f9f;
  font-weight: 900;
}
.city_nav .guess_city {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.8rem;
  padding: 0 0.45rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
  font: 0.75rem/1.8rem Microsoft YaHei;
}
.city_nav .guess_city span:first-of-type {
  color: #3190e8;
}
.city_nav .guess_city .arrow_right {
  width: 0.6rem;
  height: 0.6rem;
  fill: #999;
}
#hot_city_container {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.city_title {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font: 0.55rem/1.45rem Helvetica Neue;
}
.citylistul li {
  float: left;
  text-align: center;
  color: #3190e8;
  border-bottom: 0.025rem solid #e4e4e4;
  border-right: 0.025rem solid #e4e4e4;
  width: 25%;
  height: 1.75rem;
  font: 0.6rem/1.75rem Microsoft YaHei;
}
.citylistul li .route-hotCity {
  color: #3190e8;
  font: 0.6rem/1.75rem Microsoft YaHei;
}
.letter_classify_li {
  margin-bottom: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.letter_classify_li .groupcity_name_container li {
  color: #666;
}
.city_title span {
  font-size: 0.475rem;
  color: #999;
}
.head_login .user_avatar {
  fill: #fff;
  width: 0.8rem;
  height: 0.8rem;
}
</style>