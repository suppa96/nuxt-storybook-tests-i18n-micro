<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style scoped lang="css">
.page-enter-active,
.page-leave-active {
  position: relative;
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.page-enter-from {
  transform: translateX(100%);
}

.page-leave-from {
  opacity: 1;
}
.page-leave-to {
  opacity: 0;
}
</style>
