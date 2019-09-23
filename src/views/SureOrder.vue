<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="shop_header">
          <a class="shop_search" @click.prevent="backOne">
            <i class="fa fa-chevron-left"></i>
          </a>
          <a class="sureOrder">确认订单</a>
          <a class="shop_user">
            <i class="fa fa-user" fa-2x></i>
          </a>
        </div>

        <!-- <SureOrderContent /> -->

        <div>
          <router-link to="/SelectAddress" class="head_top">
            <div class="head_left">
              <i class="fa fa-map-marker head_icon"></i>
              <div class="add_address" v-if="name == null">请添加一个收货地址</div>
              <div class="head_name" v-else>
                <div class="head_name_one">
                  <span>{{name}}</span>
                  <span>&nbsp;{{sex}}&nbsp;</span>
                  <span>{{phone}}</span>
                </div>
                <div class="head_name_two">
                  <span class="shop_tag">{{tag}}</span>
                  <p>{{addressDetail}}</p>
                </div>
              </div>
            </div>
            <i class="fa fa-angle-right head_right"></i>
          </router-link>
          <div class="head_time">
            <p class="head_time_left">送达时间</p>
            <div class="head_time_right">
              <p>尽快送达 | 预计 22:16</p>
              <p>蜂鸟专送</p>
            </div>
          </div>
          <div class="head_pay">
            <div class="head_pay_top">
              <span>支付方式</span>
              <div class="more_pay">
                <span>在线支付</span>
                <i class="fa fa-angle-right head_right"></i>
              </div>
            </div>
            <div class="head_pay_bottom">
              <span>红包</span>
              <span>暂时只在饿了么 APP 中支持</span>
            </div>
          </div>
          <div class="head_content">
            <div class="head_content_top">
              <img :src="'http://elm.cangdu.org/img/'+ shopMsg.image_path" alt />
              <span>{{shopMsg.name}}</span>
            </div>
            <ul class="head_content_list">
              <li v-for="(cartFood,index) in cartFoods" :key="index" class="head_content_li">
                <p
                  class="head_content_li_name"
                >{{cartFood.name}}{{cartFood.specs_name ? '-'+cartFood.specs_name : ""}}</p>
                <div class="head_content_price">
                  <span>x {{foodNum(cartFood)}}</span>
                  <span>¥{{cartFood.specs_name ? cartFood.price*foodNum(cartFood) : cartFood.specfoods[0].price*foodNum(cartFood)}}</span>
                </div>
              </li>
              <!-- <li class="head_content_li">
                <p class="head_content_li_name">1231</p>
                <div class="head_content_price">
                  <span>x 1</span>
                  <span>¥20</span>
                </div>
              </li>-->
            </ul>
            <div class="head_content_item">
              <p class="head_content_li_name">餐盒</p>
              <div class="head_content_price">
                <span></span>
                <span>¥ 113</span>
              </div>
            </div>
            <div class="head_content_item">
              <p class="head_content_li_name">配送费</p>
              <div class="head_content_price">
                <span></span>
                <span>¥ 4</span>
              </div>
            </div>
            <div class="head_content_item total_price">
              <p class="head_content_li_name">订单 ¥{{allPrice}}</p>
              <div class="head_content_price">
                <span></span>
                <span>待支付 ¥{{allPrice}}</span>
              </div>
            </div>
          </div>
          <div class="head_bottom">
            <router-link to="/ListRemark" class="head_bottom_order">
              <span class="orderName">订单备注</span>

              <span class="head_bottom_like">
                口味、偏好等
                <i class="fa fa-angle-right head_right"></i>
              </span>
            </router-link>
            <router-link to="/SelectBill" class="head_bottom_bill">
              <span class="orderBill">发票抬头</span>
              <span class="noNeedBill">
                不需要开发票
                <i class="fa fa-angle-right head_right"></i>
              </span>
            </router-link>
          </div>
        </div>

        <SureOrderFooter :price="allPrice" />
      </div>
    </div>
  </div>
</template>

<script>
import SureOrderFooter from "./SureOrderFooter";
export default {
  name: "SureOrder",
  data() {
    return {
      name: "",
      sex: "",
      phone: "",
      tag: "",
      addressDetail: "",
      shopMsg: {},
      allFoods: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getName(
        to.params.name,
        to.params.sex,
        to.params.phone,
        to.params.tag,
        to.params.addressDetail
      );
    });
  },
  created() {
    this.shopMsg = JSON.parse(localStorage.getItem("shopMsg"));
    this.allFoods = JSON.parse(localStorage.getItem("allFoods"));
  },
  computed: {
    foodNum() {
      return function(food) {
        return this.allFoods.filter(allFood => {
          return allFood == food ? allFood : 0;
        }).length;
      };
    },
    cartFoods() {
      var arr = [];
      for (var i = 0; i < this.allFoods.length; i++) {
        if (arr.indexOf(this.allFoods[i]) == -1) {
          arr.push(this.allFoods[i]);
        }
      }
      return arr;
    },
    allPrice() {
      var arr = [];
      for (var i = 0; i < this.allFoods.length; i++) {
        if (arr.indexOf(this.allFoods[i]) == -1) {
          arr.push(this.allFoods[i]);
        }
      }

      var price = 0;
      for (let key in arr) {
        if (arr[key].specs_name) {
          price = price + this.foodNum(arr[key]) * arr[key].price;
        } else {
          price = price + this.foodNum(arr[key]) * arr[key].specfoods[0].price;
        }
      }

      return price + 113 + 4;
    }
  },
  methods: {
    getName(name, sex, phone, tag, addressDetail) {
      this.name = name;
      this.sex = sex;
      this.phone = phone;
      this.tag = tag;
      this.addressDetail = addressDetail;
    },
    backOne() {
      this.$router.push("/ShopFood");
    },
    changeStyle() {
      var span = document.querySelector(".shop_tag");
      if (span.innerHTML == "学校") {
        span.style.background = "rgb(49, 144, 232)";
      } else if (span.innerHTML == "公司") {
        span.style.background = "rgb(76, 217, 100)";
      } else {
        span.style.background = "rgb(255, 87, 34)";
      }
      console.log(span);
    }
  },
  updated() {
    this.changeStyle();
  },
  components: {
    SureOrderFooter
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

.shop_header .sureOrder {
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
}
.shop_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.95rem;
  background: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 15;
}
.shop_header a {
  text-decoration: none;
  color: #fff;
  font-size: 0.65rem;
}
.shop_search {
  padding-left: 0.5rem;
}
.shop_user {
  padding-right: 0.5rem;
}

