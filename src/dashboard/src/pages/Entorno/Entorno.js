import React from 'react';

import Image1 from '../../final_assets/mapa_habha.png';
import Image2 from '../../final_assets/mapa_demanda.png';
import Image3 from '../../final_assets/infografia_entorno.png';

function entorno() {
    return (
        <div>
            <div>
                <img src={Image3} alt="Infografia del Entorno Alimentario"/>
            </div>
            <div>
                <img src={Image1} alt="Mapa de Densidad Hab/Ha"/>
            </div>
            <div>
                <img src={Image2} alt="Mapa de Localizacion de Demanda"/>
            </div>
        </div>
    );
}

export default entorno;