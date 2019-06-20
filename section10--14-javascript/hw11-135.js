console.log('Begin JS!');
console.log('1. numbers between -10 and 19');
var num = -10;
while (num < 20) {
  console.log(num);
  num++;
}
console.log('2. even numbers between 10 and 40');
var num = 10;
while (num <= 40) {
  console.log(num);
  num += 2;
}
console.log('3. odd numbers between 300 and 333');
var num = 300;
while (num < 335) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num ++;
}
console.log('3. all numbers between 5 and 50. divisible by 5 and 3');
var num = 5;
while (num < 50) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num);
  }
  // console.log(num);
  num ++;
}
console.log('End Js!');