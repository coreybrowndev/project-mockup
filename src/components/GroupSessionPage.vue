<script setup>
import ProgressBar from "@/components/ProgressBar.vue";
</script>

<template>
  <div class="task-list">
    <header>
      <h1>
        Stay Social and <br />
        Accoutable
      </h1>
    </header>
    <div class="search-container">
      <h2>
        Pair with a friend <br />
        for a shared focus <br />session
      </h2>
    </div>
    <div>
      <a href="">
        <button>
          Start <br />
          Study Buddy <br />
          Mode
        </button>
      </a>
    </div>
    <div class="friends-container">
      <img src="@/assets/friends.png" />
    </div>
    <div class="button-footer">
      <div class="progress-container">
        <p>Your recent progress</p>
        <ProgressBar />
      </div>
      <div class="progress-container">
        <p>Your buddy's recent Progress</p>
        <ProgressBar />
      </div>
      <a href="/" id="invite-friends">
        <button>Invite friends</button>
      </a>
      <div class="buttons-container">
        <a href="/">
          <button>Home</button>
        </a>
      </div>
      <div class="progress-container">
        <p>Estimated completion level</p>
        <ProgressBar />
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

div {
  width: 100%;
}

header h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  text-align: center;
}

.task-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
}

.search-container {
  text-align: center;
  width: 100%;
}

.search-container h2 {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: black;
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

button {
  padding: 10px 20px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

#invite-friends {
  width: 80%;
  margin-top: 20px;
}

#invite-friends button {
  padding: 20px 20px;
  width: 100%;
  background: white;
  border: 2px solid #007bff;
  background-color: #007bff;
}

.friends-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  justify-self: flex-end;
  margin-top: auto;
}
</style>
