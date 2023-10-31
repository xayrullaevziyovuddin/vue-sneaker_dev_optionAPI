<template>
    <div class="favorite container">
        <div class="favorite__title">
            <router-link to="/"><img src="../assets/images/icons/back.svg" alt="back"></router-link>
            <h2>Мои закладки</h2>
        </div>
        <div v-if="favorite.length > 0" class="favorite__produts main__products">

            <div class="card" v-for="card in favorite" :key="card.id">
                <button @click="toggleFavorite(card)" class="card__foloving" :class="{ 'red': card.favorite }">
                    <img v-if="!card.favorite" src="../assets/images/icons/favoriteCard.svg" alt="">
                    <img v-if="card.favorite" src="../assets/images/icons/favoriteCardred.svg" alt="">
                </button>

                <div class="card__img">
                    <img :src="card.images" alt="1">
                </div>
                <p class="card__text">{{ card.title }}</p>
                <div class="card__price">
                    <div>
                        <p>Цена:</p>

                        <p>{{ card.price }} руб</p>
                    </div>
                    <div>
                        <button @click="toggleBasket(card)" class="card__add" :class="{ 'green': card.basket }">

                            <img v-if="card.basket" src="../assets/images/icons/addok.png" alt="">
                            <img v-else="!card.basket" src="../assets/images/icons/add.svg" alt="">


                        </button>

                    </div>

                </div>
            </div>


        </div>

        <div v-if="favorite.length == 0" class="favorite__null modal__block-info">
            <img src="../assets/images/icons/smile.png" alt="eblan">
            <h2>Закладок нет :(</h2>
            <p>Вы ничего не добавляли в закладки</p>
            <router-link to="/"> <button>Вернуться назад</button> </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },


    computed: {
        favorite() {
            return this.$store.getters.getFavorite; // Получаем корзину из геттера
        },
    },
    methods: {


        toggleBasket(card) {
            if (card.basket) {
                this.$store.commit('removeFromBasket', card.id);
            } else {
                this.$store.commit('addToBasket', card);
            }
            card.basket = !card.basket;
        },


        toggleFavorite(card) {
            if (card.favorite) {
                this.$store.commit('removeFromFavoritet', card.id);
            } else {
                this.$store.commit('addToFavorite', card);
            }
            card.favorite = !card.favorite;
        }
    },
}
</script>

