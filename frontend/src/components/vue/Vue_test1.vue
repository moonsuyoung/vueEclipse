<template>
	<div>
		<h1>Vue test1</h1>
		<p>{{message}}</p>

		<p v-bind:title="message">
			마우스를 올려보세요.
		</p>

		<ul>
			<li v-for="(row,idx) in todos" :key="idx">{{row.text}}, {{row.name}}</li>
		</ul>

		<a href="javascript:;" @click="fnalert(123)">클릭</a>

		<div>
			<input type="text" v-model="txt" /> {{txt}}
		</div>

		<div>
			<p>{{message}}<p>
			<p>계산 함수 실행 : {{reversedMessage}}</p>
		</div>


		<h1 v-if="ok">if test</h1>

		<h1 v-if="ok">if test</h1>
		<h1 v-else>if No</h1>

		<div v-if="type==='A'">
			A
		</div>
		<div v-else-if="type==='B'">
			B
		</div>
		<div v-else>
			else C
		</div>

		<p v-for="(i, idx) in  10" :key="idx">
			<span v-if="i!=2">{{i}} {{idx}}</span>
		</p>

		<div>
			<p>total : {{total}}</p>
		</div>

		<Vue_child1 :child_message="txt_child_message" />

		<Vue_child1 v-on:increment="incrementTotal" />


		<a href="javascript:;" @click="fnChangeTxt(123)">자식 내용 변경</a>

		<input type="checkbox" v-model="checkbox1" value="check">{{checkbox1}}

		<input type="text" v-model.trim="txt_child_message" />

		
	</div>
</template>
<script>
import Vue_child1 from './child/Vue_child1';

export default{
	components:{
		Vue_child1
	}
	, data() {
		return{
			message:'message test'
			,todos:[
				{text:'test1', name:'name1'}
				,{text:'test2', name:'name2'}
			]
			,txt:''
			,txt_child_message:'child message'
			,watch_change:''
			,ok:false
			,type:"B"
			,checkbox1:[]
			,total:0
		}
	}
	,watch:{
		/*
		watch_change() {
			this.watch_change()
		}
		*/
	}
	,methods:{
		fnalert(val) {
			alert(val);
		}
		,fnChangeTxt(val) {
			this.txt_child_message=val;
			alert(this.txt_child_message);
		}
		,incrementTotal() {
			this.total +=1;
		}
	}
	,computed:{
		reversedMessage() {
			return this.message.split('').reverse().join('')
		}
	}
}
</script>

<style scoped>

</style>