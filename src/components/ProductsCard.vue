<template>
    <div class="card" v-for="card in filterProdects" :key="card.id">
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
</template>

<script>
import { products } from '../product.js'

export default {

    props: {
        search: String,
        sortOption: String,
    },

    data() {
        return {
            cards: products,

        }
    },

    methods: {
        getСards() {
            let localСards = localStorage.cards
            if (localСards) {
                this.cards = JSON.parse(localСards)
            }

        },
        /*    favorite(id) {
               console.log('Before toggle:', this.cards[id - 1].favorite);
               this.cards[id - 1].favorite = !this.cards[id - 1].favorite;
               console.log('After toggle:', this.cards[id - 1].favorite);
           }, */
        /*   addToBasket(id) {
              console.log('Before toggle:', this.cards[id - 1].basket);
              this.cards[id - 1].basket = !this.cards[id - 1].basket;
              console.log('After toggle:', this.cards[id - 1].basket);
  
          }, */
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

    computed: {

        filterProdects() {
            let filteredCards = this.search
                ? this.cards.filter(card => card.title.toLowerCase().includes(this.search.toLowerCase()))
                : this.cards;

            if (this.sortOption === "asc") {
                filteredCards.sort((a, b) => a.price - b.price);
            } else if (this.sortOption === "desc") {
                filteredCards.sort((a, b) => b.price - a.price);
            } else if (this.sortOption === "nameAsc") {
                filteredCards.sort((a, b) => a.title.localeCompare(b.title));
            } else if (this.sortOption === "nameDesc") {
                filteredCards.sort((a, b) => b.title.localeCompare(a.title));
            } else if (this.sortOption === "keyAsc") {
                filteredCards.sort((a, b) => a.id - b.id);
            }

            return filteredCards;

        }


    },





}
</script>

