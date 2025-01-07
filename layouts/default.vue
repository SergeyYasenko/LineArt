<template>
  <div class="layoutsDefault">
	<HeaderComponent class="layoutsDefault__header"/>
	<main class="layoutsDefault__body">
	  <NuxtPage/>
	</main>
	<FooterComponent aria-label="Подвал сайта" class="layoutsDefault__footer"/>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.layoutsDefault {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layoutsDefault__body {
  flex: 1 1 auto;
  height: 100%;
}
</style>
