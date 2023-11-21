// src/userStore.js
import { defineStore } from 'pinia';
import { useUtilityStore } from '@/stores/utility'  // Assuming your utility store file is named utility.js
import axios from 'axios';
import { baseUrl } from '../../utility/source.js';

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


    async login(userData) {
      try {
        useUtilityStore().setLoading(true);
        const res= await axios.post(baseUrl +"/login", userData);
        if(res?.data?.success){
          return true
        }else{
          return false
        }
        useUtilityStore().setLoading(false)
      } catch (error) {
        useUtilityStore().setLoading(false)
        throw new Error(error.res.data.message);
      }
    },
  },
});
