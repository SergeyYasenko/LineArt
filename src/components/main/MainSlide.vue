<template>
  <div class="MainSlide">
    <div class="MainSlide__container">
      <ClientOnly>
        <Swiper
          class="MainSlide__slider-container"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :modules="modules"
          :slides-per-view="1.25"
          :space-between="30"
          :loop="true"
          :centered-slides="true"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.MainSlide__button-next',
            prevEl: '.MainSlide__button-prev',
          }"
          :a11y="{
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
          }"
        >
          <SwiperSlide
            class="MainSlide__slider-slide"
            v-for="(slide, idx) in slides"
            :key="slide.id"
            :style="{ 'background-image': `url(${slide.img})` }"
          >
            <div class="MainSlide__slider-content">
              <h1 class="MainSlide__title-block" v-if="slide.title">
                <span class="MainSlide__title" v-html="slide.title"></span>
              </h1>
              <p class="MainSlide__text" v-if="slide.subtitle">
                <span v-html="slide.subtitle"></span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          type="button"
          class="swiper-button-prev MainSlide__button MainSlide__button-prev"
        >
          <span class="MainSlide__button-icon-block">
            <IconArrow class="MainSlide__button-icon" />
          </span>
          <span class="MainSlide__button-text"> Алюминиевые полки </span>
        </button>
        <button
          type="button"
          class="swiper-button-next MainSlide__button MainSlide__button-next"
        >
          <span class="MainSlide__button-text"> Алюминиевые полки </span>
          <span class="MainSlide__button-icon-block">
            <IconArrow class="MainSlide__button-icon" />
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

import images from "assets/img/Main/MainSlide/heroSectionSlide-1.jpg";

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
.MainSlide__slider-container {
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

.MainSlide__slider-slide {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.MainSlide__slider-slide {
  background-color: rgba(41, 41, 45, 0.8);
  background-blend-mode: overlay;
  @include transition(all, 0.5s, ease-in-out);
}

.MainSlide__slider-slide.swiper-slide-active {
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

.MainSlide__button-prev::after,
.MainSlide__button-next::after {
  display: none !important;
}

.MainSlide__button-prev,
.MainSlide__button-next {
  top: auto;
  color: $fontColorLight;
  width: auto;
  height: auto;
}

.MainSlide__button-prev {
  bottom: 70px;
  left: 15%;
}

.MainSlide__button-next {
  bottom: 70px;
  right: 15%;
}

.MainSlide__button-prev .MainSlide__button-icon-block {
  margin-right: 24px;
}

.MainSlide__button-next .MainSlide__button-icon-block {
  margin-left: 24px;
}

.MainSlide__button-next .MainSlide__button-icon {
  transform: rotate(180deg);
}

.MainSlide__button-icon-block {
  min-width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid $fontColorLight;
}

.MainSlide__button-text {
  max-width: 116px;
  text-align: left;
  @include regularInter;
  font-size: rem(16px);
  line-height: 19px;
}

.MainSlide__button-icon {
  max-width: 42px;
  max-height: 42px;
}

.MainSlide__slider-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  backdrop-filter: blur(6.400000095367432px);
  padding-left: 36px;
  padding-right: 36px;
}

.MainSlide__title-block {
  width: 600px;
}

.MainSlide__title {
  @include heading(100px, 100px, $fontColorLight, "bold");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 52px;
}

.MainSlide__title span:first-child {
  text-align: start;
}

.MainSlide__title span:last-child {
  text-align: end;
}

.MainSlide__text {
  @include regularInter;
  font-size: rem(16px);
  line-height: 24px;
  color: $fontColorLight;
  max-width: 288px;
}
</style>
