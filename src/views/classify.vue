<template>
  <div>
    <search :total="page.total" :search="search" :isCard="isCard" @changeCard="isCard = !isCard"> </search>
    <div class="c-bg-white c-ph24 c-pt220">
      <pagination v-if="!isCard" :currentPage="page.currentPage" :size="page.size" :total="page.total" @paginationToParent="paginationToParent">
        <div class="c-pt30 c-pb16" v-for="(item, index) in classify" :key="index">
          <card width="c-ww210" height="c-hh140">
            <div slot="image" class="c-h c-w100">
              <div class="c-h c-w100 c-p">
                <img class="c-w100 c-h c-br10" :src="item.image" alt="" />
                <div class="c-ww60 c-hh30 c-lh30 c-textAlign-c c-br6 c-pa c-fs16 c-fc-white c-p-r0 c-p-b0 c-translucent-balck50">{{ item.type }}</div>
              </div>
            </div>
            <div slot="content" class="c-fs24">{{ item.title }}</div>
            <div v-if="item.price === '0'" slot="number" class="c-fc-xmlred c-flex-row c-justify-sb c-pr24">
              <div class="c-fs22">
                免费<span v-if="item.classes !== '0'" class="c-fs20">/含{{ item.classes }}节</span>
              </div>
              <div class="c-fc-gray c-fs18">{{ item.times }}次观看</div>
            </div>
            <div v-else slot="number" class="c-fc-xmlred c-flex-row c-justify-sb c-pr24">
              <div class="c-fs22">
                ￥{{ item.price }}/<span class="c-fs20">含{{ item.classes }}节</span>
              </div>
              <div class="c-fc-gray c-fs18">{{ item.persons }}人购买</div>
            </div>
          </card>
        </div>
      </pagination>
      <pagination v-else :currentPage="page.currentPage" :size="page.size" :total="page.total" @paginationToParent="paginationToParent">
        <div class="c-flex-row c-justify-sb c-flexw-wrap">
          <div v-for="(item, index) in classify" :key="index" class="c-mb30">
            <portraitCard width="c-ww290">
              <div slot="image" class="c-p">
                <img class="c-ww290 c-hh190 c-br10" :src="item.image" alt="" />
                <div class="c-ww60 c-hh30 c-lh30 c-textAlign-c c-br6 c-pa c-fs16 c-fc-white c-p-r0 c-p-b0 c-translucent-balck50">{{ item.type }}</div>
              </div>
              <div class="c-text-ellipsis2" slot="content">{{ item.title }}</div>
              <div v-if="item.persons" slot="label" class="c-fc-gray">{{ item.persons }}人购买</div>
              <div v-else slot="label" class="c-fc-gray">{{ item.times }}次观看</div>
              <div v-if="item.price === '0'" slot="price" class="c-fs22 c-fc-xmlred">
                免费<span v-if="item.classes !== '0'" class="c-fs20">/含{{ item.classes }}节</span>
              </div>
              <div v-else class="c-fs22 c-fc-xmlred" slot="price">
                ￥{{ item.price }}/<span v-if="item.classes !== '0'" class="c-fs20">含{{ item.classes }}节</span>
              </div>
              <!-- <div v-if="item.price === '0'" slot="price">免费</div>
              <div v-else slot="price">￥{{ item.price }}</div> -->
            </portraitCard>
          </div>
          <div v-if="classify.length % 3 !== 0" class="c-ww160"></div>
        </div>
      </pagination>
    </div>
  </div>
</template>

<script>
import card from '@/components/card.vue';
import pagination from '../components/pagination.vue';
import search from '@/components/search.vue';
import portraitCard from '@/components/portraitCard.vue';
export default {
  name: 'Classify',
  components: { card, pagination, search, portraitCard },
  data() {
    return {
      search: '',
      classify: [],
      page: {
        currentPage: 1,
        size: 10,
        total: 30
      },
      isCard: false
    };
  },
  methods: {
    getClassifyList() {
      let classifyInfo = [
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '2020教师资格证辅导班',
          price: '0',
          classes: '2',
          times: '16万',
          type: '专栏'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '初级语文优秀作文揭秘',
          price: '399.00',
          classes: '2',
          persons: '2324',
          type: '专栏'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '12糖超级搜索术',
          price: '0',
          classes: '0',
          times: '1.6万',
          type: '图文'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '建构机器电子模型',
          price: '0',
          classes: '0',
          times: '1234',
          type: '视频'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '2020教师资格证辅导班',
          price: '0',
          classes: '2',
          times: '16万',
          type: '专栏'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '初级语文优秀作文揭秘',
          price: '399.00',
          classes: '2',
          persons: '2324',
          type: '专栏'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '12糖超级搜索术',
          price: '0',
          classes: '0',
          times: '1.6万',
          type: '图文'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '建构机器电子模型',
          price: '0',
          classes: '0',
          times: '1234',
          type: '视频'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '2020教师资格证辅导班',
          price: '0',
          classes: '2',
          times: '16万',
          type: '专栏'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '初级语文优秀作文揭秘',
          price: '399.00',
          classes: '2',
          persons: '2324',
          type: '专栏'
        }
      ];
      this.classify.push(...classifyInfo);
    },
    paginationToParent(refreshCount) {
      this.getClassifyList();
      this.page.currentPage = refreshCount;
      // console.log('refreshCount', refreshCount);
    }
  },
  created() {
    this.getClassifyList();
  }
};
</script>

<style></style>
