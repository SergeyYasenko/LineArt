<template>
  <div class="HeaderRight">
	<div class="HeaderRight__container">
	  <CallbackBlock class="HeaderRight__Callback-block" />
	  <CatalogMenu
	  class="HeaderRight__catalog-menu"
	  ariaLabel="Правое меню пользователя"
	  :items="[
          {
            id: 1,
            name: 'Сравнить',
            link: '/delivery',
            icon: IconArrows,
            showIconFirst: true,
          },
          {
            id: 2,
            name: 'Избранное',
            link: '/showrooms',
            icon: IconHeart,
            showIconFirst: true,
          },
          {
            id: 3,
            name: 'Войти',
            link: '/contacts',
            icon: IconAuth,
            showIconFirst: true,
          },
          {
            id: 4,
            name: 'Корзина',
            link: '/about',
            icon: IconCart,
            showIconFirst: true,
          },
        ]"
	  />
	</div>
  </div>
</template>

<script setup lang="ts">
import CallbackBlock from "~/components/HeaderComponent/components/HeaderRight/components/CallbackBlock.vue";
import CatalogMenu from "~/components/ui/CatalogMenu.vue";
import IconArrows from "assets/icons/IconArrow.vue";
import IconAuth from "assets/icons/IconAuth.vue";
import IconCart from "assets/icons/IconCart.vue";
import IconHeart from "assets/icons/IconHeart.vue";
</script>

<style lang="scss">
.HeaderRight__container {
  min-width: 533px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
}

.HeaderRight__Callback-block {
  margin-top: 25px;
}

.HeaderRight__catalog-menu {
  margin-bottom: 15px;
}
</style>
