<template>
    <div class="container">
      <div class="alert alert-info" role="alert">
        <i class="fas fa-check-circle"></i>
        <h4 class="alert-heading">Saved successfuly!</h4>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .alert {
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center; /* Center the text horizontally */
  }

  .alert i {
  display: block;
  margin-bottom: 8px;
  font-size: 30px; /* Set the desired size of the icon */
}
  </style>
  