.head_top {
  display: flex;
  align-items: center;
  min-height: 3.5rem;
  justify-content: space-between;
  padding: 0 0.6rem;
  background: url(../assets/line.png) 0 100% repeat-x;
  background-color: #fff;
  background-size: auto 0.12rem;
  margin-top: 2rem;
  color: #333;
  font-weight: 400;
}
.head_left {
  display: flex;
  align-items: center;
}
.head_right {
  font-size: 0.8rem;
  color: #999;
}
.head_icon {
  font-size: 0.8rem;
  color: #3190e8;
  margin-right: 0.2rem;
}
.head_name {
  margin-left: 0.2rem;
}
.head_name_one {
  font-size: 0.65rem;
  color: #333;
}
.head_name_one span:nth-of-type(1) {
  font-size: 0.8rem;
  font-weight: 700;
}
.head_name_two {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
}
.head_name_two span:nth-child(1) {
  font-size: 0.5rem;
  color: #fff;
  border-radius: 0.15rem;
  background-color: #ff5722;
  height: 0.6rem;
  line-height: 0.6rem;
  padding: 0 0.2rem;
  margin-right: 0.3rem;
}
.head_name_two p:nth-child(2) {
  font-size: 0.55rem;
  color: #777;
  padding: 0;
  margin: 0;
}

.head_time {
  border-left: 0.2rem solid #3190e8;
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-top: 0.4rem;
  padding: 0 0.7rem;
}
.head_time_left {
  font-size: 0.8rem;
  color: #333;
  font-weight: 700;
  padding-left: 0.3rem;
}
.head_time_right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.head_time_right p:nth-of-type(1) {
  font-size: 0.7rem;
  color: #3190e8;
}
.head_time_right p:nth-of-type(2) {
  font-size: 0.5rem;
  color: #fff;
  background: #3190e8;
  width: 2.4rem;
  margin-top: 0.5rem;
  text-align: center;
  border-radius: 0.12rem;
  padding: 0.1rem;
  margin: 0;
}

.head_pay {
  background: #fff;
  margin-top: 0.4rem;
  padding: 0 0.7rem;
}
.head_pay_top {
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
}
.head_pay_top span {
  font-size: 0.7rem;
  color: #666;
}
.more_pay span {
  font-size: 0.6rem;
  color: #aaa;
  width: 10rem;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
  margin-right: 0.4rem;
}
.more_pay i {
  color: #ccc;
}
.head_pay_bottom {
  display: flex;
  justify-content: space-between;
  border-top: 0.025rem solid #f5f5f5;
}
.head_pay_bottom span:nth-child(1) {
  font-size: 0.6rem;
  color: #aaa;
  line-height: 2rem;
}
.head_pay_bottom span:nth-child(2) {
  color: #aaa;
  font-size: 0.6rem;
  line-height: 2rem;
}
.head_content {
  background: #fff;
  margin-top: 0.4rem;
}
.head_content_top {
  padding: 0.7rem;
  border-bottom: 0.025rem solid #f5f5f5;
  display: flex;
}
.head_content_top img {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
}
.head_content_top span {
  font-size: 0.8rem;
  color: #333;
  margin-left: 0.25rem;
}
.head_content_list {
  padding-top: 1rem;
}
.head_content_li {
  display: flex;
  justify-content: space-between;
  line-height: 1.8rem;
  padding: 0 0.7rem;
}
.head_content_li_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 11rem;
  font-size: 0.65rem;
  color: #666;
  margin: 0;
}
.head_content_price {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head_content_price span:nth-child(1) {
  color: #f60;
  font-size: 0.65rem;
}
.head_content_price span:nth-child(2) {
  color: #666;
  font-size: 0.65rem;
}
.head_content_item {
  display: flex;
  justify-content: space-between;
  line-height: 1.8rem;
  padding: 0 0.7rem;
  margin: 0;
}
.total_price {
  border-top: 0.025rem solid #f5f5f5;
}
.total_price .head_content_price span {
  color: #f60;
}

.head_bottom {
  background: #fff;
  margin-top: 0.4rem;
  padding: 0 0.7rem;
  margin-bottom: 3rem;
}
.head_bottom_order {
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
  color: #333;
  font-weight: 400;
}
.orderName {
  font-size: 0.7rem;
  color: #666;
}
.head_bottom_like {
  color: #aaa;
  font-size: 0.6rem;
  line-height: 2rem;
}
.head_bottom_bill {
  display: flex;
  justify-content: space-between;
  border-top: 0.025rem solid #f5f5f5;
}
.orderBill {
  color: #666;
  font-size: 0.6rem;
  line-height: 2rem;
}
.noNeedBill {
  color: #aaa;
  font-size: 0.6rem;
  line-height: 2rem;
}
.head_bottom_order .head_right {
  margin-left: 0.3rem;
}
.noNeedBill .head_right {
  margin-left: 0.3rem;
}

.add_address {
  font-size: 0.7rem;
  color: #333;
}
</style>
