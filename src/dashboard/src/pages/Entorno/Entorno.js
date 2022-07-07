import React from 'react';

// Importando Imagenes
import Image1 from '../../final_assets/images/mapa_habha.png';
import Image2 from '../../final_assets/images/mapa_demanda.png';
import Image3 from '../../final_assets/images/infografia_entorno.png';

// Importando Iconos
import Icon1 from '../../final_assets/icons/2-disponibilidad.png';
import Icon2 from '../../final_assets/icons/2-asequibilidad.png';
import Icon3 from '../../final_assets/icons/2-promocion.png';
import Icon4 from '../../final_assets/icons/2-perdidas.png';

// Marcador para Mapas
//import markerIconPng from "leaflet/dist/images/marker-icon.png";
//import {Icon} from 'leaflet';

// Importando Mapas
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import 'leaflet/dist/leaflet.css'; // MUY importante, sin esto no funciona

//var attr=
//'Colaboradores de &copy;' +
//'<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
//var ubicacion_ciat = [3.5025954,-76.35724]; // Latitud y Longitud

function entorno() {
    return (
        <div>
            <h2>Entorno alimentario de la ciudad</h2>
            <div align='center'>
                <img src={Image3} alt="Infografia del Entorno Alimentario"/>
            </div>

            <div className="d-flex flex-row">
                <div className="p-2">
                    <img src={Icon1}
                    alt="Icono Entorno 1" width="30" height="30"/>&nbsp;
                    <img src={Icon2}
                    alt="Icono Entorno 2" width="30" height="30"/>&nbsp;
                    <b>Aunque existe disponibilidad de alimentos,
                    el mayor reto esta en la capacidad de compra de
                    la poblacion mas vulnerable.</b>
                    <ul>
                        <li>Las tiendas estan disminuyendo mientras ganan
                            presencia los formatos emergentes.
                        </li>
                            <ul>
                                <li><b>Tiendas de barrio</b></li>
                                <ul>
                                    <li><b>96%</b> de las compras en estratos 1-4</li>
                                    <li>Existen alrededor de 14 mil</li>
                                    <li>Abiertas de 6 a.m. a 10 p.m.</li>
                                </ul>
                                <li><b>Formatos Emergentes</b></li>
                                <ul>
                                    <li>Supermercados de descuento</li>
                                    <li>Cercanos a zona residencial</li>
                                </ul>
                            </ul>
                        <li><b>3.666 Supermercados</b> (Micro, pequeños y grandes)</li>
                        <li>Facil acceso a puntos de venta en el casco urbano 
                            <b> (5 minuntos caminando)</b></li>
                        <li><b>41 Mercados Moviles</b>, Una vez por semana</li>
                        <li><b>Comedores Comunitarios</b></li>
                            <ul>
                                <li><b>48.600 beneficiarios</b></li>
                                <li>1 racion diraria caliente 
                                    (40% del valor calorico minimo vital)</li>
                            </ul>
                        <li><b>2.681 Restaurantes</b></li>
                        <li><b>5-15% Ventas por Internet </b>
                            (COVID-19 acelero el comerico electronico)</li>
                        <li><b>Programa de Alimentacion Escola (PEA)</b></li>
                            <ul>
                                <li>Cubre <b>163.575 niños y adolescentes</b> con 
                                    enfasis en estratos 1-3 y, recientemente, el 4.
                                </li>
                                <li>Atiende al <b>100%</b> de las instituciones
                                    educativas publicas
                                </li>
                                <li><b>Tiendas escolares</b> con oferta diversa de 
                                    alimentos, con tendencia a saludables.
                                </li>
                            </ul>
                    </ul>
                </div>

                <div className="p-2">

                    <img src={Icon3}
                    alt="Icono Entorno 3" width="30" height="30"/>&nbsp;
                    <b>Publicidad y falta de normatividad en etiquetado
                    dificulta la identificacion de riesgos para la salud
                    en alimentos procesados y ultraprocesados.</b>
                    <ul>
                        <li>Fuerte publicidad de alimentos altos en sal,
                            grasas y azucar.
                        </li>
                        <li><b>56%</b> de la publicidad de alimentos en Colombia
                            es dirigida a ninos.
                         </li>
                         <li>Tablas nutricionales no comprensibles para
                            la mayoria de la poblacion.
                        </li>
                    </ul>

                    <img src={Icon4}
                    alt="Icono Entorno 4" width="30" height="30"/>&nbsp;
                    <b>Cali enfrenta todavia grandes retos respecto al
                    manejo de perdidas y desperdicios de alimentos.</b>
                    <ul>
                        <li><b>1.800 Toneladas diarias de residuos solidos</b></li>
                        <ul>
                            <li><b>70%</b> Completamente Aprovechable
                                (1.260 Toneladas)
                            </li>
                            <li><b>59%</b> Generado en las viviendas
                            </li>
                            <ul>
                                <li><b>59.4%</b> son residuos de alimentos</li>
                            </ul>
                            
                        </ul>
                        <li><b>1.671 Grandes Generadores de Residuos</b></li>
                        <ul>
                            <li>Aquellos que generan mas de 1 metro cubico 
                            de residuos por mes</li>
                        </ul>
                    </ul>
                    
                </div>
            </div>

            <p align="justify">
            <b>Fuentes:</b> Tiendas de barrio (Asotenderos, 2020); 
            Número de supermercados (Cámara de Comercio de Cali, 2020b); 
            Acceso a puntos de venta 
            (Instituto de Prospectiva, Innovación y Gestión del Conocimiento 
            y Alcaldía de Santiago de Cali, 2018); 
            PAE (Secretaría de Educación de Santiago de Cali y 
            Subsecretaría de Cobertura Educativa, 2020); 
            Mercados móviles (Alcaldía de Cali, 2021); 
            Comedores comunitarios (Alcaldía de Cali, 2020a); 
            Restaurantes (Cámara de Comercio de Cali, 2020c); 
            Ventas por internet (FENALCO Valle, 2020); 
            Publicidad dirigida a niños (Dejusticia, 2017); 
            Residuos sólidos diarios y porcentaje aprovechable 
            (Parada V., 2019b); 
            Porcentaje generado en las viviendas 
            (Universidad del Valle, 2020); 
            Grandes generadores de residuos (UAO, 2020).
            </p>


            <hr className="featurette-divider" />



            <h2>Disponibilidad de Alimentos</h2>
            <div className="d-flex flex-row">

                <div className="p-2">
                    <div align='center'>
                        <img src={Image1} alt="Mapa de Densidad Hab/Ha"/>
                    </div>
                </div>

                <div className="p-2">
                    <div align='center'>
                        <img src={Image2} alt="Mapa de Localizacion de Demanda"/>
                    </div>
                </div>
                
            </div>

            <p align="justify">
            <b>Fuente:</b> Instituto de Prospectiva, Innovación
            y Gestión del Conocimiento y Alcaldía de
            Santiago de Cali, 2018.
            </p>

        </div>
    );
}

export default entorno;

/* 
            <MapContainer 
            center={ubicacion_ciat} 
            zoom={12} 
            style={{ height: '40vh', width: '20wh' }}
            scrollWheelZoom={false}
            >
                <TileLayer
                    attribution={attr}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                position={ubicacion_ciat}
                icon={new Icon({
                    iconUrl: markerIconPng, 
                    iconSize: [25, 41], 
                    iconAnchor: [12, 41]
                })}
                >
                    <Popup>
                        <span>Centro Internacional de<br />Agricultura Tropical
                        </span>
                    </Popup>
                </Marker>
            </MapContainer>
*/