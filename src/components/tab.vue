<template>
  <div class="c-w100 c-flex-row c-justify-sb c-aligni-center">
    <div class="c-ww110 c-hh44 c-fs22 c-textAlign-c c-lh44 c-br22" :class="active === 0 ? 'c-fc-ssblue c-bd1-smblue' : 'c-fc-gray c-bd1-gray'" @click="$emit('change', 0)">全部</div>
    <div class="c-ww110 c-hh44 c-fs22 c-textAlign-c c-lh44 c-br22" :class="active === 1 ? 'c-fc-ssblue c-bd1-smblue' : 'c-fc-gray c-bd1-gray'" @click="$emit('change', 1)">视频</div>
    <div class="c-ww110 c-hh44 c-fs22 c-textAlign-c c-lh44 c-br22" :class="active === 2 ? 'c-fc-ssblue c-bd1-smblue' : 'c-fc-gray c-bd1-gray'" @click="$emit('change', 2)">音频</div>
    <div class="c-ww110 c-hh44 c-fs22 c-textAlign-c c-lh44 c-br22" :class="active === 3 ? 'c-fc-ssblue c-bd1-smblue' : 'c-fc-gray c-bd1-gray'" @click="$emit('change', 3)">图文</div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  methods: {
    all() {
      this.$emit('all', 0);
    }
  }
};
</script>

<style></style>
