<template>
  <div>
  	<my-header></my-header>
		<div id="customer">
	      <router-view></router-view>
		</div>
  </div>
  
</template>

<script>
	export default {
	name:'customer',
	  data () {
			return {
				
			}
	  }
	}
</script>

<style lang="scss">
	#customer{
		padding: 20px;
	}
</style>