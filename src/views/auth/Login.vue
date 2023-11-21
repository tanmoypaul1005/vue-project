<!-- Login.vue -->
<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <form @submit.prevent="loginUser" class="login-form">
      <div class="form-group">
        <label for="email" class="label">Email</label>
        <input v-model="credentials.email" type="email" id="email" name="email" class="input" required>
      </div>

      <div class="form-group">
        <label for="password" class="label">Password</label>
        <input v-model="credentials.password" type="password" id="password" name="password" class="input" required>
      </div>

      <div class="form-group">
        <button type="submit" class="login-button">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { baseUrl } from '../../utility/source.js';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post(baseUrl +"/login", this.credentials);
        console.log(response.data);
        // Handle success, e.g., store token, redirect, etc.
      } catch (error) {
        console.error(error.response.data.message);
        // Handle errors, e.g., show error messages
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles for login form */
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  background-color: #3490dc;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #2779bd;
}
</style>
