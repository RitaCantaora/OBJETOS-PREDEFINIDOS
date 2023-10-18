
function separaPalabras(palabra, separador) {

    var x = palabra.split(separador);
    return x;
}

var nombre = prompt("introducir nombre");
//llamar funcion y mostrar por patalla resulatado 
//console.log(separaPalabras(nombre, " "));

function girarPalabra(palabra) {
    var inv = "";
    for (var i = 0; i < palabra.length; i++) {
        inv = palabra[i] + inv;
    }
    return inv;
}
//console.log(girarPalabra(nombre));

resultado = " ";
var palabras = separaPalabras(nombre, ' ');
for (var i = 0; i < palabras.length; i++) {

    var inv = girarPalabra(palabras[i]);
    resultado = resultado + ' ' + inv;
}
console.log(resultado);


