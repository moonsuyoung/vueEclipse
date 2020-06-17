<template>
	<div>
		<h1>관리자 등록</h1>
			<div><input tpye="text" v-model="userid" placeholder="아이디"></div>
			<div><input tpye="password" v-model="password" placeholder="비밀번호"></div>
			<div><input tpye="text" v-model="name" placeholder="이름"></div>
			<div>
				<select v-model="level">
					<option value="1">1</option>
					<option value="100">100</option>
				</select>
			</div>
		<div><a href="javascript:;" @click="fnAdd">등록</a></div>
		<div><a href="javascript:;" @click="fnList">리스트 페이지 이동</a></div>
	</div>
</template>


<script>
export default {
	name:'adminWrite'
	,data() {
		return{
			userid:''
			,password:''
			,name:''
			,level:''
			,body:''
			,result:false
			,msg:''
		}
	}
	,methods:{
		swalSuccess(msg) {
			return this.$swal({
			icon: 'success',
			// button: false,
			title: '성공',
			text: msg,
			timer: 2000,
			});
        }
		,fnAdd() {
			if(!this.userid) {
				alert("아이디를 입력해 주세요");
				return;
			}

			this.body = {
				userid:this.userid
				,password:this.password
				,name:this.name
				,level:this.level
			}

			this.$axios.post('http://localhost:3000/api/data/admin',this.body)
			.then((res)=>{
				this.result = JSON.stringify(res.data.success);
				
				if(this.result) {
					return this.swalSuccess("등록되었습니다.");
				}
			})
			.then(()=>{
				this.fnList();
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		,fnList() {
			this.$router.push('/admin/adminList');
		}
	}
}
</script>

<style scoped>
input{width:500px;}
</style>