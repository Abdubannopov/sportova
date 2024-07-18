<template>
    <div>
        <!-- header -->
        <headerItem />
        <!-- main -->
        <div class="main bg-[#F2F3F4] pt-5">
            <!-- hero -->
            <div class="hero hidden">
                <div class="container mx-auto">
                    <div class="hero-inner flex imtes-center">
                        <div class="hero-swiper w-8/12">
                            <Swiper :slides-per-view="1" :loop="true">
                                <SwiperSlide class="border rounded-xl">
                                    <img src="~/assets/images/png/slider.png" alt="" class="">
                                </SwiperSlide>
                                <SwiperSlide class="border rounded-xl">
                                    <img src="~/assets/images/png/slider.png" alt="" class="">
                                </SwiperSlide>
                                <SwiperSlide class="border rounded-xl">
                                    <img src="~/assets/images/png/slider.png" alt="" class="">
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div class="hero-links flex items-center flex-col">
                            <div class="hero-links-item p-8 pr-24">
                                <h1 class="hero-links-item-title">Собственное швейное производство</h1>
                                <p class="hero-links-item-subtitle">Приглашаем
                                    к сотрудничеству
                                    Н.Новгород, ул.Народная 20
                                    Ежедневно с 9:00 до 19:00</p>

                            </div>
                            <div class="hero-links-item p-8 pr-24">
                                <h1 class="hero-links-item-title">Посетите наш шоу-рум!</h1>
                                <p class="hero-links-item-subtitle">Приглашаем
                                    к сотрудничеству
                                    Н.Новгород, ул.Народная 20
                                    Ежедневно с 9:00 до 19:00</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- wall -->
            <div class="wall mb-20 container mx-auto">
                <h1 class="wall-title text-3xl font-bold">Шведские стенки</h1>
                <div class="wall-swiper relative">
                    <Swiper class=""  :modules="[SwiperNavigation]" space-between="20" slides-per-view="4" :loop="true"
                            :navigation="{
                                prevEl: '.wall_navigation_prev',
                                nextEl: '.wall_navigation_next',
                            }">
                        <SwiperSlide class="bg-white p-5 rounded-xl wall-swiper-slide"  v-for="slide in 7" :key="slide">
                            <div class="wall-swiper-img-wrapper relative mb-2.5">
                                <div class="wall-swiper-slide-btn absolute top-0 right-0 gap-x-2.5 flex items-center">
                                    <div class="border bg-white py-[11.5px] rounded-xl pr-[10px] pl-3 border-[#DEDFE7]">
                                        <div class="relative">
                                            <img src="~/assets/images/png/bar-chart.png" alt="" width="24">
                                            <svg class="wall-swiper-img-plus" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 2.5C7 1.67157 6.32843 1 5.5 1C4.67157 1 4 1.67157 4 2.5V4H2.5C1.67157 4 1 4.67157 1 5.5C1 6.32843 1.67157 7 2.5 7H4V8.5C4 9.32843 4.67157 10 5.5 10C6.32843 10 7 9.32843 7 8.5V7H8.5C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4H7V2.5Z" fill="#F04716" stroke="white" stroke-width="2"/>
                                            </svg> 

                                        </div>
                                    </div>
                                    <div class="border bg-white py-[13px] rounded-xl pr-[10px] pl-3 border-[#DEDFE7]">
                                        <div class="relative">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.98893C10 -0.507481 1 -0.259282 1 6.99252C1 13.3378 7.5 17 12 19C16.5 17 23 13.3379 23 6.99252C23 -0.259277 14 -0.507472 12 3.98893Z" stroke="red"/>
                                            </svg>
                                            <svg class="wall-swiper-img-plus" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 2.5C7 1.67157 6.32843 1 5.5 1C4.67157 1 4 1.67157 4 2.5V4H2.5C1.67157 4 1 4.67157 1 5.5C1 6.32843 1.67157 7 2.5 7H4V8.5C4 9.32843 4.67157 10 5.5 10C6.32843 10 7 9.32843 7 8.5V7H8.5C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4H7V2.5Z" fill="#F04716" stroke="white" stroke-width="2"/>
                                            </svg> 
                                        </div>
                                    </div>
                                </div>
                                <img src="~/assets/images/png/wall-img.png" alt="" class="wall-swiper-img">
                            </div>
                            <p class="wall-swiper-title text-[15px] leading-relaxed mb-[36px]">Шведская стенка P-19 (Цвет: Белый)</p>
                            <div class="wall-price flex items-center justify-between">
                                <div class="wall-price-text-wrapper h-5 relative">
                                    <p class="wall-price-text-first text-[15px] leading-tight text-[#A3A6B2] absolute">11 320 ₽</p>
                                    <p class="wall-price-text text-[21px] text-[#F04716] leading-tight">14 980 ₽</p>
                                </div>
                                <div class="wall-price-btn border border-[#F04716] pt-3.5 pr-3 pb-[13px] pl-2.5 rounded-xl">
                                    <div class="relative">
                                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5C0 0.223858 0.223858 0 0.5 0H3.5C3.72943 0 3.92943 0.156149 3.98507 0.378732L4.89039 4H21.5C21.6591 4 21.8086 4.07568 21.9028 4.20383C21.9971 4.33198 22.0247 4.49732 21.9772 4.64914L19.4772 12.6491C19.412 12.8579 19.2187 13 19 13H6.5C6.27057 13 6.07057 12.8439 6.01493 12.6213L3.10961 1H0.5C0.223858 1 0 0.776142 0 0.5ZM5.14039 5L6.89039 12H18.6324L20.8199 5H5.14039Z" fill="#F04716"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 18C9.32843 18 10 17.3284 10 16.5C10 15.6716 9.32843 15 8.5 15C7.67157 15 7 15.6716 7 16.5C7 17.3284 7.67157 18 8.5 18ZM8.5 19C9.88071 19 11 17.8807 11 16.5C11 15.1193 9.88071 14 8.5 14C7.11929 14 6 15.1193 6 16.5C6 17.8807 7.11929 19 8.5 19Z" fill="#F04716"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18ZM16.5 19C17.8807 19 19 17.8807 19 16.5C19 15.1193 17.8807 14 16.5 14C15.1193 14 14 15.1193 14 16.5C14 17.8807 15.1193 19 16.5 19Z" fill="#F04716"/>
                                        </svg>
                                        <svg class="wall-price-btn-plus" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 2.5C7 1.67157 6.32843 1 5.5 1C4.67157 1 4 1.67157 4 2.5V4H2.5C1.67157 4 1 4.67157 1 5.5C1 6.32843 1.67157 7 2.5 7H4V8.5C4 9.32843 4.67157 10 5.5 10C6.32843 10 7 9.32843 7 8.5V7H8.5C9.32843 7 10 6.32843 10 5.5C10 4.67157 9.32843 4 8.5 4H7V2.5Z" fill="#F04716" stroke="white" stroke-width="2"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div class="wall-navigation flex items-center justify-between">
                        <div class="wall_navigation_prev group hover:bg-[#F04716] border border-[#DEDFE7] w-14 h-14 flex items-center justify-center rounded-full">
                            <svg class="rotate-180" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:stroke-white" d="M1.02083 1L7 7L1.02083 13" stroke="#F04716" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="wall_navigation_next group hover:bg-[#F04716] border border-[#DEDFE7] w-14 h-14 flex items-center justify-center rounded-full">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="group-hover:stroke-white" d="M1.02083 1L7 7L1.02083 13" stroke="#F04716" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <!-- wall end -->

            <!-- atletika -->
            <div class="atletika">
                <div class="container mx-auto">
                    <div class="atletika-card">
                        <div class="">
                            <img src="" alt="" class="">
                            <p class=""></p>
                            <div class="">
                                <div class="">
                                    <span class=""></span>
                                    <span class=""></span>
                                </div>
                                <a href="#" class="">
                                    <img src="" alt="" class="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- atletic -->
            <div class="atletic ">
                <div class="container mx-auto">
                    <h1 class="atletic-title font-bold text-3xl mb-5">Тяжелая атлетика</h1>
                    <div class="atletic-inner relative">
                        <Swiper :modules="[SwiperNavigation]" :space-between="20" :slides-per-view="4" :loop="true"
                            :navigation="{
                                prevEl: '.navigation_prev',
                                nextEl: '.navigation_next',
                            }">
                            <SwiperSlide class="" v-for="slide in 10" :key="slide">
                                <div class="atletic-card p-5 bg-white border border-red-500 rounded-xl">
                                    <img src="~/assets/images/png/gantel.png" alt="" class="">
                                    <h3 class="text-[15px] leading-normal">Гантель разборная стальная (гриф + блины) 15 кг
                                    </h3>

                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div class="Navigation hidden">
                            <button class="navigation-prev w-14 h-14 flex items-center justify-center rounded-full border border-[#DEDFE7]">
                                <svg class="rotate-180" width="8" height="14" viewBox="0 0 8 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.02083 1L7 7L1.02083 13" stroke="#F04716" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button class="navigation-next ml-auto w-14 h-14 flex items-center justify-center rounded-full border border-[#DEDFE7]">
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.02083 1L7 7L1.02083 13" stroke="#F04716" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- catalog -->
            <div class="catalog container mx-auto mb-24">
                <h1 class="catalog-title text-[31px] leading-tight font-bold mb-5">Каталог товаров</h1>
                <ul class="grid grid-cols-4 gap-5">
                    <li class="p-10 bg-white rounded-xl"><a class="flex flex-col items-center" href="#">
                            <img src="~/assets/images/png/street.png" alt="" class="mb-4">
                            <span>Щведские стенки</span>
                        </a></li>
                    <li class="p-10 bg-white rounded-xl"><a class="flex flex-col items-center" href="#">
                            <img src="~/assets/images/png/bars.png" alt="" class="mb-4">
                            <span>Турники</span>
                        </a></li>
                    <li class="p-10 bg-white rounded-xl"><a class="flex flex-col items-center" href="#">
                            <img src="~/assets/images/png/walls.png" alt="" class="mb-4">
                            <span>Уличные комплексы</span>
                        </a></li>
                    <li class="p-10 bg-white rounded-xl"><a class="flex flex-col items-center" href="#">
                            <img src="~/assets/images/png/weight.png" alt="" class="mb-4">
                            <span>Тяжелая атлетика</span>
                        </a></li>
                    <li class="p-10 bg-white rounded-xl"><a class="flex flex-col items-center" href="#">
                            <img src="~/assets/images/png/gantels.png" alt="" class="mb-4">
                            <span>Стойки под штангу</span>
                        </a></li>
                    <li class="p-10 bg-white rounded-xl"><a class="flex flex-col items-center" href="#">
                            <img src="~/assets/images/png/box.png" alt="" class="mb-4">
                            <span>Единоборства</span>
                        </a></li>
                    <li class="p-10 bg-white rounded-xl"><a class="flex flex-col items-center" href="#">
                            <img src="~/assets/images/png/Fitness.png" alt="" class="mb-4">
                            <span>Фитнес</span>
                        </a></li>
                    <li class="p-10 bg-white rounded-xl"><a class="flex flex-col items-center" href="#">
                            <img src="~/assets/images/png/cart.png" alt="" class="mb-4">
                            <span>Весь каталог</span>
                        </a></li>
                </ul>
            </div>

            <!-- delivery -->
            <div class="delivery mb-[100px] container mx-auto bg-white p-[100px] rounded-2xl flex justify-between">
                <div class="w-[460px]">
                    <h1 class="delivery-title text-3xl font-bold mb-5">Доставка</h1>
                    <p class="delivery-text text-base mb-6">Проснувшись однажды утром после беспокойного сна, Грегор Замза
                        обнаружил, что
                        он у себя в постели превратился в страшное насекомое. <br> <br>
                        Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый,
                        разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот
                        окончательно сползти одеяло.
                    </p>
                    <a href="#" class="delivery-link text-base text-[#4788FF] ">Детальное описание</a>
                </div>
                <div class="w-[460px]">
                    <h1 class="delivery-title text-3xl font-bold mb-5">Оплата</h1>
                    <p class="delivery-text text-base mb-6">Проснувшись однажды утром после беспокойного сна, Грегор Замза
                        обнаружил, что
                        он у себя в постели превратился в страшное насекомое. <br> <br>
                        Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый,
                        разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот
                        окончательно сползти одеяло.
                    </p>
                    <a href="#" class="delivery-link text-base text-[#4788FF] ">Детальное описание</a>
                </div>
            </div>

            <!-- POST -->
            <div class="post bg-[#0A4ECB]">
                <div class="container mx-auto py-[75px] flex justify-between items-center">
                    <div class="post-texts">
                        <h1 class="post-texts-title font-bold text-[26px] leading-tight text-white mb-1.5">Редкие, но очень
                            полезные письма!</h1>
                        <p class="post-textst-subtitle max-w-lg text-lg leading-tight text-white">Подпишись и получи
                            промокод на скидку! Его можно применить ко всем товарам в магазине</p>
                    </div>
                    <div class="post-buttons">
                        <form class="flex items-center gap-x-5" action="">
                            <input type="text"
                                class="post-button-input px-9 py-[23px] w-96 bg-[#04358F] outline-none rounded-xl text-white text-[15px] leading-tight font-medium focus:outline-none focus:shadow-md focus:shadow-yellow-500"
                                placeholder="Ваш e-mail">
                            <button
                                class="px-9 py-[21px] border-[#FFC62F] border-2 bg-[#FFC62F] rounded-xl text-[15px] leading-tight font-semibold hover:border-[#FFC62F] hover:text-white hover:bg-transparent"
                                type="submit">Подписаться</button>

                        </form>
                    </div>
                </div>
            </div>

            <!-- COMPANY -->

            <div class="company">
                <div class="container mx-auto">
                    <h1 class="company-title"></h1>
                </div>
            </div>

            <!-- COMPANY END  -->
        </div>

        <!-- footer -->
        <FooterSide />
    </div>
</template>
<script setup>
</script>