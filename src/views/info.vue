<template>
  <div class="c-bg-F5">
    <div class="c-pf c-ww640 c-pz99 c-bg-fa c-pv16 c-fs24 c-fc-xblack c-flex-row c-justify-sb c-aligni-center">
      <div v-if="$route.path === '/classify'" class="iconfont c-ph20 c-fs24" @click="goBack">&#xe600;</div>
      <div v-else></div>
      <div class="c-flex-row">
        <div class="c-ph20">关注</div>
        <div class="c-fc-sgray">|</div>
        <div class="c-ph20">我要推广</div>
        <div class="c-fc-sgray">|</div>
        <div class="c-ph20">升级会员</div>
        <div class="c-fc-sgray">|</div>
        <div class="c-ph20" @click="goHome">返回首页</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    goBack() {
      this.$router.back();
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style></style>
