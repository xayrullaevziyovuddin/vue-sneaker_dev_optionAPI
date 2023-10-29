import { createStore } from 'vuex';

export default createStore({
  state: {
    basket: []
  },
  mutations: {
    addToBasket(state, product) {
      state.basket.push(product);
    
    },
    removeFromBasket(state, productId) {
      state.basket = state.basket.filter(item => {
        if (item.id === productId) {
         // Устанавливаем свойство favorite в false, когда товар удаляется из корзины
        }
        return item.id !== productId;
      });
    }
  },
  actions: {
    // Ваши действия могут быть определены здесь, если требуется асинхронная логика
  },
  getters: {
    // Геттеры могут быть определены здесь для получения состояния корзины
    getBasket: state => state.basket
  }
});
