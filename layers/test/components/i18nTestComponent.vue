<template>
  <div>
    <h3>String using global translation file</h3>
    <p>{{ $ts("i18nTest") }}</p>
    <h3>String pointing to '/dinamic/id' page specific translation file</h3>
    <p>{{ $ts("dynamicId.i18nTestComponent") }}</p>
    <h3>String pointing to '/index' page specific translation file</h3>
    <p>{{ $ts("index.i18nTestComponent") }}</p>
  </div>
</template>

<script setup lang="ts">
const { $ts } = useI18n();
</script>
