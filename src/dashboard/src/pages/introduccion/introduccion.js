import React from 'react';

// CSS
import "./introduccion.module.css";
//import styles from './introduccion.module.css';

// Importando Imagenes
import Image1 from '../../final_assets/images/infografia_tablero.png';
import Image2 from '../../final_assets/images/perfil_intro.png';

function introduccion() {
    return (
        <div>
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
            
            Este tablero muestra datos clave del Sistema Alimentario en Cali
            de acuerdo a un Marco de Analisis. Este Marco consiste en 5 Categorias
            y una Conclusion donde mostramos los Resultados del Sistema y el
            analisis, y cada parte tiene sus propias sub-categorias. Son:

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

        </div>
    );
}

export default introduccion;

/*
            <div className="landscape">
                <img src={Image1} alt="Infografia Introductoria del Tablero"/>
            </div>
*/