<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="shop_header">
          <router-link to="/ShopSearch" class="shop_search">
            <i class="fa fa-search" fa-2x></i>
          </router-link>
          <router-link to="/">{{cityMessage.name ? cityMessage.name : "中北大学"}}</router-link>
          <router-link to="/My" class="shop_user">
            <i class="fa fa-user" fa-2x></i>
          </router-link>
        </div>

        <div class="shop_content">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul>
                  <li v-for="(shopFood1,index) in shopFoods1" :key="index">
                    <router-link
                      :to="{name:'ShopListNav',query:{title:JSON.stringify(shopFood1.title)}}"
                      class="shop_img"
                    >
                      <img :src="'http://fuss10.elemecdn.com'+ shopFood1.image_url" />
                      <span>{{shopFood1.title}}</span>
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <li v-for="(shopFood2,index) in shopFoods2" :key="index">
                    <a href="#" class="shop_img">
                      <img :src="'http://fuss10.elemecdn.com'+ shopFood2.image_url" />
                      <span>{{shopFood2.title}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="swiper-pagination"></div>
          </div>
        </div>

        <ShopListHome :locationMsg="cityMessage" />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import ShopListHome from "./ShopListHome";
import Footer from "../components/common/Footer";

export default {
  name: "ShopList",
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getCityMessage(to.params.cityMessage));
  },
  data() {
    return {
      shopFoods1: {},
      shopFoods2: {},
      cityMessage: {}
    };
  },
  components: {
    ShopListHome,
    Footer
  },
  created() {
    this.getShopFood();
  },
  methods: {
    getShopFood() {
      this.$axios
        .get("/v2/index_entry")
        .then(res => {
          // console.log(res.data);
          this.shopFoods1 = res.data.slice(0, 8);
          // console.log(this.shopFoods1);
          this.shopFoods2 = res.data.slice(8, 16);
          // console.log(this.shopFoods2);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
    getCityMessage(message) {
      if (message) {
        this.$axios
          .get(`/v2/pois/${message.latitude},${message.longitude}`)
          .then(res => {
            this.cityMessage = res.data;
            localStorage.setItem(
              "cityMessage",
              JSON.stringify(this.cityMessage)
            );
            // console.log(this.cityMessage);
          });
      }
    }
  },

  mounted() {
    var that = this;
    that.$nextTick(function() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: false,

        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      });
    });
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
  z-index: 2;
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
.shop_content {
  padding-top: 2.1rem;
  background: #fff;
  border-bottom: 0.025rem solid #e4e4e4;
  height: 10.6rem;
}
.swiper-container {
  width: 100%;
  height: 100%;
  padding-bottom: 0.6rem;
}
.shop_content ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.shop_content ul li {
  list-style: none;
  width: 3.53rem;
  height: 3.1rem;
  margin-top: 0.2rem;
}

.shop_img span {
  color: #666;
  font-size: 0.55rem;
  padding-top: 0.1rem;
}
.shop_img img {
  width: 2.1rem;
  height: 2.1rem;
}
.shop_img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
