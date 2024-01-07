<template>
  <div>
    <header>
    <div class="container-fluid">
    <div class="d-flex justify-content-center">
      <img src="../assets/cjlogonew.png" alt="Logo">
    </div>
    <NavBar/>
    </div>
    </header>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue';

</script>

<style scoped>

img{
  height: 100px;
  width: 100px;
}

.container-fluid {
  background-color: rgba(255, 255, 255, 0.1); /* White background with 50% opacity */
    }

</style>
