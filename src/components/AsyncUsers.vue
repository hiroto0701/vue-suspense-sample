<script setup lang="ts">
import { ref } from 'vue';
import { useFetchUsers } from '../composables/useFetchUsers';
import type { User } from '../types/user';

const { fetchUsersList } = useFetchUsers();
const users = ref<User[]>([]);
const error = ref<string | null>(null);

async function load() {
  try {
    await new Promise(resolve => setTimeout(resolve, 5000));
    users.value = await fetchUsersList();
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An unknown error occurred';
  }
}

await load();
</script>

<template>
  <div>
    <h2>ユーザー一覧</h2>
    <div v-if="error">エラー: {{ error }}</div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>