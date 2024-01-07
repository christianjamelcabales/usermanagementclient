<template>

  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-12 mb-2">
          <div class="card mx-auto">
            <div class="card">
              
              <div class="card-header"><b>User Registration</b></div>

              <div class="card-body">
                <form
                  action=""
                  @submit.prevent="userStore.submitData()"
                  enctype="multipart/form-data"
                >


                <div class="mb-3">
                    <label for="profilePicture" class="form-label">
                      <i class="fas fa-user-circle"></i> Profile Picture
                    </label>
                    <input
                      class="form-control form-control-sm"
                      id="profilePicture"
                      type="file"
                      @change="handleFileUpload"
                    />
                  </div>

                  <!-- First Name Field -->
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
                      pattern="[A-Za-z\s]+"
                      v-model="userStore.firstname"
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
                      pattern="[A-Za-z\s]+"
                      v-model="userStore.lastname"
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
                      v-model="userStore.email"
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
                      v-model="userStore.birthdate"
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
                      v-model="userStore.contactnumber"
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
                      v-model="userStore.username"
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
                      pattern=".{8,}"
                      v-model="userStore.password"
                      @keyup="passvalidate"
                      autocomplete="off"
                    />
                  </div>

                  <!-- Confirm Password Field -->
                  <div class="mb-3">
                    <label for="confirmPassword" class="form-label">
                      <i class="fas fa-lock"></i> Confirm Password:
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      required
                      pattern=".{8,}"
                      v-model="userStore.password2"
                      @keyup="passvalidate"
                    />
                  </div>
                  
                  <div class="d-flex justify-content-end">
                  <!-- Submit Button -->
                  <button :disabled="isButtonDisabled" class="btn btn-primary mx-1" type="submit">
                    <i class="fas fa-check"></i>Save
                  </button>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  




</template>

<script setup>
import { useUserStore } from '../stores/users'
import { ref } from 'vue';

const userStore = useUserStore()

const handleFileUpload = (e) => {
  const file = e.target.files[0]

  // Check if a file is selected
  if (file) {
    // Create a FormData object and append the single file
    const formData = new FormData()
    formData.append('file', file)

    // Update the image state
    userStore.file = file
    console.log('userStore.image:', userStore.file)
  } else {
    userStore.file = null // Set to null or any default value
  }
}

const isButtonDisabled = ref(false);
const passvalidate = () => {
  if(userStore.password===userStore.password2)
  {
    isButtonDisabled.value = false
  }
  else{
    isButtonDisabled.value = true
  }
  console.log(userStore.password===userStore.password2)
}


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
