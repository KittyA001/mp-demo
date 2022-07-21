<template>
  <div class="layout c-p">
    <router-view></router-view>
    <tabBar class="c-w100"></tabBar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar.vue';

export default {
  name: 'Layout',
  components: { tabBar }
};
</script>

<style></style>
