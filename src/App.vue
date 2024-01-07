<script setup>
import { RouterView } from 'vue-router'
import PageHeader from "./components/PageHeader.vue";


</script>

<template>

  
  <div class="main">
  <PageHeader/>
  
  <RouterView />

  
  </div>
  
</template>

<style scoped>


  .main {
    min-height: 100vh;
    background-image: linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );

  }


</style>
