<template>
  <nav class="Category" aria-label="Категории" v-if="categories">
    <ul class="Category__items">
      <li
        class="Category__item"
        v-for="category in categories"
        :key="category.id"
      >
        <NuxtLink class="Category__link">
          <div v-if="category.title">
            <span v-html="category.title"></span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Category } from "~~/types/products";

// Типизация переменной categories
const categories = ref<Category[]>([]);

// Загружаем данные из JSON
onMounted(async () => {
  try {
    const response = await fetch("/api/loadPage"); // Путь к вашему JSON
    const data = await response.json();
    categories.value = data.content.mainProducts.categories;
  } catch (error) {
    console.error("Ошибка загрузки данных категорий:", error);
  }
});
</script>

<style lang="scss"></style>
