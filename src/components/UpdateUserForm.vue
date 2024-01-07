<template>
  <div>
    <form action="" @submit.prevent="userStore.updateUser($route.params.id)">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-12 mb-2">
            <div class="card mx-auto">
              <div class="card">
                <div class="card-header"><b>Update User Information</b></div>
                <div class="card-body">
                 

                  <!-- First Name Field -->
                  <div class="mb-3">
                    <img style="height: 100px; width: 100px" v-bind:src="myPath + userStore.singleuser.fileName" class="rounded mx-auto d-block" alt="...">
                  </div>
                  <div class="mb-3">
                    <label for="firstName" class="form-label">
                      <i class="fas fa-user"></i> First Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="Enter first name"
                      required
                      pattern="[A-Za-z]+"
                      v-model="userStore.singleuser.firstName"
                    />
                  </div>

                  <!-- Last Name Field -->
                  <div class="mb-3">
                    <label for="lastName" class="form-label">
                      <i class="fas fa-user"></i> Last Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder="Enter last name"
                      required
                      pattern="[A-Za-z]+"
                      v-model="userStore.singleuser.lastName"
                    />
                  </div>

                  <!-- Email Field -->
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      <i class="fas fa-envelope"></i> Email:
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter email"
                      required
                      v-model="userStore.singleuser.email"
                    />
                  </div>

                  <!-- BirthDate Field -->
                  <div class="mb-3">
                    <label for="birthDate" class="form-label">
                      <i class="fas fa-calendar-alt"></i> BirthDate:
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="birthDate"
                      placeholder="Select birthdate"
                      required
                      v-model="userStore.singleuser.birthDate"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="contactnumber" class="form-label">
                      <i class="fas fa-user"></i> Contact Number:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="contactnumber"
                      placeholder="Enter 11 digit number"
                      required           
                      v-model="userStore.singleuser.contactNumber"
                    />
                  </div>

                  <!-- UserName Field -->
                  <div class="mb-3">
                    <label for="lastName" class="form-label">
                      <i class="fas fa-user"></i> Username:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="userName"
                      placeholder="Enter username"
                      required
                      v-model="userStore.singleuser.userName"
                    />
                  </div>

                  <!-- Password Field -->
                  <div class="mb-3">
                    <label for="password" class="form-label">
                      <i class="fas fa-lock"></i> Password:
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter password"
                      required
                      v-model="userStore.singleuser.password"
                    />
                  </div>


                  <div class="d-flex justify-content-end">
                  <button class="btn btn-primary mx-1" type="submit">
                    <i class="fas fa-check"></i> Save
                  </button>
                </div>

                  <!-- Submit Button -->

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/users'

const userStore = useUserStore()

import { useRoute } from 'vue-router';
const $route = useRoute()

import { onMounted } from "vue";
onMounted(() => {
  userStore.getsingleusers($route.params.id)
  
})




const myPath = import.meta.env.VITE_path

</script>

<style scoped>
.card-header {
  text-align: center;
}

.card{
  background-image: linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );
  border-color: aliceblue;
  color: aliceblue;
}

</style>
