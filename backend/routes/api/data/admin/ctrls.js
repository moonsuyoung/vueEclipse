const db = require('../../../../conf/db'); //db 설정

const dbcon = db.init();

exports.list = (req, res) => {

	var ipp = 10;
	var block = 10;
	var start = "";
	var totalCount = 0;
	var currentPage = 1;

	var where = "";
	if(req.query.keyword) where += " AND name like '%"+req.query.keyword+"%' ";
	var sql = ` SELECT count(*) as cnt FROM admin WHERE 1=1 ${where} `;

	dbcon.query(sql,(err,result)=>{
		if(err) throw err;

		totalCount = result[0].cnt;
		if(req.query.currentPage) currentPage = req.query.currentPage;
		
		var totalPage = Math.ceil(totalCount/ipp);
		var totalSet = Math.ceil(totalCount/block);
		var curSet = Math.ceil(currentPage/block);
		var startPage = Math.ceil((curSet-1)*10)+1;
		var endPage = (startPage+block)-1;

		if(currentPage < 0) {
			start = 0
		} else {
			start = (currentPage - 1) * 10;
		}

		if(endPage > totalPage) endPage = totalPage;

		console.log('[0] currentPage : ' + currentPage + ' | [1] block : ' + block + ' | [2] ipp : ' + ipp + ' | [3] totalPage : ' + totalPage + ' | [4] totalSet : ' + totalSet + ' | [5] curSet : ' + curSet + ' | [6] startPage : ' + startPage + ' | [7] endPage : ' + endPage)

		var paging = {
			"currentPage": currentPage,
			"block": block,
			"ipp": ipp,
			"totalPage": totalPage,
			"totalSet": totalSet,
			"curSet": curSet,
			"startPage": startPage,
			"endPage": endPage
		};

		sql = ` SELECT * FROM admin WHERE 1=1 ${where} ORDER BY seq DESC limit ?, ? `;
		dbcon.query(sql,[start,  ipp], (err, list) => {
			if(err) throw err;

			res.send({success:true,msg:'list sql 준비중',list:list, paging:paging});
		})
	})
	
}

exports.add = (req, res) => {
	console.log(req.body);
	var sql = " INSERT INTO admin (userid, password, name, level) values ('"+req.body.userid+"','"+req.body.password+"','"+req.body.name+"','"+req.body.level+"')";
	dbcon.query(sql,(err,result)=>{
		if(err) throw err;
		res.send({success:true,msg:'add sql 준비중'});
	})

	
}

exports.mod = (req, res) => {

}

exports.delete = (req, res) => {

}