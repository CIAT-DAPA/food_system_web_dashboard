import React from 'react';

// CSS
import './determinantes.module.css';

// Graficas
//import {Bar, Pie} from 'react-chartjs-2';
import Chart from "react-apexcharts";

// Importando Imagenes
import Image1 from '../../final_assets/images/infografia_determinantes.png';
// Iconos
//import icon1 from '../../final_assets/icons/driver_2.png';
//import icon2 from '../../final_assets/icons/driver_3.png';
//import icon3 from '../../final_assets/icons/driver_4.png';
//import icon4 from '../../final_assets/icons/driver_5.png';



// Importando JSON y guardando sus datos en arreglos para Apex Charts
var rururb = require('../../final_assets/final_data/rur_urb_poblacion.json');
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

var row = require('../../final_assets/final_data/servicios.json');
var row_servi = [];
var row_cober = [];
for (let i = 0; i < row.length; i++) {
  row_servi[i] = row[i][0];
  row_cober[i] = row[i][1];
}
//console.log(row_servi, 'row_servi');
//console.log(row_cober, 'row_cober');

var porcentajes = require('../../final_assets/final_data/genero_poblacion.json');
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
const blue  = "#6495ED";
const pink  = "#EB69A6";
const green = "#008000";
const gray  = "#808080";
const teal  = "#008080";
//const lime  = "#00FF00";



// Habilitando opcion de DESCARGA para cada grafica
var chartvar = {
  toolbar: {
    show: true,
    offsetX: 0,
    offsetY: 0,
    tools: {
      download: true,
      //selection: true,
      //zoom: true,
      //zoomin: true,
      //zoomout: true,
      //pan: true,
      //reset: true | '<img src="/static/icons/reset.png" width="20">',
      //customIcons: []
    },
    export: {
      csv: {
        filename: undefined,
        columnDelimiter: ',',
        headerCategory: 'Categoria',
        headerValue: 'Valor',
        dateFormatter(timestamp) {
          return new Date(timestamp).toDateString()
        }
      },
      svg: {
        filename: undefined,
      },
      png: {
        filename: undefined,
      }
    },
  },
}



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
  chart : chartvar,
  series: bValues,
  options: {
    labels: aValues,
    legend: {
      show: false
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
      show: false
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
      show: false
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
    }, {
      x: fValues[1],
      y: gValues[1],
    }, {
      x: fValues[2],
      y: gValues[2],
    }, {
      x: fValues[3],
      y: gValues[3],
    }, {
      x: fValues[4],
      y: gValues[4],
    }, {
      x: fValues[5],
      y: gValues[5],
      /*
      goals: [
        {
          name: 'Limite',
          value: 100.0,
          strokeColor: '#775DD0'
        }
      ]
      */
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
    },
    //maintainAspectRatio: false, // para altura definida
    yaxis: {
      tickAmount: 10, // eje y incrementa en 10
      categories: [0,10,20,30,40,50,60,70,80,90,100],
    }
  }
};



//////////////////////////
// COBERTURA  SERVICIOS //
//////////////////////////

//



/////////////////
// CODIGO HTML //
/////////////////

