import React from 'react';

// Imagenes
import Image1 from '../../final_assets/images/infografia_resultados.png';

// Iconos
import Icon1 from '../../final_assets/icons/resultados.png';



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
                    <b>En la nutricion y la salud</b>
                    <ul>

                        <li>
                            75% de las consultas medicas son por Enfermedades
                            cronicas No Transmisibles
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
                        <b>En lo socioeconomico</b>
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

        </div>
    );
}

export default resultados;