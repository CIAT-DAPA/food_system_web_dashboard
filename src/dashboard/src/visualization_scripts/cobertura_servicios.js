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

import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "cobertura-servicios-publicos"
        },
        xaxis: {
          categories: ['Energia electrica','Acueducto',
          'Alcantarillado',
          'Gas','Recoleccion basuras',
          'Internet']
        }
      },
      series: [
        {
          name: "porcentajes",
          data: [99.7, 99.0, 97.8, 89.6, 99.1, 72.0]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;