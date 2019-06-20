console.log('Begin Js');
printReverse([1,2,3,4]);
printReverse(['a','b','c','d']);
isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(['a','b','p']);
isUniform(['b','b','b']);
sumArray([10,3,10,4]);
max([10,3,10,4]);

function printReverse(arr) {
  for (var i = arr.length-1; i>= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(arr) {
  for (var i=0; i<arr.length-2; i++) {
    if (arr[i] !== arr[i+1]) {
      console.log('false');
      return;
    }
    console.log('true');
    return true;
  }
}

function sumArray(arr) {
  var result = 0; 
  arr.forEach(element => {
    result += element
  });
  console.log(result);
}

function max(arr) {
  var maxVa = arr[0];
  arr.forEach(function(item) {
    if (item > maxVa) {
      maxVa = item;
    }
  });
  console.log(maxVa);
}
console.log('End js');