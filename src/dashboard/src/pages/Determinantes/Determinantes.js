import React from 'react';
//import './determinantes.css';



// Graficas
//import {Bar, Pie} from 'react-chartjs-2';
import Chart from "react-apexcharts";



// Importando Imagenes
import Image1 from '../../final_assets/infografia_determinantes.png';



// Importando JSON y guardando sus datos en arreglos para Apex Charts
var rururb = require('../../final_assets/rur_urb.json');
//var rururb_tipos = [ rururb[0].Tipo, rururb[1].Tipo ];
//var rururb_pobla = [ rururb[0].Poblacion, rururb[1].Poblacion ];
var rururb_tipos = [];
var rururb_pobla = [];
for (let i = 0; i < rururb.length; i++) {
  rururb_tipos[i] = rururb[i].Tipo;
  rururb_pobla[i] = rururb[i].Poblacion;
}
//console.log(rururb_tipos, 'rururb_tipos');
//console.log(rururb_pobla, 'rururb_pobla');

var row = require('../../final_assets/row.json');
var row_servi = [];
var row_cober = [];
for (let i = 0; i < row.length; i++) {
  row_servi[i] = row[i][0];
  row_cober[i] = row[i][1];
}
//console.log(row_servi, 'row_servi');
//console.log(row_cober, 'row_cober');

var porcentajes = require('../../final_assets/porcentajes.json');
//console.log(porcentajes, 'porcentajes');
var porcentajes_genero = [];
var porcentajes_numero = [];
for (let i = 0; i < porcentajes.length; i++) {
  porcentajes_genero[i] = porcentajes[i]["INDICADORES DEMOGRAFICOS"];
  porcentajes_numero[i] = porcentajes[i]["Cali CNPV 2018"];
}
//console.log(porcentajes_genero, 'porcentajes_genero');
//console.log(porcentajes_numero, 'porcentajes_numero');



// Definiendo colores para facilitar su uso en Apex Charts
// que requiere codigos de color hexadecimales
const blue  = "#0000FF";
const pink  = "#FF00FF";
const green = "#008000";
const gray  = "#808080";
const teal  = "#008080";
//const lime  = "#00FF00";



//////////////////////////
// TERRITORIO MUNICIPAL //
//////////////////////////
var aValues = ['Rural', 'Urbana'];
var bValues = [79, 21];
//var aValues = rururb_tipos;
//var bValues = rururb_pobla;
// Estos datos vienen de una entrevista, y no tienen datos
// en algun estudio o base de datos que puedo operar
// Datos tomados de DOGMA, 2020. Fueron entrevistas. La cita dice:
//   DAGMA (Departamento Administrativo de Gestión del
//   Medio Ambiente). 2020. Comunicación personal
//   con Piedad Holguín M. y Teresa Vásquez A.,
//   representantes de la Unidad Municipal de
//   Asistencia Técnica (UMATA), de la Subdirección
//   de Gestión Integral de Ecosistemas y UMATA.
//   Cali. 

//var pieColors = ["green", "gray"];

const TerritorioMunicipal = {
  type: "pie",
  series: bValues,
  options: {
    labels: aValues,
    legend: {
      show: true
    },
    colors: [green, gray],
    title: {
      display: true,
      text: "Territorio Municipal, Rural vs Urbana"
    }
  }
};



//////////////////////////
// AREAS     PROTEGIDAS //
//////////////////////////
var cValues = ['Parque Nacional Natural de los Farallones',
'Zonas de Reserva Forestal'];
//var cValues = [['Parque Nacional Natural', 'de los Farallones'],
//'Zonas de Reserva Forestal'];
var dValues = [41, 31];
//var pieColors = ["blue", "green"];
// Estos datos TAMPOCO tienen una base de datos o estudio
// Datos tomados de DOGMA, 2020. Fueron entrevistas. La cita dice:
//   DAGMA (Departamento Administrativo de Gestión del
//   Medio Ambiente). 2020. Comunicación personal
//   con Piedad Holguín M. y Teresa Vásquez A.,
//   representantes de la Unidad Municipal de
//   Asistencia Técnica (UMATA), de la Subdirección
//   de Gestión Integral de Ecosistemas y UMATA.
//   Cali. 

const AreasProtegidas = {
  type: "pie",
  series: dValues,
  options: {
    labels: cValues,
    legend: {
      show: false
    },
    colors: [teal, green],
    title: {
      display: true,
      text: "Areas Protegidas"
    }
  }
};



