// Script para Territorios Municipales
//
// En el Perfil, se representa mediante una barra mixta
// 79% Rural, 21% Urbana
// junto con otros datos que conforman una infografia
// - 89% de la zona rural son laderas
// - De ese 89, 72% son areas protegidas
//   De ese 72...
//   - 41% pertenece al Parque Nacional Natural de los Farallones
//   - 31% son zonas de reserva forestal
//
// Esto se puede representar con graficas de torta!
// - Uno para el 79-21
// - Otro para el 72 (41-31)
// Caja de Texto puede clarificar la division y hablar sobre las laderas
//
// Datos tomados de DOGMA, 2020. Fueron entrevistas. La cita dice:
//   DAGMA (Departamento Administrativo de Gestión del
//   Medio Ambiente). 2020. Comunicación personal
//   con Piedad Holguín M. y Teresa Vásquez A.,
//   representantes de la Unidad Municipal de
//   Asistencia Técnica (UMATA), de la Subdirección
//   de Gestión Integral de Ecosistemas y UMATA.
//   Cali. 

import Chart from 'react-apexcharts';

// PRIMERA TORTA
// 79 RURAL, 21 URBANA
class TerritoriosMunicipales extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [79,21],
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
// - 89% de la zona rural son laderas
// - De ese 89, 72% son areas protegidas
//



// SEGUNDA TORTA
// Del 72 de areas protegidas,
// 41 Parque Nacional Farallones, 31 Reserva Forestal
class AreasProtegidas extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [41,31],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Parque Nacional Natural de los Farallones',
          'Zonas de Reserva Forestal'],
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

//const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(ApexChart), domContainer);