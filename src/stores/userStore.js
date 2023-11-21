// src/userStore.js
import { defineStore } from 'pinia';
import { useUtilityStore } from '@/stores/utility'  // Assuming your utility store file is named utility.js
import axios from 'axios';

const baseUrl = "http://localhost:8000/api"

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
  }),
  actions: {

    

    // add user
    async addUser(userData) {
      try {
        useUtilityStore().setLoading(true);
        const res = await axios.post(baseUrl + '/add-users', userData);
        if(res?.data?.success){
          this.users.push(res.data.users);
          return res.data.message;
        }
        useUtilityStore().setLoading(false)
      } catch (error) {
        useUtilityStore().setLoading(false)
        throw new Error(error.res.data.message);
      }
    },


    //login
    async login(userData) {
      try {
        useUtilityStore().setLoading(true);
        const res= await axios.post(baseUrl +"/login", userData);
        if(res?.data?.success){
          useUtilityStore().setLoading(false)
          return true
        }else{
          useUtilityStore().setLoading(false)
          return false
        }

      } catch (error) {
        useUtilityStore().setLoading(false)
        throw new Error(error.res.data.message);
      }
    },

    async fetchUserList() {
      try {
        useUtilityStore().setLoading(true);
        const res = await axios.get(baseUrl +'/api/users'); // Adjust the API endpoint as needed
        
        if(res?.data?.success){
          useUtilityStore().setLoading(false)
          this.users = res.data;
          return this.users; // You may return the data if needed in the component
        }else{
          useUtilityStore().setLoading(false)
          return false
        }
      } catch (error) {
        console.error('Error fetching user list:', error);
        useUtilityStore().setLoading(false);
      }
    },

  },
});
