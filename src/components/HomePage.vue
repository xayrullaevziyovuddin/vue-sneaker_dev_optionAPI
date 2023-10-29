<template>
  <div>
    <Navbar :modalShow="modalShow"    @toggle-modal="$emit('toggle-modal')"  ></Navbar>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  components: { Navbar },
  props: {
    modalShow: {

            typeof: Boolean
        },
    
    },
    methods: {
      
    },
    
   
}
</script>

