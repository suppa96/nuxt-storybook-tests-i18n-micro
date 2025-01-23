<script setup lang="ts">
const { $ts } = useI18n();
</script>
<template>
  <div>
    <p>{{ $ts("welcome") }}</p>
    <HelloWorld :msg="'index'" />
  </div>
</template>
