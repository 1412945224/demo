<template>
  <div id="app">
    <div id="nav">
       <router-link to="/dash">dash</router-link>
      |
      <router-link to="/">Home</router-link>
      |
      <router-link to="/dash/main">/dash-About</router-link>
      <router-link to="/about1">About1</router-link>
    </div>
     <div id="cnbi-viewport"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
