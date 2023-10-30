<template>
    <main class="main container">
        <div class="main__serach">
            <div class="main__serach-sort">
                <h2>Все кроссовки</h2>

                <select class="sorting-options" v-model="sortOption">
                    <option value="keyAsc"></option>
                    <option value="asc">Сначала дешевые</option>
                    <option value="desc">Сначала дорогие</option>
                    <option value="nameAsc">По имени (А-Я)</option>
                    <option value="nameDesc">По имени (Я-А)</option>
                </select>
            </div>

            <input type="text" placeholder="Поиск..." v-model="search" autofocus>
        </div>

        <div class="main__products">


            <ProductsCard :search="search" :sortOption="sortOption"></ProductsCard>

        </div>


    </main>
</template>

<script>

import ProductsCard from './ProductsCard.vue';

export default {
    components: { ProductsCard },
    data() {
        return {
            search: '',
            sortOption: null,
        }
    },



}
</script>

