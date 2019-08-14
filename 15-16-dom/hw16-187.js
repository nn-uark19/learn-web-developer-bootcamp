console.log('Begin js');
var button = document.querySelector('button')
button.addEventListener('click', function() {
  wholePage = document.querySelector('body');
  wholePage.classList.toggle('toggleWarning');
  console.log(wholePage.classList);
})
console.log('End js');