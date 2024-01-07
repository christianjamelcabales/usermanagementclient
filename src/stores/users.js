import { defineStore } from 'pinia'
import { myAxios } from '../config/axios'
import Swal from 'sweetalert2'
import router from '../router/index'

export const useUserStore = defineStore('listingStore', {
  state: () => ({
    firstname: null,
    lastname: null,
    email: null,
    birthdate: null,
    contactnumber:null,
    username: null,
    password: null,
    password2: null,
    file: null,
    searchText: '',

    allusers: {},
    filteredUsers: [],
    singleuser:{}
  }),
  actions: {
    
      async submitData() {
       
        console.log(this.file)
        const formData = new FormData();
  
        // Append user data to the form data
        formData.append('firstname', this.firstname);
        formData.append('lastname', this.lastname);
        formData.append('email', this.email);
        formData.append('birthdate', this.birthdate);
        formData.append('contactnumber', this.contactnumber);
        formData.append('username', this.username);
        formData.append('password', this.password);
        formData.append('file', this.file);
  
        console.log(this.file)
        try {
          // Use myAxios to make a POST request with formData
          
          await myAxios.post('api/users', formData);
          console.log('User data submitted successfully');
          Swal.fire({
            title: "Saved Successfuly!",
            icon: "success"
          });
          router.push({ path: '/' });
        } catch (error) {
          console.error('Error submitting user data:', error);
          console.log('Detailed error:', error.response);
        }
  

      },

      async getallusers(){
        try {
          const response = await myAxios.get('/api/users');
          this.allusers = response.data
          this.filteredUsers = response.data
          console.log(this.allusers)
        } catch (error) {
          console.log(error)
        }
      },

      async getsingleusers(id){
        try {
          const response = await myAxios.get(`/api/users/${id}`);
          this.singleuser = response.data
          this.singleuser.birthDate = this.singleuser.birthDate.split("T")[0] 
          console.log(this.singleuser)//spelled wrong
        } catch (error) {
          console.log(error) 
        }
      },

      async updateUser(id) {
        
        try {
          // Assuming you want to update using the existing user data (this.singleuser)
          const response = await myAxios.patch(`/api/users/${id}`, this.singleuser);
          // Update the local state with the new user data if the request is successful
          this.singleuser = response.data;
          // Log the updated user data to the console
          console.log('User updated:', this.singleuser);
          Swal.fire({
            title: "Updated Successfuly!",
            icon: "success"
          });
          router.push({ path: '/' });
        } catch (error) {
          // Handle errors, e.g., log the error to the console
          console.error('Error updating user:', error.response.data);
        }
      },

      async deleteUser(id){   
        
        try {
          const response = await myAxios.delete(`/api/users/${id}`);
          await this.getallusers();
          console.log('User Deleted', response.data)
          Swal.fire({
            title: "Deleted Successfuly!",
            icon: "success"
          });
        } catch (error) {
          console.log(error)
        }
      },



      async filterUsers(){
        const val = this.searchText.toLowerCase()
        this.filteredUsers = this.allusers.filter(user => 
          user.firstName.includes(val) ||
          user.lastName.includes(val) ||
          user.email.includes(val) ||
          user.birthDate.includes(val) ||
          user.contactNumber.includes(val) ||
          user.userName.includes(val)
        );
  
      }
      

  },
})





