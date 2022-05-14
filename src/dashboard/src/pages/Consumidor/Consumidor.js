import React from 'react';

// CSS
import "./consumidor.module.css";

// Importando Imagenes
import Image1 from '../../final_assets/images/infografia_consumidor.png';

function consumidor() {
    return (
        <div>

            <h2>Comportamiento del consumidor</h2>
            <div className="landscape">
                <img src={Image1} alt="Infografia Resumen SSA"/>
            </div>

            <div className="d-flex flex-row">

                <div className="p-2">

                    <ul>
                        <li>La mayoria de los alimentos mas consumidos por los habitantes
                            de la ciudad son de bajo valor nutricional.
                        </li>
                        <ul>
                            <li>Arroz</li>
                            <li>Cafe</li>
                            <li>Pan</li>
                            <li>Leche</li>
                            <li>Huevos</li>
                            <li>Azucar</li>
                            <li>Aceite Vegetal</li>
                        </ul>
                        
                        <li>Practicas sociales y culturales asociadas al consumo
                            de alimentos
                        </li>
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
                        </ul>

                        <li>Estrategias de afrontamiento a la inseguridad
                            alimentaria
                        </li>
                        <ul>
                            <li>27% Disminnuye la porcion</li>
                            <li>29% Pide dinero prestado</li>
                            <li>42% Come alimentos mas baratos a menor calidad</li>
                        </ul>

                    </ul>

                </div>

                <div className="p-2">

                    <ul>

                        <li>Las tiendas minoristas desempenan un rol social,
                            mas alla de lo comercial
                        </li>
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
                        
                        <li>Incursion de nuevos productos a la canasta familiar,
                            relacionada con un mayor acceso economico.
                        </li>
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

                            <li>Variables economicas relacionadas con la eleccion</li>
                                <ul>
                                    <li>13.4% de los ingreos se destinan a alimentos
                                        y bebidas
                                    </li>
                                    <li>37% Incremento del gasto en alimentos
                                        consumidos fuera de casa entre 2013 y 2018
                                    </li>
                                </ul>
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