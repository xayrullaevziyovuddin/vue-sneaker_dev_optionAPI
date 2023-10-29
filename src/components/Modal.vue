<template>
    <Transition name="modal">
        <div class="modal" @click="closeModal">

            <div class="modal__block" @click.stop="">
                <div class="modal__block-top">
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

                <div class="modal__block-info">
                    <p>Итого:_______________________ <span>{{totalPrice  }} руб</span> </p>
                    <p>Наолог 5%:_______________________ <span>{{ Math.floor(totalPrice * 0.05 )    }}руб </span> </p>
                    <button>Оформить заказ</button>
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

