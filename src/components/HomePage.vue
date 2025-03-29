<template>
  <div class="home">
    <header>
      <h1>
        Welcome back, <br />
        Sam
      </h1>
      <div class="avatar"></div>
    </header>
    <div class="group-session">
      <router-link to="/group-session">
        <button>Group Session</button>
      </router-link>
    </div>

    <div class="timer-container">
      <h3>Focus Timer</h3>
      <div>
        <img src="@/assets/timer.png" />
      </div>
    </div>

    <div class="buttons-container">
      <button>Start Timer</button>
      <router-link to="/tasks">
        <button>Task List</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
}

header {
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ccc;
}

.group-session {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.group-session button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.timer-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.timer-container h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

.timer-container div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
}

.timer-container img {
  width: 500px;
  height: 500px;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

.buttons-container button {
  padding: 10px 20px;
  width: 80%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
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
}
</style>
