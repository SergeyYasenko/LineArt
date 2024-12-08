<template>
  <section class="MainCatalog">
    <div class="MainCatalog__container container">
      <h2 class="MainCatalog__title-block" v-if="mainCatalog.title">
        <span class="MainCatalog__title" v-html="mainCatalog.title"></span>
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
const mainCatalog = {
  title: "<span>Популярные</span> <span>товары</span>",
};
</script>

<style lang="scss">
.MainCatalog__title-block {
  width: 600px;
  margin: 0 auto 56px;
}

.MainCatalog__title {
  @include heading(80px, 80px, $fontColor, "bold");
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 52px;
  text-align: center;
}
</style>
