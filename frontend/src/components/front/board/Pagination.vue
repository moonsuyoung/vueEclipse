<template>
	<div class="pagination">
		<a href="javascript:;" @click="fnPage(1)" class="first">&lt;&lt;</a>
		<a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"  class="prev">&lt;</a>
		<template v-for=" (n,index) in paginavigation()">
			<template v-if="paging.page==n">
				<strong :key="index">{{n}}</strong>
			</template>
			<template v-else>
				<a href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{n}}</a>
			</template>
		</template>
		<a href="javascript:;" v-if="paging.total_page > paging.end_page" @click="fnPage(`${paging.end_page+1}`)"  class="next">&gt;</a>
		<a href="javascript:;" @click="fnPage(`${paging.total_page}`)" class="last">&gt;&gt;</a>

		<p>{{page}}</p>
	</div>
</template>

<script>
export default {
	props:['paging']
	/*
	
	,mounted() {
		console.log(this.paging);
	}
	,data() {
		return{
			n:this.paging.total_page
			, paging1:this.paging
		}
	}
	*/
	,data() {
		return{
			paginavigation:function() { //TODO 페이징 처리 for문
				var pageNumber = [];
				var start_page = this.paging.start_page;
				var end_page = this.paging.end_page;
				for (var i = start_page; i <= end_page; i++) pageNumber.push(i);
				return pageNumber;
			}
			,page:this.$route.query.page ? this.$route.query.page:1
		}
	}
	,methods:{
		fnPage(n) {
			if(this.page != n) {
				this.page = n;
				this.paging.page = n;
				this.$emit('fnPage',n);
			}
		}
	}
}
</script>

<style scoped>
	.pagination{margin:20px 0 0 0; text-align:center;}
	.first, .prev, .next, .last{border:1px solid #666; margin:0 5px;}
	.pagination span{display:inline-block; padding:0 5px; color:#333;}
	.pagination a{text-decoration:none; display:inline-blcok; padding:0 5px; color:#666;}
</style>