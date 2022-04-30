import React from 'react';

// Graficas
//import {Bar, Pie} from 'react-chartjs-2';
import Chart from "react-apexcharts";

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
// AREAS PROTEGIDAS     //
//////////////////////////
var cValues = ['Parque Nacional Natural de los Farallones',
'Zonas de Reserva Forestal'];
//var cValues = [['Parque Nacional Natural', 'de los Farallones'],
//'Zonas de Reserva Forestal'];
var dValues = [41, 31];
//var pieColors = ["blue", "green"];

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
var xValues = ['Rural','Urbana'];
var yValues = [2.5, 97.5];
//var pieColors = ["green", "gray"];

const PoblacionMunicipal = {
  type: "pie",
  series: yValues,
  options: {
    labels: xValues,
    legend: {
      show: true
    },
    colors: [green, gray],
    title: {
      display: true,
      text: "Poblacion Municipal"
    }
  }
};



//////////////////////////
// POBLACION  GENERO    //
//////////////////////////
var mValues = ['Masculino','Femenino'];
var nValues = [47, 53];
//var pieColors2 = ["blue", "pink"];

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
// COBERTURA SERVICIOS  //
//////////////////////////
var fValues = ['Energia electrica','Acueducto',
'Alcantarillado',
'Gas','Recoleccion basuras',
'Internet'];
var gValues = [99.7, 99.0, 97.8, 89.6, 99.1, 72.0]
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