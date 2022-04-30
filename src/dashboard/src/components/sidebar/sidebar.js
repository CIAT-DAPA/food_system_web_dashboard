import React from 'react';
//import Select from 'react-select';
//https://stackoverflow.com/questions/48924672/can-i-use-href-tag-in-reactjs
//import { Link } from 'react-router-dom';

//import './sidebar.css';

// Importando paginas
//import Tablero from '../../pages/Tablero/Tablero.js';
//import Determinantes from '../../pages/Tablero/Tablero.js';
//import SSA from '../../pages/Tablero/Tablero.js';
//import Entorno from '../../pages/Tablero/Tablero.js';
//import Consumidor from '../../pages/Tablero/Tablero.js';
//import Dietas from '../../pages/Tablero/Tablero.js';
//import Resultados from '../../pages/Tablero/Tablero.js';

//<div className="nav-link" aria-current="page">
//<Link to="src/dashboard/src/pages/Tablero/Tablero.js">Tablero</Link>
//</div>

//function sidebar(props) {
function Sidebar() {
  return(
    <nav id="sidebarMenu" 
    className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <div className="nav-link" aria-current="page">
          <a className="nav-link active" aria-current="page" href='/'>
            Tablero
          </a>
        </div>

        <div className="nav-link" aria-current="page">
          <a className="nav-link active" aria-current="page" href='/determinantes'>
            Determinantes
          </a>
        </div>

        <div className="nav-link" aria-current="page">
          <a className="nav-link active" aria-current="page" href='/ssa'>
            SSA
          </a>
        </div>

        <div className="nav-link" aria-current="page">
          <a className="nav-link active" aria-current="page" href='/consumidor'>
          Consumidor
          </a>
        </div>

        <div className="nav-link" aria-current="page">
          <a className="nav-link active" aria-current="page" href='/dietas'>
          Dietas
          </a>
        </div>

        <div className="nav-link" aria-current="page">
          <a className="nav-link active" aria-current="page" href='/entorno'>
          Entorno
          </a>
        </div>

        <div className="nav-link" aria-current="page">
          <a className="nav-link active" aria-current="page" href='/resultados'>
          Resultados
          </a>
        </div>

      </ul>
      </div>
    </nav>
  );
}

export default Sidebar;

/*
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href='#'>
                Tablero
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Determinantes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SSA
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Entorno
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Consumidor
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Dietas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Resultados
              </a>
            </li>
          </ul>
        </div>
        </nav>
*/