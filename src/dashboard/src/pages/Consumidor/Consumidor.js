import React from 'react';

// CSS
import "./consumidor.module.css";

// Importando Imagenes
import Image1 from '../../final_assets/images/infografia_consumidor.png';

// Iconos
import Icon1 from '../../final_assets/icons/3-preferencias.png';
import Icon2 from '../../final_assets/icons/3-tabues.png';
import Icon3 from '../../final_assets/icons/3-tiendas.png';
import Icon4 from '../../final_assets/icons/3-conveniencia.png';
import Icon5 from '../../final_assets/icons/3-variables_economicas.png';

function consumidor() {
    return (
        <div>

            <h2>Comportamiento del consumidor</h2>
            <div className="landscape">
                <img src={Image1} alt="Infografia Resumen SSA"/>
            </div>

            <div className="d-flex flex-row">

                <div className="p-2">

                    <img src={Icon1}
                    alt="Icono Consumidor 1" width="30" height="30"/>&nbsp;
                    La mayoria de los alimentos mas consumidos por los habitantes
                    de la ciudad son de bajo valor nutricional.
                        <ul>
                            <li>
                                Arroz,
                                Cafe,
                                Pan,
                                Leche,
                                Huevos,
                                Azucar y
                                Aceite Vegetal
                            </li>
                            <li>
                                La proteina animal es reemplaza con
                                frecuencia en el grupo socioeconomico
                                1 y 2 por enlatados y embutidos
                            </li>
                            <li>
                                Se consumen visceras, favorables en
                                micro-nutrientes, en lugar de Carne
                                pulpa (en especial en el grupo
                                socioeconomico 1)
                            </li>
                        </ul>
                        
                        <img src={Icon2}
                        alt="Icono Consumidor 2" width="30" height="30"/>&nbsp;
                        Practicas sociales y culturales asociadas al consumo
                        de alimentos
                        <ul>
                            <li>46.4% Consume alimentos fuera de casa</li>
                            <li>71.9% Come mientras ve una pantalla</li>
                            <li>13.3% Usa salero en la mesa</li>
                            <li>20.1% Prepara comida en casa para consumir afuera</li>
                            <ul>
                                <li>La preparacion de alimentos en casa ha
                                    perdido relevancia en todos los estratos
                                </li>
                            </ul>

                            <li>Estrategias de afrontamiento a la inseguridad
                            alimentaria:
                            </li>
                            <ul>
                                <li>27% Disminnuye la porcion</li>
                                <li>29% Pide dinero prestado</li>
                                <li>42% Come alimentos mas baratos a menor calidad</li>
                            </ul>
                        </ul>

                </div>

                <div className="p-2">

                    <img src={Icon3}
                    alt="Icono Consumidor 3" width="30" height="30"/>&nbsp;
                    Las tiendas minoristas desempenan un rol social,
                    mas alla de lo comercial
                    <ul>
                        <li>Estratos 1 al 4</li>
                            <ul>
                                <li>Abastecimiento diario</li>
                                <li>Presentaciones pequenas (sachets)
                                    a percios mayores por gramo o unidad
                                </li>
                                <li>74% compras a credito</li>
                                <li>Punto de encuentro: guardan llaves a
                                    vecinos, venden minutos de celular,
                                    guardan recados y hacen domicilios.
                                </li>
                            </ul>
                        <li>Productos mas comprados:</li>
                            <ul>
                                <li>Bebidas no alcoholicas</li>
                                <li>Cervezas</li>
                                <li>Granos</li>
                                <li>Huevos</li>
                                <li>Helados</li>
                                <li>Loncheras escolares</li>
                                <li>Ingredientes para cocinar</li>
                            </ul>
                    </ul>
                        
                    <img src={Icon4}
                    alt="Icono Consumidor 4" width="30" height="30"/>&nbsp; 
                    Incursion de nuevos productos a la canasta familiar,
                    relacionada con un mayor acceso economico.
                        <ul>
                            <li>Mayor consumo de alimentos industrializados
                                (altos en calorias)
                            </li>
                            <ul>
                                <li>Condimentos</li>
                                <li>Alimentos listos para consumir</li>
                                <li>Precocidos</li>
                            </ul>
                        </ul>

                        <img src={Icon5}
                        alt="Icono Consumidor 5" width="30" height="30"/>&nbsp; 
                        Variables economicas relacionadas con la eleccion
                            <ul>
                                <li>13.4% de los ingreos se destinan a alimentos
                                    y bebidas
                                </li>
                                <li>37% Incremento del gasto en alimentos
                                    consumidos fuera de casa entre 2013 y 2018
                                </li>
                            </ul>

                </div>

            </div>
            Fuentes: 
                Prácticas de alimentación (ICBF, 2015); 
                Tiendas minoristas (Melchor M. y Lerma C.E, 2016); 
                Ingresos destinados a alimentos y bebidas (DANE, 2017); 
                Incremento del gasto en alimentos fuera de casa (DANE, 2018b).

        </div>
    );
}

export default consumidor;