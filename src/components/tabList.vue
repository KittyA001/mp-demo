<template>
  <div :class="justifyType" class="c-fs24 c-fc-sblack c-flex-row c-aligni-center">
    <div v-for="(item, index) in list" :key="index" class="c-pv20 c-p" @click="$emit('change', index)">
      <div :class="{ 'c-fc-sxblack': tabType === index }">{{ item }}</div>
      <div v-if="isShowLine" class="c-pa c-p-lp50 c-p-b0 c-translate-x-50">
        <div v-show="tabType === index" :class="linebg" class="c-ww30 c-hh6 c-br2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabList',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    tabType: {
      type: [String, Number],
      default: 0
    },
    linebg: {
      type: String,
      default: ' c-linebg-orange'
    },
    isShowLine: {
      type: Boolean,
      default: false
    },
    justifyType: {
      type: String,
      default: 'c-justify-sb'
    }
  }
};
</script>

<style></style>
