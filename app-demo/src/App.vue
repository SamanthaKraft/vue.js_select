// lets give this app 2 components from two different vue.js's
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <helloz></helloz>
    <pmfselector></pmfselector>
  </div>
</template>

<script>
import Helloz from './components/Hello'
import PMFSelector from './components/pmfSelector'

export default {
  name: 'app',
  components: {
    Helloz,
    PMFSelector
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
  margin-top: 60px;
}
</style>
