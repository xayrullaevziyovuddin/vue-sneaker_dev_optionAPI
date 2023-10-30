<template>
    <main class="main container">
        <h2>Все кроссовки</h2>
        <div class="main__products">


            <ProductsCard ></ProductsCard>

        </div>


    </main>
</template>

<script>

import ProductsCard from './ProductsCard.vue';

export default {
    components: { ProductsCard },
    data() {
        return {
      
        }
    },
}
</script>

