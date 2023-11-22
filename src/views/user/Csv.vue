<template>
  <div class="csv-uploader">
    <input type="file" ref="fileInput" @change="handleFileChange" accept=".csv" />
    <button @click="uploadCsv">Upload CSV</button>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  </div>
</template>

// Your Vue component
<script>
import { useUserStore } from '@/stores/userStore';  // Update the path accordingly

export default {
  // ... (existing code)

  methods: {
    // ... (existing methods)

    async uploadCsv() {
      this.errorMessage = null;
      this.successMessage = null;

      try {
        const formData = new FormData();
        formData.append('csv_file', this.selectedFile);

        const message = await useUserStore().uploadUsersFromCsv(formData);
        this.successMessage = message;
      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.message;
        } else {
          this.errorMessage = 'An error occurred while processing the request.';
        }
      }
    },
  },
};
</script>

  
  <style scoped>
  .csv-uploader {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  
  input[type="file"] {
    display: none;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .error-message, .success-message {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
  }
  
  .error-message {
    background-color: #ffdddd;
    color: #cc0000;
  }
  
  .success-message {
    background-color: #d4edda;
    color: #155724;
  }
  </style>
  
  