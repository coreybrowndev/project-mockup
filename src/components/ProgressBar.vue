<script setup>
import { ref, onMounted } from "vue";

const progress = ref(30);
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__fill" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<style scoped>
.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background-color: #007bff;
}
</style>
