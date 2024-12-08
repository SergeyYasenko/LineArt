<template>
  <div class="Search">
    <!-- Поле ввода -->
    <label for="search" class="sr-only">Поиск</label>
    <input
      class="Search__input"
      id="search"
      type="search"
      name="search"
      v-model="query"
      :placeholder="props.placeholder || 'Найти что-нибудь...'"
      @keyup.enter="handleSearch"
    />
    <button
      aria-label="Поиск"
      type="button"
      class="Search__button"
      @click="handleSearch"
    >
      <IconSearch width="20" height="20" />
    </button>
  </div>
</template>

<script lang="ts" setup>
// Импорт из Vue
import { ref } from "vue";

// Описываем интерфейс для props
interface Props {
  placeholder?: string; // Плейсхолдер (опциональный)
  onSearch?: (query: string) => void; // Колбэк-функция для поиска
}

// Указываем типизацию props
const props = defineProps<Props>();

// Типизируем реактивную переменную для строки запроса
const query = ref<string>("");

// Типизируем метод для обработки поиска
const handleSearch = (): void => {
  if (props.onSearch) {
    props.onSearch(query.value); // Передаем запрос
  }
};
</script>

<style lang="scss">
.Search {
  display: flex;
  align-items: center;
  position: relative;
}

.Search__input {
  flex: 1;
  padding: 13.5px 16px;
  background: #ffffff;
  @include regularMontserrat;
  font-size: rem(14px);
  line-height: 24px;
  color: $fontColor;
  border-radius: $radius;
}
.Search__button {
  position: absolute;
  top: 15.5px;
  right: 16px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
