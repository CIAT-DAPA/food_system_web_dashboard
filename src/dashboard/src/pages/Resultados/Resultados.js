import React from 'react';

// Imagenes
import Image1 from '../../final_assets/images/infografia_resultados.png';
import Image2 from '../../final_assets/images/resultados_ambientales.png';

// Iconos
import Icon1 from '../../final_assets/icons/resultados.png';

// Graficas
import Chart from "react-apexcharts";



// Preparando Graficas!
// ////////////////////

// Definiendo colores
const green  = "#32cd32";
const blue   = "#214fc6";
const orange = "#ffa500";



// Mortalidad en Menores
// Estos son datos quemados porque fueron sacados de una
// comunicacion con la Secretaría de Salud Publica.
// Cita:
// Alcaldía de Santiago de Cali. 2020b. Comunicación
// personal con Ruby Castellanos, referente
// en seguridad alimentaria y nutricional de la
// Secretaría de Salud Pública Municipal de
// Santiago de Cali. 

var mortalidad_ejex = 
[2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
var mortalidad_ejey = 
[0,2,4,6,8,10,12,14];

var mortalidad_series =
[5, 6, 12, 7, 6, 7, 2, 4, 1, 0];

const mortalidad_linea = {
    type: "line",
    series: [{
        name: "Mortalidad",
        data: mortalidad_series
    }],
    options: {
        chart: {
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        toolbar: {
            show: false
        },
        colors: [green],
        markers: {
            size: 5,
        },
        labels: mortalidad_ejex,
        title: {
            display: true,
            text: "Tasa de Mortalidad por Desnutrición en niños menores a 5 años de edad"
        },
        grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'],
              // Arreglo que se repite en columnas
              opacity: 0.5
            },
          },
        yaxis: {
            tickAmount: 2, // eje_y incrementa en 2
            categories: mortalidad_ejey,
            min: 0,
            max: 15,
            title: {
                text: "Numero de Casos"
            }
        },
        xaxis: {
            categories: mortalidad_ejex,
        },
    }
};



// Inseguridad Alimentaria
// Datos de Base Datos ENSIN
var inseguridad_ejex = 
[2005, 2010, 2015];
var inseguridad_ejey = 
[0,10,20,30,40,50,60];

var inseguridad_series =
[22.5, 48.3, 51.3];

const inseguridad_barra = {
    type: "bar",
    series: [{
        name: "Inseguridad",
        data: inseguridad_series
    }],
    options: {
        labels: inseguridad_ejex,
        plotOptions: {
            bar: {
                // Permite teners barras de distintos colores
                distributed: true
            }
        },
        chart: {
            type: 'bar',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        toolbar: {
            show: false
        },
        colors: [orange, green, blue],
        title: {
            display: true,
            text: "Tasa de Inseguridad en Hogares en Cali"
        },
        grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'],
              // Arreglo que se repite en columnas
              opacity: 0.5
            },
          },
        yaxis: {
            tickAmount: 10, // eje_y incrementa en 2
            categories: inseguridad_ejey,
            min: 0,
            max: 60,
            title: {
                text: "%"
            }
        },
        xaxis: {
            categories: inseguridad_ejex,
        },
    }
};


// Informalidad
// Programa Cali Cómo Vamos. 2019. Informe anual de
// calidad de vida. Disponible en:
// https://bit.ly/3rpPAvX
// Grafico 8, Pagina 7 del PDF
var informalidad_ejex = 
[2012, 2013, 2014, 2015, 2016, 2017, 2018];
var informalidad_ejey = 
[0,20,40,60];

var informalidad_series =
[51.4, 49.9, 47.9, 47.4, 48.7, 47.4, 46.2];

const informalidad_linea = {
    type: "line",
    series: [{
        name: "Informalidad",
        data: informalidad_series
    }],
    options: {
        chart: {
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        toolbar: {
            show: false
        },
        colors: [blue],
        markers: {
            size: 5,
        },
        labels: mortalidad_ejex,
        title: {
            display: true,
            text: "Tasa de Informalidad en Cali"
        },
        grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'],
              // Arreglo que se repite en columnas
              opacity: 0.5
            },
          },
        yaxis: {
            tickAmount: 2, // eje_y incrementa en 2
            categories: informalidad_ejey,
            min: 40,
            max: 60,
            title: {
                text: "Numero de Casos"
            }
        },
        xaxis: {
            categories: informalidad_ejex,
        },
    }
};