//////////////////////////
// POBLACION  MUNICIPAL //
//////////////////////////
//var xValues = ['Rural','Urbana'];
//var yValues = [2.5, 97.5];
var xValues = rururb_tipos;
var yValues = rururb_pobla;
//var pieColors = ["green", "gray"];

const PoblacionMunicipal = {
  type: "pie",
  series: yValues,
  options: {
    labels: xValues,
    legend: {
      show: true
    },
    colors: [gray, green],
    title: {
      display: true,
      text: "Poblacion Municipal"
    }
  }
};



//////////////////////////
// POBLACION     GENERO //
//////////////////////////
//var mValues = ['Masculino','Femenino'];
//var nValues = [47, 53];
//var pieColors2 = ["blue", "pink"];
var mValues = porcentajes_genero;
var nValues = porcentajes_numero;

const PoblacionGenero = {
  type: "pie",
  series: nValues,
  options: {
    labels: mValues,
    legend: {
      show: true
    },
    colors: [blue, pink],
    title: {
      display: true,
      text: "Genero de la Poblacion"
    }
  }
};



//////////////////////////
// COBERTURA  SERVICIOS //
//////////////////////////

/*
var fValues = ['Energia electrica','Acueducto',
'Alcantarillado',
'Gas','Recoleccion basuras',
'Internet'];
var gValues = [99.7, 99.0, 97.8, 89.6, 99.1, 72.0]
*/
var fValues = row_servi;
var gValues = row_cober;

var CSseries = [{
  data: [
    {
      x: fValues[0],
      y: gValues[0],
      goals: [
        {
          name: 'Limite',
          value: 100.0,
          strokeColor: '#775DD0'
        }
      ]
    }, {
      x: fValues[1],
      y: gValues[1],
      goals: [
        {
          name: 'Limite',
          value: 100.0,
          strokeColor: '#775DD0'
        }
      ]
    }, {
      x: fValues[2],
      y: gValues[2],
      goals: [
        {
          name: 'Limite',
          value: 100.0,
          strokeColor: '#775DD0'
        }
      ]
    }, {
      x: fValues[3],
      y: gValues[3],
      goals: [
        {
          name: 'Limite',
          value: 100.0,
          strokeColor: '#775DD0'
        }
      ]
    }, {
      x: fValues[4],
      y: gValues[4],
      goals: [
        {
          name: 'Limite',
          value: 100.0,
          strokeColor: '#775DD0'
        }
      ]
    }, {
      x: fValues[5],
      y: gValues[5],
      goals: [
        {
          name: 'Limite',
          value: 100.0,
          strokeColor: '#775DD0'
        }
      ]
    }
  ]
}]
//var barColors = ["red", "green","blue","orange","brown", "black"];

const CoberturaServicios = {
  type: "bar",
  series: CSseries,
  options: {
    plotOptions: {
      bar: {
        // Permite teners barras de distintos colores
          distributed: true
      }
    },
    labels: fValues,
    legend: {
      show: false
    },
    //colors: ['#F44336', '#E91E63'],
    theme: {
      palette: 'palette3'
    },
    title: {
      display: true,
      text: "Cobertura de Servicios Publicos"
    }
  }
};



function determinantes() {
  return (
    <div>
      <h2>Resumen</h2>
        <div>
          <img src={Image1} alt="Mapa de Centrales Mayoristas y Plazas"/>
        </div>
      <h2>Ambientales</h2>
        <Chart
          options={TerritorioMunicipal.options}
          series={TerritorioMunicipal.series}
          type="pie"
          width="400"
        />
        <Chart
          options={AreasProtegidas.options}
          series={AreasProtegidas.series}
          type="pie"
          width="400"
        />
      <h2>Demograficos</h2>
        <Chart
          options={PoblacionMunicipal.options}
          series={PoblacionMunicipal.series}
          type="pie"
          width="400"
        />
        <Chart
          options={PoblacionGenero.options}
          series={PoblacionGenero.series}
          type="pie"
          width="400"
        />
      <h2>Tecnologicos</h2>
        <Chart
          options={CoberturaServicios.options}
          series={CoberturaServicios.series}
          type="bar"
          width="100%"
          height="350"
        />
    </div>
  );
}

export default determinantes;