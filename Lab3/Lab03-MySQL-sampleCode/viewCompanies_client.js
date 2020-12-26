var mysql = require('mysql');

var con = mysql.createConnection({
  host:'coms-319-002.cs.iastate.edu',
  user:'team1',
  password:'team1comsVM@319',
  database:'MyProject'
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Companies", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    con.end(function(err) {
     if (err) {
       return console.log(err.message);
     } else{
       console.log("Close connection!");
     }
    });
  });
});
