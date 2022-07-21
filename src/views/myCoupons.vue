<template>
  <div class="c-bg-white c-ph24 c-pt64">
    <div class="c-pt20">
      <div class="c-w100 c-flex-row c-justify-center c-aligni-center c-fc-gray">
        <div class="c-ww200 c-hh60 c-fs24 c-textAlign-c c-lh60 c-bd1-purple" :class="active === 0 ? 'c-bg-purple c-fc-swhite' : ''" @click="active = 0">优惠券</div>
        <div class="c-ww200 c-hh60 c-fs24 c-textAlign-c c-lh60 c-bd1-purple" :class="active === 1 ? 'c-bg-purple c-fc-swhite' : ''" @click="active = 1">兑换券</div>
      </div>
    </div>
    <div class="c-pt60 c-pb120">
      <div class="c-flex-row c-mb20 c-hh160 c-p c-box-shadow13" v-for="(item, index) in couponList" :key="index">
        <div class="c-ww150 c-lh150 c-textAlign-c c-linebg-sorange c-fs32 c-fc-white c-p">
          兑换券
          <div class="c-ww14 c-hh14 c-bg-white c-br14 c-pa c-p-rm8 c-p-t10"></div>
          <div class="c-ww14 c-hh14 c-bg-white c-br14 c-pa c-p-rm8 c-p-t34"></div>
          <div class="c-ww14 c-hh14 c-bg-white c-br14 c-pa c-p-rm8 c-p-t56"></div>
          <div class="c-ww14 c-hh14 c-bg-white c-br14 c-pa c-p-rm8 c-p-t80"></div>
          <div class="c-ww14 c-hh14 c-bg-white c-br14 c-pa c-p-rm8 c-p-t104"></div>
          <div class="c-ww14 c-hh14 c-bg-white c-br14 c-pa c-p-rm8 c-p-t130"></div>
        </div>
        <div class="c-flex-1 c-pv24 c-ph24 c-flex-column c-justify-sb">
          <div class="c-fs26 c-fc-xblack">{{ item.name }}</div>
          <div class="c-fs22 c-fc-gray">{{ item.date }}</div>
        </div>
        <div class="c-ww22 c-hh22 c-bg-white c-brp5 c-pa c-p-tp50 c-p-lm10 c-brp50 c-translate-y-50 c-translate-x-50"></div>
        <img class="c-ww74 c-hh74 c-pa c-p-rm6 c-p-tm4" src="../assets/images/exchange.png" alt="" />
        <div class="c-hh40 c-ww130 c-fc-swhite c-textAlign-c c-lh40 c-bg-xpurple c-fs24 c-br50 c-pa c-p-r16 c-p-tp50 c-translate-y-50" @click="goCoupon">立即查看</div>
      </div>
    </div>
    <div class="c-pf c-ww640 c-pz99 c-bg-fa c-pv24 c-fs24 c-fc-xblack c-p-b0 c-flex-row c-flex-center">
      <div class="c-ww260 c-hh60 c-br60 c-bg-purple c-fc-swhite c-textAlign-c c-lh60">兑换入口</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myCoupons',
  data() {
    return {
      count: 5,
      active: 1,
      couponList: []
    };
  },
  methods: {
    getCoupons() {
      let coupons = [
        {
          name: '兑换券-兑换约课091524',
          date: '2020.05.03-2020.06.03'
        },
        {
          name: '兑换券-兑换约课091524',
          date: '2020.05.03-2020.06.03'
        },
        {
          name: '兑换券-兑换约课091524',
          date: '2020.05.03-2020.06.03'
        },
        {
          name: '兑换券-兑换约课091524',
          date: '2020.05.03-2020.06.03'
        },
        {
          name: '兑换券-兑换约课091524',
          date: '2020.05.03-2020.06.03'
        }
      ];
      this.couponList = coupons;
    },
    goCoupon() {
      this.$router.push('/coupon');
    }
  },
  created() {
    this.getCoupons();
  }
};
</script>

<style></style>
