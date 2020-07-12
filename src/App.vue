<template>
  <div id="app">
      <Login></Login>
  </div>
</template>

<script>
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
html,body{
    width: 100%;
    height: 100%; 
    padding: 0;
    margin: 0;
}
#app {
    width: 100%;
    height: 100%;
}
</style>
