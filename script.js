console.log('Ups Ecuador');
var i = 0;
var elemento = document.getElementById('titulo1');
elemento.addEventListener('click', function () {
  alert('Click en titulo');
  elemento.innerHTML = i;
});

elemento.addEventListener('mouseover', function () {
  i = i + 1;
  console.log(i);
});

var listas = document.getElementsByTagName('li');
console.log(listas);
