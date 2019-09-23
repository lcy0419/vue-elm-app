<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="shop_header">
          <a class="shop_search" @click.prevent="$router.go(-1)">
            <i class="fa fa-chevron-left"></i>
          </a>
          <a class="sureOrder">添加地址</a>
          <a class="shop_user">
            <i class="fa fa-user" fa-2x></i>
          </a>
        </div>

        <div class="add_container">
          <div class="section_list">
            <span class="section_left">联系人</span>
            <div class="section_right">
              <input
                type="text"
                name="name"
                placeholder="你的名字"
                class="input_style"
                id="name"
                v-model="name"
              />

              <div class="choose_sex">
                <span class="choose_option" @click="colorOne = true,colorTwo = false">
                  <i class="fa fa-check-circle head_icon" :class="{changeColor:colorOne}"></i>
                  <span>先生</span>
                </span>
                <span class="choose_option" @click="colorOne = false,colorTwo = true">
                  <i class="fa fa-check-circle head_icon" :class="{changeColor:colorTwo}"></i>
                  <span>女士</span>
                </span>
              </div>
            </div>
          </div>

          <div class="section_list">
            <span class="section_left">联系电话</span>
            <div class="section_right">
              <div class="phone_add">
                <input
                  type="text"
                  name="phone"
                  placeholder="你的手机号"
                  class="input_style"
                  v-model="phone"
                />
                <img src="../assets/addPhone.png" height="20" width="20" @click="show = !show" />
              </div>
              <input
                type="text"
                name="phone"
                placeholder="备选电话"
                class="input_style"
                v-show="show"
                v-model="phone_bk"
              />
            </div>
          </div>

          <div class="section_list">
            <span class="section_left">送餐地址</span>
            <div class="section_right">
              <div
                @click.prevent="searchAddress"
                class="choose_address"
                contenteditable="true"
                placeholder="小区/写字楼/学校等"
              >{{address == "" ? "" : address}}</div>
              <input
                type="text"
                name="address_detail"
                placeholder="详细地址(如门牌号等)"
                class="input_style"
                v-model="address_detail"
              />
            </div>
          </div>

          <div class="section_list">
            <span class="section_left">标签</span>
            <div class="section_right">
              <div class="phone_add">
                <input
                  type="text"
                  name="phone"
                  placeholder="无/家/学校/公司"
                  class="input_style"
                  v-model="tag"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="determine"
          @click="getInfo('中北',address_detail,(31.22967,121.4762),name,phone,tag,colorOne == true ? '先生' : '女士',phone_bk,tag == '家' ? 2 : tag == '学校' ? 3 : tag == '公司'? 4 :'无')"
        >确定</div>

        <div class="alert_container" v-show="tip">
          <div class="tip_container">
            <div class="tip_icon">
              <span></span>
              <span></span>
            </div>
            <p class="tip_text">标签错误</p>
            <div class="confrim" @click="tip = false">确认</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddAddress",
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getAddress(to.query.address));
  },
  data() {
    return {
      show: false,
      tip: false,
      colorOne: true,
      colorTwo: false,
      name: "",
      phone: "",
      address_detail: "",
      tag: "",
      phone_bk: "",
      addressInfo: {},
      address: ""
    };
  },

  methods: {
    getInfo(
      address,
      address_detail,
      geohash,
      name,
      phone,
      tag,
      sex,
      phone_bk,
      tag_type
    ) {
      this.$axios
        .post(
          // `v1/users/1/addresses=${address}/address_detail=${address_detail}/geohash=${geohash}/name=${name}/phone=${phone}/tag=${tag}/sex=${sex}/phone_bk=${phone_bk}/tag_type=${tag_type}`
          `v1/users/1/addresses`,
          {
            address: address,
            address_detail: address_detail,
            geohash: geohash,
            name: name,
            phone: phone,
            tag: tag,
            sex: sex,
            phone_bk: phone_bk,
            tag_type: tag_type
          }
        )
        .then(res => {
          var tipText = document.querySelector(".tip_text");
          var chooseAddress = document.querySelector(".choose_address");

          if (this.name == "") {
            tipText.innerHTML = "请输入名字";
            this.tip = true;
          } else if (this.phone == "") {
            tipText.innerHTML = "请输入电话号码";
            this.tip = true;
          } else if (chooseAddress.innerHTML == "") {
            tipText.innerHTML = "请选择地址";
            this.tip = true;
          } else if (this.address_detail == "") {
            tipText.innerHTML = "请输入详细地址";
            this.tip = true;
          } else if (this.tag == "") {
            tipText.innerHTML = "标签错误";
            this.tip = true;
          } else {
            this.$router.push("/SelectAddress");
            console.log(JSON.parse(res.config.data));
            this.$store.dispatch(
              "setAddressAsync",
              JSON.parse(res.config.data)
            );
          }
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    searchAddress() {
      this.$router.push("/searchAddress");
    },
    getAddress(address) {
      this.address = address;
    }
    // getAddressInfo() {
    //   this.$axios.get("/v1/users/1/addresses").then(res => {
    //     console.log(res.data);
    //   });
    // }
  },
  created() {
    // this.getAddressInfo();
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

.changeColor {
  color: #4cd964 !important;
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

.add_container {
  margin-top: 2rem;
  background: #fff;
  padding: 0 0.7rem;
}
.section_list {
  display: flex;
  border-bottom: 0.025rem solid #f5f5f5;
}
.section_left {
  font-size: 0.7rem;
  color: #333;
  flex: 2;
  line-height: 2.5rem;
}
.section_right {
  flex: 5;
}
.input_style {
  width: 100%;
  height: 2.5rem;
  font-size: 0.7rem;
  color: #999;
  border: none;
  outline: none;
}
.choose_sex {
  display: flex;
  line-height: 2.5rem;
  border-top: 0.025rem solid #f5f5f5;
}
.choose_option {
  font-size: 0.7rem;
  color: #333;
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
}
.choose_option i {
  font-size: 0.8rem;
  color: #cccccc;
  margin-right: 0.2rem;
}

.phone_add {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.choose_address {
  font-size: 0.7rem;
  color: #999;
  line-height: 2.5rem;
  border-bottom: 0.025rem solid #f5f5f5;
  outline: none;
}
.choose_address:empty::before {
  color: #999;
  content: attr(placeholder);
}

.determine {
  background: #4cd964;
  font-size: 0.7rem;
  color: #fff;
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.6rem;
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
