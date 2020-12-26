var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'team1',
  password:'team1comsVM@319',
  database:'MyProject'
});


con.connect(function(err) {
  if (err) throw err;

  con.query("SELECT * FROM Companies", function (err, result, fields) {
    if (err) throw err;
    console.log("Query 1 result:");
    console.log(result);

  });

  con.query("SELECT * FROM Companies where FOUNDEDYear<1980", function (err, result, fields) {
    if (err) throw err;
    console.log("Query 2 result:");
    console.log(result);
  });

  con.query("SELECT * FROM Companies where Name like 'Ama%'", function (err, result, fields) {
    if (err) throw err;
    console.log("Query 3 result:");
    console.log(result);

  });
  con.query("SELECT * FROM Companies where foundedYear>=1980", function (err, result, fields) {
    if (err) throw err;
    console.log("Query 4 result:");
    console.log(result);

  });
  con.end(function(err) {
   if (err) {
     return console.log(err.message);
   } else{
     console.log("Close connection!");
   }
  });
});
