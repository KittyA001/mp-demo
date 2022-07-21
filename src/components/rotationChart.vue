<template>
  <div class="c-hh320 c-w100 c-p">
    <swiper class="c-h" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in imgList" :key="index">
        <img class="c-w100 c-h" :src="item" alt="" />
      </swiper-slide>
    </swiper>
    <div class="c-pz99 c-pa c-p-b20 c-p-r24 c-ww64 c-hh28 c-fs20 c-fc-white c-br14 c-translucent-balck30 c-textAlign-c c-lh28 c-fw400">{{ activeIndex }}/{{ imgList.length }}</div>
  </div>
</template>

<script>
export default {
  name: 'rotationChart',
  data() {
    return {
      imgList: [],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange: () => {
            if (this.$refs.mySwiper.swiper.activeIndex === 4) {
              this.activeIndex = 1;
            } else {
              this.activeIndex = this.$refs.mySwiper.swiper.activeIndex;
            }
          }
        }
      },
      activeIndex: ''
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    getImgList() {
      let imgList = [
        'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
        'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg',
        'https://knowledge-payment.oss-cn-beijing.aliyuncs.com/13/resource/admin-fe_lj7l_GhtQk6nNkpwcGWSPHWEE.jpg'
      ];
      this.imgList = imgList;
    },
    getSwiper() {
      this.activeIndex = this.swiper.activeIndex;
    }
  },
  created() {
    this.getImgList();
  },
  mounted() {
    this.getSwiper();
  }
};
</script>

<style></style>
