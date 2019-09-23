<template>
  <div>
    <div class="search_address_page">
      <section>
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
            <span class="title_text">搜索</span>
          </section>
        </header>
        <form @submit.prevent="handleAddress" class="search_form">
          <input v-model="address" type="search" name="search" placeholder="请输入小区/写字楼/学校等" />
          <button>搜索</button>
        </form>
        <ul v-if="alertInfo" class="address_list">
          <li
            @click.prevent="handleResult(result)"
            v-for="(result,index) in showResults"
            :key="index"
          >
            <h4>{{result.name}}</h4>
            <p>{{result.address}}</p>
          </li>
        </ul>
        <div v-if="!alertInfo" class="empty_tips">
          <p>找不到地址？</p>
          <p>尝试输入小区、写字楼或学校名</p>
          <p>详细地址（如门牌号等）可稍后输入哦</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: "",
      cityInfo: {},
      showResults: [],
      alertInfo: false
    };
  },
  methods: {
    handleAddress() {
      this.cityInfo = JSON.parse(localStorage.getItem("nowCity"));
      this.$axios
        .get(
          `/v1/pois?city_id=${this.cityInfo.id}&keyword=${this.address}&type=search`
        )
        .then(res => {
          // console.log(res.data);
          this.showResults = res.data;
          this.alertInfo = true;
        });
    },
    handleResult(result) {
      this.$router.push({
        name: "AddAddress",
        query: { address: result.name }
      });
      this.address = "";
      this.alertInfo = false;
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
.search_address_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 204;
  overflow-y: auto;
  padding-top: 1.95rem;
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
.search_form {
  display: flex;
  padding: 0.7rem;
}
.search_form input {
  font-size: 0.65rem;
  color: #999;
  -ms-flex: 4;
  flex: 4;
  background-color: #f1f1f1;
  margin-right: 0.6rem;
  height: 1.5rem;
  border-radius: 0.15rem;
  padding: 0 0.4rem;
}
.search_form button {
  -ms-flex: 1;
  flex: 1;
  font-size: 0.65rem;
  color: #fff;
  background-color: #3190e8;
  border-radius: 0.15rem;
}
.empty_tips {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.empty_tips p {
  font-size: 0.5rem;
  color: #aaa;
  line-height: 0.7rem;
  text-align: center;
}
.address_list {
  padding: 0.7rem;
}
.address_list li {
  padding: 0.7rem 0;
  border-bottom: 0.025rem solid #f5f5f5;
  line-height: 1rem;
}
.address_list li h4 {
  font-size: 0.75rem;
  color: #555;
}
.address_list li p {
  font-size: 0.65rem;
  color: #999;
}
.search_address_page p,
.search_address_page span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
</style>