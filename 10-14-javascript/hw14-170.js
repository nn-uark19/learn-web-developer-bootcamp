console.log('Begin Js');
/* build 4 movies DB */
movieDB = [];
movie1 = {
  name: 'Coco',
  rating: 5,
  hasWatched: true
};
movie2 = {
  name: 'Frozen',
  rating: 0.5,
  hasWatched: false
};
movie3 = {
  name: 'Avengers- End Game',
  rating: 4.5,
  hasWatched: true
};
movie4 = {
  name: 'Aladdin',
  rating: 4.5,
  hasWatched: true
};
movieDB.push(movie1);
movieDB.push(movie2);
movieDB.push(movie3);
movieDB.push(movie4);

/* print 4 movies */
movieDB.forEach(function(movieOb, i) {
  var output = 'You have ';
  output += movieOb.hasWatched ? 'watched' : 'not seen';
  output += ` "${movieOb.name}" - ${movieOb.rating} stars`;
  console.log(output);
});

console.log('End Js');