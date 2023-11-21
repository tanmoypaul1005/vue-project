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
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user'; // Assuming the store file is named user.js

export default {
  setup() {
    const userStore = useUserStore();
    const userList = ref([]);

    onMounted(() => {
      fetchUserList();
    });

    const fetchUserList = async () => {
      try {
        const data = await userStore.fetchUserList();
        userList.value = data;
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    return {
      userList,
    };
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

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.custom-table th {
  background-color: #f2f2f2;
}
</style>
