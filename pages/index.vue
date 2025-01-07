<template>
   <div class="main">
      <div class="main__container">
         <MainSlider :data="slides" />
         <MainAdvantages />
         <MainCategories />
         <MainOffset />
         <MainCatalog />
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const slides = ref<any[]>([]);

const fetchSlides = async () => {
   try {
      const response = await fetch("/api/loadPage");
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Проверка верхнего уровня
      if (data?.status === "ok" && data?.content) {
         // Проверка для слайдов
         if (data.content.slider) {
            slides.value = data.content.slider;
         }
      }
   } catch (error) {
      console.error("Ошибка при загрузке данных с API:", error);
   }
};

onMounted(fetchSlides);
</script>

<style lang="scss">
.main {
   background-color: $bgColorLight;
}
</style>
