<template>
  <div class="c-pv20 c-bg-white">
    <div class="c-ph24">
      <cell v-if="isShow">
        <div slot="title">{{ title }}</div>
        <div slot="left">{{ left }}</div>
        <div slot="icon">
          <slot name="icon"></slot>
        </div>
        <div v-if="right === '全部分类'" slot="right" @click="$router.push('/classify')">{{ right }}</div>
        <div v-else slot="right">{{ right }}</div>
      </cell>
    </div>
    <tab class="c-ph44 c-mt10" v-if="title === '精品课程'" :active="active" @change="active = $event"></tab>
    <div class="c-pt24 c-mb24 c-ph24" v-for="(item, index) in list" :key="index">
      <card :width="width" :height="height">
        <div class="c-p" slot="image">
          <img class="c-w100 c-brp50" v-if="fit === 'cover'" :class="height" :src="item.url" alt="" />
          <img class="c-w100 c-br5" v-else :class="height" :src="item.url" alt="" />
          <div v-if="title === '特惠专区'" class="c-w100 c-translucent-balck40 c-pa c-p-b0 c-fs18 c-fc-white c-textAlign-c">距结束:{{ item.time }}</div>
        </div>
        <div class="c-pt6" slot="content" v-if="item.persons">{{ item.content }}</div>
        <div class="c-pt20" slot="content" v-else-if="!title">{{ item.content }}</div>
        <div slot="content" v-else>{{ item.content }}</div>
        <div class="c-flex-row c-justify-sb c-aligni-center c-pt16 c-p" slot="label" v-if="title === '社群'">
          <div>{{ item.persons }}人已加入</div>
          <button class="c-bd0 c-bg-xblue c-ww110 c-hh44 c-br22 c-fs22 c-fc-white c-pa c-p-r0 c-p-t-26">加入</button>
        </div>
        <div class="c-flex-row c-justify-sb c-aligni-center" slot="label" v-else>
          <div v-if="title === '特惠专区'" class="c-text-decoration-through">单买价￥{{ item.unitPrice }}</div>
          <div v-else>{{ item.label }}</div>
          <div class="c-fc-smblue" v-if="item.price">
            <span class="c-fs18">￥</span><span class="c-fs28">{{ item.price }}</span>
          </div>
        </div>
        <div class="c-flex-row c-justify-sb c-aligni-center" slot="number" v-if="item.number">
          <div class="c-mt10" slot="number">
            <span v-if="item.sets"
              ><span>试卷{{ item.sets }}套</span> <span class="c-mr4">|</span></span
            >
            <span>{{ item.number }}人已购买</span>
          </div>
          <div class="c-fc-smblue c-flex-row">
            <div class="c-fs12 c-ph2 c-flex-column c-justify-end" v-if="title === '热门专栏'">
              <span class="c-bd1-smblue c-mb4" v-if="title === '热门专栏'">SVIP免费</span>
            </div>
            <div class="c-flex-row c-aligni-end" v-if="item.money > 0">
              <span class="c-fs18">￥</span>
              <span class="c-fs28">{{ item.money }}</span>
              <!-- <span class="c-fs28">免费</span> -->
            </div>
            <div v-else class="c-fs28 c-fc-smblue">免费</div>
          </div>
        </div>
        <div class="c-flex-row c-justify-sb c-aligni-center c-fc-smblue c-mt10" slot="number" v-if="item.query">{{ item.query }}个问答</div>
        <div class="c-flex-row c-justify-sb c-aligni-center" slot="number" v-if="item.state">
          <span class="c-mt10" :class="item.state === 1 ? 'c-fc-smblue' : 'c-fc-xblack'">{{ item.state === 1 ? '正在直播' : '回放' }}</span>
          <span class="c-fc-smblue c-mt8" v-if="item.money > 0">
            <span class="c-fs18">￥</span>
            <span class="c-fs28">{{ item.money }}</span>
          </span>
          <span v-else class="c-fs28 c-fc-smblue">免费</span>
        </div>
      </card>
      <div class="c-bg-white c-pl204 c-w100 c-flex-row c-justify-sb c-aligni-center c-mb20 c-pr24" v-if="item.lumpPrice">
        <div class="c-fc-smblue c-fs18">
          <span>拼团价￥</span><span class="c-fs24">{{ item.lumpPrice }}</span>
        </div>
        <button class="c-bd0 c-bg-sblue c-ww110 c-hh44 c-br22 c-fs22 c-fc-white">去拼团</button>
      </div>
      <slot name="officialAccount"></slot>
    </div>
  </div>
</template>

<script>
import cell from './cell.vue';
import card from './card.vue';
import tab from './tab.vue';
export default {
  name: 'modular',
  components: {
    cell,
    card,
    tab
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    fit: {
      type: String,
      default: ''
    },
    rightLabel: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style></style>
