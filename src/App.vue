<script setup lang="ts">
import AsyncUsers from './components/AsyncUsers.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <AsyncUsers />
    </template>
    <template #fallback>
      <div>ユーザーデータを読み込み中...</div>
    </template>
  </Suspense>
</template>