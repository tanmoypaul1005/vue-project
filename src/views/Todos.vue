<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore();

const fetchData = async() => {
    await counter.fetchTodo();
}
fetchData();

</script>

<template>
    <main>
        <div v-for="todo in counter.todo" :key="todo.id">
            <RouterLink :to="`/todo/${todo.id}`"> {{ todo.title }}</RouterLink>
        </div>
    </main>
</template>
