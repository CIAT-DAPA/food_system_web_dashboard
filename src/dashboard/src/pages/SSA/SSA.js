import React from 'react';

// Importando Imagenes
import Image1 from '../../final_assets/mapa_habha.png';
import Image2 from '../../final_assets/mapa_demanda.png';

function ssa() {
    return (
        <div>
            <div>
                <img src={Image1} alt="Mapa de Densidad Hab/Ha"/>
            </div>
            <div>
                <img src={Image2} alt="Mapa de Localizacion de Demanda"/>
            </div>
        </div>
    );
}

export default ssa;