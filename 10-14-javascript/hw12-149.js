console.log('Begin js');
function isEven(input) {
  // if (input % 2 == 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return input % 2 == 0;
}
function factorial(num) {
  num = Number(num);
  if (num == 0) {
    return 0;
  } 
  var out = 1;
  for (i = num; i > 1; i--) {
    out *= i;
  }
  return out;
}
function kebabToSnake(str) {
  return str.replace(/-/g,'_');
}
console.log('End js');