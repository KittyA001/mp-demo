<template>
  <div class="c-p c-bg-white">
    <!-- 搜索 -->
    <div class="c-pf c-ph24 c-pv16 c-bg-white c-pz99" :class="{ 'c-p-t52': $route.path === '/classify' }">
      <div class="c-p">
        <input v-model="search" class="c-bg-sgray c-ww600 c-bd0 c-hh54 c-fs24 c-p c-br54 c-ph52" type="text" />
        <span id="search" v-show="!search" class="iconfont c-fc-gray c-fs24 c-pa c-p-tp50 c-p-l20 c-translate-y-50">&#xe790;<span class="c-ml10 c-fs24">搜索</span></span>
      </div>
      <div class="c-pt30 c-pb20 c-fs22 c-fc-xblack c-flex-row c-justify-sb">
        <div>共含{{ total }}个内容</div>
        <div>
          <span v-if="isCard" class="iconfont c-ph10 c-fs28" @click="$emit('changeCard')">&#xe989;</span>
          <span v-else class="iconfont c-ph10 c-fs28" @click="$emit('changeCard')">&#xe98a;</span>
          <span v-if="$route.path === '/classify'" class="c-pl10">类型</span>
          <span v-if="$route.path === '/classify'" class="iconfont c-fs20 c-pl10">&#xe714;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    total: {
      type: [String, Number],
      default: ''
    },
    search: {
      type: String,
      default: ''
    },
    isCard: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
