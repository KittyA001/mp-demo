<template>
  <div class="home c-p">
    <!-- 搜索 -->
    <div class="c-pf c-p-t0 c-ph24 c-pv16 c-bg-white c-pz99">
      <input v-model="search" @keydown="keydown" class="c-bg-f3 c-ww600 c-bd0 c-hh54 c-textAlign-c c-fs24 c-p" type="text" />
      <span id="search" v-show="!search || !className" class="iconfont c-fc-gray c-fs24 c-pa c-p-tp50 c-p-tl50 c-translate-xy-50">&#xe790;<span class="c-ml10 c-fs24">搜索</span></span>
    </div>
    <div class="c-pt88 c-pb100 c-contexty-scroll">
      <!-- 轮播图 -->
      <rotationChart></rotationChart>
      <item></item>
      <!-- 会员 -->
      <div class="c-hh122 c-bg-f3 c-pt8">
        <div class="c-hh114 c-bg-white c-flex-row c-justify-center c-aligni-center">
          <div class="c-hh66 c-ww592 c-bg-4b c-br10 c-flex-row c-justify-center c-aligni-center">
            <div class="iconfont c-fc-xxyellow c-fs45 c-mr10">&#xe645;</div>
            <div class="c-fs24 c-fc-white">会员畅享付费内容，立即开通VIP</div>
          </div>
        </div>
      </div>
      <!-- 课程预告 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww200" height="c-hh134" title="课程预告" left="新鲜有趣的预告" right="二维码" rightLabel="199" :list="curriculum">
          <div slot="icon" class="iconfont">&#xe899;</div>
        </modular>
      </div>
      <!-- 特惠专区 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww160" height="c-hh106" :list="preferentialList" title="特惠专区" left="帮你省钱" right="更多特惠"> </modular>
      </div>
      <!-- 活动 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww160" height="c-hh106" :list="activityList" title="活动" left="专业 全面 深度" right="全部活动"> </modular>
      </div>
      <!-- 直播 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww160" height="c-hh106" :list="liveBroadcastList" title="直播" left="专业 全面 深度" right="全部直播"> </modular>
      </div>
      <!-- 热门专栏 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww160" height="c-hh106" :list="hotList" title="热门专栏" left="专业 全面 深度" right="更多专栏"> </modular>
      </div>
      <!-- 课程分类 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww160" height="c-hh106" :list="courseList" title="课程分类" left="专业 全面 深度" right="全部分类"> </modular>
      </div>
      <!-- 精品课程 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww160" height="c-hh106" :list="boutiqueList" title="精品课程" left="专业 全面 深度" right="更多课程"> </modular>
      </div>
      <!-- 测试专题 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww160" height="c-hh106" :list="testList" title="测试专题" left="专业 全面 深度" right="全部测试"> </modular>
      </div>
      <div class="c-pt8 c-bg-f3">
        <img class="c-w100 c-hh220" src="https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg" alt="" />
      </div>
      <!-- 问答 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww200" height="c-hh134" :list="queAnsList" title="问答" left="你问我答" right="查看问答"> </modular>
      </div>
      <!-- 商城 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" width="c-ww160" height="c-hh106" :list="shoppingMallList" title="商城" left="有趣 好物" right="进入商城"> </modular>
      </div>
      <!-- 社群 -->
      <div class="c-pt8 c-bg-f3">
        <modular :isShow="true" fit="cover" width="c-ww96" :list="communityList" title="社群" left="有趣 好物" right="全部社群"> </modular>
      </div>
      <!-- 公众号 -->
      <div class="c-pt8 c-bg-f3">
        <modular fit="cover" width="c-ww140" :list="officialAccountList">
          <div class="c-pt24" slot="officialAccount">
            <button class="c-w100 c-hh64 c-bg-xblue c-bd0 c-fc-white c-fs24 c-br6">关注公众号</button>
          </div>
        </modular>
      </div>
      <!-- 友情链接 -->
      <div class="c-pt8 c-bg-f3">
        <div class="c-pt10 c-bg-white c-hh288 c-ph24">
          <cell>
            <div slot="title">友情链接</div>
          </cell>
          <div class="c-pt10 c-mb30 c-w100 c-hh122 c-flex-row c-justify-sb">
            <img v-for="(item, index) in links" :key="index" class="c-ww184 c-br5" :src="item" alt="" />
          </div>
          <div class="c-w100 c-pt12 c-flex-row c-justify-sa c-fs24 c-bd-t1">
            <div>公司简介</div>
            <div>联系我们</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rotationChart from '@/components/rotationChart.vue';
import item from '@/components/item.vue';
import modular from '@/components/modular.vue';
import cell from '@/components/cell.vue';

