import React from 'react';

// CSS
import "./ssa.module.css";

// Importando Imagenes
//import Image1 from '../../final_assets/images/mapa_centrales_plazas.png';
//import Image2 from '../../final_assets/images/mapas_procedencia.png';
import Image3 from '../../final_assets/images/infografia_ssa.png';

// Marcador para Mapas
//import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';

// Importando Mapas
import { MapContainer, TileLayer, Marker, Popup, LayersControl,
LayerGroup, FeatureGroup, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // MUY importante, sin esto no funciona

// Importando informacion para mapas
import mapa1 from '../../final_assets/map_info/municipios_alimentos.json';
import mapa2 from '../../final_assets/map_info/sitios_mercados.json';

// MAPA 1
// https://wiki.openstreetmap.org/wiki/Tile_servers
// https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png



// Manejando informacion de mapas
// //////////////////////////////

// Mapa 1

// Necesario para invertir coordenadas para React-Leaflet
// Otra forma no existe a mi conocimiento en React especificamente,
// la documentacion sobre soporte de GeoJSON es minima
// https://stackoverflow.com/questions/19652840/
// reverse-entries-in-multi-dimensional-array-in-javascript
function reverseArray (array) {
    var reversed = array.map(function reverse(item) {
        return Array.isArray(item) && Array.isArray(item[0]) 
                   ? item.map(reverse) 
                   : item.reverse();
    });
    //console.log("reverse exitoso");
    return reversed;
};

// Carnes
var municipios_carnes = [];
for (let i = 0; i < mapa1.features.length; i++) {
    if (mapa1.features[i].attributes.CARNES !== 0) {
        municipios_carnes.push(mapa1.features[i]);
    }
}
//console.log("municipios_carnes",municipios_carnes);
var municipios_carnes_poligonos = [];
var municipios_carnes_participa = [];
var municipios_carnes_info = [];
for (let i = 0; i < municipios_carnes.length; i++) {
    municipios_carnes_poligonos.push(
        reverseArray(municipios_carnes[i].geometry.rings)
    );
    //console.log("variable i es",i);
    municipios_carnes_participa.push(
        municipios_carnes[i].attributes.CARNES
    );
    municipios_carnes_info.push(
        municipios_carnes[i].attributes.MPIO_CNMBR + ", " +
        municipios_carnes[i].attributes.DPTO_CNMBR
    );
}
//console.log("municipios_carnes_poligonos",municipios_carnes_poligonos);
//console.log("municipios_carnes_participa",municipios_carnes_participa);
//console.log("municipios_carnes_info",municipios_carnes_info);

// Frutas
var municipios_frutas = [];
for (let i = 0; i < mapa1.features.length; i++) {
    if (mapa1.features[i].attributes.FRUTAS !== 0) {
        municipios_frutas.push(mapa1.features[i]);
    }
}
var municipios_frutas_poligonos = [];
var municipios_frutas_participa = [];
var municipios_frutas_info = [];
for (let i = 0; i < municipios_frutas.length; i++) {
    municipios_frutas_poligonos.push(
        reverseArray(municipios_frutas[i].geometry.rings)
    );
    municipios_frutas_participa.push(
        municipios_frutas[i].attributes.FRUTAS
    );
    municipios_frutas_info.push(
        municipios_frutas[i].attributes.MPIO_CNMBR + ", " +
        municipios_frutas[i].attributes.DPTO_CNMBR
    );
}
//console.log("municipios_frutas_participa",municipios_frutas_participa);

// Granos y Cereales
var municipios_granos = [];
for (let i = 0; i < mapa1.features.length; i++) {
    if (mapa1.features[i].attributes.GRA_CER !== 0) {
        municipios_granos.push(mapa1.features[i]);
    }
}
var municipios_granos_poligonos = [];
var municipios_granos_participa = [];
var municipios_granos_info = [];
for (let i = 0; i < municipios_granos.length; i++) {
    municipios_granos_poligonos.push(
        reverseArray(municipios_granos[i].geometry.rings)
    );
    municipios_granos_participa.push(
        municipios_granos[i].attributes.GRA_CER
    );
    municipios_granos_info.push(
        municipios_granos[i].attributes.MPIO_CNMBR + ", " +
        municipios_granos[i].attributes.DPTO_CNMBR
    );
}
//console.log("municipios_granos_participa",municipios_granos_participa);

// Lacteos y Huevos
var municipios_lacteos = [];
for (let i = 0; i < mapa1.features.length; i++) {
    if (mapa1.features[i].attributes.LAC_HUE !== 0) {
        municipios_lacteos.push(mapa1.features[i]);
    }
}
var municipios_lacteos_poligonos = [];
var municipios_lacteos_participa = [];
var municipios_lacteos_info = [];
for (let i = 0; i < municipios_lacteos.length; i++) {
    municipios_lacteos_poligonos.push(
        reverseArray(municipios_lacteos[i].geometry.rings)
    );
    municipios_lacteos_participa.push(
        municipios_lacteos[i].attributes.LAC_HUE
    );
    municipios_lacteos_info.push(
        municipios_lacteos[i].attributes.MPIO_CNMBR + ", " +
        municipios_lacteos[i].attributes.DPTO_CNMBR
    );
}
//console.log("municipios_lacteos_participa",municipios_lacteos_participa);

// Pescados
var municipios_pescados = [];
for (let i = 0; i < mapa1.features.length; i++) {
    if (mapa1.features[i].attributes.PESCADOS !== 0) {
        municipios_pescados.push(mapa1.features[i]);
    }
}
var municipios_pescados_poligonos = [];
var municipios_pescados_participa = [];
var municipios_pescados_info = [];
for (let i = 0; i < municipios_pescados.length; i++) {
    municipios_pescados_poligonos.push(
        reverseArray(municipios_pescados[i].geometry.rings)
    );
    municipios_pescados_participa.push(
        municipios_pescados[i].attributes.PESCADOS
    );
    municipios_pescados_info.push(
        municipios_pescados[i].attributes.MPIO_CNMBR + ", " +
        municipios_pescados[i].attributes.DPTO_CNMBR
    );
}
//console.log("municipios_pescados_participa",municipios_pescados_participa);

// Tuberculos, raices y platanos
var municipios_raices = [];
for (let i = 0; i < mapa1.features.length; i++) {
    if (mapa1.features[i].attributes.TUBERCULOS !== 0) {
        municipios_raices.push(mapa1.features[i]);
    }
}
var municipios_raices_poligonos = [];
var municipios_raices_participa = [];
var municipios_raices_info = [];
for (let i = 0; i < municipios_raices.length; i++) {
    municipios_raices_poligonos.push(
        reverseArray(municipios_raices[i].geometry.rings)
    );
    municipios_raices_participa.push(
        municipios_raices[i].attributes.TUBERCULOS
    );
    municipios_raices_info.push(
        municipios_raices[i].attributes.MPIO_CNMBR + ", " +
        municipios_raices[i].attributes.DPTO_CNMBR
    );
}
//console.log("municipios_raices_participa",municipios_raices_participa);

// Verduras y Hortalizas
var municipios_verduras = [];
for (let i = 0; i < mapa1.features.length; i++) {
    if (mapa1.features[i].attributes.VERD_HOR !== 0) {
        municipios_verduras.push(mapa1.features[i]);
    }
}
var municipios_verduras_poligonos = [];
var municipios_verduras_participa = [];
var municipios_verduras_info = [];
for (let i = 0; i < municipios_verduras.length; i++) {
    municipios_verduras_poligonos.push(
        reverseArray(municipios_verduras[i].geometry.rings)
    );
    municipios_verduras_participa.push(
        municipios_verduras[i].attributes.VERD_HOR
    );
    municipios_verduras_info.push(
        municipios_verduras[i].attributes.MPIO_CNMBR + ", " +
        municipios_verduras[i].attributes.DPTO_CNMBR
    );
}
//console.log("municipios_verduras_participa",municipios_verduras_participa);

// Colores
// https://leafletjs.com/examples/choropleth/
function getColor(d) {
    /*
    return d > 1    ? '#800026' :
           d > 0.6  ? '#BD0026' :
           d > 0.4  ? '#E31A1C' :
           d > 0.2  ? '#FC4E2A' :
           d < 0    ? '#FD8D3C' :
           d < -1   ? '#FEB24C' :
           d < -10  ? '#FED976' :
                      '#FFEDA0';
    */
    return d > 0  ? '#800026' :
           d < 0  ? '#FED976' :
                    '#FFEDA0';
}



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
var attr2=
'Colaboradores de &copy;' +
'<a href="https://carto.com/">CARTO</a>';
var ubicacion_colombia = [4.570868, -74.297333]; // Latitud y Longitud
// Iconos
// https://github.com/pointhi/leaflet-color-markers
var githublink = 
'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/';
var greenIcon  = githublink + 'marker-icon-2x-green.png';
var blueIcon   = githublink + 'marker-icon-2x-blue.png';
var greenShade = githublink + 'marker-icon-green.png';
var blueShade  = githublink + 'marker-icon-blue.png';

/*
const center = [51.505, -0.09]
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]
const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ]
*/



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
            A continuacion, podemos observar los municipios con mayor
            y menor participacion en cada tipo de alimento.
            </p>

            <MapContainer 
                center={ubicacion_colombia}
                zoom={6}
                style={{ height: '80vh', width: '20wh' }}
                scrollWheelZoom={false}
                ref={mapRef}
            >
                <TileLayer
                attribution={attr2}
                url=
                "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />

                <LayersControl position="topright">

                    <LayersControl.Overlay checked name="Carnes">
                        <LayerGroup>

                            <Polygon 
                            positions={municipios_carnes_poligonos[0]}
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_carnes_participa[0]) }}
                            >
                                <Tooltip sticky>
                                    {municipios_carnes_info[0]}, <br/>
                                    Participacion {municipios_carnes_participa[0]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_carnes_poligonos[1]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_carnes_participa[1]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_carnes_info[1]}, <br/>
                                    Participacion {municipios_carnes_participa[1]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_carnes_poligonos[2]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_carnes_participa[2]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_carnes_info[2]}, <br/>
                                    Participacion {municipios_carnes_participa[2]}
                                </Tooltip>
                                </Polygon>

                            <Polygon 
                            positions={municipios_carnes_poligonos[3]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_carnes_participa[3]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_carnes_info[3]}, <br/>
                                    Participacion {municipios_carnes_participa[3]}
                                </Tooltip>
                                </Polygon>

                            <Polygon 
                            positions={municipios_carnes_poligonos[4]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_carnes_participa[4]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_carnes_info[4]}, <br/>
                                    Participacion {municipios_carnes_participa[4]}
                                </Tooltip>
                                </Polygon>

                            <Polygon 
                            positions={municipios_carnes_poligonos[5]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_carnes_participa[5]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_carnes_info[5]}, <br/>
                                    Participacion {municipios_carnes_participa[5]}
                                </Tooltip>
                                </Polygon>

                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Frutas">
                        <LayerGroup>

                            <Polygon 
                            positions={municipios_frutas_poligonos[0]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_frutas_participa[0]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_frutas_info[0]}, <br/>
                                    Participacion {municipios_frutas_participa[0]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_frutas_poligonos[1]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_frutas_participa[1]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_frutas_info[1]}, <br/>
                                    Participacion {municipios_frutas_participa[1]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_frutas_poligonos[2]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_frutas_participa[2]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_frutas_info[2]}, <br/>
                                    Participacion {municipios_frutas_participa[2]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_frutas_poligonos[3]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_frutas_participa[3]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_frutas_info[3]}, <br/>
                                    Participacion {municipios_frutas_participa[3]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_frutas_poligonos[4]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_frutas_participa[4]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_frutas_info[4]}, <br/>
                                    Participacion {municipios_frutas_participa[4]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_frutas_poligonos[5]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_frutas_participa[5]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_frutas_info[5]}, <br/>
                                    Participacion {municipios_frutas_participa[5]}
                                </Tooltip>
                            </Polygon>

                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Granos y Cereales">
                        <LayerGroup>

                            <Polygon 
                            positions={municipios_granos_poligonos[0]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_granos_participa[0]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_granos_info[0]}, <br/>
                                    Participacion {municipios_granos_participa[0]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_granos_poligonos[1]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_granos_participa[1]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_granos_info[1]}, <br/>
                                    Participacion {municipios_granos_participa[1]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_granos_poligonos[2]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_granos_participa[2]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_granos_info[2]}, <br/>
                                    Participacion {municipios_granos_participa[2]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_granos_poligonos[3]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_granos_participa[3]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_granos_info[3]}, <br/>
                                    Participacion {municipios_granos_participa[3]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_granos_poligonos[4]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_granos_participa[4]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_granos_info[4]}, <br/>
                                    Participacion {municipios_granos_participa[4]}
                                </Tooltip>
                            </Polygon>

                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Lacteos y Huevos">
                        <LayerGroup>
                            <Polygon 
                            positions={municipios_lacteos_poligonos[0]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_lacteos_participa[0]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_lacteos_info[0]}, <br/>
                                    Participacion {municipios_lacteos_participa[0]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_lacteos_poligonos[1]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_lacteos_participa[1]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_lacteos_info[1]}, <br/>
                                    Participacion {municipios_lacteos_participa[1]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_lacteos_poligonos[2]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_lacteos_participa[2]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_lacteos_info[2]}, <br/>
                                    Participacion {municipios_lacteos_participa[2]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_lacteos_poligonos[3]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_lacteos_participa[3]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_lacteos_info[3]}, <br/>
                                    Participacion {municipios_lacteos_participa[3]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_lacteos_poligonos[4]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_lacteos_participa[4]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_lacteos_info[4]}, <br/>
                                    Participacion {municipios_lacteos_participa[4]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_lacteos_poligonos[5]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_lacteos_participa[5]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_lacteos_info[5]}, <br/>
                                    Participacion {municipios_lacteos_participa[5]}
                                </Tooltip>
                            </Polygon>

                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Pescados">
                        <LayerGroup>
                            <Polygon 
                            positions={municipios_pescados_poligonos[0]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_pescados_participa[0]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_pescados_info[0]}, <br/>
                                    Participacion {municipios_pescados_participa[0]}
                                </Tooltip>
                            </Polygon>

                            <Polygon 
                            positions={municipios_pescados_poligonos[1]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_pescados_participa[1]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_pescados_info[1]}, <br/>
                                    Participacion {municipios_pescados_participa[1]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_pescados_poligonos[2]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_pescados_participa[2]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_pescados_info[2]}, <br/>
                                    Participacion {municipios_pescados_participa[2]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_pescados_poligonos[3]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_pescados_participa[3]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_pescados_info[3]}, <br/>
                                    Participacion {municipios_pescados_participa[3]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_pescados_poligonos[4]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_pescados_participa[4]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_pescados_info[4]}, <br/>
                                    Participacion {municipios_pescados_participa[4]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_pescados_poligonos[5]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_pescados_participa[5]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_pescados_info[5]}, <br/>
                                    Participacion {municipios_pescados_participa[5]}
                                </Tooltip>
                            </Polygon>
                            
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Tuberculos, raices y platanos">
                        <LayerGroup>
                            <Polygon 
                            positions={municipios_raices_poligonos[0]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_raices_participa[0]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_raices_info[0]}, <br/>
                                    Participacion {municipios_raices_participa[0]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_raices_poligonos[1]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_raices_participa[1]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_raices_info[1]}, <br/>
                                    Participacion {municipios_raices_participa[1]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_raices_poligonos[2]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_raices_participa[2]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_raices_info[2]}, <br/>
                                    Participacion {municipios_raices_participa[2]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_raices_poligonos[3]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_raices_participa[3]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_raices_info[3]}, <br/>
                                    Participacion {municipios_raices_participa[3]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_raices_poligonos[4]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_raices_participa[4]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_raices_info[4]}, <br/>
                                    Participacion {municipios_raices_participa[4]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_raices_poligonos[5]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_raices_participa[5]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_raices_info[5]}, <br/>
                                    Participacion {municipios_raices_participa[5]}
                                </Tooltip>
                            </Polygon>
                            
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Verduras y Hortalizas">
                        <FeatureGroup>
                            <Polygon 
                            positions={municipios_verduras_poligonos[0]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_verduras_participa[0]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_verduras_info[0]}, <br/>
                                    Participacion {municipios_verduras_participa[0]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_verduras_poligonos[1]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_verduras_participa[1]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_verduras_info[1]}, <br/>
                                    Participacion {municipios_verduras_participa[1]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_verduras_poligonos[2]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_verduras_participa[2]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_verduras_info[2]}, <br/>
                                    Participacion {municipios_verduras_participa[2]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_verduras_poligonos[3]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_verduras_participa[3]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_verduras_info[3]}, <br/>
                                    Participacion {municipios_verduras_participa[3]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_verduras_poligonos[4]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_verduras_participa[4]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_verduras_info[4]}, <br/>
                                    Participacion {municipios_verduras_participa[4]}
                                </Tooltip>
                            </Polygon>
                            
                            <Polygon 
                            positions={municipios_verduras_poligonos[5]} 
                            pathOptions={{
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '3',
                                fillOpacity: 0.7,
                                fillColor: getColor(municipios_verduras_participa[5]) }}
                                >
                                <Tooltip sticky>
                                    {municipios_verduras_info[5]}, <br/>
                                    Participacion {municipios_verduras_participa[5]}
                                </Tooltip>
                            </Polygon>
                            
                        </FeatureGroup>
                    </LayersControl.Overlay>
                    
                </LayersControl>

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



            <div className="d-flex justify-content-center">
                <div className="flex-fill btn-group btn-group-toggle" 
                data-toggle="buttons">
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option1" 
                         />
                        Carnes
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option2" 
                         />
                        Frutas
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option3" 
                         />
                        Granos y Cereales
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option4" 
                         />
                        Lacteos y Huevos
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option5" 
                         />
                        Pescados
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option6" 
                         />
                        Tuberculos, raices y platanos
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option7" 
                         />
                        Verduras y hortalizas
                    </label>
                </div>
            </div>
*/