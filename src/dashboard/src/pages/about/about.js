import React from 'react';

// CSS
//import "./about.module.css";
//import styles from './about.module.css';

// Importando Imagenes
//import Image1 from '../../final_assets/images/infografia_tablero.png';
//import Image2 from '../../final_assets/images/perfil_intro.png';
//import Place1 from '../../final_assets/images/Placeholder1.png';

// Logos
import LogoCIAT from '../../final_assets/logos/ciat_biodiversity.png';
//import LogoBIOD from '../../final_assets/logos/biodiversity_logo.jpg';

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

                        <h2>Sara Rankin</h2>
                        <p>
                        Sara Rankin es asociada de investigación del área de
                        investigación de Entorno Alimentario y Comportamiento del
                        Consumidor (Alianza Bioversity-CIAT).
                        </p>
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

                        <h2>Leidy Johanna Hurtado</h2>
                        <p>
                        Leidy Johanna Hurtado es consultora estadística,
                        magíster en epidemiología; quien ha sido referente a
                        nivel departamental de la vigilancia epidemiológica
                        en inocuidad y su relación con las enfermedades
                        transmitidas a través de los alimentos.
                        </p>
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

                        <h2>Osana Bonilla-Findji</h2>
                        <p>
                        Osana Bonilla-Findji es científica asociada experta en
                        el tema de agricultura sostenible adaptada al clima
                        (Alianza Bioversity-CIAT).
                        </p>
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

                        <h2>Erika Eliana Mosquera</h2>
                        <p>
                        Erika Eliana Mosquera es comunicadora social,
                        analista del área de investigación Entorno Alimentario
                        y Comportamiento del Consumidor (Alianza Bioversity-CIAT).
                        </p>
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

                        <h2>Mark Lundy</h2>
                        <p>
                        Mark Lundy es director del área de investigación de
                        Entorno Alimentario y Comportamiento del Consumidor
                        (Alianza Bioversity-CIAT).
                        </p>
                    </div>

                </div>

                <hr className="featurette-divider" />

                <div align='center'>
                    <img src={LogoCIAT} alt="Logo del CIAT y Alianza"/>
                </div>

                Este estudio se llevó a cabo con el apoyo del Programa
                de Investigación sobre Agua, Tierra y Ecosistemas
                (WLE) del CGIAR. Puedes consultar este estudio en mas 
                detalle <a href="https://hdl.handle.net/10568/114362">aqui</a>.
                <br/>

                Los autores agradecen también a las organizaciones
                que brindaron información clave para el desarrollo del
                estudio: 
                <ul>
                    <li>Asotenderos</li>
                    <li>Banco de Alimentos de Cali</li>
                    <li>Cámara de Comercio de Cali</li>
                    <li>Central de Abastecimientos del Valle del Cauca (CAVASA)</li>
                    <li>Federación Nacional de Comerciantes (FENALCO) Valle</li>
                    <li>Pontificia Universidad Javeriana</li>
                    <li>RADDAR Consumer Knowledge Group</li>
                    <li>Secretaría de Bienestar Social</li>
                    <li>Secretaría de Desarrollo Económico Secretaría de 
                        Salud Pública Departamental</li>
                    <li>Unidad Municipal de Asistencia Técnica (UMATA) de la 
                        Subdirección de Gestión Integral de Ecosistemas y UMATA</li>
                    <li>Universidad Autónoma de Occidente</li>
                    <li>Universidad del Valle</li>
                </ul>

            </div>

            <hr className="featurette-divider" />
            
            <h2>Sede CIAT</h2>
            Para mas informacion, puedes visitar <a href="https://bit.ly/3f4FHyE">
            nuestro sitio web</a>.

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

                        <h2>Erika Eliana Mosquera</h2>
                        <p>
                        Erika Eliana Mosquera es comunicadora social,
                        analista del área de investigación Entorno Alimentario
                        y Comportamiento del Consumidor (Alianza Bioversity-CIAT).
                        </p>
                        <p><a className="btn btn-secondary" href="#/about">
                            Ver detalles &raquo;</a></p>
                    </div>
*/