module.exports = {
	apps:[{
		name:'app'
		, script:'./bin/www'
		, instances:0
		, exec_mode:'cluster'
		,env:{
			"port":3000
			, NODE_ENV:"development"
		}
		,env_production:{
			"post":80
			, NODE_ENV:"production"
		}
	}]
}