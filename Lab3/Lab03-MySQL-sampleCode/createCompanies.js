var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'team1',
  password:'team1comsVM@319',
  database:'MyProject'
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to server!");
  // add code here
  var sqlCreate='create table if not exists Companies(name VARCHAR(255),foundedYear int,PRIMARY KEY (name))'
  con.query(sqlCreate, function (err, result) {
    if (err) {
      console.log(err);
      throw err;
    } else{
        console.log("Prepare to insert to table Companies: ");
        var values= [
          ["Pixar", 1986],
          ["Amazon",1994],
          ["Microsoft",1975]
        ];
        // add code here
        var sqlInsert='Insert into Companies (name,foundedYear) values ?'
        con.query(sqlInsert,[values], function (err, result) {
          if (err) {
            // console.log(err);
            console.log("3 records exists!");
          } else{
              console.log("3 records inserted");
          }

        });

        con.end(function(err) {
         if (err) {
           return console.log(err.message);
         } else{
           console.log("Close connection!");
         }
       });
    }

  });



});
