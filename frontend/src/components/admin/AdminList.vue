<template>
	<div>
		<h1>관리자 리스트</h1>
		<div class="boardWrap">
			<div>
				<input type="text" v-model="keyword" @keyup.enter="fnList"><a href="javascript:;" @click="fnList">검색</a>
			</div>
			<table>
				<tr>
					<th>no</th>
					<th>아이디</th>
					<th>이름</th>
					<th>날짜</th>
				</tr>
				<tr v-for="(row,idx) in list" :key="idx">
					<td>{{row.name}}</td>
					<td>{{row.userid}}</td>
					<td>{{row.name}}</td>
					<td>{{row.regdate}}</td>
				</tr>
			</table>

			<div>
				<Paging v-bind:paging="paging" @fnPage="fnPage" />
			</div>

			<div>
				<input type="text" v-model="txt_name" />
			</div>
		</div>
			
		<div><a href="javascript:;" @click="fnAddForm">등록 {{currentPage}}</a></div>
	</div>
</template>


<script>

import Paging from './Paging'

export default {
	name:'adminList'
	, components:{
		Paging
	}
	,data() {
		return{
			list:''
			,paging:''
			,totalPage:''
			,keyword:''
			,body:''
			,test:"33333"
			,txt_name:''
			,currentPage:''
		}
	}
	,mounted() {
		this.fnList();
	}
	,methods:{
		fnAddForm() {
			this.$router.push("/admin/adminWrite");
		}
		,fnList() {
			
			this.body = {
				keyword:this.keyword
				,currentPage:this.currentPage
			}
			
			this.$axios.get(this.$cfg.path.api+'data/admin',{params:this.body})
			.then((res)=>{

				this.list = res.data.list;
				this.paging = res.data.paging;
				this.totalPage = this.paging.totalPage;
				this.currentPage = this.paging.currentPage;
				
			})
			.catch((err)=>{
				console.log(err);
			})
			
		}
		,fnPage(n) {
			this.currentPage = n; 
			this.fnList();
		}
	}
}
</script>

<style scoped>
	input{width:500px;}
	.boardWrap{width:800px; margin:0 auto;}
</style>