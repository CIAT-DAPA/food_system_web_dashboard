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
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';

// Importando Mapas
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // MUY importante, sin esto no funciona

var attr=
'Colaboradores de &copy;' +
'<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var ubicacion_cali = [3.359889, -76.638565]; // Latitud y Longitud

function introduccion() {
    return (
        <div>

            <div className="landscape">
                <img src={Image2} alt="Introduccion Perfil"/>
            </div>

            <hr className="featurette-divider" />
            
            Este tablero muestra datos clave del Sistema Alimentario en Cali
            de acuerdo a un Marco de Analisis.

            A continuacion puedes encontrar un mapa de Cali:

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

            <div className="container marketing">
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">
                            Primer Featurette.
                            <span className="text-muted"> Emfasis 1.</span>
                        </h2>
                        <p className="lead">
                            Texto placeholder aqui por el momento.
                        </p>
                    </div>

                    <div className="col-md-5">
                        <img src={Place1} alt="Placeholder 1"/>
                    </div>
                
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">

                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Segundo Featurette.
                        <span className="text-muted"> Emfasis 2.</span></h2>
                        <p className="lead">
                            Texto placeholder aqui por el momento.
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
                            Tercer Featurette.
                            <span className="text-muted"> Emfasis 3.</span>
                        </h2>
                        <p className="lead">
                            Texto placeholder aqui por el momento.
                        </p>
                    </div>

                    <div className="col-md-5">
                        <img src={Place3} alt="Placeholder 3"/>
                    </div>

                </div>

                <hr className="featurette-divider" />
            </div>
            
        </div>
    );
}

export default introduccion;

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