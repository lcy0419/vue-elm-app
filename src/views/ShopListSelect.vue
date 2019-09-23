<template>
  <div>
    <div class="shopListTop">
      <div class="dropdown">
        <button id="dLabel" type="button" @click.prevent="changeTop()">
          <span class="blueOne">{{title}}</span>

          <span class="caret caretOne"></span>
        </button>
        <div class="dropdown-menu toggleOne" style="display:none">
          <div class="menuSelect">
            <div class="menuLeft">
              <ul>
                <li
                  v-for="(shoppingName,index) in shoppingNames"
                  :key="index"
                  @click.prevent="getShoppingNum(shoppingName.sub_categories,index)"
                  :class="timeIndex == index ? 'changeBgColor': false"
                >
                  <span>
                    <img
                      src="https://elm.cangdu.org/img/default.jpg"
                      v-if="shoppingName.image_url==''"
                    />
                    <img
                      v-else
                      :src="'https://fuss10.elemecdn.com/' + shoppingName.image_url + (shoppingName.image_url.indexOf('jpeg') == -1 ? '.png' : '.jpeg' )  "
                    />
                    <span>{{shoppingName.name}}</span>
                  </span>
                  <span>
                    <span class="num">{{shoppingName.count}}</span>
                    <i class="fa fa-angle-right" v-show="shoppingName.id == 260 ? false : true"></i>
                  </span>
                </li>
              </ul>
            </div>

            <div class="menuRight">
              <ul>
                <li
                  v-for="(subArr,index) in subArrs"
                  :key="index"
                  v-show="subArr.count == 0 ? false:true"
                  @click="changeTitle(subArr.name),changeInfo(31.22967, 121.4762,subArr.id),changeOther(index,subArr.name)"
                >
                  <a href="#" :class="timeIndex == index? 'changeColor' : false">{{subArr.name}}</a>
                  <span :class="timeIndex == index? 'changeColor' : false">{{subArr.count}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <button id="dLabel" type="button" @click.prevent="changeMiddle()">
          <span class="blueTwo">排序</span>
          <span class="caret caretTwo"></span>
        </button>
        <div class="dropdown-menu toggleTwo" style="display:none">
          <div class="menuSelectTwo">
            <ul>
              <li>
                <span>
                  <i class="fa fa-arrows-v"></i>
                </span>
                <p @click="completeDefault" :class="{changeColor:appear.default}">
                  智能排序
                  <i class="fa fa-check" v-if="appear.default"></i>
                </p>
              </li>
              <li>
                <span>
                  <i class="fa fa-map-marker"></i>
                </span>
                <p @click="completeDistance" :class="{changeColor:appear.distance}">
                  距离最近
                  <i class="fa fa-check" v-if="appear.distance"></i>
                </p>
              </li>
              <li>
                <span>
                  <i class="fa fa-free-code-camp"></i>
                </span>
                <p @click="completeSales" :class="{changeColor:appear.sales}">
                  销量最高
                  <i class="fa fa-check" v-if="appear.sales"></i>
                </p>
              </li>
              <li>
                <span>
                  <i class="fa fa-jpy"></i>
                </span>
                <p @click="completePrice" :class="{changeColor:appear.price}">
                  起送价最低
                  <i class="fa fa-check" v-if="appear.price"></i>
                </p>
              </li>
              <li>
                <span>
                  <i class="fa fa-clock-o"></i>
                </span>
                <p @click="completeSpeed" :class="{changeColor:appear.speed}">
                  配送速度最快
                  <i class="fa fa-check" v-if="appear.speed"></i>
                </p>
              </li>
              <li>
                <span>
                  <i class="fa fa-star-o"></i>
                </span>
                <p @click="completeScore" :class="{changeColor:appear.score}">
                  评分最高
                  <i class="fa fa-check" v-if="appear.score"></i>
                </p>
              </li>
            </ul>
          </div>
          <!-- <ShopListSelectOrder /> -->
        </div>
      </div>

      <div class="dropdown">
        <button id="dLabel" type="button" @click.prevent="changeFooter()">
          <span class="blueThree">筛选</span>
          <span class="caret caretThree"></span>
        </button>
        <div class="dropdown-menu toggleThree" style="display:none">
          <div class="menuSelectThree">
            <div class="selectHeader">
              <div>配送方式</div>
              <ul>
                <li
                  v-for="(delivery,index) in deliverys"
                  :key="index"
                  @click="changeBird(index,delivery.id)"
                >
                  <i class="fa fa-check exit" v-if="color"></i>

                  <i class="fa fa-bicycle" :style="{color:'#'+delivery.color}" v-else></i>
                  <span :class="{changeColor:color}">{{delivery.text}}</span>
                </li>
              </ul>
            </div>

            <div class="selectContent">
              <div>商家属性 (可以多选)</div>
              <ul>
                <li
                  v-for="(attribute,index) in attributes"
                  :key="index"
                  @click="changeStyle(index,attribute.id)"
                >
                  <span
                    class="activity"
                    :style="{color:'#'+attribute.icon_color,borderColor:'#'+attribute.icon_color}"
                    :class="{changeDisplay:arr[index]}"
                  >{{attribute.icon_name}}</span>
                  <i class="fa fa-check exit" :class="{changeDis:arr[index]}"></i>

                  <span :class="{changeColor:arr[index]}">{{attribute.name}}</span>
                </li>
              </ul>
            </div>

            <div class="selectFooter">
              <div class="empty" @click="cancel">清空</div>
              <div
                class="sure"
                @click="sure(attributeIds[0],attributeIds[1],attributeIds[2],attributeIds[3],attributeIds[4],attributeIds[5],deliveryId)"
              >
                确定
                <span v-if="count > 0 ? true : false">({{count}})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :class="{backHover:show}"></div>

    <ShopListShow :prices="prices" :restaurants="restaurants" />
  </div>
</template>

<script>
import ShopListShow from "./ShopListShow";
// import ShopListSelectOrder from "./ShopListSelectOrder";
export default {
  name: "ShopListSelect",
  components: {
    ShopListShow
  },
  data() {
    return {
      shoppingNames: {},
      subArrs: {},
      deliverys: {},
      attributes: {},
      timeIndex: 0,
      arr: [],
      show: false,
      num: 0,
      prices: [],
      appear: {
        default: false,
        distance: false,
        sales: false,
        price: false,
        speed: false,
        score: false
      },
      restaurants: [],
      id: 0,
      count: 0,
      color: false,
      attributeIds: [],
      deliveryId: []
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    changeTop() {
      var caretOne = document.getElementsByClassName("caretOne")[0];
      var caretTwo = document.getElementsByClassName("caretTwo")[0];
      var caretThree = document.getElementsByClassName("caretThree")[0];

      var toggleOne = document.getElementsByClassName("toggleOne")[0];
      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];
      var toggleThree = document.getElementsByClassName("toggleThree")[0];

      var blueOne = document.getElementsByClassName("blueOne")[0];
      var blueTwo = document.getElementsByClassName("blueTwo")[0];
      var blueThree = document.getElementsByClassName("blueThree")[0];

      if (toggleOne.style.display == "none") {
        toggleOne.style.display = "block";
        caretOne.style.transition = "all 0.5s";
        caretOne.style.transform = "rotate(180deg)";
        caretTwo.style.transform = "rotate(0deg)";
        caretThree.style.transform = "rotate(0deg)";

        blueOne.innerHTML = "分类";
        blueOne.style.color = "#3190e8";
        blueTwo.style.color = "";
        blueThree.style.color = "";

        toggleTwo.style.display = "none";
        toggleThree.style.display = "none";
        this.show = true;
      } else {
        // blueOne.style.color = "";
        blueOne.innerHTML = this.title;
        blueOne.style.color = "";

        toggleOne.style.display = "none";
        caretOne.style.transition = "all 0.5s";
        caretOne.style.transform = "rotate(0)";
        this.show = false;
      }
    },
    changeMiddle() {
      var caretOne = document.getElementsByClassName("caretOne")[0];
      var caretTwo = document.getElementsByClassName("caretTwo")[0];
      var caretThree = document.getElementsByClassName("caretThree")[0];

      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];
      var toggleOne = document.getElementsByClassName("toggleOne")[0];
      var toggleThree = document.getElementsByClassName("toggleThree")[0];

      var blueOne = document.getElementsByClassName("blueOne")[0];
      var blueTwo = document.getElementsByClassName("blueTwo")[0];
      var blueThree = document.getElementsByClassName("blueThree")[0];

      // console.log(toggle.className);
      if (toggleTwo.style.display == "none") {
        toggleTwo.style.display = "block";
        caretTwo.style.transition = "all 0.5s";

        caretTwo.style.transform = "rotate(180deg)";
        caretThree.style.transform = "rotate(0deg)";
        caretOne.style.transform = "rotate(0deg)";

        blueTwo.style.color = "#3190e8";
        blueThree.style.color = "";
        blueOne.style.color = "";
        blueOne.innerHTML = this.title;

        toggleOne.style.display = "none";
        toggleThree.style.display = "none";
        this.show = true;
      } else {
        blueTwo.style.color = "";

        toggleTwo.style.display = "none";
        caretTwo.style.transition = "all 0.5s";
        caretTwo.style.transform = "rotate(0)";
        this.show = false;
      }
    },
    changeFooter() {
      var caretOne = document.getElementsByClassName("caretOne")[0];
      var caretTwo = document.getElementsByClassName("caretTwo")[0];
      var caretThree = document.getElementsByClassName("caretThree")[0];

      var toggleOne = document.getElementsByClassName("toggleOne")[0];
      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];

      var blueOne = document.getElementsByClassName("blueOne")[0];
      var toggleThree = document.getElementsByClassName("toggleThree")[0];
      var blueTwo = document.getElementsByClassName("blueTwo")[0];

      var blueThree = document.getElementsByClassName("blueThree")[0];

      if (toggleThree.style.display == "none") {
        toggleThree.style.display = "block";
        caretThree.style.transition = "all 0.5s";

        caretThree.style.transform = "rotate(180deg)";
        caretTwo.style.transform = "rotate(0deg)";
        caretOne.style.transform = "rotate(0deg)";

        blueThree.style.color = "#3190e8";
        blueTwo.style.color = "";
        blueOne.style.color = "";
        blueOne.innerHTML = this.title;

        toggleTwo.style.display = "none";
        toggleOne.style.display = "none";
        this.show = true;
      } else {
        blueThree.style.color = "";

        toggleThree.style.display = "none";
        caretThree.style.transition = "all 0.5s";
        caretThree.style.transform = "rotate(0)";
        this.show = false;
      }
    },
    getShoppingName() {
      this.$axios
        .get("/shopping/v2/restaurant/category")
        .then(res => {
          // console.log(res.data);
          this.shoppingNames = res.data;
        })
        .catch(err => {
          // console.log(err.response.data);
        });
    },
    getShoppingNum(subArr, index) {
      this.subArrs = subArr;
      console.log(this.subArrs);
      this.timeIndex = index;
    },
    getDelivery() {
      this.$axios.get("/shopping/v1/restaurants/delivery_modes").then(res => {
        console.log(res.data);

        this.deliverys = res.data;
      });
    },
    getAttribute() {
      this.$axios
        .get("/shopping/v1/restaurants/activity_attributes")
        .then(res => {
          console.log(res.data);
          this.attributes = res.data;
          // console.log(this.attributes.length);
          for (var i = 0; i < this.attributes.length; i++) {
            this.arr.push(false);
          }
        });
    },
    changeBird(index, deliveryId) {
      this.color = !this.color;
      var span = document.querySelectorAll(".selectHeader span");
      if (span[index].className == "changeColor") {
        this.count--;
      } else {
        this.count++;
      }
      // this.deliveryId = deliveryId;

      if (this.deliveryId.indexOf(deliveryId) == -1) {
        this.deliveryId.push(deliveryId);
      } else {
        var a = this.deliveryId.indexOf(deliveryId);

        this.deliveryId.splice(a, 1);
      }
    },
    changeStyle(index, attributeIds) {
      for (var i = 0; i < this.arr.length; i++) {
        if (i === index) {
          this.arr[index]
            ? this.arr.splice(index, 1, false)
            : this.arr.splice(index, 1, true);
        }
      }
      var span = document.querySelectorAll(
        ".selectContent ul li span:nth-of-type(2)"
      );
      if (span[index].className == "changeColor") {
        this.count--;
      } else {
        this.count++;
      }

      if (this.attributeIds.indexOf(attributeIds) == -1) {
        this.attributeIds.push(attributeIds);
      } else {
        var a = this.attributeIds.indexOf(attributeIds);
        // console.log(a);

        this.attributeIds.splice(a, 1);
      }
      // console.log(this.attributeIds);
    },
    cancel() {
      this.count = 0;
      this.arr = [];
      this.color = false;
      this.getAttribute();
    },
    sure(count1, count2, count3, count4, count5, count6, deliveryId) {
      var toggleThree = document.getElementsByClassName("toggleThree")[0];
      toggleThree.style.display = "none";
      this.show = false;
      this.changeInfo(
        31.22967,
        121.4762,
        this.id,
        null,
        count1,
        count2,
        count3,
        count4,
        count5,
        count6,
        deliveryId
      );
      // this.$axios.get("/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=null&delivery_mode[]=1&support_ids[]=8&support_ids[]=7&support_ids[]=9&support_ids[]=4")
    },
    changeTitle(selectTitle) {
      this.$emit("click", selectTitle);
    },
    changeInfo(
      latitude,
      longitude,
      id,
      num,
      count1,
      count2,
      count3,
      count4,
      count5,
      count6,
      station
    ) {
      this.id = id;
      this.$axios
        .get(
          // `/shopping/restaurants?latitude=${latitude}&longitude=${longitude}&restaurant_category_id=239`
          `shopping/restaurants?latitude=${latitude}&longitude=${longitude}&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=${id}&order_by=${num}&delivery_mode[]=${station}&support_ids[]=${count1}&support_ids[]=${count2}&support_ids[]=${count3}&support_ids[]=${count4}&support_ids[]=${count5}&support_ids[]=${count6}`
        )
        .then(res => {
          // console.log(this.subArrs);

          // console.log(res.data);
          this.restaurants = res.data;
          // console.log(this.restaurants);
        });
    },
    changeOther(index, subArrName) {
      var toggleOne = document.getElementsByClassName("toggleOne")[0];
      var caretOne = document.getElementsByClassName("caretOne")[0];
      var blueOne = document.getElementsByClassName("blueOne")[0];
      blueOne.innerHTML = subArrName;

      blueOne.style.color = "";

      toggleOne.style.display = "none";
      caretOne.style.transform = "rotate(0deg)";

      this.show = false;
      this.timeIndex = index;
    },
    getOrder(latitude, longitude, num) {
      this.$axios
        .get(
          `/shopping/restaurants?latitude=${latitude}&longitude=${longitude}&order_by=${num}`
        )
        .then(res => {
          // console.log(res.data);
          this.prices = res.data;
          this.$store.dispatch("setPriceAsync", res.data);
        });
    },
    completePrice() {
      // this.getOrder(31.22967, 121.4762, 1);

      this.changeInfo(31.22967, 121.4762, this.id, 1);

      console.log(this.prices);
      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];
      toggleTwo.style.display = "none";
      this.show = false;
      this.appear.price = true;
      this.appear.speed = false;
      this.appear.score = false;
      this.appear.default = false;
      this.appear.sales = false;
      this.appear.distance = false;
    },
    completeSpeed() {
      // this.getOrder(31.22967, 121.4762, 2);

      this.changeInfo(31.22967, 121.4762, this.id, 2);

      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];
      toggleTwo.style.display = "none";
      this.show = false;
      this.appear.speed = true;
      this.appear.price = false;
      this.appear.score = false;
      this.appear.default = false;
      this.appear.sales = false;
      this.appear.distance = false;
    },
    completeScore() {
      // this.getOrder(31.22967, 121.4762, 3);

      this.changeInfo(31.22967, 121.4762, this.id, 3);

      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];
      toggleTwo.style.display = "none";
      this.show = false;
      this.appear.score = true;
      this.appear.price = false;
      this.appear.speed = false;
      this.appear.default = false;
      this.appear.sales = false;
      this.appear.distance = false;
    },
    completeDefault() {
      // this.getOrder(31.22967, 121.4762, 4);

      this.changeInfo(31.22967, 121.4762, this.id, 4);

      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];
      toggleTwo.style.display = "none";
      this.show = false;
      this.appear.default = true;
      this.appear.price = false;
      this.appear.speed = false;
      this.appear.score = false;
      this.appear.sales = false;
      this.appear.distance = false;
    },
    completeDistance() {
      // this.getOrder(31.22967, 121.4762, 5);

      this.changeInfo(31.22967, 121.4762, this.id, 5);

      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];
      toggleTwo.style.display = "none";
      this.show = false;
      this.appear.distance = true;
      this.appear.price = false;
      this.appear.speed = false;
      this.appear.score = false;
      this.appear.default = false;
      this.appear.sales = false;
    },
    completeSales() {
      // this.getOrder(31.22967, 121.4762, 6);

      this.changeInfo(31.22967, 121.4762, this.id, 6);

      var toggleTwo = document.getElementsByClassName("toggleTwo")[0];
      toggleTwo.style.display = "none";
      this.show = false;
      this.appear.sales = true;
      this.appear.price = false;
      this.appear.speed = false;
      this.appear.score = false;
      this.appear.default = false;
      this.appear.distance = false;
    }
  },

  created() {
    this.getShoppingName();
    this.getDelivery();
    this.getAttribute();
    this.getOrder();
    this.changeInfo();
  }
};
</script>

