<template>
	<div>
		<button @click="subCounter">-</button>
		<button @click="addCounter">+</button>
	</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
	methods:{
		...mapActions(["subCounter","addCounter"])
	}
}
</script>

<style scoped>

</style>