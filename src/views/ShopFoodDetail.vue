<template>
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
          <span class="title_text">{{foodDetail.name}}</span>
        </section>
      </header>
      <section class="header_img">
        <img :src="'//elm.cangdu.org/img/' + foodDetail.image_path" class="food_img" />
        <div class="cover"></div>
      </section>
      <p class="description">{{foodDetail.description}}</p>
      <section class="detail_container">
        <section class="detail_left">
          <p>{{foodDetail.name}}</p>
          <div class="rating_sale">
            <span>评分</span>
            <div class="rating_container">
              <section class="star_container">
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                    <svg id="star" viewBox="0 0 32 32">
                      <path
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                        class="path1"
                      />
                    </svg>
                  </use>
                </svg>
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star" />
                </svg>
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star" />
                </svg>
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star" />
                </svg>
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star" />
                </svg>
              </section>
              <div class="star_overflow">
                <section data-v-5df6cab1 class="star_container">
                  <svg data-v-5df6cab1 class="orange_fill">
                    <use
                      data-v-5df6cab1
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#star"
                    >
                      <svg id="star" viewBox="0 0 32 32">
                        <path
                          d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                          class="path1"
                        />
                      </svg>
                    </use>
                  </svg>
                  <svg data-v-5df6cab1 class="orange_fill">
                    <use
                      data-v-5df6cab1
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#star"
                    />
                  </svg>
                  <svg data-v-5df6cab1 class="orange_fill">
                    <use
                      data-v-5df6cab1
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#star"
                    />
                  </svg>
                  <svg data-v-5df6cab1 class="orange_fill">
                    <use
                      data-v-5df6cab1
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#star"
                    />
                  </svg>
                  <svg data-v-5df6cab1 class="orange_fill">
                    <use
                      data-v-5df6cab1
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#star"
                    />
                  </svg>
                </section>
              </div>
            </div>
            <span>{{foodDetail.rating}}</span>
          </div>
          <p v-if="foodDetail.specfoods">
            <span>月售 {{foodDetail.month_sales}}单</span>
            <span>售价 ￥{{foodDetail.specfoods[0].price}}</span>
            <span>起</span>
          </p>
          <p>
            <span>评论数 {{foodDetail.rating_count}}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;好评率 {{foodDetail.satisfy_rate}}%</span>
          </p>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodDetail: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getFoodDetail(to.query.food));
  },
  methods: {
    getFoodDetail(food) {
      this.foodDetail = JSON.parse(food);
      var star = document.getElementsByClassName("star_overflow")[0];
      var starW = (2 * this.foodDetail.rating) / 5;
      star.style.width = starW + "rem";
    },
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
.rating_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 12;
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
.header_img {
  position: relative;
}
.header_img .food_img {
  width: 100%;
  display: block;
}
.header_img .cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.rating_page p,
.rating_page span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.description {
  font-size: 0.6rem;
  color: #666;
  margin-top: 0.5rem;
  line-height: 0.8rem;
  bottom: 0.2rem;
  padding: 0 0.4rem;
}
.detail_container {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail_container .detail_left p:first-of-type {
  font-size: 0.7rem;
  color: #333;
  margin-bottom: 0.2rem;
}
.detail_container .detail_left .rating_sale {
  display: flex;
  align-items: center;
}
.detail_container .detail_left .rating_sale span:first-of-type {
  font-size: 0.6rem;
  color: #666;
  margin-right: 0.2rem;
}
.rating_container {
  position: relative;
  top: 0.2rem;
  width: 2rem;
  height: 0.4rem;
}
.rating_container .star_container {
  position: absolute;
  display: flex;
  width: 2rem;
  height: 0.4rem;
  top: -0.02rem;
  left: -0.02rem;
}
.rating_container .star_container .grey_fill {
  fill: #d1d1d1;
}
.rating_container .star_overflow {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.rating_container .star_container .orange_fill {
  fill: #ff9a0d;
}
.detail_container .detail_left .rating_sale span:nth-of-type(2) {
  font-size: 0.55rem;
  color: #f60;
  margin-left: 0.2rem;
}
.detail_container .detail_left p:nth-of-type(2) {
  font-size: 0;
  margin-top: 0.3rem;
}
.detail_container .detail_left p:nth-of-type(2) span:first-of-type {
  font-size: 0.6rem;
  color: #666;
  margin-right: 0.4rem;
}
.detail_container .detail_left p:nth-of-type(2) span:nth-of-type(2),
.detail_container .detail_left p:nth-of-type(2) span:nth-of-type(3) {
  font-size: 0.6rem;
  color: #f60;
  margin-right: 0.2rem;
}
.detail_container .detail_left p:nth-of-type(3) span {
  font-size: 0.6rem;
  color: #666;
}
</style>