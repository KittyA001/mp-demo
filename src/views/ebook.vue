<template>
  <div>
    <search :isCard="isCard" @changeCard="isCard = !isCard" :total="page.total"> </search>
    <div class="c-bg-white c-ph24 c-pt168">
      <pagination v-if="!isCard" :currentPage="page.currentPage" :size="page.size" :total="page.total" @paginationToParent="paginationToParent">
        <div class="c-pt30 c-pb16" v-for="(item, index) in list" :key="index" @click="goDetails(item.id)">
          <card width="c-ww96" height="c-hh144">
            <div slot="image" class="c-h c-w100">
              <div class="c-h c-w100 c-p">
                <img class="c-w100 c-h c-br10" :src="item.image" alt="" />
              </div>
            </div>
            <div slot="content" class="c-fs24">{{ item.title }}</div>
            <div slot="label" class="c-fc-gray">{{ item.name }}</div>
            <div slot="number" class="c-fc-xmlred c-flex-row c-justify-sb c-pr24">
              <div v-if="item.times" class="c-fs20 c-fc-gray">{{ item.times }}次阅读</div>
              <div v-if="item.price === '0'" class="c-fc-gray c-fs24 c-fc-xmblue">免费</div>
              <div v-else class="c-fc-gray c-fs24 c-fc-xmblue">￥{{ item.price }}</div>
            </div>
          </card>
        </div>
      </pagination>
      <pagination v-else :currentPage="page.currentPage" :size="page.size" :total="page.total" @paginationToParent="paginationToParent">
        <div class="c-flex-row c-justify-sb c-flexw-wrap">
          <div v-for="(item, index) in list" :key="index" class="c-mb30" @click="goDetails(item.id)">
            <portraitCard width="c-ww160">
              <div slot="image">
                <img class="c-ww160 c-hh240 c-br10" :src="item.image" alt="" />
              </div>
              <div class="c-text-ellipsis2" slot="content">{{ item.title }}</div>
              <div slot="label">{{ item.name }}</div>
              <div v-if="item.price === '0'" slot="price">免费</div>
              <div v-else slot="price">￥{{ item.price }}</div>
            </portraitCard>
          </div>
          <div v-if="list.length % 3 !== 0" class="c-ww160"></div>
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
  name: 'E-book',
  components: { card, pagination, search, portraitCard },
  data() {
    return {
      search: '',
      list: [],
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
      let listInfo = [
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个轻松客户',
          name: 'Steve Drake',
          price: '0',
          classes: '2',
          times: '16万',
          type: '专栏',
          id: '1'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '399.00',
          classes: '2',
          persons: '2324',
          type: '专栏',
          id: '2'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '0',
          times: '1.6万',
          type: '图文',
          id: '3'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '0',
          times: '1234',
          type: '视频',
          id: '4'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '2',
          times: '16万',
          type: '专栏',
          id: '5'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '399.00',
          classes: '2',
          persons: '2324',
          type: '专栏',
          id: '6'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '0',
          times: '1.6万',
          type: '图文',
          id: '7'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '0',
          times: '1234',
          type: '视频',
          id: '8'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '0',
          classes: '2',
          times: '16万',
          type: '专栏',
          id: '9'
        },
        {
          image: 'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
          title: '你是一个情商合格的家长吗？',
          name: 'Steve Drake',
          price: '399.00',
          classes: '2',
          persons: '2324',
          type: '专栏',
          id: '10'
        }
      ];
      this.list.push(...listInfo);
    },
    paginationToParent(refreshCount) {
      this.getClassifyList();
      this.page.currentPage = refreshCount;
      // console.log('refreshCount', refreshCount);
    },
    goDetails(id) {
      this.$router.push(`/details/${id}`);
    }
  },
  created() {
    this.getClassifyList();
  }
};
</script>

<style></style>
