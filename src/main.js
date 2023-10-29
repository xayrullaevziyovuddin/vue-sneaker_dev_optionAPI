import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(
    createAuth0({
      domain: "dev-3a21r35hrxnglv1s.jp.auth0.com",
      clientId: "W4ZwMIHPfZeHhE78DcD4PlVB9zrCpPr4",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );



import '@/assets/styles/style.scss'
app.use(store),
app.use(router),
app.mount('#app')
