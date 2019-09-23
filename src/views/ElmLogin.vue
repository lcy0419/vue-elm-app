<template>
  <div>
    <div class="loginContainer">
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
          <span class="title_text">密码登录</span>
        </section>
      </header>
      <form class="loginForm">
        <section class="input_container">
          <input v-model="userName" type="text" placeholder="账号" />
        </section>
        <section class="input_container">
          <input v-model="passWord" :type="type" placeholder="密码" />
          <div class="button_switch">
            <div @click.prevent="moveButton" class="circle_button"></div>
            <span>abc</span>
            <span>...</span>
          </div>
        </section>
        <section class="input_container captcha_code_container">
          <input v-model="codeNumber" type="text" placeholder="验证码" maxlength="4" />
          <div class="img_change_img">
            <img :src="captchas" />
            <div @click.prevent="changeImg" class="change_img">
              <p>看不清</p>
              <p>换一张</p>
            </div>
          </div>
        </section>
      </form>
      <p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="login_tips">注册过的用户可凭账号密码登录</p>
      <div @click.prevent="handleUser" class="login_container">登录</div>
      <router-link to="/forget" class="to_forget">重置密码?</router-link>
      <div v-if="showAlert" class="alet_container">
        <section class="tip_text_container">
          <div class="tip_icon">
            <span></span>
            <span></span>
          </div>
          <p class="tip_text">{{showWarn}}</p>
          <div @click.prevent="confrim" class="confrim">确认</div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // beforeRouteEnter(to, from, next) {
  //   next(vm => vm.getCaptchas());
  // },
  created() {
    this.getCaptchas();
  },
  data() {
    return {
      captchas: "",
      userName: "",
      passWord: "",
      codeNumber: "",
      type: "password",
      showAlert: false,
      showWarn: ""
    };
  },
  methods: {
    getCaptchas() {
      this.$axios.post("/v1/captchas").then(res => {
        // console.log(res.data.code);
        this.captchas = res.data.code;
      });
    },
    handleUser() {
      if (this.userName == "" && this.passWord == "" && this.codeNumber == "") {
        this.showWarn = "请输入账号/密码/验证码";
        this.showAlert = true;
      } else if (this.userName == "") {
        this.showWarn = "请输入账号";
        this.showAlert = true;
      } else if (this.userName != "" && this.passWord == "") {
        this.showWarn = "请输入密码";
        this.showAlert = true;
      } else if (
        this.userName != "" &&
        this.passWord != "" &&
        this.codeNumber == ""
      ) {
        this.showWarn = "请输入验证码";
        this.showAlert = true;
      } else if (
        this.userName != "" &&
        this.passWord != "" &&
        this.codeNumber != ""
      ) {
        this.$axios
          .post(`/v2/login`, {
            username: this.userName,
            password: this.passWord,
            captcha_code: this.codeNumber
          })
          .then(res => {
            if (res.data.message == "密码错误") {
              this.showWarn = "密码错误";
              this.showAlert = true;
            } else if (res.data.message == "验证码错误") {
              this.showWarn = "验证码错误";
              this.showAlert = true;
            } else {
              localStorage.setItem("user", JSON.stringify(res.data));
              this.$router.push("/");
            }
          });
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    moveButton() {
      if (this.type == "password") {
        this.type = "text";
      } else if (this.type == "text") {
        this.type = "password";
      }

      var button = document.getElementsByClassName("circle_button")[0];
      var divButton = document.getElementsByClassName("button_switch")[0];
      if (button.style.left == "1rem") {
        button.style.left = "-0.3rem";
        divButton.style.backgroundColor = "#ccc";
      } else {
        button.style.left = "1rem";
        divButton.style.backgroundColor = "#4cd964";
      }
    },
    changeImg() {
      this.getCaptchas();
    },
    confrim() {
      this.showAlert = false;
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
.loginForm {
  background-color: #fff;
  margin-top: 0.6rem;
}
.loginForm .input_container {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.8rem;
  border-bottom: 1px solid #f1f1f1;
}
.loginForm .input_container input {
  font-size: 0.7rem;
  color: #666;
}
.button_switch {
  background-color: #ccc;
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 0.7rem;
  padding: 0 0.2rem;
  border: 1px;
  border-radius: 0.5rem;
  position: relative;
}
.button_switch .circle_button {
  transition: all 0.3s;
  position: absolute;
  top: -0.2rem;
  z-index: 1;
  left: -0.3rem;
  width: 1.2rem;
  height: 1.2rem;
  box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0, 0, 0, 0.1);
  background-color: #f1f1f1;
  border-radius: 50%;
}
.loginContainer input,
.loginContainer p,
.loginContainer span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.button_switch span {
  font-size: 0.45rem;
  color: #fff;
  transform: translateY(0.05rem);
  line-height: 0.6rem;
}
.loginForm .captcha_code_container {
  height: 2.2rem;
}
.loginForm .captcha_code_container .img_change_img {
  display: flex;
  align-items: center;
}
.loginForm .captcha_code_container .img_change_img img {
  width: 3.5rem;
  height: 1.5rem;
  margin-right: 0.2rem;
}
.loginForm .captcha_code_container .img_change_img .change_img {
  display: flex;
  flex-wrap: wrap;
  width: 2rem;
  justify-content: center;
}
.loginForm .captcha_code_container .img_change_img .change_img p {
  font-size: 0.55rem;
  color: #666;
}
.loginForm
  .captcha_code_container
  .img_change_img
  .change_img
  p:nth-of-type(2) {
  color: #3b95e9;
  margin-top: 0.2rem;
}
.login_tips {
  font-size: 0.5rem;
  color: red;
  padding: 0.4rem 0.6rem;
  line-height: 0.5rem;
}
.login_container {
  margin: 0 0.5rem 1rem;
  font-size: 0.7rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.5rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
.to_forget {
  float: right;
  font-size: 0.6rem;
  color: #3b95e9;
  margin-right: 0.3rem;
}
.alet_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}
.tip_text_container .tip_icon,
.tip_text_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tip_text_container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6rem;
  margin-left: -6rem;
  width: 12rem;
  animation: tipMove 0.4s;
  background-color: #fff;
  padding-top: 0.6rem;
  border: 1px;
  border-radius: 0.25rem;
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
.tip_text_container .tip_icon {
  width: 3rem;
  height: 3rem;
  border: 0.15rem solid #f8cb86;
  border-radius: 50%;
}
.tip_text_container .tip_icon span:first-of-type {
  width: 0.12rem;
  height: 1.5rem;
  background-color: #f8cb86;
}
.tip_text_container .tip_icon span:nth-of-type(2) {
  width: 0.2rem;
  height: 0.2rem;
  border: 1px;
  border-radius: 50%;
  margin-top: 0.2rem;
  background-color: #f8cb86;
}
.tip_text_container .tip_text {
  font-size: 0.7rem;
  color: #333;
  line-height: 0.9rem;
  text-align: center;
  margin-top: 0.8rem;
  padding: 0 0.4rem;
}
.tip_text_container .confrim {
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
</style>