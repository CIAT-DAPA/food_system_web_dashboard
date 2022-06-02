import React from 'react';

// Imagenes
import Image1 from '../../final_assets/images/infografia_dietas.png';

// Iconos
import Icon1 from '../../final_assets/icons/4-adecuacion.png';

// Graficas
//import {Bar, Pie} from 'react-chartjs-2';
import Chart from "react-apexcharts";

// Definiendo colores para facilitar su uso en Apex Charts
// que requiere codigos de color hexadecimales
const darkblue   = "#00008b";
const lightgreen = "#98fb98";
const orange     = "#ffa500";
const lightblue  = "#1e90ff";
const green      = "#008000";
const gray       = "#a9a9a9";



// Renderizando Graficas necesarias
// ////////////////////////////////

// Nombres de cada comida en la grafica
var nombres_comida = [
    'Arroz o pasta',
    'Granos secos (fríjol, arveja, garbanzo, lenteja)',
    'Huevos',
    'Pollo/gallina',
    'Tubérculos y plátanos (papa, yuca, ñame, arracacha)',
    'Frutas en jugo',
    'Carne de res, ternera, cerdo',
    'Panela, azúcar o miel',
    'Pan',
    'Leche',
    'Alimentos fritos (papa, carne, plátano, etc.)',
    'Arepa',
    'Queso, kumis, yogurt',
    'Frutas enteras',
    'Embutidos (salchichas, salchichón, jamón)',
    'Galletas',
    'Gaseosas, té y refrescos (en polvo, caja, botella, no light)',
    'Verduras crudas (tomate, lechuga, repollo, zanahoria)',
    'Golosinas o dulces',
    'Café',
    'Alimentos de paquete (papas, chitos, patacones)',
    'Comida rápida (hamburguesas, perro, pizza, etc.)',
    'Verduras cocidas (auyama, zanahoria, espinaca, brócoli)',
    'Atún o sardinas',
    'Pescado o mariscos'
];

// Leyenda
const l1 = 'Cereales, raíces, tubérculos y plátanos';
const l2 = 'Frutas y verduras';
const l3 = 'Leche y productos lácteos';

const l4 = 'Carnes, huevos, leguminosas, frutos secos y semillas';
const l5 = 'Azúcares';
const l6 = 'Alimentos que no entran en la clasificación';

// Tipo de comida segun leyenda
var tipos_comida = [
    l1, l4, l4, l4, l1,
    l2, l4, l5, l1, l3,
    l6, l1, l3, l2, l4,
    l1, l5, l2, l5,
    l6, l6, l6,
    l2, l4, l4
];

// Letras correspondientes a cada comida
var fValues = [
    'A','B','C','D','E',
    'F','G','H','I','J',
    'K','L','M','N','O',
    'P','Q','R','S','T',
    'U','V','W','X','Y'
];

// Valores de porcentaje de cada comida
var gValues = [
    99.6, 97.7, 96.7, 94.5, 93, 92.6, 89.7, 89.5, 
    89.3, 88.3, 85.2, 84, 83.6, 82.3, 77.8, 75.2, 
    75.1, 72.9, 72.1, 71, 69.8, 68, 66.5, 65.3, 61
];

// Colores para cada comida
var colores_comida = [
    darkblue, lightblue, lightblue, lightblue, darkblue,
    lightgreen, lightblue, green, darkblue, orange, gray,
    darkblue, orange, lightgreen, lightblue, darkblue,
    green, lightgreen, green, gray, gray, gray, lightgreen,
    lightblue, lightblue
];

//var fValues = row_servi;
//var gValues = row_cober;

var dietdata = [];
for (let i = 0; i < fValues.length; i++) {
    dietdata.push({
        x: fValues[i], 
        y: gValues[i], 
        nombre: nombres_comida[i],
        tipo: tipos_comida[i]
    });
};

var CSseries = [{
  data: dietdata,
}];

// darkblue
// lightgreen
// orange
// lightblue
// green
// gray

