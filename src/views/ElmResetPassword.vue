<template>
  <div>
    <div class="restContainer">
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
          <span class="title_text">重置密码</span>
        </section>
      </header>
      <form class="restForm">
        <section class="input_container phone_number">
          <input v-model="userName" type="text" placeholder="账号" name="phone" maxlength="11" />
        </section>
        <section class="input_container">
          <input v-model="oldPassWord" type="text" placeholder="旧密码" name="oldPassWord" />
        </section>
        <section class="input_container">
          <input v-model="newPassWord" type="text" placeholder="请输入新密码" name="newPassWord" />
        </section>
        <section class="input_container">
          <input v-model="confirmPassWord" type="text" placeholder="请确认密码" name="confirmPassWord" />
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
      <div @click.prevent="handleNewPWord" class="login_container">确认修改</div>
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
  created() {
    this.getCaptchas();
  },
  data() {
    return {
      captchas: "",
      userName: "",
      oldPassWord: "",
      newPassWord: "",
      confirmPassWord: "",
      codeNumber: "",
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
    goBack() {
      this.$router.go(-1);
    },
    changeImg() {
      this.getCaptchas();
    },
    confrim() {
      this.showAlert = false;
    },
    handleNewPWord() {
      if (this.userName == "") {
        this.showWarn = "请输入账号";
        this.showAlert = true;
      } else if (this.username != "" && this.oldPassWord == "") {
        this.showWarn = "请输入旧密码";
        this.showAlert = true;
      } else if (
        this.userName != "" &&
        this.oldPassWord != "" &&
        this.newPassWord == ""
      ) {
        this.showWarn = "请输入新密码";
        this.showAlert = true;
      } else if (
        this.userName != "" &&
        this.oldPassWord != "" &&
        this.newPassWord != "" &&
        this.confirmPassWord == ""
      ) {
        this.showWarn = "请输入确认密码";
        this.showAlert = true;
      } else if (
        this.userName != "" &&
        this.oldPassWord != "" &&
        this.newPassWord != "" &&
        this.confirmPassWord != ""
      ) {
        if (this.newPassWord != this.confirmPassWord) {
          this.showWarn = "两次输入密码不一致";
          this.showAlert = true;
        } else if (this.codeNumber == "") {
          this.showWarn = "请输入验证码";
          this.showAlert = true;
        } else if (this.codeNumber != "") {
          this.$axios
            .post("/v2/changepassword", {
              username: this.userName,
              oldpassWord: this.oldPassWord,
              newpassword: this.newPassWord,
              confirmpassword: this.confirmPassWord,
              captcha_code: this.codeNumber
            })
            .then(res => {
              // console.log(res);
              this.showWarn = "密码修改成功";
              this.showAlert = true;
              this.$router.push("/login");
            });
        }
      }
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
.restContainer {
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
.restForm {
  background-color: #fff;
  margin-top: 0.6rem;
}
.restForm .input_container {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.8rem;
  border-bottom: 1px solid #f1f1f1;
}
.restForm .phone_number {
  padding: 0.3rem 0.8rem;
}
.restForm .input_container input {
  font-size: 0.7rem;
  color: #666;
}
.restForm .captcha_code_container {
  height: 2.2rem;
}
.restForm .captcha_code_container .img_change_img {
  display: flex;
  align-items: center;
}
.restForm .captcha_code_container .img_change_img img {
  width: 3.5rem;
  height: 1.5rem;
  margin-right: 0.2rem;
}
.restForm .captcha_code_container .img_change_img .change_img {
  display: flex;
  flex-wrap: wrap;
  width: 2rem;
  justify-content: center;
}
.restForm .captcha_code_container .img_change_img .change_img p {
  font-size: 0.55rem;
  color: #666;
}
.restForm .captcha_code_container .img_change_img .change_img p:nth-of-type(2) {
  color: #3b95e9;
  margin-top: 0.2rem;
}
.login_container {
  margin: 1rem 0.5rem;
  font-size: 0.7rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.5rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
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