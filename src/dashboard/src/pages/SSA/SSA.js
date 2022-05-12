import React from 'react';

// CSS
import "./ssa.module.css";

// Importando Imagenes
import Image1 from '../../final_assets/images/mapa_centrales_plazas.png';
import Image2 from '../../final_assets/images/mapas_procedencia.png';
import Image3 from '../../final_assets/images/infografia_ssa.png';

// Marcador para Mapas
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';

// Importando Mapas
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // MUY importante, sin esto no funciona

var attr=
'Colaboradores de &copy;' +
'<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var ubicacion_cali = [3.359889, -76.638565]; // Latitud y Longitud

function ssa() {
    return (
        <div>
            <h2>Resumen</h2>
            <div className="landscape">
                <img src={Image3} alt="Infografia Resumen SSA"/>
            </div>

            Cali no es un municipio productor de alimentos,
            pero es un polo de consumo para el sistema alimentario del
            suroccidente del pais.<br />

            Procedencia de los alimentos<br />
            80% de los granos secos que se comercializan en la ciudad
            son importados<br />

            1317 productores a pequena escala en la zona periurbana<br />

            65% de los productos provienen de los departamentos de
            Cauca y Narino<br />

            Ademas de constituir el mercado mas grande en el Suroccidente,
            Cali cumple la funcion de redistribuir alimentos y establecer
            precios de referencia.<br />

            Principales Mayoristas<br />
            Santa Elena, 18-22 mil t/mes<br />
            CAVASA, 30 mil t/mes<br />

            Reciben el 41% de los productos alimenticios del Valle del Cauca<br />
            Cubren el 54% de la demanda de alimentos en la ciudad<br />

            Otros puntos de venta de alimentos<br />
            Plazas de Mercado<br />
            Supermercados<br />
            Restaurantes<br />
            Mercados campesinos<br />
            Mercados moviles<br />
            Tiendas de barrio<br />

            Mas de 2.5 millones de personas, incluyendo, principalmente, a la poblacion
            de 7 municipios vecinoes, se abastecen de este sistema.<br />

            Industria Manufacturera de productos alimenticios<br />
            984 Empresas de productos alimenticios<br />
            195 Empresas de macrosnacks<br />

            Crecimiento promedio anual en ventas de macrosnacks<br />
            8.2% entre 2014 y 2019

            Fuentes: Principales departamentos abastecedores (DANE, 2020); 
            Número de productores (DANE, 2014); 
            Volumen comercializado en Santa Elena, 
            porcentaje de alimentos que reciben los principales mayoristas y 
            porcentaje de la demanda que cubren 
            (Instituto de Prospectiva, Innovación y Gestión del Conocimiento y 
            Alcaldía de Santiago de Cali, 2018); 
            Volumen comercializado en CAVASA y 
            principales municipios vecinos que se abastecen del Sistema 
            (CAVASA, 2021); 
            Empresas de productos alimenticios (DANE, 2018a); 
            Empresas de macrosnacks (Cámara de Comercio de Cali, 2021).



            <hr className="featurette-divider" />

            <h2>Produccion y abastecimiento</h2>

            <p align="justify">
            Las actividades económicas en el municipio (más del
            90%) están esencialmente relacionadas con el sector
            de bienes y servicios. La zona rural concentra extensas
            áreas de cultivo de caña de azúcar, destinadas a la
            industria azucarera del departamento, y una pequeña
            producción de hortalizas y cítricos para el autoconsumo,
            provenientes en el 83% de los casos, de unidades de
            menos de 5 ha.
            </p>

            <MapContainer 
            center={ubicacion_cali} 
            zoom={5} 
            style={{ height: '40vh', width: '20wh' }}
            scrollWheelZoom={false}
            >
                <TileLayer
                    attribution={attr}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                position={ubicacion_cali}
                icon={new Icon({
                    iconUrl: markerIconPng, 
                    iconSize: [25, 41], 
                    iconAnchor: [12, 41]
                })}
                >
                    <Popup>
                        <span>Valle del Cauca,<br />Santiago de Cali
                        </span>
                    </Popup>
                </Marker>
            </MapContainer>

            <div className="portrait">
                <img src={Image2} alt="Mapa de Procedencia de Alimentos por Municipio"/>
            </div>



            <hr className="featurette-divider" />
            
            <h2>Almacenamiento y distribucion</h2>

            <p align="justify">
            Cali cuenta con diversas fuentes de abastecimiento
            para sus consumidores: dos centrales mayoristas
            principales (la Central de Abastecimientos del Valle del
            Cauca – CAVASA y la Galería Santa Elena) y 5 plazas de
            mercado adicionales (Alfonso López, Siloé, Alameda,
            La Floresta y El Porvenir). CAVASA es la central
            de abastecimiento oficial del departamento y está
            ubicada a las afueras de la ciudad; recibe alimentos
            de diversas regiones que se redistribuyen en Cali y a
            otras ciudades y departamentos. Entre un 60 y 70% de
            lo que se distribuye desde CAVASA va para Cali. Tanto
            CAVASA como Santa Elena abastecen principalmente
            a graneros, supermercados, universidades, centros
            de reclusión, restaurantes, tiendas y otras plazas de
            mercado.
            </p>

            <MapContainer 
            center={ubicacion_cali} 
            zoom={5} 
            style={{ height: '40vh', width: '20wh' }}
            scrollWheelZoom={false}
            >
                <TileLayer
                    attribution={attr}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                position={ubicacion_cali}
                icon={new Icon({
                    iconUrl: markerIconPng, 
                    iconSize: [25, 41], 
                    iconAnchor: [12, 41]
                })}
                >
                    <Popup>
                        <span>Valle del Cauca,<br />Santiago de Cali
                        </span>
                    </Popup>
                </Marker>
            </MapContainer>

            <div className="landscape">
                <img src={Image1} alt="Mapa de Centrales Mayoristas y Plazas"/>
            </div>
        </div>
    );
}

export default ssa;