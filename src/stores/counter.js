

// stores/counter.js
import axios from 'axios'
import { defineStore } from ' '
import { useUtilityStore } from '@/stores/utility'  // Assuming your utility store file is named utility.js


export const useCounterStore = defineStore('counter', {

  state: () => ({
    todo: [],
    todoDetails: {},
  }),

  actions: {
    async fetchTodo() {
      useUtilityStore().setLoading(true);
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        this.todo = res.data;
      } catch (error) {
        // Handle error
      } finally {
        setTimeout(() => {
          useUtilityStore().setLoading(false);
        }, 3000);

      }
    },

    async fetchTodoDetails(id) {
      useUtilityStore().setLoading(true);
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        this.todoDetails = res.data;
      } catch (error) {
        // Handle error
      } finally {
        useUtilityStore().setLoading(false);
      }
    },
  },
});

