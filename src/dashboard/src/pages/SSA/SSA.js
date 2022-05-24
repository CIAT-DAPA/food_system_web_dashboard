import React from 'react';

// CSS
import "./ssa.module.css";

// Importando Imagenes
//import Image1 from '../../final_assets/images/mapa_centrales_plazas.png';
//import Image2 from '../../final_assets/images/mapas_procedencia.png';
import Image3 from '../../final_assets/images/infografia_ssa.png';

// Marcador para Mapas
//import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';

// Importando Mapas
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // MUY importante, sin esto no funciona

// Importando informacion para mapas
import mapa1 from '../../final_assets/map_info/municipios_alimentos.json';
import mapa2 from '../../final_assets/map_info/sitios_mercados.json';



// Manejando informacion de mapas
// Mapa 1
var municipios = [], departamentos = [], rings = [];
for (let i = 0; i < mapa1.features.length; i++) {
    municipios.push(mapa1.features[i].attributes.MPIO_CNMBR);
    departamentos.push(mapa1.features[i].attributes.DPTO_CNMBR);
    rings.push(mapa1.features[i].geometry.rings);
}
console.log('mapa1',mapa1);
console.log('municipios',municipios);
console.log('departamentos',departamentos);
console.log('rings',rings);

// Mapa 2
var ubicaciones = [], names = [], tipos = [];
for (let i = 0; i < mapa2.features.length; i++) {
    ubicaciones.push([mapa2.features[i].geometry.y, mapa2.features[i].geometry.x]);
    names.push(mapa2.features[i].attributes.Name);
    tipos.push(mapa2.features[i].attributes.Tipo);
}



// Para Leaflet
var attr=
'Colaboradores de &copy;' +
'<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var ubicacion_colombia = [4.570868, -74.297333]; // Latitud y Longitud
// Iconos
// https://github.com/pointhi/leaflet-color-markers
var githublink = 
'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/';
var greenIcon  = githublink + 'marker-icon-2x-green.png';
var blueIcon   = githublink + 'marker-icon-2x-blue.png';
var greenShade = githublink + 'marker-icon-green.png';
var blueShade  = githublink + 'marker-icon-blue.png';



