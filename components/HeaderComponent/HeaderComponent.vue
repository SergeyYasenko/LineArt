<template>
  <div class="header" aria-label="Шапка сайта">
	<div class="header__container container">
	  <HeaderLeft/>
	  <HeaderCenter/>
	  <HeaderRight/>
	</div>
  </div>
</template>

<script setup lang="ts">
import HeaderLeft from "./components/HeaderLeft/HeaderLeft.vue";
import HeaderCenter from "./components/HeaderCenter/HeaderCenter.vue";
import HeaderRight from "./components/HeaderRight/HeaderRight.vue";
</script>

<style lang="scss">
.header {
  width: 100%;
  background-color: $bgColorLight;
}

.header__container {
  padding: 16px 15px;
  display: flex;
  justify-content: space-between;
}
</style>
