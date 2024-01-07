<template>
  <div>
    <ul class="nav nav-tabs justify-content-center mb-2 pb-1 border-0">
      <li class="nav-item rounded">
        <RouterLink to="/" class="nav-link" @click="clickLink('view')">
          <i class="fas fa-users"></i> Users
        </RouterLink>
      </li>
      <li class="nav-item rounded">
        <RouterLink to="/addnewuser" class="nav-link" @click="clickLink('add')">
          <i class="fas fa-user-plus"></i> Create User
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav-link {
  color: aliceblue;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
</style>
