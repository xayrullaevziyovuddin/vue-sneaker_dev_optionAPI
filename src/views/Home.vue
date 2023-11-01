<template>
    <div>
        <Slider></Slider>
        <Products></Products>
    </div>
</template>

<script>
import Products from '@/components/Products.vue';
import Slider from '@/components/Slider.vue';

export default {
    components: { Slider, Products }
}
</script>

