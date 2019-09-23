<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="shop_header">
          <a class="shop_search" @click.prevent="$router.go(-1)">
            <i class="fa fa-chevron-left"></i>
          </a>
          <a class="sureOrder">订单列表</a>
          <a class="shop_user">
            <i class="fa fa-user" fa-2x></i>
          </a>
        </div>

        <ul class="order_list_ul">
          <li class="order_list_li">
            <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" class="restaurant_image" />
            <div class="order_item_right">
              <div>
                <div class="order_item_right_header">
                  <div class="order_header">
                    <h4>
                      <span class="ellipsis">效果演示</span>
                      <span>
                        <i class="fa fa-chevron-right"></i>
                      </span>
                    </h4>
                    <p class="order_time">2019-09-16 21:11</p>
                  </div>
                  <p class="order_status">等待支付</p>
                </div>
                <div class="order_basket">
                  <p class="order_name ellipsis">我问问-默认</p>
                  <p class="order_amount">¥61.00</p>
                </div>
              </div>
              <div class="order_again">
                <div class="page">
                  <span class="rem_time">
                    去支付(还剩
                    <span>{{minutes}}</span>
                    分
                    <span>{{secound}}</span>
                    秒)
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="alert_container" v-show="tip">
          <div class="tip_container">
            <div class="tip_icon">
              <span></span>
              <span></span>
            </div>
            <p class="tip_text">支付超时</p>
            <div class="confrim" @click="tip = false">确认</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/common/Footer";
export default {
  name: "OrderList",
  components: {
    Footer
  },
  data() {
    return {
      minutes: 15,
      secound: 0 + "0",
      tip: false
    };
  },
  methods: {
    timing() {
      if (this.secound != 0) {
        this.secound--;
        if (this.secound < 10 || this.secound == 0) {
          this.secound = "0" + this.secound;
        }
      }

      if (this.secound == 0) {
        if (this.secound == 0 && this.minutes == 0) {
          clearInterval(this.timeOut);
          this.tip = !this.tip;
        } else {
          this.minutes--;
          if (this.minutes < 10) {
            this.minutes = "0" + this.minutes;
          }
          this.secound = 59;
        }
      }
    },
    time() {
      this.timeOut = setInterval(this.timing, 1000);
    }
  },
  created() {
    this.time();
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
  visibility: hidden;
  opacity: 0;
}

.order_list_ul {
  padding-top: 1.95rem;
}
.order_list_ul .order_list_li {
  background: #fff;
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.6rem 0.6rem 0;
}
.restaurant_image {
  width: 2rem;
  height: 2rem;
  margin-right: 0.4rem;
}
.order_item_right {
  flex: 5;
}
.order_item_right_header {
  border-bottom: 0.025rem solid #f5f5f5;
  padding-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.order_header h4 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.75rem;
  color: #333;
  line-height: 1rem;
  width: 9rem;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order_time {
  font-size: 0.55rem;
  color: #999;
  line-height: 0.8rem;
}
.order_status {
  font-size: 0.6rem;
  color: #333;
}
.order_basket {
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
  border-bottom: 0.025rem solid #f5f5f5;
}
.order_name {
  font-size: 0.6rem;
  color: #666;
  width: 10rem;
}
.order_amount {
  font-size: 0.6rem;
  color: #f60;
  font-weight: 700;
}
.order_again {
  text-align: right;
  line-height: 1.6rem;
}
.page {
  display: inline-block;
}
.page .rem_time {
  color: orange;
  border-width: 1px;
  border-style: solid;
  border-color: orange;
  font-size: 0.55rem;
  padding: 0.1rem 0.2rem;
  border-radius: 0.15rem;
}
.order_header i {
  font-size: 0.2rem;
  margin-left: 0.1rem;
}

.alert_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}
.tip_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6rem;
  margin-left: -6rem;
  width: 12rem;
  background: #fff;
  padding-top: 0.6rem;
  border: 1px;
  border-radius: 0.25rem;
  animation: tipMove 0.4s;
}
.tip_icon {
  width: 3rem;
  height: 3rem;
  border: 0.15rem solid #f8cb86;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tip_icon span:nth-child(1) {
  width: 0.12rem;
  height: 1.5rem;
  background-color: #f8cb86;
}
.tip_icon span:nth-child(2) {
  width: 0.2rem;
  height: 0.2rem;
  border: 1px;
  border-radius: 50%;
  margin-top: 0.2rem;
  background-color: #f8cb86;
}
.tip_text {
  font-size: 0.7rem;
  color: #333;
  line-height: 0.9rem;
  text-align: center;
  margin-top: 0.8rem;
  padding: 0 0.4rem;
}
.confrim {
  font-size: 0.8rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.8rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 1.8rem;
  border: 1px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
@keyframes tipMove {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>

