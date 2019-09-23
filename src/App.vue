<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->

    <Loading v-show="getLoading" />
  </div>
</template>

<script>
import Loading from "./components/common/Loading";
import { mapGetters } from "vuex";
export default {
  components: {
    Loading
  },
  computed: mapGetters(["getLoading"])
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 50px;
}

@media screen and (max-width: 320px) {
  html {
    font-size: 12px;
  }
}
@media screen and (min-width: 320px) and (max-width: 360px) {
  html {
    font-size: 20px;
  }
}
@media screen and (min-width: 360px) and (max-width: 375px) {
  html {
    font-size: 22.5px;
  }
}
@media screen and (min-width: 375px) and (max-width: 411px) {
  html {
    font-size: 23.4375px;
  }
}
@media screen and (min-width: 411px) and (max-width: 414px) {
  html {
    font-size: 25.6875px;
  }
}
@media screen and (min-width: 414px) and (max-width: 768px) {
  html {
    font-size: 25.875px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  html {
    font-size: 48px;
  }
}
@media screen and (min-width: 1024) {
  html {
    font-size: 64px;
  }
}

#app {
  background-color: #f5f5f5;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
input {
  outline: none;
}
.left {
  float: left;
}
.right {
  float: right;
}
.clear {
  overflow: hidden;
}
ul {
  list-style-type: none;
}
</style>
