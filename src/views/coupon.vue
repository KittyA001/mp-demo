<template>
  <div class="c-bg-white c-pt64">
    <div class="c-pt40 c-bg-white c-flex-row c-justify-center">
      <div class="c-pt30 c-pb40 c-ww612 c-box-shadow13">
        <div class="c-flex-row c-justify-sb c-ph20">
          <div class="c-fs24 c-flex-row c-flex-center">
            <span class="iconfont c-fc-xblue">&#xe710;</span>
            <span class="c-ml10 c-mb4 c-mb10">智和教育</span>
          </div>
          <div class="c-fs24 c-fc-xpink c-flex-row c-flex-center">
            <span class="iconfont">&#xe868;</span>
            <span class="c-ml10 c-mb10">分享给好友</span>
          </div>
        </div>
        <div class="c-flex-row c-justify-center c-mt10">
          <div class="c-ww600 c-hh190" :class="{ 'c-bd1-3': !isReceived }">
            <div class="c-bg-img c-hh188 c-flex-row c-p">
              <div class="c-fc-white c-mt8 c-ml10 c-hh170 c-ww188 c-flex-column c-justify-center c-aligni-center">
                <div>
                  <span class="c-fs24">￥</span>
                  <span class="c-fs60">{{ coupon.money }}</span>
                </div>
                <div class="c-fs20 c-mt10">无门槛</div>
              </div>
              <div class="c-pv30 c-ph24 c-flex-column c-justify-sb">
                <div class="c-fs30 c-fc-xblack">{{ coupon.type }}</div>
                <div class="c-fs20 c-fc-gray">{{ coupon.starDate }} - {{ coupon.endDate }}</div>
                <div class="c-fs20 c-fc-gray">适用于店铺内部分课程可用</div>
              </div>
              <div v-if="!isReceived" class="c-hh170 c-ww188 c-bd1-3 c-pa c-p-t8 c-p-l10 c-pz10"></div>
              <div class="c-ww16 c-hh16 c-bg-white c-brp5 c-pa c-p-tp50 c-p-l0 c-brp50 c-translate-y-50 c-translate-x-50"></div>
              <img v-if="isReceived" class="c-ww108 c-hh102 c-pa c-p-b2 c-p-r-4" src="../assets/images/received.png" alt="" />
            </div>
          </div>
        </div>
        <div class="c-flex-row c-justify-center">
          <!-- <div class="c-ww6 c-hh6"></div> -->
          <div class="c-fc-xpink">---------------------------------------------</div>
          <!-- <div></div> -->
        </div>
        <div v-if="!isReceived" class="c-ml40 c-mt16 c-bd1-3 c-pt16 c-ph20 c-ww260 c-hh80 c-fs24">
          <div class="c-bg-img2 c-w100 c-h">优惠券数量剩余{{ coupon.surplus }}</div>
        </div>
        <div v-if="!isReceived" class="c-ph10 c-mt24">
          <div class="c-hh8 c-bg-f6 c-br4">
            <div class="c-h c-ww80 c-bg-f6 c-br4 c-linebg-pink"></div>
          </div>
        </div>
        <div v-if="!isReceived" class="c-mt40 c-flex-row c-justify-center">
          <div class="c-fc-white c-fs28 c-linebg-sblue c-ww540 c-hh64 c-br64 c-textAlign-c c-lh64" @click="goReceive">立即领取</div>
        </div>
        <!-- 有效时间 -->
        <div v-if="isReceived" class="c-flex-column c-justify-center c-fs20 c-fc-gray c-ph30">
          <div class="c-mt20">
            <span>有效时间：</span
            ><span
              ><span>{{ coupon.starDate }}</span> <span>{{ coupon.starTime }}</span> - <span>{{ coupon.endDate }} </span><span>{{ coupon.endTime }}</span></span
            >
          </div>
          <div class="c-mt20">适用于店铺内部分课程可用</div>
        </div>
      </div>
    </div>
    <!-- 推荐好课 -->
    <div class="c-bg-white c-pv60 c-flex-column c-justify-center">
      <div class="c-flex-row c-justify-center">
        <div class="c-fs22 c-fc-sblack">{{ isReceived ? '以下课程支持使用该优惠券' : '推荐好课' }}</div>
      </div>
      <div class="c-pt40 c-pb30 c-ph24" v-for="(item, index) in courseList" :key="index">
        <card width="c-ww208" height="c-hh140">
          <div slot="image" class="c-w100 c-h">
            <img class="c-ww208 c-hh140 c-br10" :src="item.image" alt="" />
          </div>
          <div slot="content" class="c-fc-xblack">{{ item.content }}</div>
          <div slot="number">
            <span class="c-fc-xblack">券后价:</span>
            <span class="c-fc-xxsblue">￥{{ item.price }}</span>
            <span class="c-text-decoration-through c-ml10">{{ item.prePrice }}</span>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import card from '../components/card.vue';
export default {
  name: 'Coupon',
  components: { card },
  data() {
    return {
      coupon: {},
      courseList: [],
      isReceived: false
    };
  },
  methods: {
    getInfo() {
      let couponInfo = {
        money: '10',
        type: '指定商品可用',
        endDate: '2020.09.01',
        starDate: '2019.09.01',
        starTime: '16:00',
        endTime: '24:00',
        surplus: '80%'
      };
      this.coupon = couponInfo;
      let list = [
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          prePrice: '60.00',
          price: '10.00',
          content: '初中语文优秀考场作文'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          prePrice: '60.00',
          price: '10.00',
          content: '12堂超级搜索术'
        }
      ];
      this.courseList = list;
    },
    goReceive() {
      this.isReceived = true;
    }
  },
  created() {
    this.getInfo();
  }
};
</script>

<style></style>
