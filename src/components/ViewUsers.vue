<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="">
          <div class="card mx-auto">
            <div class="card">
              <div class="card-header"><h5>Users</h5></div>
              <div class="card-body table-responsive">
                <div class="mb-1">
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder="Search here..."
                      required
                      pattern="[A-Za-z]+"
                      v-model="userStore.searchText"
                      @input="userStore.filterUsers"
                    />
                  </div>
                <table class="table table-striped mb-0">
                  <thead>
                    <tr>
                      <th></th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>BirthDate</th>
                      <th>Email</th>
                      <th>ContactNumber</th>
                      <th>UserName</th>
                      
                      <th></th>
                    </tr>
                  </thead>
                  <tbody v-if="userStore.allusers.length > 0">
                    <tr v-for="user in userStore.filteredUsers" :key="user._id">
                      <td>
                        <img
                          style="height: 50px; width: 50px"
                          v-bind:src="myPath + user.fileName"
                          alt="picture"
                        />
                      </td>
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td style="white-space: nowrap;">{{ user.birthDate.split("T")[0] }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.contactNumber }}</td>
                      <td>{{ user.userName }}</td>
                      
                      <td style="white-space: nowrap;">
                        <!-- Update/Edit button with FontAwesome icon -->
                        <button @click="editUser(user._id)" class="btn btn-sm btn-outline-primary me-2 rounded">
                          <i class="fas fa-edit"></i>
                        </button>

                        <!-- Delete button with FontAwesome icon -->
                        <button @click="confirmDelete(user._id)" class="btn btn-sm btn-outline-danger rounded">
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                      <tr >
                        <td colspan="8" ><h5 class="text-center"> No data available... </h5> </td>
                      </tr>
                  </tbody>
                </table>
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
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const userStore = useUserStore()
const $router = useRouter();

userStore.getallusers()


const editUser = (param) =>{
  $router.push(`/updateuser/${param}`);
  
}

const confirmDelete = (param) =>{
  Swal.fire({
      title: "Do you want to delete this user?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked on "Delete"
        userStore.deleteUser(param);
      }
    });
}


const myPath = import.meta.env.VITE_path
</script>

<style scoped>
.card-header {
  text-align: center;
}

.card{
  background-color: rgba(255, 255, 255, 0.0); /* White background with 50% opacity */
  border-color: aliceblue;
  color: aliceblue;
}

</style>
