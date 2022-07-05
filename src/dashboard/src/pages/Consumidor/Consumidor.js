import React from 'react';

// CSS
//import "./consumidor.module.css";

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
            <div className="landscape" align='center'>
                <img src={Image1} alt="Infografia Resumen SSA"/>
            </div>

            <div className="d-flex flex-row">

                <div className="p-2">

                    <img src={Icon1}
                    alt="Icono Consumidor 1" width="30" height="30"/>&nbsp;
                    <b>La mayoria de los alimentos mas consumidos por los habitantes
                    de la ciudad son de bajo valor nutricional.</b>
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
                        <b>Practicas sociales y culturales asociadas al consumo
                        de alimentos</b>
                        <ul>
                            <li><b>46.4%</b> Consume alimentos fuera de casa</li>
                            <li><b>71.9%</b> Come mientras ve una pantalla</li>
                            <li><b>13.3%</b> Usa salero en la mesa</li>
                            <li><b>20.1%</b> Prepara comida en casa para 
                            consumir afuera</li>
                            <ul>
                                <li>La preparacion de alimentos en casa ha
                                    perdido relevancia en todos los estratos
                                </li>
                            </ul>

                            <li><b>Estrategias de afrontamiento a la inseguridad
                            alimentaria:</b>
                            </li>
                            <ul>
                                <li><b>27%</b> Disminuye la porcion</li>
                                <li><b>29%</b> Pide dinero prestado</li>
                                <li><b>42%</b> Come alimentos mas baratos a 
                                menor calidad</li>
                            </ul>
                        </ul>

                </div>

                <div className="p-2">

                    <img src={Icon3}
                    alt="Icono Consumidor 3" width="30" height="30"/>&nbsp;
                    <b>Las tiendas minoristas desempeñan un rol social,
                    mas alla de lo comercial</b>
                    <ul>
                        <li>Estratos 1 al 4</li>
                            <ul>
                                <li>Abastecimiento diario</li>
                                <li>Presentaciones pequenas (sachets)
                                    a percios mayores por gramo o unidad
                                </li>
                                <li><b>74%</b> compras a credito</li>
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
                    <b>Incursion de nuevos productos a la canasta familiar,
                    relacionada con un mayor acceso economico.</b>
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
                        <b>Variables economicas relacionadas con la eleccion</b>
                            <ul>
                                <li><b>13.4%</b> de los ingreos se destinan a alimentos
                                    y bebidas
                                </li>
                                <li><b>37%</b> Incremento del gasto en alimentos
                                    consumidos fuera de casa entre 2013 y 2018
                                </li>
                            </ul>

                </div>

            </div>
            <b>Fuentes:</b> Prácticas de alimentación (ICBF, 2015); 
                Tiendas minoristas (Melchor M. y Lerma C.E, 2016); 
                Ingresos destinados a alimentos y bebidas (DANE, 2017); 
                Incremento del gasto en alimentos fuera de casa (DANE, 2018b).

        </div>
    );
}

export default consumidor;