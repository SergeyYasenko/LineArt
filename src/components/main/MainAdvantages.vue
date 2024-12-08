<template>
  <div class="MainAdvantages" v-if="cards">
    <div class="MainAdvantages__container container">
      <div class="MainAdvantages__card" v-for="card in cards" :key="card.id">
        <div class="MainAdvantages__card-background" v-if="card.background">
          <img :src="card.background.img" :alt="card.background.alt" />
        </div>
        <div class="MainAdvantages__card-title" v-if="card.title">
          <span v-html="card.title"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import background1 from "@/assets/img/Main/MainAdvantages/cart-tick.png";
import background2 from "@/assets/img/Main/MainAdvantages/chart-up.png";
import background3 from "@/assets/img/Main/MainAdvantages/ruble.png";
import background4 from "@/assets/img/Main/MainAdvantages/home-4.png";

export interface MainCard {
  id: number;
  title: string;
  background: { img: string; alt: string };
}

const cards = ref<MainCard[]>([
  {
    id: 1,
    title: "Широкий ассортимент",
    background: {
      img: background1,
      alt: "Картинка корзины",
    },
  },
  {
    id: 2,
    title: "Высокое качество",
    background: {
      img: background2,
      alt: "Картинка графика качества",
    },
  },
  {
    id: 3,
    title: "Цена от производителя",
    background: {
      img: background3,
      alt: "Картинка рубля",
    },
  },
  {
    id: 4,
    title: "Собственный склад",
    background: {
      img: background4,
      alt: "Картинка склада",
    },
  },
]);
</script>

<style lang="scss">
.MainAdvantages__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
}

.MainAdvantages__card {
  flex: 1 1 25%;
  margin-right: 24px;
  padding: 24px;
  border: 1px solid rgba(34, 51, 66, 0.1);
  backdrop-filter: blur(6.400000095367432px);
  min-height: 160px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

.MainAdvantages__card:last-child {
  margin-right: 0;
}

.MainAdvantages__card-background {
  position: absolute;
  right: 8px;
  bottom: -59px;
  height: 230px;
  width: 230px;
  z-index: 2;
}

.MainAdvantages__card-title {
  @include semiBoldMontserrat;
  font-size: rem(22px);
  font-style: italic;
  line-height: 27px;
  max-width: 183px;
}
</style>
