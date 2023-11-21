<template>
  <div class="container">
    <h1 class="mb-4 text-2xl font-bold">Add User</h1>
    <form @submit.prevent="addUser">

      <CommonInput label="Name" name="name" v-model="user.name" :is-required="true" />
      <CommonInput label="Email" name="email" type="email" v-model="user.email" :is-required="true" />
      <div class="form-group">
        <label for="type" class="label">User Type</label>
        <select v-model="user.type" id="type" name="type" class="select" required>
          <option value="admin">Admin</option>
          <option value="general">General</option>
        </select>
      </div>
      <CommonInput label="Password" name="password" type="password" v-model="user.password" :is-required="true" />
      <CommonInput label="Profile Picture" name="profile_picture" type="file" @change="handleFileUpload"
        :input-class="['file-input']" />
      <div class="form-group">
        <label for="name" class="label">Name</label>
        <input v-model="user.name" type="text" id="name" name="name" class="input" required>
      </div>
      <div class="form-group">
        <button type="submit" class="button">Add User</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';

import CommonInput from '@/components/CommonInput.vue';

const userStore = useUserStore();

const user = ref({
  name: '',
  email: '',
  type: 'admin',
  password: '',
  profile_picture: null,
});

const addUser = async () => {
  try {
    const message = await userStore.addUser(user.value);
    console.log(message);
    // Handle success, e.g., show a success message or redirect
  } catch (error) {
    console.error(error.message);
    // Handle errors, e.g., show error messages
  }
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  user.profile_picture = file;
};
</script>
  
<style scoped>
.container {
  max-width: 420px;
  margin: auto;

  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-size: 14px;
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

.select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.file-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.button {
  background-color: #3490dc;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #2779bd;
}
</style>

  