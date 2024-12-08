<template>
  <div class="HeroSection">
    <div class="HeroSection__container">
      <ClientOnly>
        <Swiper
          class="HeroSection__slider-container"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :modules="modules"
          :slides-per-view="1.25"
          :space-between="30"
          :loop="true"
          :centered-slides="true"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.HeroSection__button-next',
            prevEl: '.HeroSection__button-prev',
          }"
          :a11y="{
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
          }"
        >
          <SwiperSlide
            class="HeroSection__slider-slide"
            v-for="(slide, idx) in slides"
            :key="slide.id"
            :style="{ 'background-image': `url(${slide.img})` }"
          >
            <div class="HeroSection__slider-content">
              <h1 class="HeroSection__title-block" v-if="slide.title">
                <span class="HeroSection__title" v-html="slide.title"></span>
              </h1>
              <p class="HeroSection__text" v-if="slide.subtitle">
                <span v-html="slide.subtitle"></span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          type="button"
          class="swiper-button-prev HeroSection__button HeroSection__button-prev"
        >
          <span class="HeroSection__button-icon-block">
            <IconArrow class="HeroSection__button-icon" />
          </span>
          <span class="HeroSection__button-text"> Алюминиевые полки </span>
        </button>
        <button
          type="button"
          class="swiper-button-next HeroSection__button HeroSection__button-next"
        >
          <span class="HeroSection__button-text"> Алюминиевые полки </span>
          <span class="HeroSection__button-icon-block">
            <IconArrow class="HeroSection__button-icon" />
          </span>
        </button>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import images from "assets/img/Main/HeroSection/heroSectionSlide-1.jpg";

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  img: string;
}

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = ref<Slide[]>([
      {
        id: 1,
        title: "<span>Теневой</span> <span>плинтус</span>",
        subtitle: "Современные, стильные решения для ценителей минимализма",
        img: images,
      },
      {
        id: 2,
        title: "<span>Теневой</span> <span>плинтус</span>",
        subtitle: "Современные, стильные решения для ценителей минимализма",
        img: images,
      },
      {
        id: 3,
        title: "<span>Теневой</span> <span>плинтус</span>",
        subtitle: "Современные, стильные решения для ценителей минимализма",
        img: images,
      },
      {
        id: 4,
        title: "<span>Теневой</span> <span>плинтус</span>",
        subtitle: "Современные, стильные решения для ценителей минимализма",
        img: images,
      },
      {
        id: 5,
        title: "<span>Теневой</span> <span>плинтус</span>",
        subtitle: "Современные, стильные решения для ценителей минимализма",
        img: images,
      },
      {
        id: 6,
        title: "<span>Теневой</span> <span>плинтус</span>",
        subtitle: "Современные, стильные решения для ценителей минимализма",
        img: images,
      },
    ]);

    const onSwiper = () => {};

    const onSlideChange = () => {};
    return {
      slides,
      onSwiper,
      onSlideChange,
      modules: [A11y, Navigation, Pagination],
    };
  },
});
</script>

<style lang="scss">
.HeroSection__slider-container {
  height: calc(100vh - 166px);
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  @include transition(all, 0.8s, ease-in-out);
  overflow: hidden;
  --swiper-pagination-bottom: 30px;
  margin-bottom: 80px;
}

.HeroSection__slider-slide {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.HeroSection__slider-slide {
  background-color: rgba(41, 41, 45, 0.8);
  background-blend-mode: overlay;
  @include transition(all, 0.5s, ease-in-out);
}

.HeroSection__slider-slide.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
  background-color: rgba(41, 41, 41, 0.3);
  background-blend-mode: multiply;
}

.swiper-pagination-bullet {
  width: 48px;
  height: 5px;
  background-color: #9b9b9b;
  border-radius: 38px;
  transition: background-color 0.3s ease;
}

.swiper-pagination-bullet-active {
  background-color: #ffffff;
}

.HeroSection__button-prev::after,
.HeroSection__button-next::after {
  display: none !important;
}

.HeroSection__button-prev,
.HeroSection__button-next {
  top: auto;
  color: $fontColorLight;
  width: auto;
  height: auto;
}

.HeroSection__button-prev {
  bottom: 70px;
  left: 15%;
}

.HeroSection__button-next {
  bottom: 70px;
  right: 15%;
}

.HeroSection__button-prev .HeroSection__button-icon-block {
  margin-right: 24px;
}

.HeroSection__button-next .HeroSection__button-icon-block {
  margin-left: 24px;
}

.HeroSection__button-next .HeroSection__button-icon {
  transform: rotate(180deg);
}

.HeroSection__button-icon-block {
  min-width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid $fontColorLight;
}

.HeroSection__button-text {
  max-width: 116px;
  text-align: left;
  @include regularInter;
  font-size: rem(16px);
  line-height: 19px;
}

.HeroSection__button-icon {
  max-width: 42px;
  max-height: 42px;
}

.HeroSection__slider-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  backdrop-filter: blur(6.400000095367432px);
  padding-left: 36px;
  padding-right: 36px;
}

.HeroSection__title-block {
  width: 600px;
}

.HeroSection__title {
  @include heading(100px, 100px, $fontColorLight, "bold");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 52px;
}

.HeroSection__title span:first-child {
  text-align: start;
}

.HeroSection__title span:last-child {
  text-align: end;
}

.HeroSection__text {
  @include regularInter;
  font-size: rem(16px);
  line-height: 24px;
  color: $fontColorLight;
  max-width: 288px;
}
</style>
