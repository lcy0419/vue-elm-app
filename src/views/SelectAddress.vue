<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="shop_header">
          <a class="shop_search" @click.prevent="$router.go(-1)">
            <i class="fa fa-chevron-left"></i>
          </a>
          <a class="sureOrder">选择地址</a>
          <a class="shop_user">
            <i class="fa fa-user" fa-2x></i>
          </a>
        </div>

        <div class="scroll_container">
          <div class="list_cotainer">
            <ul>
              <li @click="getShow" v-for="(getAddress,index) in getAddresses" :key="index">
                <router-link
                  class="rowInfo"
                  :to="{name:'SureOrder',params:{name:getAddress.name,sex:getAddress.sex,phone:getAddress.phone,tag:getAddress.tag,addressDetail:getAddress.address_detail}}"
                >
                  <div class="head_left">
                    <div class="head_zoom">
                      <i class="fa fa-check-circle head_icon" v-show="show"></i>
                    </div>
                    <div class="head_name">
                      <div class="head_name_one">
                        <span>{{getAddress.name}}</span>
                        <span>&nbsp;{{getAddress.sex}}&nbsp;</span>
                        <span>{{getAddress.phone}}</span>
                      </div>
                      <div class="head_name_two">
                        <span class="bgColor">{{getAddress.tag}}</span>
                        <p>{{getAddress.address_detail}}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
              <!-- <li @click="getShow">
                <div class="head_left">
                  <div class="head_zoom">
                    <i class="fa fa-check-circle head_icon" v-show="show"></i>
                  </div>

                  <div class="head_name">
                    <div class="head_name_one">
                      <span>213123123</span>
                      <span>&nbsp;先生&nbsp;</span>
                      <span>123123123</span>
                    </div>
                    <div class="head_name_two">
                      <span>123123</span>
                      <p>13133123</p>
                    </div>
                  </div>
                </div>
              </li>-->
            </ul>
          </div>
        </div>

        <router-link to="/AddAddress" class="add_address">
          <img src="../assets/add.png" height="24" width="24" />
          <span>新增收获地址</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectAddress",
  computed: mapGetters(["getAddresses"]),
  data() {
    return {
      show: false
    };
  },
  methods: {
    getShow() {
      this.show = true;
    },
    changeBgColor() {
      var bgColor = document.querySelectorAll(".bgColor");
      // console.log(bgColor);

      for (var i = 0; i < this.getAddresses.length; i++) {
        if (this.getAddresses[i].tag == "学校") {
          bgColor[i].style.background = "rgb(49, 144, 232)";
        }
        if (this.getAddresses[i].tag == "公司") {
          bgColor[i].style.background = "rgb(76, 217, 100)";
        }
      }
      // console.log(this.getAddresses);
    }
  },
  mounted() {
    this.changeBgColor();
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
  z-index: 6;
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

a {
  text-decoration: none;
}
.head_top {
  display: flex;
  align-items: center;
  min-height: 3.5rem;
  justify-content: space-between;
  padding: 0 0.6rem;

  background-color: #fff;

  margin-top: 2rem;
  color: #333;
  font-weight: 400;
}
.head_left {
  display: flex;
  align-items: center;
}
.head_zoom {
  width: 0.8rem;
  height: 0.8rem;
  /* background: pink; */
}
.head_right {
  font-size: 0.8rem;
  color: #999;
}
.head_icon {
  font-size: 0.8rem;
  color: #4cd964;
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

.list_cotainer {
  padding-bottom: 5rem;
}
.list_cotainer ul {
  background: #fff;
}
.list_cotainer ul li {
  border-bottom: 0.025rem solid #f5f5f5;
  display: flex;
  align-items: center;
  padding: 0.7rem;
  line-height: 1rem;
}

.scroll_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 1.95rem;
  background: #fff;
}

.add_address {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2.5rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 204;
  text-decoration: none;
  font-weight: 400;
}
.add_address span {
  font-size: 0.7rem;
  color: #3190e8;
  margin-left: 0.3rem;
}

.rowInfo {
  width: 100%;
  height: 100%;
}
</style>
