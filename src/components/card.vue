<template>
  <div class="c-flex-row" :class="height">
    <div :class="width">
      <slot name="image"></slot>
    </div>
    <div class="c-flex-1 c-ml20 c-flex-column c-justify-sb">
      <div class="c-w100 c-fc-xblack" :class="fontSize">
        <slot name="content"></slot>
      </div>
      <div class="c-w100 c-fs18 c-fc-sgray">
        <slot name="label"></slot>
      </div>
      <div class="c-w100 c-fs18 c-fc-sgray">
        <slot name="number"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: 'c-fs24'
    }
  }
};
</script>

<style></style>
