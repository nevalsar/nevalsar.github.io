<template>
  <Header />
  <div class="home">
    <p class="about">
      Graduate student in Robotics at The Robotics Institute at Carnegie Mellon University.
    </p>
    <div class="nav">
      <router-link to="/projects">projects</router-link>
      <a href="https://github.com/nevalsar" target="_blank" rel="noreferrer">github</a>
      <a href="https://linkedin.com/in/nevinvalsaraj" target="_blank" rel="noreferrer">linkedin</a>
      <a href="https://medium.com/@nevinvalsaraj" target="_blank" rel="noreferrer">blog</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style scoped>
.about {
  font-size: x-large
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav a {
  font-size: 2.8rem;
  font-weight: 600;
  margin: 1rem 1rem;
  color: #333;
  text-underline-offset: 3px;
}
</style>
