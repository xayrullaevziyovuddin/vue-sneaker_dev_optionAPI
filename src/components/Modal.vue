<template>
    <Transition name="modal">
        <div class="modal" @click="closeModal">

            <div class="modal__block" @click.stop="">

                <div v-if="basket.length > 0" class="modal__block-top">
                    <span>Корзина</span>
                    <div class="modal__block-card" v-for="item in basket" :key="item.id">
                        <div class="modal__block-card-img">
                            <img :src="item.images" alt="item.id">
                        </div>
                        <div class="modal__block-card-text">
                            <p>{{ item.title }}</p>
                            <span>{{ item.price }}руб.</span>
                        </div>
                        <div class="modal__block-card-btn">
                            <button @click="removeFromBasket(item)">
                                <img src="../assets/images/icons/x.svg" alt="x">
                            </button>
                        </div>
                    </div>


                </div>

                <div v-if="basket.length > 0" class="modal__block-info">
                    <p>Итого:_______________________ <span>{{ totalPrice }} руб</span> </p>
                    <p>Наолог 5%:_______________________ <span>{{ Math.floor(totalPrice * 0.05) }}руб </span> </p>
                    <button @click="sendBasket">Оформить заказ</button>

                </div>

                <div v-if="basket.length == 0 && !showThankYouMessage" class="modal__block-iner">
                    <div class="modal__block-iner-img">
                        <img src="../assets/images/icons/box.svg" alt="box">
                    </div>
                    <span>Корзина пустая</span>
                    <p>Добавьте хотя бы одну пару кроссовок,бомж так сложно купить пару кроссовок</p>
                    <div class="modal__block-iner-btn">
                        <button @click="closeModal"> Вернуться назад </button>
                    </div>
                </div>
                <div v-if="showThankYouMessage" class="modal__block-iner">
                    <p>Спасибо за заказ!</p>
                    <div class="modal__block-iner-img">
                        <img src="../assets/images/icons/good.svg" alt="box">
                    </div>
                    <span>Заказ оформлен!</span>
                    <p>Ваш заказ # {{ Math.floor(Math.random() * (100 - 1 + 1)) + 1 }} скоро будет передан курьерской
                        доставке
                    </p>
                </div>

            </div>

        </div>
    </Transition>
</template>

<script>
export default {
    props: {
        modalShow: {

            typeof: Boolean
        },

    },
    data() {
        return {
            showThankYouMessage: false,
        }
    },

    methods: {
        closeModal() {
            this.$emit('closeModal', !this.modalShow);

        },
        removeFromBasket(item) {
            // Вызываем мутацию removeFromBasket и передаем id товара для удаления
            this.$store.commit('removeFromBasket', item.id);
            item.basket = false
        },
        sendBasket() {

            this.$store.commit('clearBasket');


            this.showThankYouMessage = true;
            setTimeout(() => {
                this.showThankYouMessage = false;
            }, 5000);

        }
    },
    computed: {
        basket() {
            return this.$store.getters.getBasket; // Получаем корзину из геттера
        },
        totalPrice() {
            return this.$store.getters.getTotalPrice

        }



    },
}
</script>

