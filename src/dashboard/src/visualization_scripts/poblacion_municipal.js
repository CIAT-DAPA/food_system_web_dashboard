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
/*
class PoblacionMunicipal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [2.5,97.5],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Rural','Urbana'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },   
      };
    };

    render() {
      return (
        <div id="chart">
        <ReactApexChart options={this.state.options}
        series={this.state.series} type="pie" width={380} />
        </div>
      );
    }
}
*/

var xValues = ['Rural','Urbana'];
var yValues = [2.5, 97.5];
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
/*
class GenerosPoblacion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [47,53],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Masculino','Femenino'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },   
      };
    };

    render() {
      return (
        <div id="chart">
        <ReactApexChart options={this.state.options}
        series={this.state.series} type="pie" width={380} />
        </div>
      );
    }
}
*/

var aValues = ['Masculino','Femenino'];
var bValues = [47, 53];
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

/*
// Construir las graficas en index.html
(function () {
  const domContainer = document.querySelector('#app');
  ReactDOM.render(React.createElement(GenerosPoblacion), domContainer);
  ReactDOM.render(React.createElement(PoblacionMunicipal), domContainer);
})()
*/