<template>
  <div id="app">
    <h1>Register</h1>

    <input type="email" name="email" placeholder="email" />
    <br />
    <input type="password" name="password" placeholder="password" />
    <br />
    <input type="submit" value="Register" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
