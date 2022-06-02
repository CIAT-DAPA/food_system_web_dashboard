import React from 'react';

// CSS
import "./introduccion.module.css";
//import styles from './introduccion.module.css';

// Importando Imagenes
//import Image1 from '../../final_assets/images/infografia_tablero.png';
import Image2 from '../../final_assets/images/perfil_intro.png';

import Place1 from '../../final_assets/images/Placeholder1.png';
import Place2 from '../../final_assets/images/Placeholder2.png';
import Place3 from '../../final_assets/images/Placeholder3.png';



// Marcador para Mapas
//import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';

// Importando Mapas
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // MUY importante, sin esto no funciona



// Para Leaflet
var attr=
'Colaboradores de &copy;' +
'<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var ubicacion_cali = [3.359889, -76.638565]; // Latitud y Longitud
// Iconos
// https://github.com/pointhi/leaflet-color-markers
var githublink = 
'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/';
//var greenIcon  = githublink + 'marker-icon-2x-green.png';
var blueIcon   = githublink + 'marker-icon-2x-blue.png';
//var greenShade = githublink + 'marker-icon-green.png';
var blueShade  = githublink + 'marker-icon-blue.png';



function Introduccion() {

    const mapRef = React.useRef(null);

    // event listener to handle marker click
    const handleClick = () => {
        mapRef.current._popup._closeButton.addEventListener('click', (event) => {
            event.preventDefault();
        })
    };

    return (
        <div>

            <div className="landscape">
                <img src={Image2} alt="Introduccion Perfil"/>
            </div>

            <div className="container marketing">
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            El Tablero y
                            <span className="text-muted"> sus Componentes.</span>
                        </h2>
                        <p className="lead">
                        Este tablero busca presentar todos los componentes del 
                        sistema alimentario de Cali como ciudad-región, 
                        para entender sus características, dinámicas y vulnerabilidades, 
                        con el fin de identificar oportunidades de fortalecimiento y 
                        acción desde diferentes perspectivas. 
                        Si bien el ejercicio se enfoca en el municipio de Cali 
                        como polo de consumo, busca también evidenciar su estrecha 
                        relación tanto con zonas productoras como con otras 
                        localidades “receptoras” que se abastecen del flujo de 
                        alimentos que transita y se redistribuye por la ciudad. 
                        Basado en la mejor evidencia disponible, este diagnóstico 
                        buscó ser una herramienta para la toma de decisiones, 
                        que ayude a los actores del sistema alimentario de Cali a 
                        construir juntos una visión común y la hoja de ruta necesaria 
                        para impulsar su transformación de modo sostenible. 
                        </p>
                    </div>

                    <div className="col-md-5">
                        <img src={Place1} alt="Placeholder 1"/>
                    </div>
                
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">

                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">
                            Consideraciones sobre los  
                        <span className="text-muted"> sistemas alimentarios.</span></h2>
                        <p className="lead">
                        Un sistema alimentario describe todos los elementos y 
                        actividades relacionados con la producción, la transformación, 
                        el envasado, la distribución, la comercialización, el consumo 
                        y la eliminación de los alimentos, así como todos los insumos 
                        y productos asociados. Los sistemas alimentarios, si son 
                        sostenibles, aportan beneficios a las personas, a las 
                        comunidades, a la sociedad y al medio ambiente, ya que 
                        proporcionan alimentos sanos y nutritivos, generan 
                        oportunidades de negocio inclusivos y rentables para los 
                        agentes de la cadena de suministro – desde los agricultores 
                        familiares hasta los vendedores del mercado – y ayudan a 
                        conservar el entorno natural y su 
                        biodiversidad (HLPE, 2017).
                        </p>
                    </div>

                    <div className="col-md-5 order-md-1">
                        <img src={Place2} alt="Placeholder 2"/>
                    </div>

                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">

                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            Marco de 
                            <span className="text-muted"> Analisis.</span>
                        </h2>
                        <p className="lead">
                        El marco de análisis utilizado para caracterizar este sistema 
                        (De Brauw et al., 2019, adaptado de HLPE, 2017) ya ha sido 
                        aplicado para entender sistemas alimentarios de otras ciudades 
                        y países de Asia, África y Latinoamérica. Este marco analítico 
                        considera tres grandes bloques de información: <b>(a)</b> los 
                        determinantes del sistema; <b>(b)</b> los componentes del 
                        sistema, y <b>(c)</b> los resultados del sistema. 
                        Reconoce cómo los determinantes ambientales, demográficos, 
                        tecnológicos, políticos, económicos, sociales y culturales influencian 
                        el sistema alimentario – desde la producción hasta el consumo –, 
                        así como el funcionamiento de los componentes del sistema: 
                        el suministro de alimentos, el entorno alimentario, el 
                        comportamiento del consumidor y las dietas. 
                        Además, considera las diversas interacciones que tienen 
                        lugar entre estos componentes y cuáles son, finalmente, 
                        sus resultados en los estados nutricionales y de salud, 
                        en la seguridad alimentaria, y en las condiciones 
                        ambientales y socioeconómicas de la población en general.  
                        </p>
                    </div>

                    <div className="col-md-5">
                        <img src={Place3} alt="Placeholder 3"/>
                    </div>

                </div>

                <hr className="featurette-divider" />
            </div>

            <h2>Ubicacion de Cali</h2>

            <MapContainer 
                center={ubicacion_cali} 
                zoom={5} 
                style={{ height: '40vh', width: '20wh' }}
                scrollWheelZoom={false}
                ref={mapRef}
            >
                <TileLayer
                    attribution={attr}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                    position={ubicacion_cali}
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
                            Valle del Cauca,<br />Santiago de Cali
                        </span>
                    </Popup>
                </Marker>
            </MapContainer>
            
        </div>
    );
}

