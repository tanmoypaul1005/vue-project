<!-- UserList.vue -->
<template>
    <div class="user-list-container">
      <h2 class="user-list-title">User List</h2>
      <table class="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userList: [], // Initialize an empty array to store the user list
      };
    },
    created() {
      this.fetchUserList();
    },
    methods: {
      async fetchUserList() {
        try {
          // Fetch user list from your API endpoint (adjust the URL accordingly)
          const response = await fetch('http://localhost:8000/api/users');
          const data = await response.json();
          this.userList = data;
        } catch (error) {
          console.error('Error fetching user list:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for user list */
  .user-list-container {
    max-width: 800px;
    margin: auto;
  }
  
  .user-list-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .custom-table th, .custom-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  .custom-table th {
    background-color: #f2f2f2;
  }
  </style>
  