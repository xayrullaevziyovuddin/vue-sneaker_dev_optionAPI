import {
  createStore
} from 'vuex';

export default createStore({
  state: {
    basket: [],
    totalPrice: 0,
    nds: 0.05,

  },
  mutations: {
    addToBasket(state, product) {
      state.basket.push(product);
      state.totalPrice += product.price;

    },
    removeFromBasket(state, productId) {
      const removedProduct = state.basket.find(item => item.id === productId);
      if (removedProduct) {
        state.basket = state.basket.filter(item => item.id !== productId);
        state.totalPrice -= removedProduct.price;
      }
    },
    clearBasket(state) {
      // Clear the basket array and reset totalPrice to 0
      state.basket.forEach(item => {
        item.basket = false;
    });
      state.basket = [];
      state.totalPrice = 0;
    }


  },
  actions: {

  },
  getters: {
    // Геттеры могут быть определены здесь для получения состояния корзины
    getBasket: state => state.basket,
    getTotalPrice: state => state.totalPrice
  }
});