export default Introduccion;

/*
            <div className="landscape">
                <img src={Image1} alt="Infografia Introductoria del Tablero"/>
            </div>

            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" 
                    data-bs-slide-to="0" aria-label="Slide 1" 
                    className="active" aria-current="true"></button>

                    <button type="button" data-bs-target="#myCarousel" 
                    data-bs-slide-to="1" aria-label="Slide 2" 
                    className=""></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img className='bd-placeholder-img' 
                        width="100%" height="100%" 
                        aria-hidden="true" alt="" 
                        src={Image2} />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1> </h1>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                    <img className='bd-placeholder-img' 
                        width="100%" height="100%" 
                        aria-hidden="true" alt="" 
                        src={Image1} />

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1> </h1>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" 
                data-bs-target="#myCarousel" 
                data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" 
                    aria-hidden="true"></span>
                </button>

                <button className="carousel-control-next" type="button" 
                data-bs-target="#myCarousel" 
                data-bs-slide="next">
                    <span className="carousel-control-next-icon" 
                    aria-hidden="true"></span>
                </button>

            </div>

            Este Marco consiste en 5 Categorias y una Conclusion donde mostramos los 
            Resultados del Sistema y el analisis, y cada parte tiene sus propias 
            sub-categorias. Son:

                <ul>
                    <li>Determinantes</li>
                    <ul>
                        <li>Biofisicos y Ambientales</li>
                        <li>Demograficos</li>
                        <li>Tecnologicos</li>
                        <li>Economicos y Politicos</li>
                        <li>Socioculturales</li>
                    </ul>
                    <li>Sistema de Suministro de Alimentos</li>
                    <ul>
                        <li>Produccion</li>
                        <li>Almacenamiento y Distribucion</li>
                        <li>Procesamiento y Empaque</li>
                        <li>Comercializacion</li>
                    </ul>
                    <li>Comportamiento del Consumidor</li>
                    <ul>
                        <li>Preferencias</li>
                        <li>Tiendas minoristas</li>
                        <li>Conveniencia</li>
                        <li>Creencias</li>
                        <li>Variables Socio-economicas</li>
                    </ul>
                    <li>Dietas</li>
                    <ul>
                        <li>Caracterizacion y Calidad</li>
                        <li>Adecuacion</li>
                    </ul>
                    <li>Entorno Alimentario</li>
                    <ul>
                        <li>Disponibilidad</li>
                        <li>Calidad e Inocuidad</li>
                        <li>Asequibilidad</li>
                        <li>Promocion de Alimentos</li>
                        <li>Perdidas y Desperdicios</li>
                    </ul>
                    <li>Resultados</li>
                    <ul>
                        <li>En Nutricion y Estado de Salud</li>
                        <li>En Seguridad Alimentaria</li>
                        <li>Socio-economicos y de Bienestar</li>
                        <li>Ambientales</li>
                    </ul>
                </ul> 



                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
                        width="500" height="500" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" aria-label="Placeholder: 500x500" 
                        preserveAspectRatio="xMidYMid slice" 
                        focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#eee"/>
                            <text x="50%" y="50%" fill="#aaa" dy=".3em">
                                500x500</text>
                        </svg>

                    </div>
*/