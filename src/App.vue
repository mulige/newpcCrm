<template>
  <div id="app">
  	<transition name="el-fade-in-linear">
  	  <router-view/>
  	</transition>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import'./styles/app.scss';
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;*/
}
</style>
