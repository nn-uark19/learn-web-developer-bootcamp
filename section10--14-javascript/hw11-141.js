console.log('Begin JS!');
console.log('1. numbers between -10 and 19');
for (var i = -10; i < 20; i++) {
  console.log(i);
}

console.log('2. even numbers between 10 and 40');
for (var i = 10; i <=40; i = i + 2) {
  console.log(i);
}
console.log('3. odd numbers between 300 and 333');
for (var i = 300; i <= 333; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
console.log('3. all numbers between 5 and 50. divisible by 5 and 3');
for (var i = 5; i <=50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
console.log('End Js!');