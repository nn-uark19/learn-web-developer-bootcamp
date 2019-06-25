console.log('Begin js');

// declare expressjs
const express = require('express');
const app = express();

// server listener
app.listen(3000, function(){
  console.log("Server started");
});

// routing
app.get('/', function(req, res){
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/pig', function(req, res) {
  res.send('The pig sats "Oink"');
});

app.get('/speak/cow', function(req, res) {
  res.send('The cow says "Moo"');
});

app.get('/speak/dog',function(req, res){
  res.send('The dog sats "Woof Woof!"')
});

app.get('/repeat/:word/:time',function(req, res){
  const word = req.params.word;
  const times = req.params.time;

  var strPrint = '';
  for (var i=0; i<Number(times); i++) {
    strPrint += `${word} `;
  }
  console.log(strPrint);
  res.send(strPrint);
});

app.get('*', function(req, res){
  res.send('Sorry, page not found...What are you doing with your life?');
});


console.log('End js');