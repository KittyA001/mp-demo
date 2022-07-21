<template>
  <div class="c-bg-F5">
    <div class="c-ww640 c-pf c-p-t0 c-pz99 c-bg-white">
      <div class="c-bg-fa c-pv16 c-fs24 c-fc-xblack c-flex-row c-justify-sb c-aligni-center">
        <div class="iconfont c-pl24" @click="goBack">&#xe648;</div>
        <div class="c-flex-row">
          <div class="iconfont c-ph24 c-fs30">&#xe6da;</div>
          <div class="iconfont c-fc-sgray">|</div>
          <div class="iconfont c-ph24 c-fs30">&#xe649;</div>
          <div class="iconfont c-fc-sgray">|</div>
          <div class="iconfont c-ph24 c-fs30">&#xe645;</div>
          <div class="iconfont c-fc-sgray">|</div>
          <div class="iconfont c-ph24 c-fs30" @click="goHome">&#xe64c;</div>
        </div>
      </div>
      <div class="c-mb12">
        <div class="c-bg-white c-ph40">
          <tabList :isShowLine="true" :list="tabList" :tabType="tabType" @change="tabType = $event"></tabList>
        </div>
      </div>
    </div>
    <div class="c-pt164">
      <pagination :currentPage="page.currentPage" :size="page.size" :total="page.total" @paginationToParent="paginationToParent">
        <div class="c-bg-white c-mb12 c-ph20 c-mh20 c-pv20" v-for="(item, index) in list" :key="index">
          <card width="c-ww212" height="c-hh142">
            <div class="c-h" slot="image">
              <img class="c-w100 c-h c-br10" :src="item.image" alt="" />
            </div>
            <div slot="content">{{ item.content }}</div>
          </card>
        </div>
      </pagination>
    </div>
  </div>
</template>

<script>
import card from '../components/card.vue';
import pagination from '../components/pagination.vue';
import tabList from '../components/tabList.vue';
export default {
  name: 'Learn',
  components: { card, pagination, tabList },
  data() {
    return {
      list: [],
      page: {
        currentPage: 1,
        size: 10,
        total: 30
      },
      tabType: 0,
      tabList: []
    };
  },
  methods: {
    getList() {
      let itemList = [
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          content: '少儿编程一站式服务'
        }
      ];
      this.list.push(...itemList);
      console.log(this.list);
    },
    getTabList() {
      let tabList = ['课程', '专栏', '训练营', '内容专栏'];
      this.tabList = tabList;
    },
    paginationToParent(refreshCount) {
      this.getList();
      this.page.currentPage = refreshCount;
      // console.log('refreshCount', refreshCount);
    },
    goBack() {
      this.$router.back();
    },
    goHome() {
      this.$router.push('/');
    }
  },
  created() {
    this.getList();
    this.getTabList();
  }
};
</script>

<style></style>
