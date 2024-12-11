<template>
  <section class="MainSlider">
    <div class="MainSlider__container">
      <ClientOnly>
        <Swiper
          class="MainSlider__slider-container"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :modules="modules"
          :slides-per-view="1.26"
          :space-between="30"
          :loop="true"
          :centered-slides="true"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.MainSlider__button-next',
            prevEl: '.MainSlider__button-prev',
          }"
          :a11y="{
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
          }"
        >
          <SwiperSlide
            class="MainSlider__slider-slide"
            v-for="(slide, idx) in slides"
            :key="slide.id"
            :style="{ 'background-image': `url(${slide.img})` }"
          >
            <div class="MainSlider__slider-content">
              <h1 class="MainSlider__title-block" v-if="slide.title">
                <span class="MainSlider__title" v-html="slide.title"></span>
              </h1>
              <p class="MainSlider__text" v-if="slide.subtitle">
                <span v-html="slide.subtitle"></span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          type="button"
          class="swiper-button-prev MainSlider__button MainSlider__button-prev"
        >
          <span class="MainSlider__button-icon-block">
            <IconArrow class="MainSlider__button-icon" />
          </span>
          <p class="MainSlider__button-text">Алюминиевые полки</p>
        </button>
        <button
          type="button"
          class="swiper-button-next MainSlider__button MainSlider__button-next"
        >
          <p class="MainSlider__button-text">Алюминиевые полки</p>
          <span class="MainSlider__button-icon-block">
            <IconArrow class="MainSlider__button-icon" />
          </span>
        </button>
      </ClientOnly>
    </div>
  </section>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import images from "assets/img/Main/MainSlider/heroSectionSlide-1.jpg";

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
.MainSlider__slider-container {
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

.MainSlider__slider-slide {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.MainSlider__slider-slide {
  background-color: rgba(41, 41, 45, 0.8);
  background-blend-mode: overlay;
  @include transition(all, 0.5s, ease-in-out);
}

.MainSlider__slider-slide.swiper-slide-active {
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

.MainSlider__button-prev::after,
.MainSlider__button-next::after {
  display: none !important;
}

.MainSlider__button-prev,
.MainSlider__button-next {
  top: auto;
  color: $fontColorLight;
  width: auto;
  height: auto;
}

.MainSlider__button-prev {
  bottom: 70px;
  left: 15%;
}

.MainSlider__button-next {
  bottom: 70px;
  right: 15%;
}

.MainSlider__button-prev .MainSlider__button-icon-block {
  margin-right: 24px;
}

.MainSlider__button-next .MainSlider__button-icon-block {
  margin-left: 24px;
}

.MainSlider__button-next .MainSlider__button-icon {
  transform: rotate(180deg);
}

.MainSlider__button-icon-block {
  min-width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid $fontColorLight;
}

.MainSlider__button-text {
  max-width: 116px;
  text-align: left;
  @include regularInter;
  font-size: rem(16px);
  line-height: 19px;
}

.MainSlider__button-icon {
  max-width: 42px;
  max-height: 42px;
}

.MainSlider__slider-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  backdrop-filter: blur(6.400000095367432px);
  padding-left: 36px;
  padding-right: 36px;
}

.MainSlider__title-block {
  width: 600px;
}

.MainSlider__title {
  @include heading(100px, 100px, $fontColorLight, "bold");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 52px;
}

.MainSlider__title span:first-child {
  text-align: start;
}

.MainSlider__title span:last-child {
  text-align: end;
}

.MainSlider__text {
  @include regularInter;
  font-size: rem(16px);
  line-height: 24px;
  color: $fontColorLight;
  max-width: 288px;
}
</style>
