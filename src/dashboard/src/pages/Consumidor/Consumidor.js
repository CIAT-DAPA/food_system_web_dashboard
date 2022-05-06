import React from 'react';

// CSS
import "./consumidor.module.css";

// Importando Imagenes
import Image1 from '../../final_assets/infografia_consumidor.png';

function consumidor() {
    return (
        <div>
            <h2>Resumen</h2>
            <div className="landscape">
                <img src={Image1} alt="Infografia Resumen SSA"/>
            </div>
        </div>
    );
}

export default consumidor;