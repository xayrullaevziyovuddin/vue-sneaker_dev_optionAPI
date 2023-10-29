<template>
  <div class="wrapper">
    <HomePage  :modalShow="modalShow"   @toggle-modal="toggleModal"/>
    <RouterView/>
    <Modal v-show="!modalShow"  :modalShow="modalShow"  @closeModal="closeModal"></Modal>
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue';
import Modal from './components/Modal.vue';

export default {
    components: { HomePage, Modal },

    data() {
      return {
        modalShow:true,
        basket:[],
        foloving:[],
      
      }
    },

    methods: {
 
    closeModal() {
        document.body.classList.remove('modal-open');
        this.modalShow =  !this.modalShow;
    },
    toggleModal() {
            this.modalShow =  !this.modalShow;
            document.body.classList.add('modal-open');
        }
},


}
</script>

<style lang="scss" scoped></style>