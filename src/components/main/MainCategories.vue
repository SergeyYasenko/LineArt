<template>
  <div class="MainCategories" v-if="mainCategory">
    <div class="MainCategories__container container">
      <div class="MainCategories__text-wrapper">
        <div class="MainCategories__text-block">
          <div class="MainCategories__title-block" v-if="mainCategory.title">
            <span
              class="MainCategories__title"
              v-html="mainCategory.title"
            ></span>
          </div>
          <div class="MainCategories__text-nav-wrapper">
            <div class="MainCategories__text" v-if="mainCategory.text">
              <span v-html="mainCategory.text"></span>
            </div>
            <div class="MainCategories__slider-button-block">
              <button
                type="button"
                aria-label="Предыдущий слайд"
                class="MainCategories__slider-button MainCategories__slider-button-prev swiper-button-prev"
              >
                <IconArrow
                  aria-hidden="true"
                  class="MainCategories__slider-button-ico"
                />
              </button>
              <button
                type="button"
                aria-label="Следующий слайд"
                class="MainCategories__slider-button MainCategories__slider-button-next swiper-button-next"
              >
                <IconArrow
                  aria-hidden="true"
                  class="MainCategories__slider-button-ico"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="MainCategories__slider">
        <div class="MainCategories__slider-container">
          <ClientOnly>
            <Swiper
              class="MainCategories__slider-container"
              @swiper="onSwiperCategories"
              @slideChange="onSlideChangeCategories"
              :slides-per-view="3"
              :slides-per-group="1"
              :modules="modules"
              :space-between="30"
              :loop="true"
              :navigation="{
                prevEl: '.MainCategories__slider-button-prev',
                nextEl: '.MainCategories__slider-button-next',
              }"
              :a11y="{
                prevSlideMessage: 'Предыдущий слайд',
                nextSlideMessage: 'Следующий слайд',
              }"
            >
              <SwiperSlide
                class="MainCategories__slider-slide"
                v-for="(slide, idx) in mainCategory.slides"
                :key="slide.id"
                :style="{ 'background-image': `url(${slide.img})` }"
              >
                <NuxtLink
                  :to="slide.link"
                  class="MainCategories__slider-content-block"
                >
                  <div class="MainCategories__slider-content">
                    <div class="MainCategories__slider-wrapper">
                      <h1
                        class="MainCategories__slide-title-block"
                        v-if="slide.title"
                      >
                        <span
                          class="MainCategories__slide-title"
                          v-html="slide.title"
                        ></span>
                      </h1>
                      <div class="MainCategories__slide-button-block">
                        <IconArrow class="MainCategories__slide-button" />
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Navigation, Pagination } from "swiper/modules";
import slideImg1 from "@/assets/img/Main/MainCategories/MainCategories-img1.jpg";
import slideImg2 from "@/assets/img/Main/MainCategories/MainCategories-img2.jpg";
import slideImg3 from "@/assets/img/Main/MainCategories/MainCategories-img3.jpg";

const onSwiperCategories = () => {};

const onSlideChangeCategories = () => {};
const modules = [A11y, Navigation, Pagination];

export interface MainCategories {
  title: string;
  text: string;
  slides: {
    id: number;
    title: string;
    link: string;
    img: string;
  }[];
}

const mainCategory = ref<MainCategories>({
  title: "<span>Категории</span><span>товаров</span>",
  text: "Современные, стильные решения для ценителей минимализма",
  slides: [
    {
      id: 1,
      title: "Теневой профиль",
      link: "/",
      img: slideImg1,
    },
    {
      id: 2,
      title: "Теневой плинтус",
      link: "/",
      img: slideImg2,
    },
    {
      id: 3,
      title: "Скрытый плинтус",
      link: "/",
      img: slideImg3,
    },
    {
      id: 4,
      title: "Теневой профиль",
      link: "/",
      img: slideImg1,
    },
    {
      id: 5,
      title: "Теневой плинтус",
      link: "/",
      img: slideImg2,
    },
    {
      id: 6,
      title: "Скрытый плинтус",
      link: "/",
      img: slideImg3,
    },
  ],
});
</script>

<style lang="scss">
.MainCategories__container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  height: 100%;
  min-height: 350px;
  margin-bottom: 80px;
}

.MainCategories__text-block {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: 47px;
}

.MainCategories__title {
  @include heading(80px, 80px, $fontColor, "bold");
}

.MainCategories__title-block {
  width: 514px;
}

.MainCategories__title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
}

.MainCategories__title span:first-child {
  text-align: start;
}

.MainCategories__title span:last-child {
  text-align: end;
}

.MainCategories__text-wrapper {
  flex: 1 1 30%;
}

.MainCategories__text-nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.MainCategories__text {
  @include regularInter;
  font-size: rem(16px);
  line-height: 24px;
  max-width: 288px;
}

.MainCategories__slider-button-block {
  display: flex;
}

.MainCategories__slider-button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid $fontColor;
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;
  margin-right: 16px;
}

.MainCategories__slider-button:last-child {
  margin-right: 0;
}

.MainCategories__slider-button::after {
  display: none;
}

.MainCategories__slider-button.swiper-button-next {
  transform: rotate(180deg);
}

.MainCategories__slider-button-ico {
  max-width: 42px;
  height: 42px;
  color: $fontColor;
}

.MainCategories__slider-container {
  width: 100%;
  display: flex;
  position: relative;
}

.MainCategories__slider {
  position: relative;
  display: flex;
  flex: 1 1 50%;
  height: 100%;
  @include transition(all, 0.8s, ease-in-out);
  overflow: hidden;
}

.MainCategories__slider-slide {
  flex-shrink: 0;
  width: auto;
  background-size: 100%;
  background-position: center;
  min-height: 350px;
  height: auto;
  border-radius: 18px;
  @include transition(background-size, 0.3s, ease-in-out);
  background-color: rgba(41, 41, 41, 0.3);
  background-blend-mode: multiply;
}

.MainCategories__slider-slide:hover {
  background-size: 110%;
  @include transition(background-size, 0.3s, ease-in-out);
}

.MainCategories__slider-content-block {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100%;
}

.MainCategories__slider-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  min-height: 100%;
}

.MainCategories__slider-wrapper {
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(6.400000095367432px);
  width: 100%;
  padding: 20px;
  border-radius: 0 0 18px 18px;
}

.MainCategories__slide-title-block {
  max-width: 100px;
}

.MainCategories__slide-title {
  @include semiBoldMontserrat;
  font-style: italic;
  font-size: rem(20px);
  line-height: 22px;
  color: $fontColorLight;
}

.MainCategories__slide-button-block {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.MainCategories__slide-button {
  width: 21px;
  height: 21px;
  color: $fontColorLight;
  transform: rotate(180deg);
}
</style>
