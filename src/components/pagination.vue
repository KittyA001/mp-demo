<template>
  <div>
    <slot></slot>
    <div class="c-flex-row c-justify-center">
      <div class="c-hh40 c-fs24" v-if="!(total / size > currentPage)">加载完成</div>
      <div class="c-hh40 c-fs24" v-else>加载更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      onScroll: true,
      refreshCount: 1
    };
  },
  methods: {
    setUpdate(Value) {
      this.onScroll = Value;
    },
    scrollEvent() {
      let scrollTop, clientHeight, scrollHeight;
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      clientHeight = document.documentElement.clientHeight;
      scrollHeight = document.documentElement.scrollHeight;
      this.onScroll = this.total / this.size > this.currentPage;
      //console.log('this.total / this.size=', this.total / this.size, this.currentPage);
      //console.log('total', this.total, this.OnScroll);
      if (scrollHeight - scrollTop - clientHeight < 40 && this.onScroll) {
        this.refreshCount += 1;
        this.$emit('paginationToParent', this.refreshCount);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollEvent);
  }
};
</script>
