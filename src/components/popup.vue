<template>
  <div class="c-w100 c-h100vh c-translucent-balck50 c-pa c-p-t0 c-pz100">
    <div class="c-ww540 c-hh340 c-bg-white c-pa c-p-tp20 c-p-lp50 c-translate-x-50 c-br20 c-flex-column c-justify-sb c-aligni-center c-pv40 c-ph40">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="button">确定</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup'
};
</script>

<style>
.popup {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
}
</style>
