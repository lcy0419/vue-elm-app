<template>
  <div>
    <div>
      <div class="rating_page">
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
            <span class="title_text">商家详情</span>
          </section>
        </header>
        <section class="activities_container">
          <header>活动与属性</header>
          <ul class="actibities_ul">
            <li v-if="shopMsg.activities">
              <span
                v-if="shopMsg.activities[0].icon_name"
                style="background-color: rgb(240,115,115);"
              >{{shopMsg.activities[0].icon_name}}</span>
              <span v-if="shopMsg.activities[0].description">{{shopMsg.activities[0].description}}</span>
            </li>
          </ul>
          <ul class="actibities_ul">
            <li v-for="(support,index) in shopMsg.supports" :key="index">
              <span style="background-color: rgb(87,169,255);">{{support.icon_name}}</span>
              <span>{{support.description}}</span>
            </li>
          </ul>
        </section>
        <section class="shop_status_container">
          <router-link to="/ShopSafe" class="shop_status_header">
            <span class="shop_detail_title">食品监督安全公示</span>
            <div>
              <span class="identification_detail">企业认证详情</span>
              <svg
                data-v-ca49b092
                width="14"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                class="description_arrow"
              >
                <path
                  data-v-ca49b092
                  d="M0 0 L8 7 L0 14"
                  stroke="#bbb"
                  stroke-width="1.5"
                  fill="none"
                />
              </svg>
            </div>
          </router-link>
          <section class="shop_statu_detail">
            <div>
              <svg data-v-ca49b092 class="shop_status">
                <use
                  data-v-ca49b092
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#res-well"
                >
                  <svg viewBox="0 0 1024 1024" id="res-well">
                    <path
                      fill="#7ED321"
                      fill-rule="evenodd"
                      d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM247.808 402.432c0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-16.384-24.576-52.224-52.224-52.224-27.648 0-52.224 35.84-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48zM512 800.768c-132.096 0-239.616-96.256-239.616-215.04 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 96.256 89.088 174.08 198.656 174.08 109.568 0 198.656-77.824 198.656-174.08 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 117.76-107.52 215.04-239.616 215.04zm243.712-377.856c-11.264 0-20.48-9.216-20.48-20.48 0-17.408-24.576-52.224-52.224-52.224-28.672 0-52.224 34.816-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48z"
                    />
                  </svg>
                </use>
              </svg>
            </div>
            <div class="check_date">
              <p>
                <span>监督检查结果：</span>
                <span class="shop_status_well">良好</span>
              </p>
              <p>
                <span>检查日期：</span>
                <span></span>
              </p>
            </div>
          </section>
        </section>
        <section class="shop_status_info">
          <header>商家信息</header>
          <p>{{shopMsg.name}}</p>
          <p>地址：{{shopMsg.address}}</p>
          <p v-if="shopMsg.opening_hours">营业时间：[{{shopMsg.opening_hours[0]}}]</p>
          <p>
            <span>营业执照</span>
            <svg
              data-v-ca49b092
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              class="description_arrow"
            >
              <path
                data-v-ca49b092
                d="M0 0 L8 7 L0 14"
                stroke="#bbb"
                stroke-width="1.5"
                fill="none"
              />
            </svg>
          </p>
          <p>
            <span>餐饮服务许可证</span>
            <svg
              data-v-ca49b092
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              class="description_arrow"
            >
              <path
                data-v-ca49b092
                d="M0 0 L8 7 L0 14"
                stroke="#bbb"
                stroke-width="1.5"
                fill="none"
              />
            </svg>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getShopMsg(to.query.shopMsg));
  },
  data() {
    return {
      shopMsg: {}
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getShopMsg(shopMsg) {
      this.shopMsg = JSON.parse(shopMsg);
      console.log(this.shopMsg);
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
.loginContainer {
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
.rating_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 1.95rem;
  background-color: #ebebeb;
  z-index: 18;
}
.activities_container {
  background-color: #fff;
  margin: 0.4rem 0;
  padding-bottom: 0.6rem;
}
.activities_container header {
  font-size: 0.75rem;
  color: #333;
  line-height: 1.8rem;
  padding-left: 0.6rem;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 0.3rem;
}
.activities_container .actibities_ul {
  padding: 0.2rem 0.6rem;
}
.activities_container .actibities_ul li {
  margin-bottom: 0.2rem;
  padding: 0.2rem 0;
}
.activities_container .actibities_ul li span:first-of-type {
  font-size: 0.45rem;
  color: #fff;
  padding: 0.1rem;
  border: 1px;
  border-radius: 0.1rem;
  margin-right: 0.2rem;
}
.activities_container .actibities_ul li span:nth-of-type(2) {
  font-size: 0.55rem;
  color: #666;
}
.shop_status_container {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.shop_status_container .shop_status_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.8rem;
  padding: 0 0.6rem;
  border-bottom: 0.025rem solid #f1f1f1;
}
.shop_status_container .shop_status_header .shop_detail_title {
  font-size: 0.75rem;
  color: #333;
}
.shop_status_container .shop_status_header .identification_detail {
  font-size: 0.7rem;
  color: #bbb;
  vertical-align: middle;
}
.shop_status_container .shop_status_header svg {
  width: 0.6rem;
  height: 0.6rem;
  vertical-align: middle;
}
.shop_status_container .shop_statu_detail {
  display: flex;
  padding: 0.6rem;
}
.shop_status_container .shop_statu_detail svg {
  width: 2rem;
  height: 2rem;
  margin-right: 0.6rem;
}
.shop_status_container .shop_statu_detail .check_date span {
  font-size: 0.55rem;
  color: #666;
}
.shop_status_container .shop_statu_detail .check_date .shop_status_well {
  color: #7ed321;
}
.shop_status_info {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.shop_status_info header {
  line-height: 1.8rem;
  padding: 0 0.6rem;
  font-size: 0.75rem;
  color: #333;
  border-bottom: 0.025rem solid #f1f1f1;
}
.shop_status_info p {
  font-size: 0.6rem;
  color: #666;
  padding: 0.7rem 0.6rem 0.7rem 0;
  margin-left: 0.6rem;
  border-bottom: 0.025rem solid #f5f5f5;
}
.shop_status_info p:nth-of-type(4),
.shop_status_info p:nth-of-type(5) {
  display: flex;
  justify-content: space-between;
}
.shop_status_info span {
  color: #666;
}
</style>