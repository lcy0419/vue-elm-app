<template>
  <div>
    <div class="confirm_order">
      <p>待支付 ¥{{price}}</p>
      <p @click.prevent="$router.push('/PayFor')">确认下单</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SureOrderFooter",
  props: {
    price: Number
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.confirm_order {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2rem;
}
.confirm_order p:nth-child(1) {
  background: #3c3c3c;
  flex: 5;
  padding-left: 0.7rem;
  line-height: 2rem;
  font-size: 0.75rem;
  color: #fff;
}
.confirm_order p:nth-child(2) {
  flex: 2;
  background: #56d176;
  text-align: center;
  line-height: 2rem;
  font-size: 0.75rem;
  color: #fff;
}
</style>
