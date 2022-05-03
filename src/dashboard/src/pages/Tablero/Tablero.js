import React from 'react';

// Importando Imagenes
import Image1 from '../../final_assets/infografia_tablero.png';

function tablero() {
    return (
        <div>
            <div>
                <img src={Image1} alt="Infografia Introductoria del Tablero"/>
            </div>
        </div>
    );
}

export default tablero;