export default {
  name: 'Home',
  components: {
    rotationChart,
    item,
    modular,
    cell
  },
  data() {
    return {
      search: '',
      className: '',
      preferentialList: [],
      curriculum: [],
      activityList: [],
      liveBroadcastList: [],
      hotList: [],
      courseList: [],
      boutiqueList: [],
      testList: [],
      queAnsList: [],
      shoppingMallList: [],
      communityList: [],
      officialAccountList: [],
      links: []
    };
  },
  methods: {
    getItems() {
      let preferentialList = [
        {
          content: '纳兰瑜伽七日纳兰瑜伽七日纳兰瑜伽七日纳兰瑜伽七日',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          lumpPrice: '10.00',
          unitPrice: '500',
          time: '100:23:36'
        },
        {
          content: '纳兰瑜伽七日纳兰瑜伽七日纳兰瑜伽七日纳兰瑜伽七日',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          lumpPrice: '20.00',
          unitPrice: '500',
          time: '100:23:36'
        }
      ];
      let curriculum = [
        {
          content: '纳兰瑜伽七日纳兰瑜伽七日纳兰瑜伽七日纳兰瑜伽七日',
          label: '开课时间：2019-05-10 21:00',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          price: '199'
        }
      ];
      let activityList = [
        {
          content: '十一秋游活动你来不来参加',
          label: '2018-12-12 12:23 至 2019-12-24 12:34',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '12'
        },
        {
          content: '纳兰瑜伽七日瘦',
          label: '2018-12-12 12:23 至 2019-12-24 12:34',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '5'
        }
      ];
      let liveBroadcastList = [
        {
          content: '十一秋游活动你来不来参加',
          label: '2018/12/12 12:23',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          state: 1,
          money: '199'
        },
        {
          content: '纳兰瑜伽七日瘦',
          label: '2018/12/12 12:23',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          state: 2,
          money: '免费'
        }
      ];
      let hotList = [
        {
          content: '纳兰瑜伽七日瘦纳兰瑜伽七日瘦纳兰瑜伽七日瘦纳兰瑜伽七日瘦',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '12',
          money: '199'
        },
        {
          content: '纳兰瑜伽七日瘦',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '5',
          money: '199'
        }
      ];
      let courseList = [
        {
          content: '学员项目',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          label: '包括：张惠兰瑜伽项目 | 黄莲绘画项目 | 张惠兰瑜伽项目 | 黄莲绘画项目'
        }
      ];
      let boutiqueList = [
        {
          content: '纳兰瑜伽七日瘦纳兰瑜伽七日瘦纳兰瑜伽七日瘦纳兰瑜伽七日瘦',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '12',
          money: '199'
        },
        {
          content: '纳兰瑜伽七日瘦',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '5',
          money: '199'
        },
        {
          content: '纳兰瑜伽七日瘦纳兰瑜伽七日瘦纳兰瑜伽七日瘦纳兰瑜伽七日瘦',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '12',
          money: '0'
        },
        {
          content: '纳兰瑜伽七日瘦',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '5',
          money: '199'
        }
      ];
      let testList = [
        {
          content: '六年级数学六年级数学六年级数学六年级数学',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '6',
          sets: '1'
        },
        {
          content: '六年级数学六年级数学六年级数学六年级数学',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '5',
          sets: '2'
        },
        {
          content: '六年级数学六年级数学',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '12',
          sets: '3'
        }
      ];
      let queAnsList = [
        {
          content: '答疑解惑',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          label: '您好，杜宇我们的功能有任何不解之处请提出建议或反馈',
          query: '45'
        }
      ];
      let shoppingMallList = [
        {
          content: '个性手机挂件批发自用都很个性个性手机挂件批发自用都很个性',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '12',
          money: '200'
        },
        {
          content: '纳兰瑜伽七日瘦纳兰瑜伽七日瘦纳兰瑜伽七日瘦',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          number: '5',
          money: '199'
        }
      ];
      let communityList = [
        {
          content: '创客匠人技术讨论社群',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          persons: '259'
        },
        {
          content: '创客匠人技术讨论社群',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          persons: '259'
        },
        {
          content: '创客匠人技术讨论社群',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          persons: '259'
        }
      ];
      let officialAccountList = [
        {
          content: '创客匠人技术公众号',
          url: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          label: '附件案件法律框架爱看的房间里卡机附件案件法律框架爱看的房间里卡机'
        }
      ];
      let links = [
        'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
        'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
        'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg'
      ];
      this.curriculum = curriculum;
      this.preferentialList = preferentialList;
      this.activityList = activityList;
      this.liveBroadcastList = liveBroadcastList;
      this.hotList = hotList;
      this.courseList = courseList;
      this.boutiqueList = boutiqueList;
      this.testList = testList;
      this.queAnsList = queAnsList;
      this.shoppingMallList = shoppingMallList;
      this.communityList = communityList;
      this.officialAccountList = officialAccountList;
      this.links = links;
    },
    keydown() {
      this.className = 'display';
      console.log('keydown: ', '1');
    }
  },
  created() {
    this.getItems();
  }
};
</script>
