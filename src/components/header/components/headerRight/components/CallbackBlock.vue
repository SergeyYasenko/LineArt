<template>
  <div class="CallbackBlock">
    <div class="CallbackBlock__container">
      <Callback />
      <div class="CallbackBlock__tel-block" v-if="callbackTel">
        <a :href="'tel:' + callbackTel.tel" class="CallbackBlock__tel">
          <span v-html="callbackTel.name"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const callbackTel = {
  name: "+7&nbsp;(495)&nbsp;790&#8209;94&#8209;55",
  tel: "+74957909455",
};
</script>

<style lang="scss">
.CallbackBlock__container {
  display: flex;
  align-items: center;
  justify-content: end;
}

.CallbackBlock__tel {
  @include semiBoldMontserrat;
  font-size: rem(18px);
  line-height: 22px;
  color: $fontColor;
  @include transition;
  margin-left: 24px;
}

.CallbackBlock__tel:hover {
  color: $hoverColor;
}
</style>
