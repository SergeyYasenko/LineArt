<template>
	<div class="HeaderLeft">
		<div class="HeaderLeft__container">
			<IconLogo class="HeaderLeft__icon" width="167" height="66" />
			<Button class="HeaderLeft__btn" type="primary" size="large">
				<span class="HeaderLeft__btn-burger-block">
					<span class="HeaderLeft__btn-burger-line"></span>
					<span class="HeaderLeft__btn-burger-line"></span>
					<span class="HeaderLeft__btn-burger-line"></span>
				</span>
				Каталог товаров
				<IconArrowButton class="HeaderLeft__btn-burger-icon" width="18" height="18" />
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

.HeaderLeft {
	min-width: 257px;
	margin-right: 20px;
}

.HeaderLeft__container {
	display: flex;
	flex-direction: column;
}

.HeaderLeft__icon {
	margin-bottom: 18px;
}

.HeaderLeft__btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: uppercase;
}

.HeaderLeft__btn-burger-block {
	position: relative;
	display: inline-block;
}

.HeaderLeft__btn-burger-line {
	background-color: $bgColorLight;
	position: absolute;
	border-radius: 4px;
	top: 0;
	left: 0;
	width: 11px;
	height: 1px;
}

.HeaderLeft__btn-burger-line:first-child {
	top: 4px
}

.HeaderLeft__btn-burger-line:last-child {
	top: -4px
}

</style>