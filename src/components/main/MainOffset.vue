<template>
  <section class="MainOffset">
    <div class="MainOffset__container container">
      <NuxtLink to="/" class="MainOffset__block MainOffset__block--left">
        <h3 class="MainOffset__title">Акции</h3>
      </NuxtLink>
      <NuxtLink to="/" class="MainOffset__block MainOffset__block--right">
        <h3 class="MainOffset__title">Новинки</h3>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.MainOffset__container {
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  height: 460px;
  margin-bottom: 80px;
}

.MainOffset__block {
  width: 50%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  background-size: 110%;
  background-position: center center;
  transition: background-position 0.5s ease-in-out;
  background-color: rgba(41, 41, 45, 0.5);
  background-blend-mode: overlay;
}

.MainOffset__block--left {
  left: 0;
  background-image: url("@/assets/img/Main/MainOffset/MainOffset-img2.jpg");
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  width: 55%;
}

/* Правый блок */
.MainOffset__block--right {
  right: 0;
  background-image: url("@/assets/img/Main/MainOffset/MainOffset-img1.jpg");
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  width: 55%;
}

.MainOffset__block--left:hover {
  background-position: 40% center;
}

.MainOffset__block--right:hover {
  background-position: 60% center;
}

.MainOffset__title {
  font-family: $boldMontserrat;
  position: absolute;
  bottom: 40px;
  left: 50px;
  font-size: rem(36px);
  line-height: 65px;
  font-style: italic;
  font-weight: bold;
  z-index: 3;
}
</style>
