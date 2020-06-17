import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		counter:0
	}
	,getters:{
		counter:state=>state.counter
	}
	,mutations:{
		increment:state=>(state.counter += 1)
		, decrement:state=>(state.counter -= 1)
	}
	,actions:{
		addCounter:context => context.commit("increment")
		, subCounter:context => context.commit("decrement")
		
	}
})