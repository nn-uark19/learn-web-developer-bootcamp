console.log('Begin')
var age = "25";
if (age < 0) {
  console.log('error message')
} else if (age == 21) {
  console.log('happy 21th birthday')
}
if (age % 2 == 1) {
  console.log('your age is odd!')
}
if (age % Math.sqrt(age) == 0) {
  console.log('perfect square!')
}
console.log('End js')