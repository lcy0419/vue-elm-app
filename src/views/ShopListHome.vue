<template>
  <div class="shop_home">
    <div class="shop_home_header">
      <i class="fa fa-building"></i>
      <span>附近商家</span>
    </div>

    <div class="shop_home_content">
      <ul>
        <li
          @click.prevent="shopFood(shopHome)"
          class="shop_home_li"
          v-for="(shopHome,index) in shopHomes"
          :key="index"
        >
          <div class="shop_home_img">
            <img :src="'http://elm.cangdu.org/img/' + shopHome.image_path" />
          </div>
          <div class="shop_home_right">
            <div class="shop_right_top">
              <h4>{{shopHome.name}}</h4>
              <span>保 准 票</span>
            </div>
            <h5 class="shop_right_middle">
              <div class="shop_right_middle_l">
                <span class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star" v-if="shopHome.rating < 5 ? false : true "></i>
                  <i class="fa fa-star-half-o" v-else></i>
                </span>

                <span class="num">{{shopHome.rating}}</span>
                <b>月售{{shopHome.recent_order_num}}单</b>
              </div>
              <div class="shop_right_middle_r">
                <span class="bird">{{shopHome.delivery_mode.text}}</span>
                <span class="onTime">{{shopHome.supports[1].name}}</span>
              </div>
            </h5>

            <h5 class="shop_right_footer">
              <p class="send">
                ¥{{shopHome.float_minimum_order_amount}}起送
                <span>/</span>
                {{shopHome.piecewise_agent_fee.tips}}
              </p>
              <p class="distance">
                <span>{{shopHome.distance}}</span>
                <span>/</span>
                <span class="orderTime">{{shopHome.order_lead_time}}</span>
              </p>
            </h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopListHome",
  data() {
    return {
      shopHomes: {}
    };
  },
  props: {
    locationMsg: Object
  },
  created() {
    this.getShopHome(this.locationMsg.latitude, this.locationMsg.longitude);
  },

  methods: {
    shopFood(shopHome) {
      this.$router.push({
        name: "ShopFood",
        query: { shopHome: JSON.stringify(shopHome) }
      });
    },
    getShopHome(latitude, longitude) {
      // console.log("--", this.locationMsg);
      this.$axios
        .get(
          `/shopping/restaurants?latitude=${latitude}&longitude=${longitude}`
        )
        .then(res => {
          // console.log(res.data);
          this.shopHomes = res.data;
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  }
};
</script>

<style scoped>
.shop_home {
  margin-top: 0.4rem;
  border-top: 0.025rem solid #e4e4e4;
  background: #fff;
  margin-bottom: 2rem;
}
.shop_home_header {
  margin-top: 0.5rem;
}
.shop_home_header i {
  color: #999;
  margin-left: 0.6rem;
  width: 0.6rem;
  height: 0.6rem;
}
.shop_home_header span {
  color: #999;
  font-size: 0.55rem;
  margin-left: 0.2rem;
}
.shop_home_li {
  list-style: none;
  border-bottom: 0.025rem solid #f1f1f1;
  padding: 0rem 0.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shop_home_img {
  width: 2.7rem;
  height: 2.7rem;
  margin-right: 0.4rem;
}
.shop_home_img img {
  width: 100%;
  height: 100%;
}

.shop_right_top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0.38rem;
}
.shop_right_top span {
  position: absolute;
  right: -3.8rem;
  transform: scale(0.8);
  font-size: 0.5rem;
  color: #999;
  border: 0.025rem solid #f1f1f1;
  padding: 0 0.04rem;
  border-radius: 0.08rem;
}

.shop_right_top h4 {
  width: 8.5rem;
  color: #333;
  padding-top: 0.01rem;
  font-size: 0.65rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shop_right_top h4:before {
  content: "\54C1\724C";
  display: inline-block;
  font-size: 0.5rem;
  line-height: 0.6rem;
  color: #333;
  background-color: #ffd930;
  padding: 0 0.1rem;
  border-radius: 0.1rem;
  margin-right: 0.2rem;
}

.shop_right_middle {
  height: 0.6rem;
  margin-top: 0.52rem;
  display: flex;
  flex-direction: row;
  position: relative;
  top: -0.1rem;
}

.shop_right_middle_l .star {
  width: 2rem;
  height: 0.4rem;
  color: #ff9a0d;
  font-size: 0.4rem;
}
.shop_right_middle_l .num {
  color: #ff9a0d;
  font-size: 0.5rem;
  font-weight: bolder;
  margin-left: 0.15rem;
}
.shop_right_middle_l b {
  font-size: 0.45rem;
  color: #666666;
  font-weight: normal;
  margin-left: 0.2rem;
}
.shop_right_middle_r {
  position: absolute;
  right: -4.3rem;
  transform: scale(0.7);
}
.bird {
  color: #fff;
  background: #3190e8;
  border: 0.025rem solid #3190e8;
  font-size: 0.4rem;
  padding: 0.04rem 0.08rem 0;
  border-radius: 0.08rem;
}
.onTime {
  color: #3190e8;
  border: 0.025rem solid #3190e8;
  font-size: 0.4rem;
  padding: 0.04rem 0.08rem 0;
  border-radius: 0.08rem;
}

.shop_right_footer {
  display: flex;
  flex-direction: row;
  font-size: 0.5rem;
  justify-content: space-between;
  color: #333;
  position: relative;
  top: 0rem;
}
.send {
  transform: scale(0.9);
  font-size: 0.5rem;
  color: #666;
}
.distance {
  transform: scale(0.9);
  position: absolute;
  right: -4rem;
}
.distance :nth-child(1) {
  color: #999;
}
.orderTime {
  color: #3190e8;
}
</style>

