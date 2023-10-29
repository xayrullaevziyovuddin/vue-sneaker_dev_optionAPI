<template>
    <div class="header__slider container">
        <div class="header__slider-info">
            <h2>{{ currentSlide.title }}</h2>
            <button>Купить</button>
        </div>
        <div class="header__slider-img">
            <transition name="fade" mode="out-in">
                <div :key="currentSlide.id" class="slider-slide">
                    <img :src="currentSlide.image" alt="">
                </div>
            </transition>
        </div>
    </div>
</template>
  
<script>
import SliderBg from '@/assets/images/sliderBg.png'

export default {
    data() {
        return {
            currentSlideIndex: 0,
            slides: [
                {
                    id: 1,
                    title: "Stan Smith, Forever!",
                    image: SliderBg,
                },
                {
                    id: 2,
                    title: "Another Slide Title",
                    image: SliderBg,
                },
                // Add more slide objects as needed
            ],
        };
    },
    mounted() {
        setInterval(this.nextSlide, 5000);
    },
    computed: {
        currentSlide() {
            return this.slides[this.currentSlideIndex];
        },
    },
    methods: {
        nextSlide() {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        },
    },
};
</script>
  
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;

}

.fade-enter,
.fade-leave-to {
    opacity: 0;

}

.slider-slide {
    width: 100%;
}
</style>
  