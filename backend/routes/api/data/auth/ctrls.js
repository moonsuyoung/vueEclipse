const db = require('../../../../conf/db'); //db 설정
const dbcon = db.init();
const jwt = require('jsonwebtoken');

let sql = "";
let body = "";

exports.login = (req,res) => {
	
	const secret = req.app.get('jwt-secret');
	const p = new Promise((resolve, reject) => {
		jwt.sign({
			_id:"fyzh99"
			,id:"fyzh99"
			,email:"fyzh99@naver.com"
			}
			,secret
			,{
				expiresIn:'2m'
				,issuer:"http://localhost:3000/api/"
				,subject:'user-token'
			}
			,(err, token) => {
				if(err) reject(err);
				resolve(token);
			}
		)
	})
	.then((token)=>{
		res.send({success:true, token:token})
	})

	
}