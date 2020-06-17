const router = require('express').Router();
const ctrl = require('./ctrls');

router.get('/',ctrl.list);
router.post('/',ctrl.add);
router.put('/',ctrl.mod);
router.delete('/',ctrl.delete);


router.all('*',(req, res)=>{
	res.status(404).send({success:false, msg:`admin unknown uri ${req.path}`});
})

module.exports = router;