function determinantes() {
  return (
    <div>

      <h2>Factores determinantes para el sistema alimentario</h2>
      El termino 'determinantes' es un acercamiento a la palabra en ingles de "Drivers."
      Se entienden como impulsores o conductores en sistemas alimentarios.
      <div className="landscape">
        <img src={Image1} alt="Infografia de Determinantes"/>
      </div>

      <div className="d-flex flex-row">
        <div className="p-2">

          <ul className="custom-list">

            <li> 
              La migracion nacional y extranjera hacia Cali aumenta el numero
              de consumidores vulnerables y determina habitos de consumo
            </li>
              <ul>
                <li>147.908 personas desplazadas internamente entraran a Cali</li>
                  <ul>
                    <li>62.414 migrantes venezolanos en 2019</li>
                    <li>71% dedicados al comerico informal</li>
                  </ul>

                <li>En 2019, 37% de las personas desplazadas eran ninos y jovenes</li>
                <li>Viven en las zonas con mayor densidad de poblacion (estratos 1-3)</li>
              </ul>

            <li>
              Ciudad multicultural con diversa demanda de alimentos y 
              habitos de consumo
            </li>
              <ul>
                <li>Composicion Etnica en Cali</li>
                  <ul>
                    <li>0.5% indigenas</li>
                    <li>26% afrodescendientes</li>
                    <li>73% mestizos</li>
                  </ul>
              </ul>

          </ul>

        </div>
        <div className="p-2">
          <ul>
            <li>Alta informalidad laboral y pobreza monetaria disminuyen la capacidad de
            compra de alimentos (Cifras aumentaron en 2020 debido a COVID-19)</li>
              <ul>
                <li>45.8% Tasa de informalidad laboral (febrero-abril 2019)</li>
                <li>21.9% incidencia de pobreza monetaria en 2019</li>
                <li>12.1% Tasa de desempleo (entre septiembre y noviembre de 2019)</li>
              </ul>

            <li>Cali es sede regional de gremios, actores publicos, bancos, 
            universidades,
            una unidad de planeacion estrategica inter-departamental y centros de
            investigacion y desarrollo relacionados con actividades productivas.</li>
              <ul>
                <li>7 clusteres productivos especializados</li>
                <li>2 de la industria de alimentos</li>
              </ul>
          </ul>
      
        </div>
      </div>

      <p align="justify">
      Fuentes: Migración nacional 
      (Unidad para la Atención y la Reparación Integral a las Víctimas, 2019); 
      Migrantes venezolanos (Ministerio de Relaciones Exteriores, 2020); 
      Composición étnica (Duque et al., 2019); 
      Informalidad laboral (Cámara de Comercio de Cali, 2019a); 
      Pobreza monetaria (Cámara de Comercio de Cali, 2020a); 
      Desempleo (Cámara de Comercio de Cali, 2019b); 
      Definición de factores determinantes (HLPE, 2017).
      </p>



      <hr className="featurette-divider" />
      
      <h2>Determinantes Ambientales</h2>

      <p align="justify">
      El 70% del territorio municipal de Cali (56.400 ha) es
      zona rural, constituida esencialmente por laderas
      ubicadas entre los 1.200 y los 1.800 m s. n. m. La
      mayor parte de estas laderas corresponden al Parque
      Nacional Natural Farallones de Cali y a zona de reserva
      forestal.
      </p>

      <div className="d-flex flex-row">
        <div className="p-2">
          <Chart
            options={TerritorioMunicipal.options}
            series={TerritorioMunicipal.series}
            type="pie"
            width="400"
          />
        </div>
        <div className="p-2">
          <Chart
            options={AreasProtegidas.options}
            series={AreasProtegidas.series}
            type="pie"
            width="400"
          />
        </div>
      </div>



      <hr className="featurette-divider" />

      <h2>Determinantes Demograficos</h2>

        <p align="justify">
        Entre 2005 y 2018, la población en la ciudad de Cali
        ha aumentado en un 7,3%, según los censos del
        Departamento Administrativo Nacional de Estadística
        (DANE). La población del área rural presentó una
        disminución del 27,7%. Las principales comunas
        de la cabecera municipal de la ciudad donde se ha
        presentado un aumento del número de personas son la
        17, 21 y 22 (estrato 5, 1 y 6, respectivamente), aunque se
        presenta mayor densidad poblacional en las comunas 6,
        13, 14 y 15 (principalmente estratos 1, 2 y 3, al oriente de
        la ciudad).
        Los estratos 1, 2 y 3 concentran aproximadamente
        al 80% de la población de la ciudad. Cali ha sido
        históricamente receptora de migrantes, muchos de
        ellos desplazados por la violencia y provenientes
        principalmente del suroccidente del país y del litoral
        Pacífico. En los últimos años, a estos flujos migratorios
        internos se sumó la llegada de población venezolana.
        </p>

        <div className="d-flex flex-row">
          <div className="p-2">
            <Chart
              options={PoblacionMunicipal.options}
              series={PoblacionMunicipal.series}
              type="pie"
              width="400"
            />
          </div>
          <div className="p-2">
            <Chart
              options={PoblacionGenero.options}
              series={PoblacionGenero.series}
              type="pie"
              width="400"
            />
          </div>
        </div>



      <hr className="featurette-divider" />

      <h2>Determinantes Tecnologicos</h2>

        <p align="justify">
        El acceso a tecnología e infraestructura para cubrir las
        necesidades básicas creció fuertemente en la ciudad
        durante la última década. La cobertura de servicios
        básicos como energía, gas y agua potable, que son
        fundamentales para la preparación, conservación e
        inocuidad de los alimentos, es casi completa. Los
        servicios de recolección de basuras e internet
        tenían en 2018 una cobertura del 99,1% y del 72%,
        respectivamente.
        </p>

          <Chart
            options={CoberturaServicios.options}
            series={CoberturaServicios.series}
            type="bar"
            width="100%"
            height="500px"
          />

    </div>
  );
}

export default determinantes;