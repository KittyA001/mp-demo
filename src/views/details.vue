<template>
  <div class="c-pt60">
    <div class="c-pv24 c-pt44 c-ph24 c-bg-white">
      <div class="c-w100 c-hh270 c-flex-row">
        <div class="c-h c-ww180">
          <img class="c-w100 c-h c-br10" :src="info.image" alt="" />
        </div>
        <div class="c-flex-column c-justify-sb c-flex-1 c-pl24">
          <div class="c-fs30 c-fc-xblack">{{ info.title }}</div>
          <!-- <div class="c-fc-xmlred c-hh160 c-flex-column c-justify-sb c-pr24"></div> -->
          <div class="c-fc-gray c-fs20">{{ info.name }}</div>
          <div class="c-fs20 c-fc-gray">{{ info.times }}次阅读</div>
          <div v-if="info.price === '0'" class="c-fc-gray c-fs34 c-fc-xmblue">免费</div>
          <div v-else class="c-fc-gray c-fs34 c-fc-xmblue">￥{{ info.price }}</div>
        </div>
      </div>
    </div>
    <div class="c-flex-row c-justify-sb c-pv24 c-ph24 c-bd-t1-f6 c-bd-b1-f6 c-bg-white">
      <div class="c-flex-row c-justify-sb">
        <div class="c-br4 c-fs20 c-pr10 c-mr20 c-flex-row c-flex-center c-fc-white c-linebg-spink">
          <div class="iconfont c-fs24 c-ww36 c-hh36 c-textAlign-c c-lh36 c-linebg-yellow c-br-br20 c-fc-mpink">&#xe70d;</div>
          ￥<span class="c-fs28 c-mr10">10</span> <span class="c-fs20">满40可用</span>
        </div>
        <div class="c-br4 c-fs20 c-pr10 c-flex-row c-flex-center c-fc-white c-linebg-spink">
          <div class="iconfont c-fs24 c-ww36 c-hh36 c-textAlign-c c-lh36 c-linebg-yellow c-br-br20 c-fc-mpink">&#xe70d;</div>
          ￥<span class="c-fs28 c-mr10">30</span> <span class="c-fs20">无门槛</span>
        </div>
      </div>
      <div class="iconfont c-fs24 c-fc-xxlred">领券 &#xe635;</div>
    </div>
    <div class="c-pv24 c-bg-white c-ph24 c-flex-row c-fs20 c-fc-xblack">
      <div class="c-mr30">优惠</div>
      <div class="c-mr20">积分可抵10.00</div>
      <div class="c-mr20">VIP打8.0折</div>
      <div>SVIP打8.0折</div>
    </div>
    <div class="c-mt12 c-bg-white c-ph24 c-pb64">
      <div class="c-bd-b1-f6">
        <tabList justifyType="c-justify-sa" :isShowLine="true" linebg="c-linebg-ssblue" :list="tabList" :tabType="tabType" @change="tabType = $event"></tabList>
      </div>
      <div class="c-pv24 c-fs24 c-fc-sblack c-bd-b1-f6">共{{ info.sections }}章</div>
      <div class="c-pv24 c-fs24 c-fc-sblack c-bd-b1-f6">版权页</div>
      <div class="c-pv24 c-fs24 c-fc-sblack c-bd-b1-f6">作者简介</div>
      <div v-for="(item, index) in list" :key="index" class="c-pv24 c-fs24 c-fc-gray c-bd-b1-f6 c-flex-row c-justify-sb" :class="{ 'c-fc-xxsblue': item.id === active }" @click="active = item.id">
        <div>
          <span class="c-mr10">{{ item.section }}</span> <span>{{ item.title }}</span>
        </div>
        <div v-show="item.id !== active" class="iconfont c-fs24">&#xe615;</div>
      </div>
    </div>
    <div class="c-pf c-p-b0 c-ww640 c-bg-white c-flex-row c-justify-sa c-aligni-center">
      <div class="c-flex-column c-flex-center">
        <div class="iconfont c-fs34">&#xe65e;</div>
        <div class="c-fs16">邀请好友</div>
      </div>
      <div class="c-flex-column c-flex-center">
        <div class="iconfont c-fs40">&#xe7b9;</div>
        <div class="c-fs16">赠送好友</div>
      </div>
      <div class="c-ww262 c-hh64 c-fc-white">
        <img class="c-w100 c-h" src="../assets/images/button.png" alt="" />
      </div>
      <div class="c-ww128 c-hh64 c-fs24 c-lh60 c-br64 c-textAlign-c c-fc-white c-fc-xxsblue c-bd1-blue">试读</div>
    </div>
  </div>
</template>

<script>
import tabList from '../components/tabList.vue';
export default {
  name: 'Details',
  components: { tabList },
  data() {
    return {
      tabType: 1,
      list: [],
      active: 0,
      id: '',
      info: {},
      tabList: []
    };
  },
  methods: {
    getList() {
      let list = [
        {
          id: 0,
          section: '第一章',
          title: '团队的成长是管理最大的成功'
        },
        {
          id: 1,
          section: '第二章',
          title: '不要让自己的队友失败'
        },
        {
          id: 2,
          section: '第三章',
          title: '与其怕失败，不如狠狠地失败一场'
        },
        {
          id: 3,
          section: '第四章',
          title: '平凡的人做平凡的事'
        },
        {
          id: 4,
          section: '第五章',
          title: '快乐工作，认真生活'
        }
      ];
      this.list = list;
    },
    getTabList() {
      let tabList = ['详情', '目录', '相关推荐'];
      this.tabList = tabList;
    },
    getInfo() {
      let listInfo = [
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个轻松客户',
          name: 'Steve Drake',
          price: '0',
          classes: '2',
          times: '16万',
          type: '专栏',
          id: '1',
          sections: '112'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '399.00',
          classes: '2',
          times: '1234',
          persons: '2324',
          type: '专栏',
          id: '2',
          sections: '110'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '0',
          times: '1.6万',
          type: '图文',
          id: '3',
          sections: '100'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '0',
          times: '1234',
          type: '视频',
          id: '4',
          sections: '150'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '2',
          times: '16万',
          type: '专栏',
          id: '5',
          sections: '99'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '399.00',
          classes: '2',
          times: '10万',
          persons: '2324',
          type: '专栏',
          id: '6',
          sections: '120'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '0',
          times: '1.6万',
          type: '图文',
          id: '7',
          sections: '125'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '0',
          times: '1234',
          type: '视频',
          id: '8',
          sections: '155'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '2',
          times: '1.6万',
          type: '专栏',
          id: '9',
          sections: '80'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '399.00',
          classes: '2',
          times: '1万',
          persons: '2324',
          type: '专栏',
          id: '10',
          sections: '101'
        }
      ];
      this.info = listInfo.find(item => item.id === this.id);
      console.log(this.info);
    }
  },
  mounted() {
    this.getList();
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getInfo();
    this.getTabList();
  }
};
</script>

<style></style>
