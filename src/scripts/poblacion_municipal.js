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

import Chart from 'react-apexcharts';

// PRIMERA TORTA
// 2.5 RURAL, 97.5 URBANA
class ApexChart extends React.Component {
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
    }

    render() {
      return (
        <div id="chart">
        <ReactApexChart options={this.state.options}
        series={this.state.series} type="pie" width={380} />
        </div>
      );
    }
}



//
// Caja de Texto puede ir aqui sobre...
// - Poblacion en Cali de 2.227.642
//



// SEGUNDA TORTA
// 47% Masculino, 53% Femenino
class ApexChart extends React.Component {
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
    }

    render() {
      return (
        <div id="chart">
        <ReactApexChart options={this.state.options}
        series={this.state.series} type="pie" width={380} />
        </div>
      );
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(ApexChart), domContainer);