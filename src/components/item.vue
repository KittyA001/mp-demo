<template>
  <div class="c-ww640 c-hh260 c-flex-row c-alignc-sa c-justify-sa c-flexw-wrap">
    <div class="c-flex-column c-justify-center c-aligni-center c-w20" v-for="(item, index) in list" :key="index">
      <div class="iconfont c-fs44 c-fc-xsblue c-mb6" :class="item.icon"></div>
      <div class="c-fs20 c-fc-sblack">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  data() {
    return {
      list: []
    };
  },
  methods: {
    getList() {
      let listItems = [
        {
          icon: 'icon-fenxiangshouyi',
          title: '分享收益'
        },
        {
          icon: 'icon-guanzhugongzhonghao3',
          title: '关注公众号'
        },
        {
          icon: 'icon-kecheng1',
          title: '课程'
        },
        {
          icon: 'icon-zhuanlan11',
          title: '专栏'
        },
        {
          icon: 'icon-guankanjilu21',
          title: '观看历史'
        },
        {
          icon: 'icon-shequn21',
          title: '我的社群'
        },
        {
          icon: 'icon-shequn21',
          title: '我的评测'
        },
        {
          icon: 'icon-fenxiangshouyi',
          title: '分享收益'
        },
        {
          icon: 'icon-zhuanlan11',
          title: '专栏'
        },
        {
          icon: 'icon-guankanjilu21',
          title: '观看历史'
        }
      ];
      this.list = listItems;
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style></style>
