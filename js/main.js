var subBut = document.getElementById('sub').addEventListener('click', sub);
var addBut = document.getElementById('add').addEventListener('click', add);
var total = document.querySelector('h1');
var sum = 0;

function add() {
    var value = parseInt(document.getElementById('one').value);
    sum += value++;
    total.textContent = `${sum}`
}

function sub() {
  var value = parseInt(document.getElementById('one').value);
    sum -= value--;
    total.textContent = `${sum}`
    total.style.color = sum < 0 ? 'red' : 'black';
} 
