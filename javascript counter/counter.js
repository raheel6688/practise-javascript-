let counter = 0;

document.getElementById('increment-btn').addEventListener('click', function() {
  counter++;

  document.getElementById('counter').textContent = counter;

});

document.getElementById('decrement-btn').addEventListener('click', function() {
  counter--;
  

  document.getElementById('counter').textContent = counter;
});
