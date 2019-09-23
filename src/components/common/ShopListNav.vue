<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="shop_header">
          <a class="shop_search" @click.prevent="$router.go(-1)">
            <i class="fa fa-chevron-left"></i>
          </a>
          <a>{{title}}</a>
          <a class="shop_user">
            <i class="fa fa-user" fa-2x></i>
          </a>
        </div>

        <ShopListSelect @click="updateTitle" :title="title" />

        <!-- <ShopListShow /> -->
      </div>
    </div>
  </div>
</template>

<script>
import ShopListSelect from "../../views/ShopListSelect";
// import ShopListShow from "../../views/ShopListShow";
export default {
  name: "ShopListNav",
  components: {
    ShopListSelect
  },
  data() {
    return {
      title: ""
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getTitle(JSON.parse(to.query.title));
    });
  },
  methods: {
    getTitle(title) {
      this.title = title;
    },
    updateTitle(selectTitle) {
      this.title = selectTitle;
      console.log(selectTitle);
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
</style>
