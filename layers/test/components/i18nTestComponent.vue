<template>
  <div>
    <p>{{ $ts("i18nTest") }}</p>
  </div>
</template>

<script setup lang="ts">
const { $ts } = useI18n();
</script>

<style scoped></style>
