<template>
  <div class="layout-default">
    <header class="w-full p-10 bg-red">This is the header</header>
    <main class="grow">
      <slot />
    </main>
    <footer class="w-full p-10 bg-green">This is the footer</footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="css">
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-default main {
  flex: 1;
}

.w-full {
  width: 100%;
}
.p-10 {
  padding: 40px;
}
.bg-red {
  background-color: red;
}
.bg-green {
  background-color: green;
}
</style>
