<template>
	<div>
		<span v-for="(n,idx) in paging.totalPage" :key="idx">
			<a href="javascript:;" v-if="paging.currentPage != n" @click="fnPaging(`${n}`)">{{n}}</a>
			<span href="javascript:;" v-else>{{n}}</span>
		</span>
	</div>
</template>

<script>
export default {
	props:['paging']
	,data(){
		return{
			/*
			page_totalPage:this.totalPage
			,page_test:this.test
			,page_txt_name:this.txt_name
			console.log(paging);
			*/
		}
	}
	,methods:{
		fnPaging(n) {
			this.$emit('fnPage',n);
		}
	}
}
</script>

<style scoped>

</style>