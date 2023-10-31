<template>
  <header class="header">
    <nav class="header__nav container">
      <div class="header__nav-logo">
        <router-link to="/"><img src="@/assets/images/logo/logo.svg" alt="logo"></router-link>
        <div>
          <h1>REACT SNEAKERS</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div class="header__nav-item">
        <div class="header__nav-item-basket">
          <button @click="openModal"><img src="@/assets/images/icons/basket.svg" alt=""></button>
          <span>{{ totalPrice }} руб.</span>
        </div>
        <div class="header__nav-item-info">
          <router-link to="/favorite"><img src="@/assets/images/icons/favorites.svg" alt=""></router-link>
          <router-link v-if="!user" to="/purchases"><img src="@/assets/images/icons/men.svg" alt=""></router-link>
          <router-link v-if="user" to="/purchases"><img :src="user.picture" alt=""></router-link>
          <button v-if="!user" @click="login">Log in</button>
          <button v-if="user" @click="logout">Log out</button>

        </div>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    modalShow: {

      typeof: Boolean
    },

  },

  data: function () {
    return {
      user: this.$auth0.user
    };
  },
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    }, logout() {
      this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
    },
    openModal() {
      this.$emit('toggle-modal', !this.modalShow);
    },


  },

  computed: {
    totalPrice() {
      return this.$store.getters.getTotalPrice

    }
  },

};
</script>