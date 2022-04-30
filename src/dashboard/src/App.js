// Importando React
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando componentes
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Compartir from "./components/compartir/Compartir";

// Importando paginas
import Tablero from './pages/tablero/tablero';
import Determinantes from './pages/determinantes/determinantes';
import SSA from './pages/ssa/ssa';
import Entorno from './pages/entorno/entorno';
import Consumidor from './pages/consumidor/consumidor';
import Dietas from './pages/dietas/dietas';
import Resultados from './pages/resultados/resultados';

// CSS
import './App.css';

// NOTAS:
// - Grid necesario para separar la barra de navegacion Sidebar con el contenido
// - Paginas en minuscula, Componentes con Primera Letra En Mayuscula
// - Graficas con Apex Charts es mas sencillo
class App extends Component {
//  constructor(props) {
//    super(props);
//  }

  render() {
    return (
      <>
        <Topbar />
        <div className="container-fluid">
          <div className="row">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Sidebar />
              <Compartir />
              <Router>
                <Routes>
                  <Route exact path='/' element={<Tablero />} />
                  <Route path='/determinantes' element={<Determinantes />} />
                  <Route path='/ssa' element={<SSA />} />
                  <Route path='/entorno' element={<Entorno />} />
                  <Route path='/consumidor' element={<Consumidor />} />
                  <Route path='/dietas' element={<Dietas />} />
                  <Route path='/resultados' element={<Resultados />} />
                </Routes>
              </Router>
            </main>
          </div>
          Texto Secreto!
        </div>
      </>
    );
  }
}

export default App;

//globals Chart:false, feather:false
// Grafica que aparecera al comienzo del sitio
// Placeholder para "Resumen" que pondre mas tarde

/*
(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
*/