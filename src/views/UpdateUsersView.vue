<template>
    <div class="main">
        <UpdateUserForm/>
    </div>
</template>

<script setup>
 import UpdateUserForm from '../components/UpdateUserForm.vue';

import { useRoute } from 'vue-router';
const $route = useRoute()
console.log($route.params.id)

</script>

<style scoped>
</style>