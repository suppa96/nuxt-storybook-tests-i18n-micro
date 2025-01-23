<script setup lang="ts">
import type { HelloWorldProps } from "./HelloWorld.props";

defineProps<HelloWorldProps>();

const email = ref("");
const password = ref("");

const submitForm = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  showSuccess.value = true;
};

const showSuccess = ref(false);
</script>

<template>
  <div>
    <!-- Input for email -->
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      data-testid="email"
    />
    <br />
    <!-- Input for password -->
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      data-testid="password"
    />
    <br />
    <!-- Button to submit the form -->
    <button @click="submitForm">Submit</button>
    <br />
    <!-- Show success message if form is submitted -->
    <div v-if="showSuccess">
      Everything is perfect. Your account is ready and we should probably get
      you started!
    </div>
  </div>
</template>
