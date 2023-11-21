<script setup>
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router';

const counter = useCounterStore();

const route = useRoute();
const todoId = route.params.id;

const fetchData = () => {
    counter.fetchTodoDetails(todoId);
}
fetchData();

</script>

<template>
    <main>
        <div>{{ counter.todoDetails.title }}</div>
    </main>
</template>
