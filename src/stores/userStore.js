// src/userStore.js
import { defineStore } from 'pinia';

import axios from 'axios';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
  }),
  actions: {
    async addUser(userData) {
      try {
        const response = await axios.post('http://localhost:8000/api/add-users', userData);
        this.users.push(response.data.users);
        return response.data.message;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
  },
});