<style scoped>
.changeBgColor {
  background: #fff !important;
}
.changeColor {
  color: #3190e8 !important;
}
.changeDisplay {
  display: none;
}
.changeDis {
  display: block !important;
}

.backHover {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 4;
  background: rgba(0, 0, 0, 0.3);
}

.previous {
  color: #333;
  font-size: 0.4rem;
}
.shopListTop {
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-bottom: 0.025rem solid #f1f1f1;
  position: fixed;
  top: 1.95rem;
  z-index: 5;
}
.dropdown {
  font-size: 0.55rem;
  color: #444;
  width: 33.33%;
  height: 1.6rem;
  text-align: center;
  line-height: 1rem;
}
.dropdown button {
  border: none;
  width: 100%;
  height: 1rem;
  background: #ffffff;
  border-right: 0.025rem solid #f1f1f1;
  margin-top: 0.3rem;
  outline: none;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

.dropdown-menu {
  width: 300%;
  background: none;
  box-shadow: none;
  border: none;
  top: 1.3rem;
}
.menuSelect {
  display: flex;
  flex-direction: row;
  height: 16rem;
  border-top: 0.025rem solid #e4e4e4;
}
.menuLeft,
.menuRight {
  width: 50%;
  height: 100%;
}
.menuLeft {
  background: #f1f1f1;
}
.menuLeft img {
  width: 0.8rem;
  height: 0.8rem;
  vertical-align: middle;
  margin-right: 0.2rem;
}
.menuLeft ul li .num {
  background: #ccc;
  font-size: 0.4rem;
  color: #fff;
  padding: 0 0.1rem;
  border: 0.025rem solid #ccc;
  border-radius: 8rem;
  vertical-align: middle;
  margin-right: 0.25rem;
}

.menuRight {
  background: #ffffff;
  height: 100%;
  overflow: auto;
}
.menuLeft ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  padding: 0.4rem;
}
.menuLeft ul li span {
  font-size: 0.5rem;
  color: #666;
}
.menuRight ul {
  padding-left: 0.5rem;
}
.menuRight ul li {
  display: flex;
  justify-content: space-between;
  height: 1.8rem;
  line-height: 1.8rem;
  padding-right: 0.5rem;
  border-bottom: 0.025rem solid #e4e4e4;
}
.menuRight ul li span,
a {
  color: #666;
}

