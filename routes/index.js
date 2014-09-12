var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My Portfolio' });
});

router.post('/sendmessage', function(req, res) {
	console.log("TEST");
	smtpTransport.sendMail({
	   from: "awfilipek@gmail.com", // sender address
	   to: "awfilipek@gmail.com", // comma separated list of receivers
	   subject: "Hello", // Subject line
	   text: "Hello world" // plaintext body
	}, function(error, response){
	   if(error){
	       console.log(error);
	   }else{
	       console.log("Message sent: " + response.message);
	   }
	});

});



module.exports = router;
