var express = require('express');
var router = express.Router();
var db=require('createDatabase');

router.get('/scoreboard', function(req, res, next) {

	var sql='SELECT * FROM Players';
	db.query(sql, function (err, data, fields) {
	if (err) throw err;
	res.render('scoreboard', { title: 'Scoreboard', userData: data});
  });
});
module.exports = router;