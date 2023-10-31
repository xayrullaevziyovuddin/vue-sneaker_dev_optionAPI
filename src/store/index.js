import {
  createStore
} from 'vuex';

export default createStore({
  state: {
    basket: [],
    favorite: [],
    sendBasket:[],
    totalPrice: 0,
    nds: 0.05,

  },
  mutations: {
    addToBasket(state, product) {
      state.basket.push(product);
      state.totalPrice += product.price;

    },
    addToFavorite(state, product) {
      state.favorite.push(product);


    },
    removeFromBasket(state, productId) {
      const removedProduct = state.basket.find(item => item.id === productId);
      if (removedProduct) {
        state.basket = state.basket.filter(item => item.id !== productId);
        state.totalPrice -= removedProduct.price;
      }
    },
    removeFromFavoritet(state, productId) {
      const removedProduct = state.favorite.find(item => item.id === productId);
      if (removedProduct) {
        state.favorite = state.favorite.filter(item => item.id !== productId);

      }
    },
    clearBasket(state,item) {
      // Clear the basket array and reset totalPrice to 0
      state.basket.forEach(item => {
        item.basket = false;
      });

      state.sendBasket = state.basket

      state.basket = [];
      state.totalPrice = 0;
    }


  },
  actions: {

  },
  getters: {
    // Геттеры могут быть определены здесь для получения состояния корзины
    getBasket: state => state.basket,
    getFavorite: state => state.favorite,
    getSendBasket: state => state.sendBasket,
    getTotalPrice: state => state.totalPrice
  }
});