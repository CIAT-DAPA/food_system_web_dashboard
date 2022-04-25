/* globals Chart:false, feather:false */
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

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import sidebar from "./components/sidebar/sidebar";
import topbar from "./components/topbar/topbar";

import Tablero from './pages/Tablero/Tablero';
import Determinantes from './pages/Determinantes/Determinantes';
import SSA from './pages/SSA/SSA';
import Entorno from './pages/Entorno/Entorno';
import Consumidor from './pages/Consumidor/Consumidor';
import Dietas from './pages/Dietas/Dietas';
import Resultados from './pages/Resultados/Resultados';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <topbar />
        <sidebar />
        <div className="container-fluid">
          <Router>
            <Routes>
              <Route exact path='/' element={<Tablero />} />
              <Route path='/Determinantes' element={<Determinantes />} />
              <Route path='/SSA' element={<SSA />} />
              <Route path='/Entorno' element={<Entorno />} />
              <Route path='/Consumidor' element={<Consumidor />} />
              <Route path='/Dietas' element={<Dietas />} />
              <Route path='/Resultados' element={<Resultados />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }

}

export default App;
