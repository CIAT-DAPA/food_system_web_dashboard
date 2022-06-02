import React from 'react';

// CSS
import "./about.module.css";
//import styles from './about.module.css';

// Importando Imagenes
//import Image1 from '../../final_assets/images/infografia_tablero.png';
//import Image2 from '../../final_assets/images/perfil_intro.png';
//import Place1 from '../../final_assets/images/Placeholder1.png';

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
var ubicacion_ciat = [3.5025954,-76.35724]; // Latitud y Longitud
// Iconos
// https://github.com/pointhi/leaflet-color-markers
var githublink = 
'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/';
//var greenIcon  = githublink + 'marker-icon-2x-green.png';
var blueIcon   = githublink + 'marker-icon-2x-blue.png';
//var greenShade = githublink + 'marker-icon-green.png';
var blueShade  = githublink + 'marker-icon-blue.png';



function About() {

    const mapRef = React.useRef(null);

    // event listener to handle marker click
    const handleClick = () => {
        mapRef.current._popup._closeButton.addEventListener('click', (event) => {
            event.preventDefault();
        })
    };

    return (
        <div>

            <div className="container marketing">

                <h2>Acerca de Nosotros</h2>
                Narrativa de texto...
                <hr className="featurette-divider" />

                <div className="row">

                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" 
                        width="140" height="140" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" aria-label="Placeholder: 140x140" 
                        preserveAspectRatio="xMidYMid slice" 
                        focusable="false">
                            <title>Placeholder</title>
                            <rect 
                            width="100%" height="100%" 
                            fill="#777"/>
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140</text>
                        </svg>

                        <h2>Persona 1</h2>
                        <p>Aqui puede ir texto sobre una persona involucrada
                            en el desarrollo del Perfil.
                        </p>
                        <p><a className="btn btn-secondary" href="#/about">
                            Ver detalles &raquo;</a></p>
                    </div>

                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" 
                        width="140" height="140" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" aria-label="Placeholder: 140x140" 
                        preserveAspectRatio="xMidYMid slice" 
                        focusable="false">
                            <title>Placeholder</title>
                            <rect 
                            width="100%" height="100%" 
                            fill="#777"/>
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140</text>
                        </svg>

                        <h2>Persona 2</h2>
                        <p>Aqui puede ir texto sobre una persona involucrada
                            en el desarrollo del Perfil.</p>
                        <p><a className="btn btn-secondary" href="#/about">
                            Ver detalles &raquo;</a></p>
                    </div>

                    <div className="col-lg-4">
                        <svg className="bd-placeholder-img rounded-circle" 
                        width="140" height="140" 
                        xmlns="http://www.w3.org/2000/svg" 
                        role="img" aria-label="Placeholder: 140x140" 
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" 
                            fill="#777"/>
                            <text x="50%" y="50%" fill="#777" dy=".3em">
                                140x140</text></svg>

                        <h2>Persona 3</h2>
                        <p>Aqui puede ir texto sobre una persona involucrada
                            en el desarrollo del Perfil.</p>
                        <p><a className="btn btn-secondary" href="#/about">
                            Ver detalles &raquo;</a></p>
                    </div>

                </div>
            </div>

            <hr className="featurette-divider" />
            
            <h2>Ubicacion del CIAT</h2>
            <ul>
                <li>Nota: #xxxx</li>

                <li>Oficinas: #xxxx</li>

                <li>Direcciones: #xxxx</li>
            </ul>

            <MapContainer 
                center={ubicacion_ciat} 
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
                    position={ubicacion_ciat}
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
                            Centro Internacional de<br />Agricultura Tropical
                        </span>
                    </Popup>
                </Marker>
            </MapContainer>
            
        </div>
    );
}

export default About;

/*
            <div className="landscape">
                <img src={Image1} alt="Infografia Introductoria del Tablero"/>
            </div>
*/