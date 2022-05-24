import React from 'react';

// Imagenes
import Image1 from '../../final_assets/images/infografia_dietas.png';

// Iconos
import Icon1 from '../../final_assets/icons/4-adecuacion.png';

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
                    Es alarmante el alto consumo de alimentos de baja calidad nutricional;
                    especialmente en la poblacion mas joven.
                    <ul>

                        <li>Niños de 3-4 años</li>
                        <ul>
                            <li>Consumo Diario</li>
                            <ul>
                                <li>33% Golosinas y Dulces</li>
                                <li>21% Gaseosas, te o refrescos</li>
                            </ul>
                            <li>Consumo Semanal</li>
                            <ul>
                                <li>60% Embutidos</li>
                                <li>67% Alimentos Fritos</li>
                                <li>47% Alimentos de Paquetes</li>
                                <li>33% Comidas Rapidas</li>
                            </ul>
                        </ul>

                        <li>Niños de 5-12 años</li>
                        <ul>
                            <li>Consumo Diario</li>
                            <ul>
                                <li>55% Golosinas y Dulces</li>
                                <li>30% Gaseosas, te o refrescos</li>
                            </ul>
                            <li>Consumo Semanal</li>
                            <ul>
                                <li>63% Embutidos</li>
                                <li>59% Alimentos Fritos</li>
                                <li>50% Alimentos de Paquetes</li>
                                <li>32% Comidas Rapidas</li>
                            </ul>
                        </ul>

                        <li>Adolescentes de 13-17 años</li>
                        <ul>
                            <li>Consumo Diario</li>
                            <ul>
                                <li>45% Golosinas y Dulces</li>
                                <li>37% Gaseosas, te o refrescos</li>
                                <li>20% Embutidos</li>
                            </ul>
                            <li>Consumo Semanal</li>
                            <ul>
                                <li>58% Alimentos Fritos</li>
                                <li>53% Alimentos de Paquetes</li>
                                <li>50% Comidas Rapidas</li>
                            </ul>
                        </ul>

                    </ul>
                    Solo el 34.3% de los niños entre los 6 meses y los 2 años
                    tiene una dieta minima aceptable.<br/>
                    NOTA: La informacion para los demas rangos de edad
                    no esta disponible.
                </div>

                <div className="p-2">
                    <ul>

                        <li>Diferencias significativas en el consumo por parte de la
                            poblacion afrodescendiente:
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
            Fuente: ICBF, 2015
            </p>

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
*/