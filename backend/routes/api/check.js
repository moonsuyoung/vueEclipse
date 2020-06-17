const jwt = require('jsonwebtoken');

exports.verify = (req, res, next) => {
	console.log("check verify ="+req.path);
	//해당 페이지는 체크하지 않는다.
	next();
	/*
	if(req.path == "/data/auth")  {
		return next();
	}

	if(!req.headers.authorization) return res.status(401).send({success:false, msg:'authorization empty'});

	const token = req.headers.authorization;

	jwt.verify(token, req.app.get('jwt-secret'),(err,d)=>{
		if(err) return res.status(401).send({success:false, msg:'your token expired'});
		console.log(new Date(d.exp*100).toLocaleString());
		req.token = d;
		console.log(req.token);
		next();
	})
	*/
}