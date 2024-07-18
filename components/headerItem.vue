<template>
    <div class="header">
        <!-- header__top  -->
        <div class="header-top bg-[#F2F3F4]">
            <div class="container mx-auto flex items-center justify-between">
                <!-- topbar -->
                <a href="#" class="header-top-location flex items-center gap-px">
                    <img src="~/assets/images/svg/indicator.svg" alt="logo" class="">
                    <p class="text-[13px] leading-tight font-medium">Нижний Новгород</p>
                </a>
                <!-- navbar -->
                <div class="header-top-nav">
                    <ul class="flex items-center gap-x-5">
                        <li class="text-[13px] text-[#6E7284] leading-tight font-medium hover:text-[#F04716] active"><a href="#" class="">Акции</a></li>
                        <li class="text-[13px] text-[#6E7284] leading-tight font-medium hover:text-[#F04716]"><a href="#" class="">Как заказать</a></li>
                        <li class="text-[13px] text-[#6E7284] leading-tight font-medium hover:text-[#F04716]"><a href="#" class="">О компании</a></li>
                        <li class="text-[13px] text-[#6E7284] leading-tight font-medium hover:text-[#F04716]"><a href="#" class="">Доставка и Оплата</a></li>
                        <li class="text-[13px] text-[#6E7284] leading-tight font-medium hover:text-[#F04716]"><a href="#" class="">Гарантии</a></li>
                        <li class="text-[13px] text-[#6E7284] leading-tight font-medium hover:text-[#F04716]"><a href="#" class="">Контакты</a></li>
                    </ul>
                </div>
                <!-- call -->
                <div class="header-topbar-call flex items-center gap-x-5">
                    <div class="flex items-center gap-x-1.5">
                        <img src="~/assets/images/svg/timer.svg" alt="clock" class="">
                        <p class="text-[15px] leading-tight font-medium">8800 550-22-16</p>
                    </div>
                    <a href="#" class="header-topbar-phone text-[13px] leading-tight font-medium text-[#4788FF] underline-offset-auto">Заказать звонок</a>
                </div>
            </div>
        </div>

        <!-- header-base -->
        <div class="header-main py-[30px]">
            <div class="container mx-auto flex items-center justify-between">
                <!-- logo -->
                <a href="#" class="logo">
                    <div class="logo-sm">
                        <img src="~/assets/images/svg/logo-sm.svg" alt="logo-sm" class="logo-sm-img hidden">
                    </div>
                    <div class="logo-lg">
                        <img src="~/assets/images/svg/logo.svg" alt="logo" class="logo-lg-img">
                    </div>
                </a>
                <div class="header-navs flex items-center gap-x-2.5">
                    <!-- search -->
                    <div class="header-navs-search hover:outline hover:outline-[#4788FF] hover:outline-1 flex items-center p-3.5 border border-[#DEDFE7] gap-x-3.5 rounded-xl">
                        <img src="~/assets/images/svg/search.svg" alt="search" class="">
                        <input type="search" class="w-full text-sm outline-none" placeholder="Поиск по сайту">
                    </div>
                    <!-- favorites -->
                    <div @click="changeFav()" class="header-navs-favorites active:bg-[#0A4ECB] hover:border-transparent focus:bg-[#0A4ECB] border border-[#DEDFE7] px-3 py-[14px] rounded-xl">
                        <svg class="header-navs-favorites-img active:fill-[#0A4ECB]" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3.98893C10 -0.507481 1 -0.259282 1 6.99252C1 13.3378 7.5 17 12 19C16.5 17 23 13.3379 23 6.99252C23 -0.259277 14 -0.507472 12 3.98893Z" stroke="#6E7284"/>
                        </svg>


                    </div>
                    <!-- chart -->
                    <div class="header-navs-chart border border-[#DEDFE7] px-3 py-[13px] rounded-xl flex items-center justify-center">
                        <img src="~/assets/images/png/chart.png" alt="chart" width="22" class="">
                    </div>
                    <!-- basket -->
                    <div class="header-navs-basket flex items-center gap-x-3 rounded-xl border border-[#DEDFE7] px-3 pr-4 py-[8px]">
                        <img src="~/assets/images/png/basket.png" alt="" class="">
                        <div class="flex items-center flex-col">
                            <h3 class="header-navs-basket-title text-[13px] leading-tight font-medium text-[#6E7284]">Корзина(<span>{{0}}</span>)</h3>
                            <p class="header-navs-basket-subtitle">Нет товаров</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- header-navbar -->
        <div class="header-navbar bg-[#0A4ECB]">
            <div class="container mx-auto flex items-center justify-between">
                <!-- dropdown -->
                <div class="header-navbar-dropdown flex items-center gap-x-2 p-[17px] pl-7 pr-[18px] bg-[#04358F]">
                    <img src="~/assets/images/svg/menu.svg" alt="menu" class="">
                    <span class="text-white text-sm leading-tight font-medium">Каталог товаров</span>
                    <img src="~/assets/images/svg/down.svg" alt="down" class="">
                </div>
                <!-- navbar -->
                <div class="header-navbar-list">
                    <ul class="flex items-center gap-x-[50px]">
                        <li class="text-sm leading-tight hover:text-[#F04716] text-white font-medium"><a href="#" class="">Шведские стенки</a></li>
                        <li class="text-sm leading-tight hover:text-[#F04716] text-white font-medium"><a href="#" class="">Уличные комплексы</a></li>
                        <li class="text-sm leading-tight hover:text-[#F04716] text-white font-medium"><a href="#" class="">Турники</a></li>
                        <li class="text-sm leading-tight hover:text-[#F04716] text-white font-medium"><a href="#" class="">Тяжелая атлетика</a></li>
                    </ul>
                </div>
                <!-- skidka -->
                <a href="#" class="header-navbar-skidka font-medium text-sm leading-tight text-[#FFFA2F]">
                    <span class="mr-1.5">%</span>
                    <span>Товары со скидкой</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
const fav = false
async function changeFav(){
    
} 

</script>