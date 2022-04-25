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

//import Chart from 'react-apexcharts';

// PRIMERA TORTA
// 79 RURAL, 21 URBANA

var aValues = ['Rural', 'Urbana'];
var bValues = [79, 21];
var pieColors1 = ["green", "gray"];
var TerritorioMunicipal = new Chart("Territorio Municipal, Rural o Urbana", {
  type: "pie",
  data: {
    labels: aValues,
    datasets: [{
      backgroundColor: pieColors1,
      data: bValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Territorio Municipal, Rural vs Urbana"
    }
  }
});



//
// Caja de Texto puede ir aqui sobre...
// - 89% de la zona rural son laderas
// - De ese 89, 72% son areas protegidas
//



// SEGUNDA TORTA
// Del 72 de areas protegidas,
// 41 Parque Nacional Farallones, 31 Reserva Forestal

var xValues = ['Parque Nacional Natural de los Farallones',
'Zonas de Reserva Forestal'];
var yValues = [41, 31];
var pieColors2 = ["blue", "green"];
var AreasProtegidas = new Chart("Areas Protegidas", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: pieColors2,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Areas Protegidas"
    }
  }
});