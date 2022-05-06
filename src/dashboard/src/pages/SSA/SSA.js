import React from 'react';

// CSS
import "./ssa.module.css";

// Importando Imagenes
import Image1 from '../../final_assets/mapa_centrales_plazas.png';
import Image2 from '../../final_assets/mapas_procedencia.png';
import Image3 from '../../final_assets/infografia_ssa.png';

function ssa() {
    return (
        <div>
            <h2>Resumen</h2>
            <div className="landscape">
                <img src={Image3} alt="Infografia Resumen SSA"/>
            </div>

            <h2>Produccion y abastecimiento</h2>

            Las actividades económicas en el municipio (más del
            90%) están esencialmente relacionadas con el sector
            de bienes y servicios. La zona rural concentra extensas
            áreas de cultivo de caña de azúcar, destinadas a la
            industria azucarera del departamento, y una pequeña
            producción de hortalizas y cítricos para el autoconsumo,
            provenientes en el 83% de los casos, de unidades de
            menos de 5 ha.

            <div className="portrait">
                <img src={Image2} alt="Mapa de Procedencia de Alimentos por Municipio"/>
            </div>
            
            <h2>Almacenamiento y distribucion</h2>

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

            <div className="landscape">
                <img src={Image1} alt="Mapa de Centrales Mayoristas y Plazas"/>
            </div>
        </div>
    );
}

export default ssa;