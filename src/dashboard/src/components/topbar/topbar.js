import React from 'react';
//import Select from 'react-select';
//import './topbar.css';
//"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"

function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-md-nowrap p-0">
      <a className="navbar-brand" 
      href="#/">&nbsp;&nbsp;Tablero Alimentario de Cali&nbsp;&nbsp;</a>
      <button className="navbar-toggler" 
      type="button" data-toggle="collapse" 
      data-target="#navbarNav" aria-controls="navbarNav" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav mr-auto">

          <div className="nav-item px-2">
            <a className="nav-link active" aria-current="page" href='#/determinantes'>
              Determinantes
            </a>
          </div>

          <div className="nav-item px-2">
            <a className="nav-link active" aria-current="page" href='#/ssa'>
              Sistema de Suministro de Alimentos
            </a>
          </div>

          <div className="nav-item px-2">
            <a className="nav-link active" aria-current="page" href='#/consumidor'>
            Consumidor
            </a>
          </div>

          <div className="nav-item px-2">
            <a className="nav-link active" aria-current="page" href='#/dietas'>
            Dietas
            </a>
          </div>

          <div className="nav-item px-2">
            <a className="nav-link active" aria-current="page" href='#/entorno'>
            Entorno Alimentario
            </a>
          </div>

          <div className="nav-item px-2">
            <a className="nav-link active" aria-current="page" href='#/resultados'>
            Resultados
            </a>
          </div>

          <div className="nav-item px-2">
            <a className="nav-link active" aria-current="page" href='#/about'>
            Acerca de Nosotros
            </a>
          </div>
            
        </ul>
        
      </div>
    </nav>
  );
}

export default Topbar;

/*
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">CIAT</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" 
        type="button" data-bs-toggle="collapse" 
        data-bs-target="#sidebarMenu" 
        aria-controls="sidebarMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" 
        type="text" 
        placeholder="Search" 
        aria-label="Search">
        </input>
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">Salir</a>
          </div>
        </div>
      </header>



        <button className="navbar-toggler position-absolute d-md-none collapsed" 
        type="button" data-bs-toggle="collapse" 
        data-bs-target="#sidebarMenu" 
        aria-controls="sidebarMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <button className="navbar-toggler" 
        type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse" 
        aria-controls="navbarCollapse" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>



      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" 
      href="#/">Tablero Alimentario de Cali</a>
      <button class="navbar-toggler" 
      type="button" data-toggle="collapse" 
      data-target="#navbarNav" aria-controls="navbarNav" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav mr-auto">

          <div className="nav-item">
            <a className="nav-link active" aria-current="page" href='#/determinantes'>
              Determinantes
            </a>
          </div>

          <div className="nav-item">
            <a className="nav-link active" aria-current="page" href='#/ssa'>
              Sistema de Suministro de Alimentos
            </a>
          </div>

          <div className="nav-item">
            <a className="nav-link active" aria-current="page" href='#/consumidor'>
            Consumidor
            </a>
          </div>

          <div className="nav-item">
            <a className="nav-link active" aria-current="page" href='#/dietas'>
            Dietas
            </a>
          </div>

          <div className="nav-item">
            <a className="nav-link active" aria-current="page" href='#/entorno'>
            Entorno Alimentario
            </a>
          </div>

          <div className="nav-item">
            <a className="nav-link active" aria-current="page" href='#/resultados'>
            Resultados
            </a>
          </div>
            
        </ul>
        
      </div>
*/

/*
function Navbar() {
  return (
    <nav id="sidebarMenu" 
    className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <div className="nav-link" aria-current="page">
            <a className="nav-link active" aria-current="page" href='#/'>
              Introduccion
            </a>
          </div>

          <div className="nav-link" aria-current="page">
            <a className="nav-link active" aria-current="page" href='#/determinantes'>
              Determinantes
            </a>
          </div>

          <div className="nav-link" aria-current="page">
            <a className="nav-link active" aria-current="page" href='#/ssa'>
              Sistema de Suministro de Alimentos
            </a>
          </div>

          <div className="nav-link" aria-current="page">
            <a className="nav-link active" aria-current="page" href='#/consumidor'>
            Consumidor
            </a>
          </div>

          <div className="nav-link" aria-current="page">
            <a className="nav-link active" aria-current="page" href='#/dietas'>
            Dietas
            </a>
          </div>

          <div className="nav-link" aria-current="page">
            <a className="nav-link active" aria-current="page" href='#/entorno'>
            Entorno Alimentario
            </a>
          </div>

          <div className="nav-link" aria-current="page">
            <a className="nav-link active" aria-current="page" href='#/resultados'>
            Resultados
            </a>
          </div>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
*/