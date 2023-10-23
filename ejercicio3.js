var equiposEspañoles = [
  "Real Madrid",
  "FC Barcelona",
  "Atlético de Madrid",
  "Sevilla FC",
  "Villarreal CF",
  "Real Sociedad",
  "Valencia CF",
  "Real Betis",
  "RC Celta de Vigo",
  "Granada CF",
  "Getafe CF",
  "Levante UD",
  "Athletic Club",
  "SD Eibar",
  "CA Osasuna",
  "Deportivo Alavés",
  "Real Valladolid",
  "Elche CF",
  "SD Huesca",
  "Cádiz CF"
];
// push añade un elemento ,q en este caso es una fila  
// quiniela[0].push([]) aquí estaria añadiendo un elemento en la posicion 0 


const simbolo = ['1', 'X', '2'];

function generarSimbolo() {
  var i = Math.floor(Math.random() * 3);
  return simbolo[i];
}

function muestraEquipos(equipos) {
  for (var i = 0; i < equiposEspañoles.length; i++) {
    equipos[i] = equiposEspañoles[i];
  }
 
}

function generaResultados(quinielas) {
  for (var i = 0; i < equiposEspañoles.length; i++) {

    for (var j = 0; j < equiposEspañoles.length; j++) {
      if (j !== i) {
        quinielas[i][j] = generarSimbolo();
      } else {
        quinielas[i][j] = '-';
      }
    }
  }
}

function quiniela() {

  const equipos = new Array(equiposEspañoles.length);
  muestraEquipos(equipos);

  const quiniela = new Array(equiposEspañoles.length);
  for (var i = 0; i < 20; i++) {
   quiniela [i] = new Array(equiposEspañoles.length);

  }
  generaResultados(quiniela);
  console.log(equipos);
  console.log(quiniela);
}

quiniela();