const CoberturaServicios = {
  type: "bar",
  series: CSseries,
  options: {
    tooltip: {
        onDatasetHover: {
            highlightDataSeries: true
        },
        y: {
            title: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    var formatdata = 
                    w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                    var varstr = 
                    "<b>Alimento:</b> " + formatdata.nombre + "</br>" +
                    "<b>Tipo:</b> " + formatdata.tipo + "</br>" + 
                    "<b>Porcentaje:</b>";
                    return varstr;
                }
              }
        }
    },
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
    colors: colores_comida,
    //theme: {
    //  palette: 'palette3'
    //},
    title: {
      display: true,
      text: "Porcentaje de hogares (personas entre 3 y 64 años de edad) " + 
      "que reportan haber consumido el alimento en el último mes"
    },
    //maintainAspectRatio: false, // para altura definida
    yaxis: {
      tickAmount: 10, // eje y incrementa en 10
      categories: [0,10,20,30,40,50,60,70,80,90,100],
    }
  }
};



// Renderizando pagina de Dietas
function dietas() {
    return (
        <div>
            <h2>Dietas</h2>
            <div>
                <img src={Image1} alt="Infografia de Dietas"/>
            </div>

            <div className="d-flex flex-row">
                <div className="p-2">
                    <img src={Icon1}
                    alt="Icono Dietas" width="30" height="30"/>&nbsp;
                    <b>Es alarmante el alto consumo de alimentos de baja calidad nutricional;
                    especialmente en la poblacion mas joven.</b>
                    <ul>

                        <li><b>Niños de 3-4 años</b></li>
                        <ul>
                            <li><b>Consumo Diario</b></li>
                            <ul>
                                <li><b>33%</b> Golosinas y Dulces</li>
                                <li><b>21%</b> Gaseosas, te o refrescos</li>
                            </ul>
                            <li><b>Consumo Semanal</b></li>
                            <ul>
                                <li><b>60%</b> Embutidos</li>
                                <li><b>67%</b> Alimentos Fritos</li>
                                <li><b>47%</b> Alimentos de Paquetes</li>
                                <li><b>33%</b> Comidas Rapidas</li>
                            </ul>
                        </ul>

                        <li><b>Niños de 5-12 años</b></li>
                        <ul>
                            <li><b>Consumo Diario</b></li>
                            <ul>
                                <li><b>55%</b> Golosinas y Dulces</li>
                                <li><b>30%</b> Gaseosas, te o refrescos</li>
                            </ul>
                            <li><b>Consumo Semanal</b></li>
                            <ul>
                                <li><b>63%</b> Embutidos</li>
                                <li><b>59%</b> Alimentos Fritos</li>
                                <li><b>50%</b> Alimentos de Paquetes</li>
                                <li><b>32%</b> Comidas Rapidas</li>
                            </ul>
                        </ul>

                        <li><b>Adolescentes de 13-17 años</b></li>
                        <ul>
                            <li><b>Consumo Diario</b></li>
                            <ul>
                                <li><b>45%</b> Golosinas y Dulces</li>
                                <li><b>37%</b> Gaseosas, te o refrescos</li>
                                <li><b>20%</b> Embutidos</li>
                            </ul>
                            <li><b>Consumo Semanal</b></li>
                            <ul>
                                <li><b>58%</b> Alimentos Fritos</li>
                                <li><b>53%</b> Alimentos de Paquetes</li>
                                <li><b>50%</b> Comidas Rapidas</li>
                            </ul>
                        </ul>

                    </ul>
                    <b>Solo el 34.3% de los niños entre los 6 meses y los 2 años
                    tiene una dieta minima aceptable.</b><br/>
                    <b>NOTA:</b> La informacion para los demas rangos de edad
                    no esta disponible.
                </div>

                <div className="p-2">
                    <ul>

                        <li><b>Diferencias significativas en el consumo por parte de la
                            poblacion afrodescendiente:</b>
                        </li>
                            <ul>

                                <li>Tuberculos y platanos</li>
                                <ul>
                                    <li>Afro: 
                                        53%
                                    </li>
                                    <li>No Afro: 
                                        42%
                                    </li>
                                </ul>

                                <li>Huevos</li>
                                <ul>
                                    <li>Afro: 
                                        53%
                                    </li>
                                    <li>No Afro: 
                                        38%
                                    </li>
                                </ul>

                                <li>Golosinas</li>
                                <ul>
                                    <li>Afro: 
                                        45%
                                    </li>
                                    <li>No Afro: 
                                        33%
                                    </li>
                                </ul>

                                <li>Granos Secos</li>
                                <ul>
                                    <li>Afro: 
                                        30%
                                    </li>
                                    <li>No Afro: 
                                        15%
                                    </li>
                                </ul>

                                <li>Gaseosas, te y refrescos</li>
                                <ul>
                                    <li>Afro: 
                                        35%
                                    </li>
                                    <li>No Afro: 
                                        23%
                                    </li>
                                </ul>

                                <li>Paquetes</li>
                                <ul>
                                    <li>Afro: 
                                        32%
                                    </li>
                                    <li>No Afro: 
                                        15%
                                    </li>
                                </ul>

                                <li>Queso</li>
                                <ul>
                                    <li>Afro: 
                                        32%
                                    </li>
                                    <li>No Afro: 
                                        22%
                                    </li>
                                </ul>

                                <li>Pollo</li>
                                <ul>
                                    <li>Afro: 
                                        30%
                                    </li>
                                    <li>No Afro: 
                                        14%
                                    </li>
                                </ul>

                                <li>Verduras cocidas</li>
                                <ul>
                                    <li>Afro: 
                                        29%
                                    </li>
                                    <li>No Afro: 
                                        19%
                                    </li>
                                </ul>

                                <li>Carne</li>
                                <ul>
                                    <li>Afro: 
                                        23%
                                    </li>
                                    <li>No Afro: 
                                        11%
                                    </li>
                                </ul>

                                <li>Pescado</li>
                                <ul>
                                    <li>Afro: 
                                        16%
                                    </li>
                                    <li>No Afro: 
                                        3%
                                    </li>
                                </ul>

                                <li>Atun</li>
                                <ul>
                                    <li>Afro: 
                                        12%
                                    </li>
                                    <li>No Afro: 
                                        3%
                                    </li>
                                </ul>

                            </ul>
                    </ul>
                </div>
            </div>

            <p align="justify">
            <b>Fuente:</b> ICBF, 2015
            </p>

            <hr className="featurette-divider" />
            <h2>Caracterización y calidad</h2>

            <b>Dieta tipica en Cali por comida:</b>
            <div className="d-flex flex-row">

                <div className="p2">
                    <ul>

                        <li><b>Desayuno:</b></li>
                        <ul>
                            <li>Café, pan, leche, panela, arepa y queso.</li>
                        </ul>

                        <li><b>Almuerzo:</b></li>
                        <ul>
                            <li>Arroz, papa, cebolla, aceite vegetal, tomate, jugos, 
                                plátano, pollo y res.</li>
                        </ul>

                        <li><b>Cena:</b></li>
                        <ul>
                            <li>Arroz, papa, jugos, pollo, res, huevo y 
                                productos cárnicos no enlatados</li>
                        </ul>
                        
                    </ul>
                </div>

                <div className="p2">
                    <ul>

                        <li><b>Merienda en la mañana:</b></li>
                        <ul>
                            <li>Dulces y chocolates industrializados,
                                leche y galletas</li>
                        </ul>

                        <li><b>Merienda en la tarde:</b></li>
                        <ul>
                            <li>Dulces y chocolates industrializados, galletas, 
                                leche, bebidas carbonatadas,
                                azúcar, alimentos de paquete y pan.</li>
                        </ul>
                        
                    </ul>
                </div>

            </div>

            <hr className="featurette-divider" />
            <h2>Adecuación</h2>

            Como se muestra en la Figura,
            más del 90% de los hogares caleños reporta que
            consume arroz, granos secos (fríjol y lenteja), huevos,
            pollo, papa y/o plátano, y jugos de frutas. El consumo de
            arroz y frutas en jugo se reporta mayoritariamente como
            diario, mientras que la frecuencia de consumo de los
            demás alimentos es mayor a 3 veces por semana.<br/>

            Entre el 80 y el 90% de los hogares reporta que consume
            carne de res, azúcar, pan, leche, alimentos fritos,
            arepa, queso y frutas enteras. Un alto porcentaje de
            estos hogares reporta un consumo diario de azúcar y
            similares (panela, miel), pan y leche; mientras que la
            frecuencia de consumo de los demás alimentos es de 3
            a 5 veces por semana.<br/>

            Entre un 70 y un 80% de los hogares reporta que
            consume embutidos (salchichas, jamón), galletas,
            gaseosas y té, verduras crudas, golosinas o dulces y
            café. Las golosinas, los dulces y el café se consumen
            mayoritariamente en forma diaria y los demás alimentos
            se consumen generalmente entre 2 y 4 veces por
            semana.

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

export default dietas;

/*
                        <li>Diferencias significativas en el consumo por genero:</li>
                            <ul>
                                <li>?</li>
                                <li>?</li>
                                <li>?</li>
                            </ul>

A Arroz o pasta 
B Granos secos (fríjol, arveja, garbanzo, lenteja) 
C Huevos 
D Pollo/gallina 
E Tubérculos y plátanos (papa, yuca, ñame, arracacha) 
F Frutas en jugo
G Carne de res, ternera, cerdo 
H Panela, azúcar o miel 
I Pan 
J Leche 
K Alimentos fritos (papa, carne, plátano, etc.) 
L Arepa 
M Queso, kumis, yogurt 
N Frutas enteras
O Embutidos (salchichas, salchichón, jamón) 
P Galletas 
Q Gaseosas, té y refrescos (en polvo, caja, botella, no light)
R Verduras crudas (tomate, lechuga, repollo, zanahoria)
S Golosinas o dulces 
T Café 
U Alimentos de paquete (papas, chitos, patacones)
V Comida rápida (hamburguesas, perro, pizza, etc.)
W Verduras cocidas (auyama, zanahoria, espinaca, brócoli)
X Atún o sardinas 
Y Pescado o mariscos

'Arroz o pasta',
'Granos secos (fríjol, arveja, garbanzo, lenteja)',
'Huevos',
'Pollo/gallina',
'Tubérculos y plátanos (papa, yuca, ñame, arracacha)',
'Frutas en jugo',
'Carne de res, ternera, cerdo',
'Panela, azúcar o miel',
'Pan',
'Leche',
'Alimentos fritos (papa, carne, plátano, etc.)',
'Arepa',
'Queso, kumis, yogurt',
'Frutas enteras',
'Embutidos (salchichas, salchichón, jamón)',
'Galletas',
'Gaseosas, té y refrescos (en polvo, caja, botella, no light)',
'Verduras crudas (tomate, lechuga, repollo, zanahoria)',
'Golosinas o dulces',
'Café',
'Alimentos de paquete (papas, chitos, patacones)',
'Comida rápida (hamburguesas, perro, pizza, etc.)',
'Verduras cocidas (auyama, zanahoria, espinaca, brócoli)',
'Atún o sardinas',
'Pescado o mariscos'

        custom: function({series, seriesIndex, dataPointIndex, w}) {
            var varstr = "";
            var formatdata = 
            w.globals.initialSeries[seriesIndex].data[dataPointIndex];
            if (dataPointIndex === 0 || 4 || 8 || 11 || 15 ) {
                varstr = "Cereales, raíces, tubérculos y plátanos";
            };
            if (dataPointIndex === 5 || 13 || 17 || 22 ) {
                varstr = "Frutas y verduras";
            };
            if (dataPointIndex === 9 || 12 ) {
                varstr = "Leche y productos lácteos";
            };
            if (dataPointIndex === 1 || 2 || 3 || 6 || 14 || 23 || 24 ) {
                varstr = "Carnes, huevos, leguminosas, frutos secos y semillas";
            };
            if (dataPointIndex === 7 || 16 || 18 ) {
                varstr = "Azúcares";
            }
            else {
                varstr = "Alimentos que no entran en la clasificación";
            };
            return '<ul>' +
            '<li><b>Categoria</b>: '  + varstr       + '</li>' +
            '<li><b>Alimento</b>: '   + formatdata.x + '</li>' +
            '<li><b>Porcentaje</b>: ' + formatdata.y + '</li>' +
            '</ul>';
        }
*/