<template>
  <div class="login-container">
    <h1 class="login-title">Login</h1>
    <form @submit.prevent="loginUser" class="login-form">
      <CommonInput label="Email" name="email" v-model="credentials.email" :is-required="true" />
      <CommonInput label="Password" name="password" type="password" v-model="credentials.password" :is-required="true" />

      <div class="form-group">
        <!-- Use CommonButton component here -->
        <CommonButton @click="loginUser">Login</CommonButton>
      </div>
    </form>
  </div>
</template>

<script>
import CommonInput from '@/components/CommonInput.vue';
import CommonButton from '@/components/CommonButton.vue';

import { useUserStore } from '@/stores/userStore';

export default {
  components: {
    CommonInput,
    CommonButton, // Don't forget to include CommonButton here
  },
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
      const userStore = useUserStore();
      try {
        const message = await userStore.addUser(this.credentials);
        console.log(message);
        // Handle success, e.g., show a success message or redirect
      } catch (error) {
        console.error(error.message);
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

/* Style for CommonButton component */
.common-button {
  background-color: #3490dc;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.common-button:hover {
  background-color: #2779bd;
}
</style>
