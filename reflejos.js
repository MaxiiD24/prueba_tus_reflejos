var inicio = new Date().getTime();

function generarLetra() {
  var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
  var numero = (Math.random()*15).toFixed(0);
  return letras[numero];
}

function colorHEX() {
  var coolor = "";
  for(var i = 0; i < 6; i++){
      coolor = coolor + generarLetra();
  }
  return "#" + coolor;
}

function aparecerCuadrado() {
  var top = Math.random()*600;
  var left = Math.random()*1500;
  var width = Math.random()*300;
  var height = Math.random()*300;
  var color = colorHEX();

  document.getElementById("forma").style.display = "block";
  document.getElementById("forma").style.top = top;
  document.getElementById("forma").style.left = left;
  document.getElementById("forma").style.width = width;
  document.getElementById("forma").style.height = height;
  document.getElementById("forma").style.backgroundColor = color;
  inicio = new Date().getTime();
}

function aparecerCuadradAlDesaparecer() {
  setTimeout(aparecerCuadrado, Math.random()*2000);
}

document.getElementById("forma").onclick = function() {
  document.getElementById("forma").style.display = "none";
  var final = new Date().getTime();
  var diferencia = (final - inicio)/1000;
  document.getElementById("parrafo").innerHTML =  diferencia + " segundos"
  aparecerCuadradAlDesaparecer();
}
