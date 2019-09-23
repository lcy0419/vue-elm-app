<template>
  <div>
    <div>
      <section class="shop_container">
        <nav class="goback">
          <svg
            @click.prevent="goback"
            width="4rem"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <polyline
              data-v-c8684834
              points="12,18 4,9 12,0"
              style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3;"
            />
          </svg>
        </nav>
        <header class="shop_detail_header" style="z-index:10;">
          <img :src="'//elm.cangdu.org/img/' + shopMsg.image_path" class="header_cover_img" />
          <section class="description_header">
            <a href class="description_top">
              <section class="description_left">
                <img :src="'//elm.cangdu.org/img/' + shopMsg.image_path" />
              </section>
              <section class="description_right">
                <h4 class="description_title ellipsis">{{shopMsg.name}}</h4>
                <p
                  v-if="shopMsg.piecewise_agent_fee"
                  class="description_text"
                >商家配送/分钟送达/{{shopMsg.piecewise_agent_fee.tips}}</p>
                <p class="description_promotion ellipsis">公告:{{shopMsg.promotion_info}}</p>
              </section>
              <svg
                @click.prevent="shopDetail"
                width="14"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                class="description_arrow"
              >
                <path
                  data-v-c8684834
                  d="M0 0 L8 7 L0 14"
                  stroke="#fff"
                  stroke-width="1"
                  fill="none"
                />
              </svg>
            </a>
            <footer @click.prevent="showActivities = true" class="description_footer">
              <p class="ellipsis">
                <span
                  v-if="shopMsg.activities !== undefined && shopMsg.activities.length != 0"
                  class="tip_icon"
                  style="background-color: rgb(240,115,115);border-color: rgb(240,115,115);"
                >{{shopMsg.activities[0] ? shopMsg.activities[0].icon_name : ""}}</span>
                <span
                  v-if="shopMsg.activities !== undefined && shopMsg.activities.length != 0"
                >{{shopMsg.activities[0] ? shopMsg.activities[0].description : ""}}</span>
              </p>
              <p v-if="shopMsg.activities !== undefined && shopMsg.activities.length != 0">1个活动</p>
              <svg
                v-if="shopMsg.activities !== undefined && shopMsg.activities.length != 0"
                class="footer_arrow"
              >
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left">
                  <svg viewBox="0 0 14 14" id="arrow-left">
                    <path d="M0 0 L8 7 L0 14" stroke="#fff" stroke-width="1" fill="none" />
                  </svg>
                </use>
              </svg>
            </footer>
          </section>
        </header>

        <!-- 活动信息 -->
        <section v-if="showActivities" class="activities_details">
          <h2 class="activities_shoptitle">{{shopMsg.name}}</h2>
          <h3 class="activities_ratingstar"></h3>
          <section class="activities_list">
            <header class="activities_title_style">
              <span>优惠信息</span>
            </header>
            <ul>
              <li>
                <span
                  class="activities_icon"
                  style="background-color: rgb(240,115,115); border-color:rgb(240,115,115);"
                >{{shopMsg.activities[0].icon_name}}</span>
                <span>{{shopMsg.activities[0].description}}</span>
              </li>
            </ul>
          </section>
          <section class="activities_shopinfo">
            <header class="activities_title_style">
              <span>商家公告</span>
            </header>
            <p>{{shopMsg.promotion_info}}</p>
          </section>
          <svg
            @click.prevent="showActivities = false"
            width="60"
            height="60"
            class="close_activities"
          >
            <circle
              data-v-c8684834
              cx="30"
              cy="30"
              r="25"
              stroke="#555"
              stroke-width="1"
              fill="none"
            />
            <line
              data-v-c8684834
              x1="22"
              y1="38"
              x2="38"
              y2="22"
              style="stroke: rgb(153, 153, 153); stroke-width: 2;"
            />
            <line
              data-v-c8684834
              x1="22"
              y1="22"
              x2="38"
              y2="38"
              style="stroke: rgb(153, 153, 153); stroke-width: 2;"
            />
          </svg>
        </section>

        <section class="change_show_type">
          <div @click.prevent="changeTypeOne">
            <span :class="changeType == 1 ? 'activity_show' : ''">商品</span>
          </div>
          <div @click.prevent="changeTypeTwo">
            <span :class="changeType == 2 ? 'activity_show' : ''">评价</span>
          </div>
        </section>

        <section v-if="changeType == 1" class="food_container">
          <section class="menu_container">
            <section id="wrapper_menu" class="menu_left">
              <ul
                style="transition-timing-function: cubic-bezier(0.165,0.84,0.44,1); transition-duration: 0ms; transform:translate(0px,0px) translateZ(0px);"
              >
                <li
                  v-for="(foodList,index) in foodLists"
                  :key="index"
                  class="menu_left_li"
                  :class="foodIndex == index ? 'activity_menu' : ''"
                  @click.prevent="changeMenu(index)"
                >
                  <span>{{foodList.name}}</span>
                </li>
              </ul>
            </section>
            <section class="menu_right">
              <ul
                style="transition-timing-function: cubic-bezier(0.165,0.84,0.44,1); transition-duration: 0ms; transform:translate(0px,0px) translateZ(0px);"
              >
                <li v-for="(foodList,index) in foodLists" :key="index">
                  <header class="menu_detail_header">
                    <section class="menu_detail_header_left">
                      <strong class="menu_item_title">{{foodList.name}}</strong>
                      <span class="menu_item_description">{{foodList.description}}</span>
                    </section>
                    <span @click.prevent="changeShowTip" class="menu_detail_header_right"></span>
                    <p v-if="showTip" class="description_tip">
                      <span>热销榜</span>
                      是的分
                    </p>
                  </header>
                  <section
                    v-for="(food,index) in foodList.foods"
                    :key="index"
                    class="menu_detail_list"
                    @click.prevent="foodDetail(food)"
                  >
                    <div class="menu_detail_link">
                      <section class="menu_food_img">
                        <img :src="'//elm.cangdu.org/img/' + food.image_path" />
                      </section>
                      <section class="menu_food_description">
                        <h3 class="food_description_head">
                          <strong class="description_foodname">{{food.name}}</strong>
                        </h3>
                        <p class="food_description_content">{{food.description}}</p>
                        <p class="food_description_sale_rating">
                          <span>月售{{food.month_sales}}份</span>
                          <span>好评率{{food.satisfy_rate}}%</span>
                        </p>
                        <p class="food_activity">
                          <span
                            v-if="food.activity"
                            style="color: rgb(241,136,79); border-color:rgb(240,115,115);"
                          >{{food.activity.image_text}}</span>
                        </p>
                      </section>
                    </div>
                    <footer class="menu_detail_footer">
                      <section class="food_price">
                        <span>￥</span>
                        <span>{{food.specfoods[0].price}}</span>
                        <span>起</span>
                      </section>
                      <section class="cart_module">
                        <section v-if="food.specifications[0]" class="choose_specification">
                          <section class="choose_icon_container">
                            <svg
                              @click.stop="deleteTip"
                              v-if="foodNum(food.specfoods[0]) + foodNum(food.specfoods[1])"
                              t="1568075104624"
                              class="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="2141"
                              width="21"
                              height="21"
                            >
                              <path
                                d="M668.734694 532.897959H355.265306c-11.493878 0-20.897959-9.404082-20.897959-20.897959s9.404082-20.897959 20.897959-20.897959h313.469388c11.493878 0 20.897959 9.404082 20.897959 20.897959s-9.404082 20.897959-20.897959 20.897959z"
                                p-id="2142"
                                fill="#999999"
                              />
                              <path
                                d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z"
                                p-id="2143"
                                fill="#999999"
                              />
                            </svg>
                            <span
                              v-if="foodNum(food.specfoods[0]) + foodNum(food.specfoods[1])"
                              class="cart_num"
                            >{{foodNum(food.specfoods[0]) + foodNum(food.specfoods[1])}}</span>
                            <span
                              @click.stop="showFoodSpecs(food)"
                              class="show_chooselist"
                            >{{food.specifications.length != 0 ? "选规格" : "11"}}</span>
                          </section>
                        </section>
                        <section v-if="!food.specifications[0]" class="cart_button">
                          <svg
                            @click.stop="subFoodButton(food)"
                            v-if="foodNum(food)"
                            t="1568105190206"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2397"
                            width="21"
                            height="21"
                          >
                            <path
                              d="M668.734694 532.897959H355.265306c-11.493878 0-20.897959-9.404082-20.897959-20.897959s9.404082-20.897959 20.897959-20.897959h313.469388c11.493878 0 20.897959 9.404082 20.897959 20.897959s-9.404082 20.897959-20.897959 20.897959z"
                              p-id="2398"
                              fill="#3190e8"
                            />
                            <path
                              d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z"
                              p-id="2399"
                              fill="#3190e8"
                            />
                          </svg>
                          <span v-if="foodNum(food)" class="cart_num">{{foodNum(food)}}</span>
                          <svg @click.stop="addFoodButton(food)" class="add_icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add">
                              <svg viewBox="0 0 50 50" id="cart-add">
                                <path fill="none" d="M0 0h44v44H0z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </use>
                          </svg>
                        </section>
                      </section>
                    </footer>
                  </section>
                </li>
              </ul>
            </section>
          </section>

          <!-- 购物车 -->
          <section class="buy_cart_container">
            <section class="cart_icon_num">
              <div
                @click.prevent="showCart"
                class="cart_icon_container"
                :class="cartBgColor ? 'cart_icon_activity' : ''"
              >
                <span v-if="allCount" class="cart_list_length">{{allCount}}</span>
                <svg
                  t="1568016401192"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2078"
                  width="28"
                  height="28"
                >
                  <path
                    d="M984.2 789.77H283.94a27.73 27.73 0 0 1-27.59-24.71l-73.59-662.2a83.59 83.59 0 0 0-62.61-71.62L46.53 12.83A27.77 27.77 0 0 0 33 66.7l73.65 18.45A27.81 27.81 0 0 1 127.53 109l73.59 662.2a83.23 83.23 0 0 0 82.82 74.14H984.2a27.78 27.78 0 0 0 0-55.56z"
                    p-id="2079"
                    fill="#ffffff"
                  />
                  <path
                    d="M331.44 956.44m-55.55 0a55.55 55.55 0 1 0 111.1 0 55.55 55.55 0 1 0-111.1 0Z"
                    p-id="2080"
                    fill="#ffffff"
                  />
                  <path
                    d="M886.98 956.44m-55.55 0a55.55 55.55 0 1 0 111.1 0 55.55 55.55 0 1 0-111.1 0Z"
                    p-id="2081"
                    fill="#ffffff"
                  />
                  <path
                    d="M289.77 234.21l666.65-0.08-94 372a28.34 28.34 0 0 1-24.85 21l-495.1 51.68a27.77 27.77 0 0 0 2.85 55.39 26.39 26.39 0 0 0 2.9-0.16l495-51.65a84 84 0 0 0 73.1-62.64l94-372a55 55 0 0 0-10-47.55 55.55 55.55 0 0 0-44.16-21.54H289.77a27.78 27.78 0 0 0 0 55.56z"
                    p-id="2082"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div class="cart_num">
                <div>￥ {{allPrice}}.00</div>
                <div>配送费￥{{shopMsg.float_delivery_fee}}</div>
              </div>
            </section>
            <section
              class="gotopay"
              :class="allPrice >= shopMsg.float_minimum_order_amount ? 'gotopay_activity' : ''"
            >
              <span
                v-if="allPrice < shopMsg.float_minimum_order_amount"
                class="gotopay_button_style"
              >还差￥{{shopMsg.float_minimum_order_amount}}起送</span>
              <a
                v-if="allPrice >= shopMsg.float_minimum_order_amount"
                @click.prevent="sureOrder"
                class="gotopay_button_style"
              >去结算</a>
            </section>
          </section>

          <!-- 购物信息 -->
          <section v-if="showCartFood" class="cart_food_list">
            <header>
              <h4>购物车</h4>
              <div>
                <svg
                  t="1568027029112"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2221"
                  width="14"
                  height="14"
                >
                  <path
                    d="M779.3 228.2h-113v-35.4c0-34.9-28.4-63.3-63.3-63.3H425c-34.9 0-63.3 28.4-63.3 63.3v35.4h-113c-32.9 0-59.7 26.8-59.7 59.7v38.5c0 32.9 26.8 59.7 59.7 59.7h1.8v412.8c0 54.1 44 98.1 98.1 98.1h330.9c54.1 0 98.1-44 98.1-98.1V386.1h1.8c32.9 0 59.7-26.8 59.7-59.7v-38.5c-0.1-32.9-26.8-59.7-59.8-59.7z m-374.9-35.4c0-11.4 9.2-20.6 20.6-20.6h178c11.4 0 20.6 9.2 20.6 20.6v35.4H404.4v-35.4z m330.4 606c0 30.5-24.8 55.4-55.4 55.4H348.5c-30.5 0-55.4-24.8-55.4-55.4V386.1h441.7v412.7z m61.5-472.4c0 9.4-7.6 17-17 17H248.7c-9.4 0-17-7.6-17-17v-38.5c0-9.4 7.6-17 17-17h530.7c9.4 0 17 7.6 17 17v38.5z"
                    p-id="2222"
                    fill="#8a8a8a"
                  />
                  <path
                    d="M377.9 462.3h42.7v317.5h-42.7zM492.6 462.3h42.7v317.5h-42.7zM607.4 462.3h42.7v317.5h-42.7z"
                    p-id="2223"
                    fill="#8a8a8a"
                  />
                </svg>
                <span @click.prevent="clearAllFood" class="clear_cart">清空</span>
              </div>
            </header>
            <section id="cartFood" class="cart_food_details">
              <ul>
                <li v-for="(cartFood,index) in cartFoods" :key="index" class="cart_food_li">
                  <div class="cart_list_num">
                    <p class="ellipsis">{{cartFood.name}}</p>
                    <p class="ellipsis">{{cartFood.specs_name ? cartFood.specs_name : ""}}</p>
                  </div>
                  <div class="cart_list_price">
                    <span>￥</span>
                    <span>{{cartFood.specs_name ? cartFood.price*foodNum(cartFood) : cartFood.specfoods[0].price*foodNum(cartFood)}}</span>
                  </div>
                  <section class="cart_list_control">
                    <span>
                      <svg @click.prevent="subFoodButton(cartFood)">
                        <use
                          data-v-c8684834
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xlink:href="#cart-minus"
                        >
                          <svg viewBox="0 0 50 50" id="cart-minus">
                            <path
                              fill-rule="evenodd"
                              stroke-width="4"
                              d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z"
                              clip-rule="evenodd"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </use>
                      </svg>
                    </span>
                    <span class="cart_num">{{foodNum(cartFood)}}</span>
                    <svg @click.prevent="addFoodButton(cartFood)" class="cart_add">
                      <use
                        data-v-c8684834
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="#cart-add"
                      >
                        <svg viewBox="0 0 50 50" id="cart-add">
                          <path fill="none" d="M0 0h44v44H0z" />
                          <path
                            fill-rule="evenodd"
                            d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </use>
                    </svg>
                  </section>
                </li>
              </ul>
            </section>
          </section>
          <div @click.prevent="hiddenCart" v-if="showCartFood" class="screen_cover"></div>
        </section>

        <!-- 评价 -->
        <ShopRating
          v-if="changeType == 2"
          :shopRatings="shopRatings"
          :shopScore="shopScore"
          :shopRatingsTags="shopRatingsTages"
        />
      </section>

      <p v-if="showDeleteTip" class="show_delete_tip">多规格商品只能去购物车删除哦</p>

      <!-- 选规格 -->
      <section v-if="showSpecs">
        <div class="specs_cover"></div>
        <div class="specs_list">
          <header class="specs_list_header">
            <h4 class="ellipsis">{{nowSpecs.name}}</h4>
            <svg
              @click.prevent="cancelSpecs"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              class="specs_cancel"
            >
              <line data-v-c8684834 x1="0" y1="0" x2="16" y2="16" stroke="#666" stroke-width="1.2" />
              <line data-v-c8684834 x1="0" y1="16" x2="16" y2="0" stroke="#666" stroke-width="1.2" />
            </svg>
          </header>
          <section class="specs_details">
            <h5 class="specs_details_title">{{nowSpecs.specifications[0].name}}</h5>
            <ul>
              <li
                v-for="(specification,index) in nowSpecs.specifications[0].values"
                @click.prevent="changeSpecs(index)"
                :key="index"
                :class="specsIndex == index ? 'specs_activity' : '' "
              >{{specification}}</li>
            </ul>
          </section>
          <footer class="specs_footer">
            <div class="specs_price">
              <span>￥</span>
              <span>{{nowSpecs.specfoods[0].price}}</span>
            </div>
            <div
              @click.prevent="addFoodSpecs(nowSpecs.specfoods[specsIndex])"
              class="specs_addto_cart"
            >加入购物车</div>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import ShopRating from "./ShopRating";
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getShopHome(to.query.shopHome));
  },
  components: {
    ShopRating
  },
  data() {
    return {
      shopMsg: {},
      foodLists: [],
      foodIndex: 0,
      showTip: false,
      showSpecs: false,
      nowSpecs: {},
      specsIndex: 0,
      showCartFood: false,
      cartBgColor: false,
      Price: 0,
      allFoods: [],
      indexFood: 0,
      showDeleteTip: false,
      showActivities: false,
      changeType: 1,
      shopRatings: [],
      shopScore: {},
      shopRatingsTages: []
    };
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
    allCount() {
      return this.allFoods.length;
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

      return price;
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    changeShowTip() {
      this.showTip = !this.showTip;
    },
    getShopHome(shopHome) {
      this.shopMsg = JSON.parse(shopHome);
      console.log(this.shopMsg);
      this.$axios
        .get(`/shopping/v2/menu?restaurant_id=${this.shopMsg.id}`)
        .then(res => {
          console.log(res.data);
          this.foodLists = res.data;
        });
    },
    changeMenu(index) {
      // for (let key in this.foodLists) {
      //   this.foodLists[key].is_selected = true;
      // }
      // this.foodLists[index].is_selected = false;
      // console.log(index);
      this.foodIndex = index;
      var ulMove = document.querySelector(".menu_right ul");
      var liMove = document.querySelectorAll(".menu_right ul li");
      // console.log(liMove);
      var moveHeight = 0;
      for (var i = 0; i < index; i++) {
        moveHeight = moveHeight + liMove[i].scrollHeight;
      }

      ulMove.style.transition = "all .8s";
      ulMove.style.transform =
        "translate(0px," + -moveHeight + "px) translateZ(0px)";
    },
    foodDetail(food) {
      this.$router.push({
        name: "ShopFoodDetail",
        query: { food: JSON.stringify(food) }
      });
    },
    showFoodSpecs(food) {
      this.showSpecs = true;
      this.nowSpecs = food;
    },
    cancelSpecs() {
      this.showSpecs = false;
    },
    changeSpecs(index) {
      this.specsIndex = index;
    },
    addFoodSpecs(specfoods) {
      this.showSpecs = false;
      this.cartBgColor = true;

      this.allFoods.push(specfoods);
    },
    addFoodButton(food) {
      this.cartBgColor = true;
      this.allFoods.push(food);
    },
    subFoodButton(food) {
      var index = this.allFoods.indexOf(food);
      if (index != -1) {
        this.allFoods.splice(index, 1);
      }

      if (this.allFoods.length == 0) {
        this.cartBgColor = false;
        this.hiddenCart();
      }
    },
    showCart() {
      this.showCartFood = true;
    },
    hiddenCart() {
      this.showCartFood = false;
    },
    deleteTip() {
      this.showDeleteTip = true;
      setTimeout(() => {
        this.showDeleteTip = false;
      }, 2000);
    },
    clearAllFood() {
      this.allFoods = [];
      this.cartBgColor = false;
      this.hiddenCart();
    },
    shopDetail() {
      this.$router.push({
        name: "ShopDetail",
        query: { shopMsg: JSON.stringify(this.shopMsg) }
      });
    },
    changeTypeOne() {
      this.changeType = 1;
    },
    changeTypeTwo() {
      this.changeType = 2;
      this.$axios
        .get(`/ugc/v2/restaurants/${this.shopMsg.id}/ratings?offset=0&limit=10`)
        .then(res => {
          console.log("1", res.data);
          this.shopRatings = res.data;
        });

      this.$axios
        .get(`/ugc/v2/restaurants/${this.shopMsg.id}/ratings/scores`)
        .then(res => {
          console.log("2", res.data);
          this.shopScore = res.data;
        });

      this.$axios
        .get(`/ugc/v2/restaurants/${this.shopMsg.id}/ratings/tags`)
        .then(res => {
          console.log("3", res.data);
          this.shopRatingsTages = res.data;
        });
    },
    sureOrder() {
      localStorage.setItem("shopMsg", JSON.stringify(this.shopMsg));
      localStorage.setItem("allFoods", JSON.stringify(this.allFoods));
      this.$router.push("/SureOrder");
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
.shop_container {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  left: 0;
  height: 100%;
}
.goback {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  z-index: 11;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
.shop_detail_header {
  /* overflow: hidden; */
  position: relative;
}
.shop_detail_header .header_cover_img {
  width: 20%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  filter: blur(10px);
}
.shop_detail_header .description_header {
  position: relative;
  z-index: 10;
  background-color: rgba(119, 103, 137, 0.43);
  padding: 0.4rem 0 0.4rem 0.4rem;
  width: 100%;
  overflow: hidden;
}
.shop_detail_header .description_header .description_top {
  display: flex;
}
.shop_detail_header .description_header .description_top .description_left {
  margin-right: 0.3rem;
}
.shop_detail_header .description_header .description_top .description_left img {
  width: 2.9rem;
  height: 2.9rem;
  display: block;
  border-radius: 0.15rem;
}
.shop_detail_header .description_header .description_top .description_right {
  flex: 1;
}
.shop_detail_header
  .description_header
  .description_top
  .description_right
  .description_title {
  font-size: 0.8rem;
  color: #fff;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.3rem;
}
.shop_detail_header
  .description_header
  .description_top
  .description_right
  .description_text {
  font-size: 0.5rem;
  color: #fff;
  margin-bottom: 0.3rem;
}
.shop_detail_header
  .description_header
  .description_top
  .description_right
  .description_promotion {
  font-size: 0.5rem;
  color: #fff;
  width: 11.5rem;
}
.shop_detail_header .description_header .description_top .description_arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.3rem;
  z-index: 11;
}
.shop_detail_header .description_header .description_footer {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-right: 1rem;
}
.shop_detail_header .description_header .description_footer .ellipsis {
  width: 84%;
}
.shop_detail_header .description_header .description_footer p {
  font-size: 0.5rem;
  color: #fff;
}
.shop_detail_header .description_header .description_footer p .tip_icon {
  padding: 0 0.04rem;
  border: 0.025rem solid #fff;
  border-radius: 0.1rem;
  font-size: 0.4rem;
  display: inline-block;
}
.shop_detail_header .description_header .description_footer p span {
  color: #fff;
}
.shop_detail_header .description_header .description_footer .footer_arrow {
  width: 0.45rem;
  height: 0.45rem;
  position: absolute;
  right: 0.3rem;
}
.change_show_type {
  display: flex;
  background-color: #fff;
  padding: 0.3rem 0 0.6rem;
  border-bottom: 1px solid #ebebeb;
}
.change_show_type div {
  flex: 1;
  text-align: center;
}
.change_show_type div span {
  font-size: 0.65rem;
  padding: 0.2rem 0.1rem;
  border-bottom: 0.12rem solid #fff;
}
.change_show_type div .activity_show {
  color: #3190e8;
  border-color: #3190e8;
}
.food_container {
  display: flex;
  flex: 1;
  padding-bottom: 2rem;
}
.menu_container {
  display: flex;
  flex: 1;
  overflow-y: hidden;
  position: relative;
  background-color: #f5f5f5;
}
.menu_container .menu_left {
  width: 3.8rem;
}
.menu_container .menu_left .activity_menu {
  border-left: 0.15rem solid #3190e8;
  background-color: #fff;
}
.menu_container .menu_left .menu_left_li {
  padding: 0.7rem 0.3rem;
  border-bottom: 0.025rem solid #ededed;
  box-sizing: border-box;
  position: relative;
}
.menu_container .menu_right {
  flex: 4;
  overflow-y: auto;
}
.menu_container .menu_right .menu_detail_header {
  width: 100%;
  padding: 0.4rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu_container .menu_right .menu_detail_header .menu_detail_header_left {
  width: 11rem;
  white-space: nowrap;
  overflow: hidden;
}
.menu_container
  .menu_right
  .menu_detail_header
  .menu_detail_header_left
  .menu_item_title {
  font-size: 0.7rem;
  color: #666;
  font-weight: 700;
}
.menu_container
  .menu_right
  .menu_detail_header
  .menu_detail_header_left
  .menu_item_description {
  font-size: 0.5rem;
  color: #999;
  width: 30%;
  overflow: hidden;
}
.menu_container .menu_right .menu_detail_header .menu_detail_header_right {
  width: 0.5rem;
  height: 1rem;
  display: block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAAXNSR0IArs4c6QAAAFhJREFUOBFjYBgFoyEwGgKMs2bN8gQGwyxoUKQBwXZswUKuOhaQ4f///5cBGcrIyAiySBbExgLIUseExSCqCoEsSAO6/AkIg9h4TKe2OjxWjUqNhsDwCgEACvMiGUpibN4AAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-size: 100% 0.4rem;
  background-position: 0;
}
.menu_container .menu_right .menu_detail_header .description_tip {
  background-color: #39373a;
  opacity: 0.95;
  font-size: 0.5rem;
  color: #fff;
  position: absolute;
  top: 1.5rem;
  z-index: 14;
  width: 8rem;
  right: 0.2rem;
  padding: 0.5rem 0.4rem;
  border: 1px;
  border-radius: 0.2rem;
}
.menu_container .menu_right .menu_detail_header .description_tip span {
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.55rem;
}
.menu_container .menu_right .menu_detail_header .description_tip::after {
  content: "";
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  background-color: #39373a;
  top: -0.5rem;
  right: 0.7rem;
  transform: rotate(-45deg) translateY(0.41rem);
}
.menu_container .menu_right .menu_detail_list {
  background-color: #fff;
  padding: 0.6rem 0.4rem;
  border-bottom: 1px solid #f8f8f8;
  position: relative;
  overflow: hidden;
}
.menu_container .menu_right .menu_detail_list .menu_detail_link {
  display: flex;
}
.menu_container .menu_right .menu_detail_list .menu_detail_link .menu_food_img {
  margin-right: 0.4rem;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_img
  img {
  width: 2rem;
  height: 2rem;
  display: block;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_description {
  width: 100%;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_description
  .food_description_head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_description
  .food_description_head
  .description_foodname {
  font-size: 0.7rem;
  color: #333;
}
strong {
  font-weight: bold;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_description
  .food_description_content {
  font-size: 0.5rem;
  color: #999;
  line-height: 0.6rem;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_description
  .food_description_sale_rating {
  line-height: 0.8rem;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_description
  .food_description_sale_rating
  span {
  font-size: 0.5rem;
  color: #333;
  padding: 0 0.1rem;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_description
  .food_activity {
  line-height: 0.4rem;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_link
  .menu_food_description
  .food_activity
  span {
  font-size: 0.3rem;
  border: 1px solid currentColor;
  border-radius: 0.3rem;
  padding: 0.08rem;
  display: inline-block;
  transform: scale(0.8);
  margin-left: -0.35rem;
}
.menu_container .menu_right .menu_detail_list .menu_detail_footer {
  margin-left: 2.4rem;
  font-size: 0;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_footer
  .food_price
  span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_footer
  .food_price
  span:first-of-type {
  font-size: 0.5rem;
  color: #f60;
  margin-right: 0.05rem;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_footer
  .food_price
  span:nth-of-type(2) {
  font-size: 0.7rem;
  color: #f60;
  font-weight: 700;
  margin-right: 0.3rem;
}
.menu_container
  .menu_right
  .menu_detail_list
  .menu_detail_footer
  .food_price
  span:nth-of-type(3) {
  font-size: 0.5rem;
  color: #666;
}
.cart_module .choose_specification .choose_icon_container {
  display: flex;
  align-items: center;
}
.cart_module .choose_specification .choose_icon_container .show_chooselist {
  display: block;
  font-size: 0.55rem;
  color: #fff;
  padding: 0.1rem 0.2rem;
  background-color: #3190e8;
  border-radius: 0.2rem;
  border-radius: 1px solid #3190e8;
}
.cart_module .cart_button {
  display: flex;
  align-items: center;
}
.cart_module .add_icon {
  position: relative;
  z-index: 999;
}
.cart_module svg {
  width: 0.9rem;
  height: 0.9rem;
  fill: #3190e8;
}
.buy_cart_container {
  position: fixed;
  background-color: #3d3d3f;
  bottom: 0;
  left: 0;
  z-index: 13;
  display: flex;
  width: 100%;
  height: 2rem;
}
.buy_cart_container .cart_icon_num {
  flex: 1;
}
.buy_cart_container .cart_icon_num .cart_icon_container {
  display: flex;
  background-color: #3d3d3f;
  position: absolute;
  padding: 0.4rem;
  border: 0.18rem solid #444;
  border-radius: 50%;
  left: 0.5rem;
  top: -0.7rem;
}
.buy_cart_container .cart_icon_num .cart_icon_container .cart_icon {
  width: 1.2rem;
  height: 1.2rem;
}
.buy_cart_container .cart_icon_num .cart_num {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 3.5rem;
}
.buy_cart_container .cart_icon_num .cart_num div {
  color: #fff;
}
.buy_cart_container .cart_icon_num .cart_num div:first-of-type {
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
}
.buy_cart_container .cart_icon_num .cart_num div:nth-of-type(2) {
  font-size: 0.4rem;
}
.buy_cart_container .gotopay {
  position: absolute;
  right: 0;
  background-color: #535356;
  width: 5rem;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.buy_cart_container .gotopay .gotopay_button_style {
  font-size: 0.7rem;
  color: #fff;
  font-weight: 700;
}
.specs_cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 17;
}
.specs_list {
  position: fixed;
  top: 35%;
  left: 15%;
  width: 70%;
  background-color: #fff;
  z-index: 18;
  border: 1px;
  border-radius: 0.2rem;
}
.specs_list .specs_list_header h4 {
  font-size: 0.7rem;
  color: #222;
  font-weight: 400;
  text-align: center;
  padding: 0.5rem;
}
.specs_list .specs_list_header .specs_cancel {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}
.specs_list .specs_details {
  padding: 0.5rem;
}
.specs_list .specs_details .specs_details_title {
  font-size: 0.6rem;
  color: #666;
}
.specs_list .specs_details ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0.4rem 0;
}
.specs_list .specs_details ul li {
  font-size: 0.6rem;
  padding: 0.3rem 0.5rem;
  border: 0.025rem solid #ddd;
  border-radius: 0.2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.2rem;
}
.specs_list .specs_details ul .specs_activity {
  border-color: #3199e8;
  color: #3199e8;
}
.specs_list .specs_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 0.5rem;
  border: 1px;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}
.specs_list .specs_footer .specs_price span {
  color: #ff6000;
}
.specs_list .specs_footer .specs_price span:first-of-type {
  font-size: 0.5rem;
}
.specs_list .specs_footer .specs_price span:nth-of-type(2) {
  font-size: 0.8rem;
  font-weight: 700;
  font-family: Helvetica Neue, Tahoma;
}
.specs_list .specs_footer .specs_addto_cart {
  width: 4rem;
  height: 1.3rem;
  background-color: #3199e8;
  border: 1px;
  border-radius: 0.15rem;
  font-size: 0.6rem;
  color: #fff;
  text-align: center;
  line-height: 1.3rem;
}
.cart_food_list {
  position: fixed;
  width: 100%;
  padding-bottom: 2rem;
  z-index: 12;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
.cart_food_list header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.6rem;
  background-color: #eceff1;
}
.cart_food_list header h4 {
  font-size: 0.7rem;
  color: #666;
}
.cart_food_list header .clear_cart {
  font-size: 0.6rem;
  color: #666;
}
.cart_food_list .cart_food_details {
  background-color: #fff;
  max-height: 20rem;
  overflow-y: auto;
}
.cart_food_list .cart_food_details .cart_food_li {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.5rem;
}
.cart_food_list .cart_food_details .cart_food_li .cart_list_num {
  width: 55%;
}
.cart_food_list
  .cart_food_details
  .cart_food_li
  .cart_list_num
  p:first-of-type {
  font-size: 0.7rem;
  color: #666;
  font-weight: 700;
}
.cart_food_list
  .cart_food_details
  .cart_food_li
  .cart_list_num
  p:nth-of-type(2) {
  font-size: 0.4rem;
  color: #666;
}
.cart_food_list .cart_food_details .cart_food_li .cart_list_price {
  font-size: 0;
}
.cart_food_list
  .cart_food_details
  .cart_food_li
  .cart_list_price
  span:first-of-type {
  font-size: 0.6rem;
  color: #f60;
  font-family: Helvetica Neue, Tahoma;
}
.cart_food_list
  .cart_food_details
  .cart_food_li
  .cart_list_price
  span:nth-of-type(2) {
  font-size: 0.7rem;
  color: #f60;
  font-family: Helvetica Neue, Tahoma;
  font-weight: 700;
}
.cart_food_list .cart_food_details .cart_food_li .cart_list_control {
  display: flex;
  align-items: center;
}
.cart_food_list .cart_food_details .cart_food_li .cart_list_control span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart_food_list .cart_food_details .cart_food_li .cart_list_control svg {
  width: 0.9rem;
  height: 0.9rem;
  fill: #3190e8;
}
.cart_food_list .cart_food_details .cart_food_li .cart_list_control .cart_num {
  font-size: 0.65rem;
  color: #666;
  min-width: 1rem;
  text-align: center;
  font-family: Helvetica Neue, Tahoma;
}
.screen_cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 11;
}
.buy_cart_container .cart_icon_num .cart_icon_activity {
  background-color: #3190e8;
}
.buy_cart_container .cart_icon_num .cart_icon_container .cart_list_length {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background-color: #ff461d;
  line-height: 0.7rem;
  text-align: center;
  border-radius: 50%;
  border: 0.025rem solid #ff461d;
  min-width: 0.7rem;
  height: 0.7rem;
  font-size: 0.5rem;
  color: #fff;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.cart_module .specs_reduce_icon {
  fill: #999;
}
.cart_module .cart_num {
  font-size: 0.65rem;
  color: #666;
  min-width: 1rem;
  text-align: center;
  font-family: Helvetica Neue, Tahoma;
}
.show_delete_tip {
  position: fixed;
  top: 50%;
  left: 15%;
  width: 70%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 18;
  font-size: 0.65rem;
  color: #fff;
  text-align: center;
  padding: 0.5rem 0;
  border: 1px;
  border-radius: 0.25rem;
}
.buy_cart_container .gotopay_activity {
  background-color: #4cd964;
}
.buy_cart_container .gotopay .gotopay_button_style {
  font-size: 0.7rem;
  color: #fff;
  font-weight: 700;
}
.activities_details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #262626;
  z-index: 200;
  padding: 1.25rem;
}
.activities_details .activities_shoptitle {
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
}
.activities_details .activities_ratingstar {
  display: flex;
  justify-content: center;
  transform: scale(2.2);
  margin-top: 0.7rem;
}
.activities_details .activities_list {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.5rem;
  color: #fff;
}
.activities_details .activities_title_style {
  text-align: center;
  margin-bottom: 1rem;
}
.activities_details .activities_title_style span {
  font-size: 0.5rem;
  color: #fff;
  border: 0.025rem solid #555;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
}
.activities_details .activities_list li {
  margin-bottom: 0.2rem;
}
.activities_details .activities_list li .activities_icon {
  padding: 0 0.02rem;
  display: inline-block;
  border: 0.025rem solid #fff;
  border-radius: 0.1rem;
}
.activities_details .activities_list li span {
  color: #fff;
  line-height: 0.6rem;
}
.activities_details .activities_shopinfo p {
  line-height: 0.7rem;
  font-size: 0.5rem;
  color: #fff;
}
.activities_details .close_activities {
  bottom: 1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>