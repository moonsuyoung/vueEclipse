const router = require('express').Router();
const check = require('./check');

const data = require('./data');
const test = require('./test');

router.all('*',check.verify); //인증 체크


router.all('*',(req,res,next)=>{
	console.log(req.path+" welcome to api");
	console.log(req.headers);

	next();
})

router.use('/test',test);
router.use('/data',data);

router.all('*',(req,res)=>{
	res.status(404).send({success:false, msg:`unkown uri ${req.path}`});
})

module.exports = router;