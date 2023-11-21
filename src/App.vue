<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Loading from './components/Loading.vue'
</script>

<template>
  <div>
    <Loading />

    <header>
      <div class="wrapper">
        <div class="logo">Your Logo</div>
        <nav>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/login" class="nav-link">Login</RouterLink>
          <RouterLink to="/user/list" class="nav-link">UserList</RouterLink>
          <RouterLink to="/csv" class="nav-link">Uplode Csv file</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
}

nav {
  display: flex;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    margin-top: 1rem;
  }

  .nav-link {
    margin: 0.25rem 0;
  }
}
</style>

