<template>

	<div class="header">
		<div class="header__container container">
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</div>
	</div>

</template>

<script setup lang="ts">

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