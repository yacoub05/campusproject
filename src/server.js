let express = require('express');

let app = express();
let bodyparser = require('body-parser');
let Sequelize = require('sequelize');
let sequelize = new Sequelize('postgres://postgres:@localhost/postgres');

app.use( bodyparser.json() );
app.use( express.json() );
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
  });

console.log("testing");

//THIS IS FOR THE STUDENTS
let students = sequelize.define('students', {
	 //create name and material as strings,
	 firstname: Sequelize.STRING,
	 lastname: Sequelize.STRING,
	 //height as an integer,
	//  height: Sequelize.INTEGER,
	//  //and brim as a true/false
	//  brim: Sequelize.BOOLEAN
});


students.sync().then(function(){
  console.log("students is now ready to be used...");
});

//THIS IS FOR THE CAMPUS

let campus = sequelize.define('campuses', {
	//create name and material as strings,
	

	campusname: Sequelize.STRING,
	
	//height as an integer,
   //  height: Sequelize.INTEGER,
   //  //and brim as a true/false
   //  brim: Sequelize.BOOLEAN
});


campus.sync().then(function(){
 console.log("Campuses is now ready to be used...");
});
 

//this to get Students
app.get('/students', function (req, res) {

    console.log('hello there this a testing');
	let fname;
	let lname;

	let allInfo = "-";

	students.findAll().then(function(rows) {
		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			fname = columnData.firstname;
			lname = columnData.lastname;
			allInfo = allInfo  +"\n" +fname + " " + lname;
		}
        
		res.send(allInfo);
	});
 });

//This is to delete students



//this is to post to students
 app.post('/addStudent', function (req, res) {

    console.log('got post request to add student');
	let fname = req.body.firstname;
	let lname = req.body.lastname;
	console.log(fname);
	console.log(lname);
	let allInfo = "";

   students.create({
	
     firstname:'fname',
 	lastname:'lname',	  
   });
 
 
        
	res.send('hello there');
	
 });

 //this to get campuses
app.get('/campuses', function (req, res) {

    console.log('hello there this a testing');
	let campusname;
	

	let allInfo = "-";

	campus.findAll().then(function(rows) {
		for(var i = 0; i < rows.length; i++) {
			var columnData = rows[i].dataValues;
			 cname = columnData.campusname;
			
			allInfo = allInfo  +"\n" +cname;
		}
        
		res.send(allInfo);
	});
 });


//this is to post to students
 app.post('/addStudent', function (req, res) {

    console.log('got post request to add student');
	let fname = req.body.firstname;
	let lname = req.body.lastname;
	console.log(fname);
	console.log(lname);
	let allInfo = "";

   students.create({
	
     firstname:'fname',
 	lastname:'lname',	  
   });
 
 
        
	res.send('hello there');
	
 });


//This is to post to campus

app.post('/addCampus', function (req, res) {

    console.log('got post request to add Campus');
	let cname = req.body.campusname;

	console.log(cname);

	let allInfo = "";

   campus.create({
	
    campusname:'cname',
	  
   });
 
 
        
	res.send('hello this is campus');
	
 });



app.listen(4000, function () {
console.log('Example app listening on port 4000!');
});