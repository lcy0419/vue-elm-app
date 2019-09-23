<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="shop_header">
          <a class="shop_search" @click.prevent="$router.go(-1)">
            <i class="fa fa-chevron-left"></i>
          </a>
          <a class="sureOrder">选择发票抬头</a>
          <a class="shop_user">
            <i class="fa fa-user" fa-2x></i>
          </a>
        </div>

        <div class="choose_invoice">
          <span>不需要开发票</span>
          <i class="fa fa-check-circle" @click="change" :class="{changeColor:show}"></i>
        </div>
        <div class="determine" @click.prevent="getBack">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectBill",
  data() {
    return {
      show: false
    };
  },
  methods: {
    change() {
      this.show = !this.show;
    },
    getBack() {
      this.$router.push("/SureOrder");
    }
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

.choose_invoice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  line-height: 2.5rem;
  margin-top: 2rem;
  padding: 0 0.7rem;
}
.choose_invoice i {
  font-size: 0.75rem;
  text-align: center;
  color: #ccc;
}
.choose_invoice span {
  font-size: 0.75rem;
  color: #333;
}
.determine {
  background: #4cd964;
  font-size: 0.7rem;
  color: #fff;
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
}
.changeColor {
  color: #4cd964 !important;
}
</style>
