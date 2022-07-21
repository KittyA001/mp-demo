<template>
  <div class="c-flex-row c-justify-sb c-aligni-center" :class="bor">
    <div class="c-flex-row c-aligni-center">
      <div class="c-fs28 c-fw400">
        <slot name="title"></slot>
      </div>
      <div class="c-fs20 c-fc-sgray c-ml10">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="c-fs20 c-fc-gray c-ml10 c-flex-row c-aligni-center">
      <div>
        <slot name="icon"></slot>
      </div>
      <div class="c-ml4">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: {
    bor: {
      type: String,
      default: ''
    }
  }
};
</script>

<style></style>
