let arr = [2, 5, 6, 3, 8, 9];

let squarArray = arr.map(function(element) {
  return element * element;
});

document.getElementById("map").innerHTML =(squarArray);