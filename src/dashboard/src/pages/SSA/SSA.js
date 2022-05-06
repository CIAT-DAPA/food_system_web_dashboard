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
            <div className="portrait">
                <img src={Image2} alt="Mapa de Procedencia de Alimentos por Municipio"/>
            </div>
            
            <h2>Almacenamiento y distribucion</h2>
            <div className="landscape">
                <img src={Image1} alt="Mapa de Centrales Mayoristas y Plazas"/>
            </div>
        </div>
    );
}

export default ssa;