function SSA() {

    const mapRef = React.useRef(null);

    // event listener to handle marker click
    const handleClick = () => {
        mapRef.current._popup._closeButton.addEventListener('click', (event) => {
            event.preventDefault();
        })
    };

    return (
        <div>

            <h2>Sistema de Suministro de Alimentos</h2>
            <div className="landscape">
                <img src={Image3} alt="Infografia Resumen SSA"/>
            </div>

            <ul>
                <li>Cali no es un municipio productor de alimentos,
                pero es un polo de consumo para el sistema alimentario del
                suroccidente del pais.</li>

                <li>Ademas de constituir el mercado mas grande en el Suroccidente,
                Cali cumple la funcion de redistribuir alimentos y establecer
                precios de referencia.</li>

                <li>Mas de 2.5 millones de personas, incluyendo, principalmente, 
                a la poblacion de 7 municipios vecinos, 
                se abastecen de este sistema.</li>
            </ul>

            <div className="d-flex flex-row">

                <div className="p-2">
                    <ul>
                        <li>Procedencia de los alimentos</li>
                            <ul>
                                <li>80% de los granos secos que se comercializan en 
                                    la ciudad son importados</li>

                                <li>1317 productores a pequena escala en la zona 
                                    periurbana</li>

                                <li>65% de los productos provienen de los 
                                    departamentos de Cauca y Narino</li>
                            </ul>
                        <li>Industria Manufacturera de productos 
                            alimenticios</li>
                            <ul>
                                <li>984 Empresas de productos alimenticios</li>
                                <li>195 Empresas de macrosnacks</li>
                                <li>Crecimiento promedio anual en ventas de macrosnacks de
                                8.2% entre 2014 y 2019</li>
                            </ul>
                    </ul>
                </div>

                <div className="p-2">
                    <ul>
                        <li>Principales Mayoristas</li>
                            <ul>
                                <li>Reciben el 41% de los productos alimenticios 
                                    del Valle del Cauca</li>
                                <li>Cubren el 54% de la demanda de alimentos 
                                    en la ciudad</li>
                                <li>Santa Elena, 18-22 mil t/mes</li>
                                <li>CAVASA, 30 mil t/mes</li>
                            </ul>

                        <li>Otros puntos de venta de alimentos</li>
                            <ul>
                                <li>Plazas de Mercado</li>
                                <li>Supermercados</li>
                                <li>Restaurantes</li>
                                <li>Mercados campesinos</li>
                                <li>Mercados moviles</li>
                                <li>Tiendas de barrio</li>
                            </ul>
                    </ul>
                </div>
                
            </div>

            <p align="justify">
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
            </p>



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
            <p align="justify">
            A continuacion, podemos observar los 6 municipios con mayor
            y menor participacion en cada tipo de alimento.
            </p>

            <div class="d-flex justify-content-center">
                <div className="flex-fill btn-group btn-group-toggle" 
                data-toggle="buttons">
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option1" checked />
                        Carnes
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" checked />
                        Frutas
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option3" checked />
                        Granos y Cereales
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option4" checked />
                        Lacteos y Huevos
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option5" checked />
                        Pescados
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option6" checked />
                        Tuberculos, raices y platanos
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option7" checked />
                        Verduras y hortalizas
                    </label>
                </div>
            </div>

            <MapContainer 
                center={ubicacion_colombia}
                zoom={6}
                style={{ height: '80vh', width: '20wh' }}
                scrollWheelZoom={false}
                ref={mapRef}
            >
                <TileLayer
                    attribution={attr}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>



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
                center={ubicaciones[4]} 
                zoom={12} 
                style={{ height: '40vh', width: '20wh' }}
                scrollWheelZoom={false}
                ref={mapRef}
            >

                <TileLayer
                    attribution={attr}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker 
                    position={ubicaciones[0]}
                    eventHandlers={{
                        click: (e) => handleClick(),
                      }}
                    icon={new Icon({
                        iconUrl: blueIcon,
                        shadowUrl: blueShade,  
                        iconSize: [25, 41], 
                        iconAnchor: [12, 41]
                    })}
                >
                    <Popup>
                        <span>
                            {names[0]},<br />{tipos[0]}
                        </span>
                    </Popup>
                </Marker>

                <Marker 
                    position={ubicaciones[1]}
                    eventHandlers={{
                        click: (e) => handleClick(),
                      }}
                    icon={new Icon({
                        iconUrl: greenIcon,
                        shadowUrl: greenShade,
                        iconSize: [25, 41], 
                        iconAnchor: [12, 41]
                    })}
                >
                    <Popup>
                        <span>
                            {names[1]},<br />{tipos[1]}
                        </span>
                    </Popup>
                </Marker>

                <Marker 
                    position={ubicaciones[2]}
                    eventHandlers={{
                        click: (e) => handleClick(),
                      }}
                    icon={new Icon({
                        iconUrl: greenIcon,
                        shadowUrl: greenShade,
                        iconSize: [25, 41], 
                        iconAnchor: [12, 41]
                    })}
                >
                    <Popup>
                        <span>
                            {names[2]},<br />{tipos[2]}
                        </span>
                    </Popup>
                </Marker>

                <Marker 
                    position={ubicaciones[3]}
                    eventHandlers={{
                        click: (e) => handleClick(),
                      }}
                    icon={new Icon({
                        iconUrl: blueIcon,
                        shadowUrl: blueShade,  
                        iconSize: [25, 41], 
                        iconAnchor: [12, 41]
                    })}
                >
                    <Popup>
                        <span>
                            {names[3]},<br />{tipos[3]}
                        </span>
                    </Popup>
                </Marker>

                <Marker 
                    position={ubicaciones[4]}
                    eventHandlers={{
                        click: (e) => handleClick(),
                      }}
                    icon={new Icon({
                        iconUrl: greenIcon,
                        shadowUrl: greenShade,
                        iconSize: [25, 41], 
                        iconAnchor: [12, 41]
                    })}
                >
                    <Popup>
                        <span>
                            {names[4]},<br />{tipos[4]}
                        </span>
                    </Popup>
                </Marker>

                <Marker 
                    position={ubicaciones[5]}
                    eventHandlers={{
                        click: (e) => handleClick(),
                      }}
                    icon={new Icon({
                        iconUrl: greenIcon,
                        shadowUrl: greenShade,
                        iconSize: [25, 41], 
                        iconAnchor: [12, 41]
                    })}
                >
                    <Popup>
                        <span>
                            {names[5]},<br />{tipos[5]}
                        </span>
                    </Popup>
                </Marker>

                <Marker 
                    position={ubicaciones[6]}
                    eventHandlers={{
                        click: (e) => handleClick(),
                      }}
                    icon={new Icon({
                        iconUrl: greenIcon,
                        shadowUrl: greenShade,
                        iconSize: [25, 41], 
                        iconAnchor: [12, 41]
                    })}
                >
                    <Popup>
                        <span>
                            {names[6]},<br />{tipos[6]}
                        </span>
                    </Popup>
                </Marker>

            </MapContainer>

        </div>
    );
}

export default SSA;

/*
// Santa Elena
var ubicacion_elena    = [mapa2.features[0].geometry.y, mapa2.features[0].geometry.x];
var name_elena         = mapa2.features[0].attributes.Name;
var tipo_elena         = mapa2.features[0].attributes.Tipo;
//console.log('mapa2 features 0 geometry y x', ubicacion_elena);
//console.log('mapa2 features 0 attributes Name', name_elena);
// Alameda
var ubicacion_alameda  = [mapa2.features[1].geometry.y, mapa2.features[1].geometry.x];
var name_alameda       = mapa2.features[1].attributes.Name;
var tipo_alameda       = mapa2.features[1].attributes.Tipo;
// El Porvenir
var ubicacion_porvenir = [mapa2.features[2].geometry.y, mapa2.features[2].geometry.x];
var name_porvenir      = mapa2.features[2].attributes.Name;
var tipo_porvenir      = mapa2.features[2].attributes.Tipo;
// CAVASA
var ubicacion_cavasa   = [mapa2.features[3].geometry.y, mapa2.features[3].geometry.x];
var name_cavasa        = mapa2.features[3].attributes.Name;
var tipo_cavasa        = mapa2.features[3].attributes.Tipo;
// La Floresta
var ubicacion_floresta = [mapa2.features[4].geometry.y, mapa2.features[4].geometry.x];
var name_floresta      = mapa2.features[4].attributes.Name;
var tipo_floresta      = mapa2.features[4].attributes.Tipo;
// Siloe
var ubicacion_siloe    = [mapa2.features[5].geometry.y, mapa2.features[5].geometry.x];
var name_siloe         = mapa2.features[5].attributes.Name;
var tipo_siloe         = mapa2.features[5].attributes.Tipo;
// Alfonso Lopez
var ubicacion_lopez    = [mapa2.features[6].geometry.y, mapa2.features[6].geometry.x];
var name_lopez         = mapa2.features[6].attributes.Name;
var tipo_lopez         = mapa2.features[6].attributes.Tipo;



            <div className="landscape">
                <img src={Image1} alt="Mapa de Centrales Mayoristas y Plazas"/>
            </div>
*/