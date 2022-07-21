<template>
  <div class="c-bg-F5 c-pb100">
    <div class="c-bg-white c-pt24 c-ph24">
      <card width="c-ww120" fontSize="c-fs14">
        <div class="c-p" slot="image" @click="goInfo">
          <img class="c-w100 c-brp50" :src="info.url" alt="" />
        </div>
        <div class="c-pt6 c-fc-xblack c-fw600 c-p c-fs28" slot="content">
          {{ info.name }}
          <button class="iconfont c-bd0 c-bg-xblue c-ww106 c-hh48 c-br24 c-fs22 c-fc-white c-pa c-mbIndexBg3 c-p-r0">&#xe70d; 签到</button>
        </div>
        <div class="c-flex-row c-aligni-center c-p c-fc-sblack c-fs24 c-pt28" slot="label">
          <div class="c-flex-row c-justify-center c-aligni-center">
            <div class="iconfont c-fs30">&#xe60b;</div>
            <div class="c-hh36 c-bg-f3 c-lh-40 c-ph8 c-br18">普通用户</div>
          </div>
          <div class="c-ml20">ID：{{ info.id }}</div>
        </div>
      </card>
    </div>
    <div class="c-ph24 c-pt40 c-bg-white">
      <div class="c-w100 c-hh92 c-ph24 c-mbIndexBg4 c-br16 c-flex-row c-justify-sb c-aligni-center">
        <div class="c-fc-syellow"><span class="iconfont c-fs36">&#xe88d;</span><span class="c-fs28 c-ml14">开通VIP会员</span></div>
        <div class="c-fs22 c-fc-xblack c-ww132 c-hh48 c-mbIndexBg5 c-textAlign-c c-lh48 c-br24">立即开通</div>
      </div>
    </div>
    <div class="c-w100 c-ph24 c-mt20">
      <div class="c-w100 c-hh132 c-br16 c-bg-white">
        <div class="c-w100 c-hh130 c-flex-row c-br16 c-pt20 c-pb28 c-fc-sblack">
          <div class="c-ww444 c-flex-row c-justify-sa c-aligni-center c-bg-white">
            <div class="c-flex-column c-justify-center c-aligni-center">
              <span class="c-fs26 c-mb10">300</span>
              <span class="c-fs20">收藏</span>
            </div>
            <div class="c-flex-column c-justify-center c-aligni-center">
              <span class="c-fs26 c-mb10">2022</span>
              <span class="c-fs20">积分</span>
            </div>
            <div class="c-flex-column c-justify-center c-aligni-center" @click="goCoupons">
              <span class="c-fs26 c-mb10">320</span>
              <span class="c-fs20">优惠券</span>
            </div>
          </div>
          <div class="c-flex-1 c-flex-column c-justify-center c-aligni-center c-bg-white c-bd-l1-mgray" @click="goProfit">
            <span class="c-fs26 c-mb10">￥10.3万</span>
            <span class="c-fs20">账户</span>
          </div>
        </div>
      </div>
    </div>
    <div class="c-mt20 c-ph24 c-hh132">
      <img class="c-w100" src="../assets/images/编组 14.png" />
    </div>
    <!-- 我的订单 -->
    <div class="c-mt20 c-pt24 c-mh24 c-hh204 c-bg-white c-br16">
      <div class="c-ph24">
        <cell>
          <div class="c-fs24 c-fw500" slot="title">我的订单</div>
          <div class="c-fs20" slot="right">全部订单<span class="iconfont c-fs16 c-ml4">&#xe908;</span></div>
        </cell>
      </div>
      <div class="c-flex-row c-justify-sa c-aligni-center c-mt20 c-fc-sblack">
        <div v-for="(item, index) in orders" :key="index" class="c-flex-column c-justify-center c-aligni-center">
          <span class="iconfont c-fs36 c-mb10" :class="item.icon"></span>
          <span class="c-fs20">{{ item.title }}</span>
        </div>
      </div>
    </div>
    <!-- 学习中心 -->
    <div class="c-mt20 c-mh24 c-hh100 c-bg-white c-br16 c-ph24" @click="goLearn">
      <cell class="c-pt30">
        <div class="c-fs24 c-fw500" slot="title">学习中心</div>
        <div class="c-fs20" slot="right">
          累计学习<span class="c-fc-xxsblue c-fs20">{{ info.time }}</span>
          分钟
        </div>
      </cell>
    </div>
    <!-- 学习工具 -->
    <div class="c-mh24 c-pt24 c-mt20 c-bg-white c-br16">
      <div class="c-ph24">
        <cell>
          <div class="c-fs24 c-fw500" slot="title">学习工具</div>
        </cell>
      </div>
      <div class="c-flex-row c-justify-sa c-aligni-center c-fc-sblack c-flexw-wrap">
        <div v-for="(item, index) in learnTools" :key="index" class="c-pv20 c-w25 c-flex-column c-justify-center c-aligni-center" @click="goEBook">
          <span class="iconfont c-fs36 c-mb10" :class="item.icon"></span>
          <span class="c-fs20">{{ item.title }}</span>
        </div>
        <div class="c-pv20 c-w25"></div>
      </div>
    </div>
    <!-- 推广中心 -->
    <div class="c-mh24 c-pt24 c-mt20 c-pb10 c-bg-white c-br16">
      <div class="c-ph24">
        <cell>
          <div class="c-fs24 c-fw500" slot="title">推广中心</div>
        </cell>
      </div>
      <div class="c-ph24">
        <div class="c-flex-row c-aligni-center c-hh94">
          <span class="iconfont c-fs36 c-ww36">&#xe6c9;</span>
          <span class="c-fs20 c-h c-ml16 c-flex-1 c-bd-b1-mgray c-lh94">服务商</span>
        </div>
      </div>
      <div class="c-ph24">
        <div class="c-flex-row c-aligni-center c-hh94">
          <span class="iconfont c-fs36 c-ww36">&#xe6be;</span>
          <span class="c-fs20 c-h c-ml16 c-flex-1 c-bd-b1-mgray c-lh94">股东模式</span>
        </div>
      </div>
      <div class="c-ph24">
        <div class="c-flex-row c-aligni-center c-hh94">
          <span class="iconfont c-fs36 c-ww36">&#xe706;</span>
          <span class="c-fs20 c-h c-ml16 c-flex-1 c-lh94">区域代理</span>
        </div>
      </div>
    </div>
    <!-- 我的服务 -->
    <div class="c-mh24 c-pt24 c-mt20 c-mb20 c-bg-white c-br16">
      <div class="c-ph24">
        <cell>
          <div class="c-fs24 c-fw500" slot="title">我的服务</div>
        </cell>
      </div>
      <div class="c-flex-row c-justify-sa c-aligni-center c-fc-sblack c-flexw-wrap">
        <div v-for="(item, index) in services" :key="index" class="c-pv20 c-w25 c-flex-column c-justify-center c-aligni-center">
          <span class="iconfont c-fs36 c-mb10" :class="item.icon"></span>
          <span class="c-fs20">{{ item.title }}</span>
        </div>
        <div class="c-pv20 c-w25"></div>
        <div class="c-pv20 c-w25"></div>
      </div>
    </div>
  </div>
