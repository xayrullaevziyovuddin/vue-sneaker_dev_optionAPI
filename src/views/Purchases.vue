<template>
    <div class="purchases container">
        <div class="favorite__title">
            <router-link to="/"><img src="../assets/images/icons/back.svg" alt="back"></router-link>
            <h2>Мои покупки</h2>
          
        </div>
        <div v-if="getSendBasket.length > 0" class="main__products">
                <div class="card" v-for="card in getSendBasket" :key="card.id">

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


                        </div>

                    </div>
                </div>
            </div>


            <div v-if="getSendBasket.length == 0" class="favorite__null modal__block-info">
            <img src="../assets/images/icons/smile.png" alt="eblan">
            <h2>У вас нет заказов</h2>
            <p>Вы бомж? Оформите хотя бы один заказ.</p>
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
        getSendBasket() {
            return this.$store.getters.getSendBasket; // Получаем корзину из геттера
        },
    },
}
</script>
