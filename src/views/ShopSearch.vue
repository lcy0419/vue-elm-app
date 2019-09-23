<template>
  <div>
    <div class="paddingTop search_page">
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
          <span class="title_text">搜索</span>
        </section>
      </header>
      <form @submit.prevent="handleStore" class="search_form">
        <input
          @input="changeInput"
          v-model="shoppingStore"
          type="search"
          name="search"
          placeholder="请输入商家或美食名称"
          class="search_input"
        />
        <input type="submit" name="submit" class="search_submit" />
      </form>

      <div v-if="searchNone" class="search_none">很抱歉！无搜索结果</div>

      <section v-if="showHistory" class="search_history">
        <h4 class="title_restaurant">搜索历史</h4>
        <ul>
          <li v-for="(history,index) in searchHistory" :key="index" class="history_list">
            <span @click.prevent="inputHistory(history)" class="history_text ellipsis">{{history}}</span>
            <svg
              @click.prevent="deleteOne(history)"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              class="delete_icon"
            >
              <line
                data-v-3726cde6
                x1="8"
                y1="8"
                x2="18"
                y2="18"
                style="stroke: rgb(153, 153, 153); stroke-width: 3;"
              />
              <line
                data-v-3726cde6
                x1="18"
                y1="8"
                x2="8"
                y2="18"
                style="stroke: rgb(153, 153, 153); stroke-width: 3;"
              />
            </svg>
          </li>
          <footer @click.prevent="deleteAll" class="clear_history">清空搜索历史</footer>
        </ul>
      </section>

      <section v-if="showResult">
        <h4 class="title_restaurant">商家</h4>
        <ul class="list_container">
          <li
            @click.prevent="showShopFoods(result)"
            v-for="(result,index) in searchResults"
            :key="index"
            class="list_li"
          >
            <section class="item_left">
              <img :src="'//elm.cangdu.org/img/'+result.image_path" class="restaurant_img" />
            </section>
            <section class="item_right">
              <div class="item_right_text">
                <p>
                  <span>{{result.name}}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="14"
                    class="pay_icon"
                  >
                    <polygon
                      data-v-3726cde6
                      points="0,14 4,0 24,0 20,14"
                      style="fill: none; stroke: rgb(255, 96, 0); stroke-width: 1;"
                    />
                    <line
                      data-v-3726cde6
                      x1="1.5"
                      y1="12"
                      x2="20"
                      y2="12"
                      style="stroke: rgb(255, 96, 0); stroke-width: 1.5;"
                    />
                    <text
                      data-v-3726cde6
                      x="3.5"
                      y="9"
                      style="fill: rgb(255, 96, 0); font-size: 9px; font-weight: bold;"
                    >支付</text>
                  </svg>
                </p>
                <p>月售 {{result.recent_order_num}} 单</p>
                <p>{{result.float_minimum_order_amount}}起送/{{result.distance}}</p>
              </div>
              <ul class="item_right_detail"></ul>
            </section>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../components/common/Footer";
