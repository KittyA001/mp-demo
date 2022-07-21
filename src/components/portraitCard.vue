<template>
  <div :class="width">
    <div class="c-w100" :class="height">
      <slot name="image"></slot>
    </div>
    <div class="c-fs24 c-fc-xblack c-mt12">
      <slot name="content"></slot>
    </div>
    <div class="c-fs20 c-fc-sblack c-mt14">
      <slot name="label"></slot>
    </div>
    <div class="c-fs22 c-fc-xxsblue c-mt14">
      <slot name="price"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portraitCard',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '240'
    }
  }
};
</script>

<style></style>
