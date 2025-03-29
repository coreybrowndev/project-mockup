<script setup>
import ProgressBar from "@/components/ProgressBar.vue";
</script>

<template>
  <div class="task-list">
    <header>
      <h1>
        Task Breakdown <br />
        AI Suggestion Plan
      </h1>
    </header>
    <div class="search-container">
      <h3>Enter your task</h3>
      <input type="text" value="Simple steps to write my english paper" placeholder="Search task" />
    </div>
    <div class="task-list-container">
      <p>AI Generated task steps...</p>
      <div class="list-wrapper">
        <ul>
          <li>Research Topic</li>
          <li>Draft Outline</li>
          <li>Create the Draft</li>
          <li>Review and Edit</li>
          <li>Start final Draft</li>
          <li>Finalize and Submit</li>
        </ul>
      </div>
    </div>
    <div class="buttons-container">
      <router-link to="/">
        <button>Home</button>
      </router-link>
    </div>
    <div class="progress-container">
      <p>Recent Progress</p>
      <ProgressBar />
    </div>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.search-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.search-container h3 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  text-align: center;
}

.search-container input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.task-list-container {
  margin-top: 20px;
}

.task-list-container p {
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: rgb(211, 211, 211);
}

.task-list-container .list-wrapper {
  max-height: 600px;
  overflow-y: auto;
}

.task-list-container .list-wrapper ul {
  list-style-type: none;
  padding: 0;
}

.task-list-container .list-wrapper ul li {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.task-list-container .list-wrapper ul li:nth-child(even) {
  background-color: #e0e9ff;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

.buttons-container a {
  width: 100%;
}

.buttons-container a button {
  padding: 10px 20px;
  width: 100%;
  background: white;
  border: 2px solid #007bff;
  color: black;
  border-radius: 10px;
}
</style>
