<template>
  <div>
    <div class="safe_shop">
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
          <span class="title_text">食品监督安全公示</span>
        </section>
      </header>
      <section id="scroll_section" class="scroll_container">
        <section
          style="transition-duration: 0ms;tranform:translate(0px,0px) translateZ(0px);transition-timing-function: cubic-bezier(0.165,0.84,0.44,1);"
        >
          <section class="shop_status_container">
            <header>食品监督安全公示</header>
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
          <section class="shop_status_container">
            <header>
              <span>工商登记信息</span>
            </header>
            <ul>
              <li>
                <p>企业名称</p>
                <p></p>
              </li>
              <li>
                <p>工商执照注册号</p>
                <p></p>
              </li>
              <li>
                <p>注册资本</p>
                <p></p>
              </li>
              <li>
                <p>注册地址</p>
                <p></p>
              </li>
              <li>
                <p>属地监管所</p>
                <p></p>
              </li>
              <li>
                <p>法定代表人</p>
                <p></p>
              </li>
              <li>
                <p>经营范围</p>
                <p></p>
              </li>
            </ul>
          </section>
          <section class="shop_status_container">
            <header>
              <span>餐饮许可证</span>
            </header>
            <ul>
              <li>
                <p>营业范围</p>
                <p></p>
              </li>
              <li>
                <p>许可证有效期</p>
                <p></p>
              </li>
              <li>
                <p>许可证号</p>
                <p></p>
              </li>
              <li>
                <p>发证时间</p>
                <p></p>
              </li>
              <li>
                <p>发证机关</p>
                <p></p>
              </li>
            </ul>
          </section>
          <section class="license_img shop_status_container">
            <header>许可证书</header>
            <div class="img_container">
              <img src="//elm.cangdu.org/img/default.jpg" />
            </div>
          </section>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
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
.safe_shop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 1.95rem;
  background-color: #ebebeb;
  z-index: 102;
}
.scroll_container {
  width: 100%;
  height: 100%;
}
.shop_status_container {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.shop_status_container header {
  line-height: 1.8rem;
  padding: 0 0.6rem;
  border-bottom: 0.025rem solid #f1f1f1;
  font-size: 0.75rem;
  color: #333;
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
ul {
  margin-left: 1rem;
  padding: 0.4rem 0;
}
ul li {
  margin-bottom: 0.4rem;
}
ul li p {
  line-height: 1rem;
}
ul li p:first-of-type {
  font-size: 0.55rem;
  color: #333;
}
ul li p:nth-of-type(2) {
  font-size: 0.5rem;
  color: #999;
}
.license_img {
  padding: 0.6rem;
  background-color: #fff;
  padding-bottom: 8rem;
}
.license_img .img_container {
  background-color: #ebebeb;
}
.license_img .img_container img {
  width: 40%;
  height: auto;
  margin: 0.4rem;
  vertical-align: middle;
}
</style>