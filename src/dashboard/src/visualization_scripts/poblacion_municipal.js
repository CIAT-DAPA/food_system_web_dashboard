// Script para Poblacion Municipal
//
// En el Perfil, se representa mediante una barra mixta
// 2.5% Rural, 97.5% Urbana
// junto con otros datos que conforman una infografia
// - Poblacion en Cali de 2.227.642
// - 47% Masculino, 53% Femenino
//
// Esto se puede representar con graficas de torta!
// - Uno para el 2.5-97.5
// - Otro para el 47-53
// Caja de Texto puede hablar sobre la poblacion
//
// Datos tomados de DANE, 2021, pero no existe una cita exacta
// en la bilbiografia. Preguntar a Sara sobre esto? Solo existen
// DANEs hasta 2020 en las citas! 

//import Chart from 'react-apexcharts';

// PRIMERA TORTA
// 2.5 RURAL, 97.5 URBANA

// Importando jquery
var csvreq = require('jquery-csv');

// Leyendo archivo CSV
// PATH ..\..\..\..\data\final\rur_urb.csv
var csv = "..\..\..\..\data\final\rur_urb.csv";
var data = $.csv.toArrays(csv);

// Parsing archivo CSV
var nombres = [ data[1][0], data[2][0] ];
var numeros = [ data[1][1], data[2][1] ];

var xValues = nombres;
var yValues = numeros;
//var xValues = ['Rural','Urbana'];
//var yValues = [2.5, 97.5];

// Construyendo grafica
var pieColors1 = ["green", "gray"];
var PoblacionMunicipal = new Chart("Poblacion Municipal Rural o Urbana", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: pieColors1,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Poblacion Municipal Rural vs Urbana"
    }
  }
});


//
// Caja de Texto puede ir aqui sobre...
// - Poblacion en Cali de 2.227.642
//



// SEGUNDA TORTA
// 47% Masculino, 53% Femenino

// Leyendo archivo CSV
// PATH ..\..\..\..\data\final\rur_urb.csv
var csv = "..\..\..\..\data\final\rur_urb.csv";
var data = $.csv.toArrays(csv);

// Parsing archivo CSV
var nombres = [ data[1][0], data[2][0] ];
var numeros = [ data[1][1], data[2][1] ];

var aValues = nombres;
var bValues = numeros;
//var aValues = ['Masculino','Femenino'];
//var bValues = [47, 53];

// Construyendo grafica
var pieColors2 = ["blue", "pink"];
var PoblacionGenero = new Chart("Poblacion, Masculino o Femenino", {
  type: "pie",
  data: {
    labels: aValues,
    datasets: [{
      backgroundColor: pieColors2,
      data: bValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Poblacion, Masculino vs Femenino"
    }
  }
});