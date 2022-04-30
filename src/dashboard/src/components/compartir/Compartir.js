import React from 'react';

// Barra al inicio del cuerpo de cada Pagina con:
// - Botones de Exportar y Compartir/
// - HEADER2 con Titulo de la categoria
function Compartir() {
    return(
        <div className="d-flex justify-content-between 
        flex-wrap flex-md-nowrap align-items-center 
        pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Graficas</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                    <button type="button" 
                    className="btn btn-sm btn-outline-secondary">Compartir</button>
                    <button type="button" 
                    className="btn btn-sm btn-outline-secondary">Exportar</button>
                </div>
                <button type="button" 
                className="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="bar-chart-2"></span>
                    Tipo de Grafica
                </button>
            </div>
        </div>
    );
  }
  
  export default Compartir;

/*
        <div className="d-flex justify-content-between 
        flex-wrap flex-md-nowrap align-items-center 
        pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Graficas</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                    <button type="button" 
                    className="btn btn-sm btn-outline-secondary">Compartir</button>
                    <button type="button" 
                    className="btn btn-sm btn-outline-secondary">Exportar</button>
                </div>
                <button type="button" 
                className="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="bar-chart-2"></span>
                    Tipo de Grafica
                </button>
            </div>
        </div>
*/