// Renderizando!
function resultados() {
    return (
        <div>

            <h2>Resultados</h2>
            <div>
                <img src={Image1} alt="Infografia de Resultados"/>
            </div>

            <div className="d-flex flex-row">
                <div className="p-2">
                    <img src={Icon1}
                    alt="Icono Dietas" width="30" height="40"/>&nbsp;
                    <b>En la nutrición y la salud</b>
                    <ul>

                        <li>
                            75% de las consultas medicas son por Enfermedades
                            crónicas No Transmisibles
                        </li>

                        <li><b>Anemia</b></li>
                        <ul>
                            <li>55% en niños menores de 1 año</li>
                            <li>35% en mujeres entre 13-49 años</li>
                            <li>Problema de salud publica severa si la prevalencia
                                es major al 40%</li>
                        </ul>

                        <li><b>Deficiencia de hierro</b></li>
                        <ul>
                            <li>16% en niños entre 1-4 años</li>
                        </ul>

                        <li><b>Deficiencia de vitamina A</b></li>
                        <ul>
                            <li>64.3% en mujeres entre 13-49 años</li>
                            <li>Problema de salud publica severa si la prevalencia
                                es major al 20%</li>
                        </ul>

                        <li><b>Sobrepeso y obesidad en niños y jovenes por
                            encima de la media regional</b></li>
                        <ul>
                            <li>Cali</li>
                            <ul>
                                <li>Niños:</li>
                                <ul>
                                    <li>Sobrepeso: 22%</li>
                                    <li>Obesidad: 12%</li>
                                </ul>
                                <li>Jovenes:</li>
                                <ul>
                                    <li>Sobrepeso: 18%</li>
                                    <li>Obesidad: 5%</li>
                                </ul>
                            </ul>
                            <li>Region pacifica</li>
                            <ul>
                                <li>Niños:</li>
                                <ul>
                                    <li>Sobrepeso: 18%</li>
                                    <li>Obesidad: 8%</li>
                                </ul>
                                <li>Jovenes:</li>
                                <ul>
                                    <li>Sobrepeso: 14%</li>
                                    <li>Obesidad: 3%</li>
                                </ul>
                            </ul>
                        </ul>

                    </ul>

                </div>

                <div className="p-2">
                    <ul>
                        <img src={Icon1}
                        alt="Icono Dietas" width="30" height="40"/>&nbsp;
                        <b>En la Seguridad Alimentaria</b>
                            <ul>
                                <li><b>56% de inseguridad alimentaria </b>
                                    (No acceso a los alimentos)</li>
                                <li>Hogares cuyos ingresos no cubren los
                                    gastos minimos
                                </li>
                                <ul>
                                    <li>55% encabezados por mujeres</li>
                                    <li>62% encabezados por afrodescendientes</li>
                                    <li>75% encabezados por desempleados</li>
                                </ul>
                            </ul>

                        <img src={Icon1}
                        alt="Icono Dietas" width="30" height="40"/>&nbsp;
                        <b>En lo socioeconómico</b>
                        <ul>
                            30-35% de los empleos en la ciudad son generados
                            por la cadena alimentaria
                        </ul>

                        <img src={Icon1}
                        alt="Icono Dietas" width="30" height="40"/>&nbsp;
                        <b>En el medio ambiente</b>
                        <ul>
                            <li>Alta perdida de alimentos desde el consumo hasta
                                la posventa
                            </li>
                            <li><b>Valle del Cauca y Cali:</b> Cuarta zona
                                con mas perdida de comida en todo el pais
                            </li>
                            <li><b>8.254.225 toneladas</b> emitidas por
                                desperdicio de alimentos
                            </li>
                            <li><b>431,5 g/capita/dia</b> produce el tipico
                                "plato caleño"
                            </li>
                        </ul>

                    </ul>
                </div>
            </div>

            <p align="justify">
            <b>Fuentes:</b> Anemia, deficiencia de hierro y de vitamina A, 
            sobrepeso y obesidad en niños y jóvenes, consultas por 
            Enfermedades crónicas No Transmisibles, inseguridad alimentaria 
            y hogares que no cubren los gastos mínimos (ICBF, 2015); 
            Empleos generados por la cadena alimentaria (FENALCO Valle, 2020); 
            Cuarta zona con más pérdida de comida (Parada V., 2019b); 
            CO2 emitido por desperdicio de alimentos (El País, 2019); 
            CO2 producido por el “plato caleño” (Gerbal L., 2019).
            </p>

            <hr className="featurette-divider" />
            <h2>En Nutrición y Estado de Salud</h2>

            <Chart
                options={mortalidad_linea.options}
                series={mortalidad_linea.series}
                type="line"
                height="500"
                width="100%"
            />

            <hr className="featurette-divider" />
            <h2>En Seguridad Alimentaria</h2>

            <Chart
                options={inseguridad_barra.options}
                series={inseguridad_barra.series}
                type="bar"
                width="100%"
                height="500"
            />

            <hr className="featurette-divider" />
            <h2>Socio-económicos y Bienestar</h2>

            <Chart
                options={informalidad_linea.options}
                series={informalidad_linea.series}
                type="line"
                height="500"
                width="100%"
            />

            <hr className="featurette-divider" />
            <h2>Ambientales</h2>
            <div className="d-flex flex-row">
                <div className="p-2">
                    <img src={Image2} alt="Infografia de Resultados Ambientales"/>
                </div>

                <div className="p-2">
                    <ul>

                        <li>Aproximadamente <b>10.219</b> toneladas de comida
                            se desperdiciaron en las residencias urbanas
                            en Cali en 2015
                        </li>

                        <li>Los alimentos con mayores perdidas y
                            desperdicions en Colombia son los mas
                            importantes para la seguridad alimentaria
                        </li>
                        <ul>
                            <li><b>Frutas y Vegetales:</b> 62%</li>
                            <li><b>Raices y Tuberculos:</b> 24.5%</li>
                            <li><b>Cereales:</b> 8%</li>

                            <li><b>Carne:</b> 3%</li>
                            <li><b>Oleaginosas y Legumbres:</b> 2%</li>
                            <li><b>Lacteos:</b> 0.3%</li>
                            <li><b>Pescado:</b> 0.5%</li>
                        </ul>

                        <li>El volumen de desperdicios esta relacionado
                            con el estrato socioeconómico
                        </li>
                        <ul>
                            <li><b>Estrato 1:</b> 0.43 kg Persona/dia</li>
                            <li><b>Estrato 6:</b> 0.77 kg Persona/dia</li>
                        </ul>

                    </ul>

                    <b>Fuentes:</b> 
                    <ul>
                    <li>Toneladas de comida desperdiciada
                    en 2015 (UAO,2020)</li>
                    <li>Alimentos con mayores
                    pérdidas y desperdicios en Colombia (DNP,
                    2016, como se citó en Naciones Unidas
                    Colombia, 2020)</li>
                    <li>Volumen de desperdicios
                    relacionado con el estrato socioeconómico
                    (Parada V., 2019a).</li>
                    </ul>

                </div>

            </div>

        </div>
    );
}

export default resultados;