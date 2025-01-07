<template>
   <section class="MainSlider" v-if="props.data && props.data.length > 0">
      <div class="MainSlider__container">
         <ClientOnly>
            <Swiper
               class="MainSlider__slider-container"
               @swiper="onSwiper"
               @slideChange="onSlideChange"
               :modules="modules"
               :slides-per-view="1.26"
               :space-between="30"
               :loop="props.data.length > 1"
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
                  v-for="(slide) in props.data"
                  :key="slide.id"
                  :style="{ 'background-image': `url(${slide.img})` }"
               >
                  <div class="MainSlider__slider-content">
                     <h2 class="MainSlider__title-block" v-if="slide.title">
                        <span
                           class="MainSlider__title"
                           v-html="slide.title"
                        ></span>
                     </h2>
                     <p class="MainSlider__text" v-if="slide.subTitle">
                        <span v-html="slide.subTitle"></span>
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
               <p class="MainSlider__button-text">{{ currentPrevText }}</p>
            </button>

            <button
               type="button"
               class="swiper-button-next MainSlider__button MainSlider__button-next"
            >
               <p class="MainSlider__button-text">{{ currentNextText }}</p>
               <span class="MainSlider__button-icon-block">
                  <IconArrow class="MainSlider__button-icon" />
               </span>
            </button>
         </ClientOnly>
      </div>
   </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
   id: number;
   title: string;
   subTitle: string;
   img: string;
   prev: string;
   next: string;
}

const slides = ref<Slide[]>([]);
const currentIndex = ref(0);
const currentPrevText = ref("");
const currentNextText = ref("");
const swiperInstance = ref<any>(null);

const props = defineProps<{
   data: Slide[];
}>();

const onSlideChange = (swiper: any) => {
   currentIndex.value = swiper.realIndex;
   updateButtonText(currentIndex.value);
};

const updateButtonText = (index: number) => {
   if (slides.value[index]) {
      currentPrevText.value = slides.value[index].prev || "Предыдущий слайд";
      currentNextText.value = slides.value[index].next || "Следующий слайд";
   }
};

const onSwiper = (swiper: any) => {
   swiperInstance.value = swiper;
   if (swiper && swiper.update) {
      swiper.update();
   }
};

const modules = [A11y, Navigation, Pagination];
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
   user-select: none;
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
