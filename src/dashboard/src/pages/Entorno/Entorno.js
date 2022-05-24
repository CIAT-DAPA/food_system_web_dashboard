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
            <div>
                <img src={Image3} alt="Infografia del Entorno Alimentario"/>
            </div>

            <div className="d-flex flex-row">
                <div className="p-2">
                    <img src={Icon1}
                    alt="Icono Entorno 1" width="30" height="30"/>&nbsp;
                    <img src={Icon2}
                    alt="Icono Entorno 2" width="30" height="30"/>&nbsp;
                    Aunque existe disponibilidad de alimentos,
                    el mayor reto esta en la capacidad de compra de
                    la poblacion mas vulnerable.
                    <ul>
                        <li>Las tiendas estan disminuyendo mientras ganan
                            presencia los formatos emergentes.
                        </li>
                            <ul>
                                <li>Tiendas de barrio</li>
                                <ul>
                                    <li>96% de las compras en estratos 1-4</li>
                                    <li>Existen alrededor de 14 mil</li>
                                    <li>Abiertas de 6 a.m. a 10 p.m.</li>
                                </ul>
                                <li>Formatos Emergentes</li>
                                <ul>
                                    <li>Supermercados de descuento</li>
                                    <li>Cercanos a zona residencial</li>
                                </ul>
                            </ul>
                        <li>3.666 Supermercados (Micro, pequenos y grandes)</li>
                        <li>Facil acceso a puntos de venta en el casco urbano 
                            (5 minuntos caminando)</li>
                        <li>41 Mercados Moviles, Una vez por semana</li>
                        <li>Comedores Comunitarios</li>
                            <ul>
                                <li>48.600 beneficiarios</li>
                                <li>1 racion diraria caliente 
                                    (40% del valor calorico minimo vital)</li>
                            </ul>
                        <li>2.681 Restaurantes</li>
                        <li>5-15% Ventas por Internet 
                            (COVID-19 acelero el comerico electronico)</li>
                        <li>Programa de Alimentacion Escola (PEA)</li>
                            <ul>
                                <li>Cubre 163.575 ninos y adolescentes con enfasis en
                                    estratos 1-3 y, recientemente, el 4.
                                </li>
                                <li>Atiende al 100% de las instituciones
                                    educativas publicas
                                </li>
                                <li>Tiendas escolares con oferta diverda de alimentos,
                                    con tendencia a saludables.
                                </li>
                            </ul>
                    </ul>
                </div>

                <div className="p-2">

                    <img src={Icon3}
                    alt="Icono Entorno 3" width="30" height="30"/>&nbsp;
                    Publicidad y falta de normatividad en etiquetado
                    dificulta la identificacion de riesgos para la salud
                    en alimentos procesados y ultraprocesados.
                    <ul>
                        <li>Fuerte publicidad de alimentos altos en sal,
                            grasas y azucar.
                        </li>
                        <li>56% de la publicidad de alimentos en Colombia
                             es dirigida a ninos.
                         </li>
                         <li>Tablas nutricionales no comprensibles para
                            la mayoria de la poblacion.
                        </li>
                    </ul>

                    <img src={Icon4}
                    alt="Icono Entorno 4" width="30" height="30"/>&nbsp;
                    Cali enfrenta todavia grandes retos respecto al
                    manejo de perdidas y desperdicios de alimentos.
                    <ul>
                        <li>1.800 Toneladas diarias de residuos solidos</li>
                        <ul>
                            <li>70% Completamente Aprovechable
                                (1.260 Toneladas)
                            </li>
                            <li>59% Generado en las viviendas
                                (59.4% son residuos de alimentos)
                            </li>
                        </ul>
                        <li>1.671 Grandes Generadores de Residuos
                            (mas de 1 metro cubico de residuos por mes)
                        </li>
                    </ul>
                    
                </div>
            </div>

            <p align="justify">
            Fuentes: 
            Tiendas de barrio (Asotenderos, 2020); 
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
                    <div>
                        <img src={Image1} alt="Mapa de Densidad Hab/Ha"/>
                    </div>
                </div>

                <div className="p-2">
                    <div>
                        <img src={Image2} alt="Mapa de Localizacion de Demanda"/>
                    </div>
                </div>
                
            </div>

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