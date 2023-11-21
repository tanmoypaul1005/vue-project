// stores/counter.js
import axios from 'axios'
import { defineStore } from 'pinia'

export const useUtilityStore = defineStore('utility', {
  state: () => ({
   isLoading: false,
  }),

  actions: {
    async setLoading(data=!this.isLoading) {
      this.isLoading=data
    },
  },
})
