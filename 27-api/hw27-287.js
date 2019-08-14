console.log('Begin js');

// incuding package
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const request = require('request');

// listener for server
app.listen(3000, function() {
  console.log('app.listen - waiting for connection');
});

// route
app.get('/', function(req, res){
  console.log('app.get(/)');
  res.render('search');
})

app.get('/result', function(req, res){
  console.log('app.get(/result)');
  const search = req.query.search;
  const requestUrl = 'https://www.omdbapi.com/?s=' + search + '&apikey=thewdb';
  console.log(requestUrl);
  request(requestUrl, function(error, response, body){
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      res.render('result', {movies: body});
    } else {
      console.log('Error requesting omdb');
    }
  });

})

console.log('End js');