.toggleTwo {
  position: absolute;
  left: -5.4rem;
}

.menuSelectTwo {
  background: #ffffff;
  border-top: 0.025rem solid #e4e4e4;
}

.menuSelectTwo ul li {
  height: 2.5rem;
  display: flex;
  align-items: center;
}
.menuSelectTwo ul li span i {
  width: 0.7rem;
  height: 0.7rem;
  margin: 0 0.3rem 0 0.8rem;
}
.menuSelectTwo ul li p {
  line-height: 2.5rem;
  text-align: left;
  text-indent: 0.25rem;
  border-bottom: 0.025rem solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #666;
  margin: 0;
}
.menuSelectTwo p i {
  margin-right: 0.25rem;
  font-size: 0.7rem;
}

.menuSelectThree {
  background: #ffffff;
  border-top: 0.025rem solid #e4e4e4;
}
.toggleThree {
  position: absolute;
  left: -10.8rem;
}
.selectHeader {
  width: 100%;
}
.selectHeader div {
  font-size: 0.4rem;
  color: #333;
  line-height: 1.5rem;
  height: 1.5rem;
  text-align: left;
  padding-left: 0.5rem;
  background: #fff;
}
.selectHeader ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  background: #fff;
  padding-top: 0rem;
}
.selectHeader ul li {
  display: flex;
  align-items: center;
  border: 0.025rem solid #eee;
  width: 4.7rem;
  height: 1.4rem;
  margin-right: 0.25rem;
  border-radius: 0.125rem;
  padding: 0 0.25rem;
  margin-bottom: 0.25rem;
}
.selectHeader ul li i {
  font-size: 0.5rem;
  margin-right: 0.25rem;
}
.selectHeader ul li span {
  font-size: 0.4rem;
  color: #333;
}
.selectHeader .exit {
  color: #3190e8;
  font-size: 0.8rem;
  margin-right: 0.1rem;
}
.selectContent {
  width: 100%;
}
.selectContent div {
  font-size: 0.4rem;
  color: #333;
  line-height: 1.5rem;
  height: 1.5rem;
  text-align: left;
  padding-left: 0.5rem;
  background: #fff;
}
.selectContent ul {
  padding-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.5rem;
  background: #fff;
}
.selectContent ul li {
  display: flex;
  align-items: center;
  border: 0.025rem solid #eee;
  width: 4.7rem;
  height: 1.4rem;
  margin-right: 0.25rem;
  border-radius: 0.125rem;
  padding: 0 0.25rem;
  margin-bottom: 0.25rem;
}
.selectContent ul li i {
  color: #3190e8;
  display: none;
  margin-right: 0.25rem;
  font-size: 0.8rem;
}
.selectContent ul li span:first-of-type {
  width: 0.8rem;
  height: 0.8rem;
  font-size: 0.5rem;
  border: 0.025rem solid #e4e4e4;
  border-radius: 0.15rem;
  margin-right: 0.25rem;
  line-height: 0.8rem;
  text-align: center;
}
.selectContent ul li span:last-of-type {
  font-size: 0.4rem;
  color: #333;
}
.selectFooter {
  display: flex;
  background: #f1f1f1;
  width: 100%;
  padding: 0.3rem 0.2rem;
}
.empty {
  background: #fff;
  margin-right: 0.5rem;
  border: 0.025rem solid #fff;
  width: 50%;
  height: 1.8rem;
  font-size: 0.8rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  text-align: center;
}
.sure {
  background: #56d176;
  color: #fff;
  border: 0.025rem solid #56d176;
  width: 50%;
  height: 1.8rem;
  font-size: 0.8rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  text-align: center;
}
/* .sure span {
  display: none;
  color: #fff;
} */
</style>