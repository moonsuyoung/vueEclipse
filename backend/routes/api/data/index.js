const router = require('express').Router();
const company = require('./company');
const admin = require('./admin');
const board = require('./board');
const auth = require('./auth');

router.use('/company',company);
router.use('/admin',admin);
router.use('/board',board);
router.use('/auth',auth);

router.all('*',(req, res)=> {
	res.status(404).send({success:false, msg:'api unknown uri ${req.path}'});
})

module.exports = router;