export default {
  components: {
    Footer
  },
  data() {
    return {
      shoppingStore: "",
      cityMessage: {},
      searchNone: false,
      searchHistory: [],
      showHistory: false,
      searchResults: {},
      showResult: false
    };
  },
  created() {
    this.getSearchHistory();
  },
  methods: {
    inputHistory(history) {
      this.shoppingStore = history;
    },
    deleteAll() {
      this.searchHistory = [];
      localStorage.removeItem("searchHistory");
      this.showHistory = false;
    },
    deleteOne(history) {
      var index = this.searchHistory.indexOf(history);
      this.searchHistory.splice(index, 1);
      if (this.searchHistory.length != 0) {
        localStorage.setItem(
          "searchHistory",
          JSON.stringify(this.searchHistory)
        );
      } else if (this.searchHistory.length == 0) {
        this.showHistory = false;
        localStorage.removeItem("searchHistory");
      }
    },
    getSearchHistory() {
      if (localStorage.getItem("searchHistory")) {
        this.searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
        this.showHistory = true;
      }
    },
    goBack() {
      this.$router.go(-1);
      this.shoppingStore = "";
    },
    handleStore() {
      if (localStorage.getItem("cityMessage")) {
        this.cityMessage = JSON.parse(localStorage.getItem("cityMessage"));
        this.$axios
          .get(
            `/v4/restaurants?geohash=${this.cityMessage.geohash}&keyword=${this.shoppingStore}`
          )
          .then(res => {
            console.log(res.data);

            if (res.data.status == 0) {
              this.searchNone = true;
              this.showHistory = false;
            } else {
              this.searchResults = res.data;
              this.showResult = true;
              this.showHistory = false;
            }
          });
      }

      if (localStorage.getItem("searchHistory")) {
        this.searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
        for (let key in this.searchHistory) {
          if (this.shoppingStore == this.searchHistory[key]) {
            return;
          }
        }
      }
      this.searchHistory.push(this.shoppingStore);
      localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
    },
    changeInput() {
      if (this.shoppingStore == "") {
        this.searchNone = false;
        this.showResult = false;
        if (this.searchResults.length > 0) {
          this.showHistory = true;
        }
      }
    },
    showShopFoods(result) {
      this.$router.push({
        name: "ShopFood",
        query: { shopHome: JSON.stringify(result) }
      });
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
.search_page {
  margin-bottom: 2rem;
}
.paddingTop {
  padding-top: 1.95rem;
}
.search_form {
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
}
.search_form .search_input {
  flex: 4;
  border: 0.025rem solid #e4e4e4;
  font-size: 0.65rem;
  color: #333;
  border-radius: 0.125rem;
  background-color: #f2f2f2;
  font-weight: 700;
  padding: 0 0.25rem;
}
.search_form input {
  height: 1.5rem;
}
.search_form .search_submit {
  flex: 1;
  border: 0.025rem solid #3190e8;
  margin-left: 0.2rem;
  font-size: 0.65rem;
  color: #fff;
  border-radius: 0.125rem;
  background-color: #3190e8;
  font-weight: 700;
  padding: 0 0.25rem;
}
.search_none {
  margin: 0 auto;
  font: 0.65rem/1.75rem Microsoft YaHei;
  color: #333;
  background-color: #fff;
  text-align: center;
  margin-top: 0.125rem;
}
.title_restaurant {
  font-size: 0.6rem;
  line-height: 2rem;
  text-indent: 0.5rem;
  font-weight: 700;
  color: #666;
}
.search_history .history_list {
  background-color: #fff;
  border-bottom: 0.025rem solid #e4e4e4;
  font: 0.7rem/2rem Microsoft YaHei;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search_history .history_list .history_text {
  display: inline-block;
  width: 80%;
}
.search_history .history_list .delete_icon {
  width: 1rem;
  height: 1rem;
}
.search_history .clear_history {
  background-color: #fff;
  color: #3190e8;
  font: 0.7rem/2rem Microsoft YaHei;
  font-weight: 700;
  text-align: center;
}
.list_container {
  background-color: #fff;
}
.list_li {
  display: flex;
  padding: 0.5rem;
  border-bottom: 0.025rem solid #e4e4e4;
}
.list_li .item_left {
  margin-left: 0.25rem;
}
.list_li .item_left .restaurant_img {
  width: 1.7rem;
  height: 1.7rem;
}
.list_li .item_right {
  font-size: 0.55rem;
  flex: 1;
}
.list_li .item_right .item_right_text {
  padding-bottom: 0.25rem;
  border-bottom: 0.025rem solid #e4e4e4;
}
.list_li .item_right .item_right_text p {
  line-height: 0.9rem;
}
.list_li .item_right .item_right_text .pay_icon {
  margin-bottom: -0.08rem;
}
.list_li .item_right .item_right_detail {
  margin-top: 0.25rem;
}
</style>