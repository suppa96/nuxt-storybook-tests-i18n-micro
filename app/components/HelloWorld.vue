<script setup lang="ts">
import type { HelloWorldProps } from './HelloWorld.props'

defineProps<HelloWorldProps>()
</script>

<template>
  <div>Message: {{ msg }}</div>
</template>
