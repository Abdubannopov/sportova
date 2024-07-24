<template>
  <div class="max-w-[580px]">
    <Swiper
      class="w-full"
      :modules="[SwiperController]"
      :controller="{ control: thumbsswiper }"
      @swiper="setTopSwiper"
      loop="true"
    >
      <SwiperSlide class="" v-for="(img, i) in images" :key="i">
        <img
          class="max-h-96 object-cover"
          crossorigin="anonymous"
          :src="`https://picsum.photos/id/${img}/1246/480`"
        />
      </SwiperSlide>
    </Swiper>
    <Swiper
      class="mt-2 w-full"
      :modules="[SwiperController]"
      :slides-per-view="7"
      :controller="{ control: topswiper }"
      @swiper="setThumbsSwiper"
      :slideToClickedSlide="true"
      :freeMode="true"
    >
      <SwiperSlide class="mr-2 first:mr-0" v-for="(img, i) in images" :key="i">
        <img
          crossorigin="anonymous"
          :src="`https://picsum.photos/id/${img}/100/100`"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let topswiper = null,
  thumbsswiper = null,
  images = ref(['101', '102', '103', '104', '105', '106', '107', '108', '109']);

let setTopSwiper = (swiper) => {
  topswiper = swiper;
};

let setThumbsSwiper = (swiper) => {
  thumbsswiper = swiper;
};
</script>
