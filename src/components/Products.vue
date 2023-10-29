<template>
    <main class="main container">
        <h2>Все кроссовки</h2>
        <div class="main__products">


            <ProducrsCard ></ProducrsCard>

        </div>


    </main>
</template>

<script>

import ProducrsCard from './ProducrsCard.vue';

export default {
    components: { ProducrsCard },
    data() {
        return {
      
        }
    },
}
</script>

<style lang="scss" scoped></style>