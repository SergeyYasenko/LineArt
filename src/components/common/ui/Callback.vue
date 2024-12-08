<template>
  <div class="Callback">
    <div class="Callback__wrapper">
      <button type="button" class="Callback__button">Обратный звонок</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.Callback__button {
  @include mediumInter;
  font-size: rem(12px);
  line-height: 15px;
  text-decoration: underline;
  @include transition;
  text-transform: uppercase;
}

.Callback__button:hover {
  color: $hoverColor;
}
</style>
