// stores/counter.js
import axios from 'axios'
import { defineStore } from 'pinia'

export const useUtilityStore = defineStore('utility', {
  state: () => ({
   isLoading: false,
  }),

  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async setLoading(data=!this.isLoading) {
      this.isLoading=data
    },
  },
})
