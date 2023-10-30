<template>
    <div class="card" v-for="card in cards" :key="card.id">
        <button @click="favorite(card.id)" class="card__foloving" :class="{ 'red': card.favorite }">
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
</template>

<script>
import { products } from '../product.js'

export default {
    data() {
        return {
            cards: products,

        }
    },

    methods: {

        favorite(id) {
            console.log('Before toggle:', this.cards[id - 1].favorite);
            this.cards[id - 1].favorite = !this.cards[id - 1].favorite;
            console.log('After toggle:', this.cards[id - 1].favorite);
        },
        addToBasket(id) {
            console.log('Before toggle:', this.cards[id - 1].basket);
            this.cards[id - 1].basket = !this.cards[id - 1].basket;
            console.log('After toggle:', this.cards[id - 1].basket);

        },
        toggleBasket(card) {
            if (card.basket) {
                this.$store.commit('removeFromBasket', card.id);
            } else {
                this.$store.commit('addToBasket', card);
            }
            card.basket = !card.basket;
        }



    },


}
</script>

