<script setup>
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <div class="app-container">
    <HomePage />
  </div>
</template>

<style scoped>
.app-container {
  width: 390px;
  height: 844px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  color: black;
}
</style>

<style>
/* Global styles */
body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}
</style>
