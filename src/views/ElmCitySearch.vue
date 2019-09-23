<template>
  <div>
    <div class="city_container">
      <header id="head_top">
        <section @click.prevent="goBack" class="head_goback">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline
              points="12,18 4,9 12,0"
              style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2;"
            />
          </svg>
        </section>
        <section class="title_head ellipsis">
          <span class="title_text">{{nowCity.name}}</span>
        </section>
        <router-link @click.native="reset" to="/" class="change_city">切换城市</router-link>
      </header>
      <form @submit.prevent="handleSearch" class="city_form">
        <div>
          <input
            v-model="inputAddress"
            type="search"
            name="city"
            placeholder="输入学校、商务楼、地址"
            required="required"
            class="city_input input_style"
          />
        </div>
        <div>
          <input type="submit" name="submit" value="提交" class="city_submit input_style" />
        </div>
      </form>
      <header class="pois_search_history">搜索历史</header>
      <ul v-if="!showHistory" class="getpois_ul">
        <li
          @click.prevent="handleAddress(result)"
          v-for="(result,index) in searchResults"
          :key="index"
        >
          <h4 class="pois_name ellipsis">{{result.name}}</h4>
          <p class="pois_address ellipsis">{{result.address}}</p>
        </li>
      </ul>
      <ul v-if="showHistory" class="getpois_ul">
        <li
          @click.prevent="handleAddressH(result)"
          v-for="(result,index) in historyResults"
          :key="index"
        >
          <h4 class="pois_name ellipsis">{{result.name}}</h4>
          <p class="pois_address ellipsis">{{result.address}}</p>
        </li>
      </ul>
      <footer @click.prevent="clearAll" v-if="showHistory" class="clear_all_history">清空所有</footer>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getNowCity(to.params.nowCity));
  },
  data() {
    return {
      inputAddress: "",
      searchResults: {},
      nowCity: {},
      historyResults: [],
      showHistory: false
    };
  },
  methods: {
    getNowCity(nowCity) {
      if (localStorage.getItem("nowCity")) {
        this.nowCity = JSON.parse(localStorage.getItem("nowCity"));
      } else {
        this.nowCity = nowCity;

        localStorage.setItem("nowCity", JSON.stringify(nowCity));
      }

      if (localStorage.getItem("historyResults")) {
        // console.log(JSON.parse(localStorage.getItem("historyResults")));
        this.historyResults = JSON.parse(
          localStorage.getItem("historyResults")
        );
        this.showHistory = true;
      }
    },
    handleSearch() {
      this.showHistory = false;
      this.$axios
        .get(
          `/v1/pois?city_id=${this.nowCity.id}&keyword=${this.inputAddress}&type=search`
        )
        .then(res => {
          // console.log(res.data);
          this.searchResults = res.data;
        });
    },
    goBack() {
      localStorage.removeItem("nowCity");
      this.inputAddress = "";
      this.searchResults = {};
      this.$router.go(-1);
    },
    reset() {
      // localStorage.removeItem("nowCity");
      this.inputAddress = "";
      this.searchResults = {};
    },
    handleAddress(result) {
      if (localStorage.getItem("historyResults")) {
        this.historyResults = JSON.parse(
          localStorage.getItem("historyResults")
        );
        for (let key in this.historyResults) {
          if (this.historyResults[key] == result) {
            return;
          }
        }
        this.historyResults.push(result);
        localStorage.setItem(
          "historyResults",
          JSON.stringify(this.historyResults)
        );
      } else {
        this.historyResults.push(result);
        localStorage.setItem(
          "historyResults",
          JSON.stringify(this.historyResults)
        );
      }
      this.reset();
      this.$router.push({ name: "ShopList", params: { cityMessage: result } });
    },
    handleAddressH(result) {
      this.reset();
      this.$router.push({ name: "ShopList", params: { cityMessage: result } });
    },
    clearAll() {
      localStorage.removeItem("historyResults");
      this.showHistory = false;
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
.city_container {
  padding-top: 2.35rem;
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
.head_goback {
  left: 0.4rem;
  width: 0.6rem;
  height: 1rem;
  line-height: 2.2rem;
  margin-left: 0.4rem;
}
.title_head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.title_head .title_text {
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
}
.change_city {
  right: 0.4rem;
  font-size: 0.6rem;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.city_form {
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding-top: 0.4rem;
}
.city_form div {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.city_form div .city_input {
  border: 1px solid #e4e4e4;
  padding: 0 0.3rem;
  font-size: 0.65rem;
  color: #333;
}
.city_form div .input_style {
  border-radius: 0.1rem;
  margin-bottom: 0.4rem;
  width: 100%;
  height: 1.4rem;
}
.city_form div .city_submit {
  background-color: #3190e8;
  font-size: 0.65rem;
  color: #fff;
}
.pois_search_history {
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding-left: 0.5rem;
  font: 0.475rem/0.8rem Microsoft YaHei;
}
.getpois_ul li {
  margin: 0 auto;
  padding-top: 0.65rem;
  border-bottom: 1px solid #e4e4e4;
}
.getpois_ul li .pois_name {
  margin: 0 auto 0.35rem;
  width: 90%;
  font-size: 0.65rem;
  color: #333;
}
.getpois_ul li .pois_address {
  width: 90%;
  margin: 0 auto 0.55rem;
  font-size: 0.45rem;
  color: #999;
}
.clear_all_history {
  font-size: 0.7rem;
  color: #666;
  text-align: center;
  line-height: 2rem;
  background-color: #fff;
}
</style>