</template>

<script>
import cell from '@/components/cell.vue';
import card from '@/components/card.vue';
export default {
  name: 'My',
  components: {
    card,
    cell
  },
  data() {
    return {
      info: {},
      orders: [],
      learnTools: [],
      services: []
    };
  },
  methods: {
    getInfo() {
      let info = {
        url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
        name: '圆球不圆了啊',
        userType: 0,
        id: 'kd8868a23',
        time: '100'
      };
      let learnTools = [
        {
          icon: 'icon-kechengxianxing',
          title: '我的课程'
        },
        {
          icon: 'icon-zhibo3',
          title: '我的直播'
        },
        {
          icon: 'icon-mianshouke1',
          title: '小班课'
        },
        {
          icon: 'icon-cepingxianxing',
          title: '我的测评'
        },
        {
          icon: 'icon-lianxixianxing',
          title: '我的练习'
        },
        {
          icon: 'icon-dakaxianxing',
          title: '我的打卡'
        },
        {
          icon: 'icon-cuotixianxing',
          title: '我的错题'
        },
        {
          icon: 'icon-huidaxianxing',
          title: '我的回答'
        },
        {
          icon: 'icon-quanzi',
          title: '我的圈子'
        },
        {
          icon: 'icon-shequnxianxing',
          title: '我的社群'
        },
        {
          icon: 'icon-cidianxianxing',
          title: '我的词典'
        },
        {
          icon: 'icon-huodongxianxing',
          title: '我的活动'
        },
        {
          icon: 'icon-time',
          title: '我的预约'
        },
        {
          icon: 'icon-yueke11',
          title: '我的约课'
        },
        {
          icon: 'icon-mianshoukexianxing',
          title: '面授课'
        }
      ];
      let services = [
        {
          icon: 'icon-chengjiuxianxing',
          title: '我的成就'
        },
        {
          icon: 'icon-lingzengxianxing1',
          title: '领赠记录'
        },
        {
          icon: 'icon-liulanxianxing',
          title: '浏览记录'
        },
        {
          icon: 'icon-dizhi1',
          title: '收获地址'
        },
        {
          icon: 'icon-toupiaoxianxing',
          title: '我的投票'
        },
        {
          icon: 'icon-pintuanxianxing',
          title: '我的拼团'
        },
        {
          icon: 'icon-kanjia1',
          title: '我的砍价'
        },
        {
          icon: 'icon-jiangpinxianxing',
          title: '我的奖品'
        },
        {
          icon: 'icon-tongxuexianxing',
          title: '我的同学'
        },
        {
          icon: 'icon-shezhi21',
          title: '设置'
        }
      ];
      let orders = [
        {
          icon: 'icon-qianbao4',
          title: '待付款'
        },
        {
          icon: 'icon-yizhifu',
          title: '待发货'
        },
        {
          icon: 'icon-daishouhuo',
          title: '待收货'
        },
        {
          icon: 'icon-daipingjia6',
          title: '待评价'
        },
        {
          icon: 'icon-tuikuan',
          title: '退款/售后'
        }
      ];
      this.info = info;
      this.orders = orders;
      this.learnTools = learnTools;
      this.services = services;
    },
    goInfo() {
      this.$router.push('/info');
    },
    goCoupons() {
      this.$router.push('/myCoupons');
    },
    goEBook() {
      this.$router.push('/eBook');
    },
    goLearn() {
      this.$router.push('/learn');
    },
    goProfit() {
      this.$router.push('/profit');
    }
  },
  created() {
    this.getInfo();
  }
};
</script>

<style></style>
