<template>
  <div id="nav" class="c-pf c-p-b0 c-ww640 c-box-shadow11 c-bg-white">
    <div class="c-hh96 c-flex-row c-aligni-center c-justify-sa c-p-b0">
      <div :class="$route.path === '/' ? 'c-fc-xsblue' : ''" @click="goHome">
        <div class="iconfont c-flex-column c-justify-center c-aligni-center c-fs46">&#xe629;</div>
        <div class="c-fs18 c-textAlign-c">首页</div>
      </div>
      <div :class="$route.path === '/shopping' ? 'c-fc-xsblue' : ''" @click="goShopping">
        <div class="iconfont c-flex-column c-justify-center c-aligni-center c-fs46">&#xe7c8;</div>
        <div class="c-fs18 c-textAlign-c">商城</div>
      </div>
      <div :class="$route.path === '/activity' ? 'c-fc-xsblue' : ''" @click="goActivity">
        <div class="iconfont c-flex-column c-justify-center c-aligni-center c-fs46">&#xe7c9;</div>
        <div class="c-fs18 c-textAlign-c">活动</div>
      </div>
      <div :class="$route.path === '/my' ? 'c-fc-xsblue' : ''" @click="goMy">
        <div class="iconfont c-flex-column c-justify-center c-aligni-center c-fs46">&#xe668;</div>
        <div class="c-fs18 c-textAlign-c">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
    goShopping() {
      this.$router.push('/shopping');
    },
    goActivity() {
      this.$router.push('/activity');
    },
    goMy() {
      this.$router.push('/my');
    }
  }
};
</script>

<style></style>
