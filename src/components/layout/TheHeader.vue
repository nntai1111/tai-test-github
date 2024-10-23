<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Find a Coach</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Animation for fade-in effect */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Animation added for the entire header */
  animation: fadeIn 0.8s ease-out forwards;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  /* Add transition for hover effect */
  transition: color 0.3s ease, border-color 0.3s ease;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
  color: #fff; /* Change color when hovered */
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
  /* Add transition to smooth hover effect */
  transition: color 0.3s ease;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
  color: #f391e3; /* Change color when hovered */
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
