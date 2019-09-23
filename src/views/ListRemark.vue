<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="shop_header">
          <a class="shop_search" @click.prevent="$router.go(-1)">
            <i class="fa fa-chevron-left"></i>
          </a>
          <a class="remark">订单备注</a>
          <a class="shop_user">
            <i class="fa fa-user" fa-2x></i>
          </a>
        </div>

        <div class="quick_remark">
          <div class="header_style">快速备注</div>
          <ul class="remark_arr_list_ul" v-for="(remark,index) in remarks" :key="index">
            <li class="remark_arr_list_li" v-for="(mark,index1) in remark" :key="index1">
              <span
                class="remark_item_li first"
                @click="selectColor(index1,index2)"
                v-for="(marks,index2) in mark"
                :key="index2"
              >{{marks}}</span>
              <!-- <span
                class="remark_item_li"
                v-show="mark[1] ? true : false"
                @click="selectColor(mark[1])"
                :class="timeIndex == mark[1]? 'changeColor' : false"
              >{{mark[1]}}</span>
              <span
                class="remark_item_li last"
                v-show="mark[2] ? true : false"
                @click="selectColor(mark[2])"
                :class="timeIndex == mark[2]? 'changeColor' : false"
              >{{mark[2]}}</span>-->
            </li>
            <!-- <li class="remark_arr_list_li">
              <span class="remark_item_li first last">不要香菜</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first last">不要洋葱</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first last">多点醋</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first last">多点葱</span>
            </li>
            <li class="remark_arr_list_li">
              <span class="remark_item_li first">去冰</span>
              <span class="remark_item_li last">少冰</span>
            </li>-->
          </ul>
        </div>

        <div class="input_remark quick_remark">
          <div class="header_style">其他备注</div>
          <textarea placeholder="请输入备注内容(可不填)" class="input_text"></textarea>
        </div>

        <div class="determine" @click="getBack">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListRemark",
  data() {
    return {
      remarks: {},
      timeIndex: 0,
      show: false
    };
  },
  methods: {
    getRemark() {
      this.$axios
        .get("/v1/carts/1/remarks")
        .then(res => {
          console.log(res.data);
          this.remarks = res.data;
          console.log(this.remarks);
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    selectColor(index1, index2) {
      var span = document.querySelectorAll(".remark_arr_list_li");
      for (var i = 0; i < span[index1].childNodes.length; i++) {
        span[index1].childNodes[i].className = "remark_item_li first";
      }
      // console.log(span);
      // this.timeIndex = index;
      span[index1].childNodes[index2].className =
        "remark_item_li first changeColor";
    },
    getBack() {
      this.$router.push("/SureOrder");
    }
  },
  created() {
    this.getRemark();
  },
  mounted() {
    this.getRemark();
    this.selectColor();
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.changeColor {
  color: #fff !important;
  background-color: #3190e8;
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
  visibility: hidden;
  opacity: 0;
}
.shop_header .remark {
  font-size: 0.8rem;
  color: #fff;
  font-weight: 700;
}

.quick_remark {
  background: #fff;
  margin-top: 2rem;
  padding: 0 0.6rem 1rem;
}
.header_style {
  font-size: 0.65rem;
  color: #333;
  line-height: 2rem;
}
.remark_arr_list_ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.remark_arr_list_li {
  margin-right: 0.6rem;
  margin-bottom: 1rem;
}
.quick_remark ul li .first {
  border-left: 0.025rem solid #3190e8;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.quick_remark ul li span {
  font-size: 0.6rem;
  color: #333;
  padding: 0.3rem 0.6rem;
  border: 0.025rem solid #3190e8;
  border-left: 0;
}
.quick_remark ul li .last {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.input_remark {
  background: #fff;
  margin-top: 0.3rem;
}
.input_remark .input_text {
  width: 100%;
  background: #f9f9f9;
  border: 0.025rem solid #eee;
  resize: none;
  min-height: 4.5rem;
  border-radius: 0.2rem;
  font-size: 0.6rem;
  color: #666;
  padding: 0.5rem;
}

.determine {
  background: #4cd964;
  font-size: 0.7rem;
  color: #fff;
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
}
</style>
