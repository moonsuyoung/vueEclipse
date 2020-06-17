import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/Test';
import Vue_test1 from '@/components/vue/Vue_test1';

import AdminWrite from '@/components/admin/AdminWrite';
import AdminList from '@/components/admin/AdminList';

import List from '@/components/front/board/List';
import Write from '@/components/front/board/Write';
import View from '@/components/front/board/View';

Vue.use(Router);

export default new Router({
	routes:[
		{
			path:'/'
			, name:'Hello'
			, component:HelloWorld
		}
		,{
			path:'/test'
			, name:'Test'
			, component:Test
			
		}
		,{
			path:'/test2'
			, name:'Hello'
			, component:HelloWorld
			
		}
		,{
			path:'/admin/adminWrite'
			, name:'AdminWrite'
			, component:AdminWrite
		}
		,{
			path:'/admin/adminList'
			, name:'AdminList'
			, component:AdminList
		}
		,{
			path:'/vue/Vue_test1'
			,name:'Vue_test1'
			,component:Vue_test1
		}
		,{
			path:'/front/board/list'
			,name:'List'
			,component:List
		}
		,{
			path:'/front/board/write'
			,name:'Write'
			,component:Write
		}
		,{
			path:'/front/board/view'
			,name:'View'
			,component:View
		}
	]
})