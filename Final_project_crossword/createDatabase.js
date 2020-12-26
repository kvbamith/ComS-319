var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var c = mysql.createConnection({
  host:'coms-319-t35.cs.iastate.edu',
  user:'team35',
  password:'team35comsVM@319',
  database:'crossword'
});

var application = express();
application.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

application.use(bodyParser.urlencoded({extended : true}));
application.use(bodyParser.json());

application.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/loginPage.html'));
});
application.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		c.query('SELECT * FROM Players WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
                request.session.username = username;
                response.redirect("https://coms-319-t35.cs.iastate.edu/Start.html")
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

application.post('/register', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		c.query('INSERT INTO Players (username,password,score) VALUES (?,?,0)', [username, password], function(error, fields) {
			if (!error) {
				request.session.loggedin = true;
                request.session.username = username;
                response.redirect("http://localhost:3000/")
			} else {

				response.send("Invalid username or password");
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

application.listen(3000);