<template>
	<div>
		<h1>vue test child1</h1>
		<p>{{child_message}}</p>

		<button v-on:click="incrementCounter">{{counter}}</button>
	</div>	
</template>
<script>
export default {
	props:['child_message']
	
	,data(){
		return{
			counter:0
		}
	}
	,methods:{
		incrementCounter() {
			this.counter += 1;
			this.$emit('increment');
		}
	}
}
</script>
<style scoped>

</style>