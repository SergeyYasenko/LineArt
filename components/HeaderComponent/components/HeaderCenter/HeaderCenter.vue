<template>
  <div class="HeaderCenter">
	<CatalogMenu
	class="HeaderCenter__catalog-menu"
	ariaLabel="Центральное меню сайта"
	:items="items"
	/>
	<Search/>
  </div>
</template>

<script setup lang="ts">
import Search from "~/components/ui/Search.vue";
import IconArrow from "assets/icons/IconArrow.vue";
import CatalogMenu from "~/components/ui/CatalogMenu.vue";


const items = [
  {id: 1, name: 'Доставка', link: '/delivery', showIconFirst: false},
  {id: 2, name: 'Шоурумы', link: '/showrooms', showIconFirst: false},
  {id: 3, name: 'Контакты', link: '/contacts', showIconFirst: false},
  {id: 4, name: 'О компании', link: '/about', showIconFirst: false},
  {id: 5, name: 'Ещё', link: '/more', icon: IconArrow, showIconFirst: false},
]
</script>

<style lang="scss">
.HeaderCenter {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.HeaderCenter__catalog-menu {
  margin-top: 25px;
}
</style>
