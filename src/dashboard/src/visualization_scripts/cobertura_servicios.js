// Script para Cobertura de Servicios Publicos
//
// En el Perfil, se representa mediante una infografia
// [99.7, 99.0, 97.8, 89.6, 99.1, 72.0]
// ['Energia electrica','Acueducto',
// 'Alcantarillado',
//  'Gas','Recoleccion basuras',
//  'Internet']
//
// Esto se puede representar con una grafica de barras!
//
// Datos tomados de DANE, 2020

//import React, { Component } from "react";
//import Chart from "react-apexcharts";

// Importando jquery
var csvreq = require('jquery-csv');

// Leyendo archivo CSV
// PATH ..\..\..\..\data\final\row.csv
var csv = "..\..\..\..\data\final\row.csv";
var data = $.csv.toArrays(csv);

// Parsing archivo CSV
var xValues = data[0];
var yValues = data[1];
//var xValues = ['Energia electrica','Acueducto',
//'Alcantarillado',
//'Gas','Recoleccion basuras',
//'Internet'];
//var yValues = [99.7, 99.0, 97.8, 89.6, 99.1, 72.0]

// Construyendo grafica
var barColors = ["red","green","blue","orange","brown","black"];
const ctx = document.getElementById('CoberturaServicios');
var CoberturaServicios = new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: true},
    title: {
      display: true,
      text: "Cobertura de Servicios Publicos"
    }
  }
});