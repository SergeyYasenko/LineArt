<template>
  <nav class="HeaderCenterCatalogMenu" :aria-label="props.ariaLabel">
    <ul class="HeaderCenterCatalogMenu__items" v-if="props.items">
      <li
        class="HeaderCenterCatalogMenu__item"
        v-for="item in props.items"
        :key="item.id"
      >
        <a :href="item.link" class="HeaderCenterCatalogMenu__link">
          <!-- Иконка, если showIconFirst === true -->
          <component
            :is="item.icon"
            class="HeaderCenterCatalogMenu__item-icon HeaderCenterCatalogMenu__item-icon--mr"
            v-if="item.icon && showIconFirst(item)"
          />
          <!-- Текст -->
          <span
            class="HeaderCenterCatalogMenu__item-text"
            v-html="item.name"
          ></span>
          <!-- Иконка, если showIconFirst === false -->
          <component
            :is="item.icon"
            class="HeaderCenterCatalogMenu__item-icon HeaderCenterCatalogMenu__item-icon--small HeaderCenterCatalogMenu__item-icon--rotate"
            v-if="item.icon && !showIconFirst(item)"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface MenuItem {
  id: number;
  name: string;
  link: string;
  icon?: any;
  showIconFirst?: boolean;
}

interface Props {
  items: MenuItem[];
  ariaLabel?: string;
}

const props = defineProps<Props>();
console.log(props)

const showIconFirst = (item: MenuItem): boolean => {
  return item.showIconFirst ?? false;
};
</script>

<style lang="scss">
.HeaderCenterCatalogMenu__items {
  display: flex;
  align-items: center;
}

.HeaderCenterCatalogMenu__item {
  margin-right: 16px;
}

.HeaderCenterCatalogMenu__item:last-child {
  margin-right: 0;
}

.HeaderCenterCatalogMenu__item a {
  display: flex;
  align-items: center;
  color: $fontColor;
  @include semiBoldMontserrat;
  font-size: rem(14px);
  line-height: 17px;
  text-transform: uppercase;
  @include transition();
}

.HeaderCenterCatalogMenu__item a:hover {
  color: $hoverColor;
}

.HeaderCenterCatalogMenu__item-icon {
  width: 24px;
  height: 24px;
  fill: $fontColor;
  margin-left: 5px;
}

.HeaderCenterCatalogMenu__item-icon--small {
  width: 15px;
  height: 15px;
}

.HeaderCenterCatalogMenu__item-icon--mr {
  margin-left: 0;
  margin-right: 4px;
}

.HeaderCenterCatalogMenu__item-icon--rotate {
  transform: rotate(-90deg);
}
</style>
