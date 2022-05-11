// Importando React
import React, { Component } from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Importando componentes
import Navbar   from "./components/navbar/Navbar";
import Topbar   from "./components/topbar/Topbar";
//import Compartir from "./components/compartir/Compartir";

// Importando paginas
import Introduccion  from './pages/introduccion/introduccion';
import Determinantes from './pages/determinantes/determinantes';
import SSA           from './pages/ssa/ssa';
import Entorno       from './pages/entorno/entorno';
import Consumidor    from './pages/consumidor/consumidor';
import Dietas        from './pages/dietas/dietas';
import Resultados    from './pages/resultados/resultados';

// CSS
import './App.css';

// NOTAS:
// - Grid necesario para separar la barra de navegacion Sidebar con el contenido
// - Paginas en minuscula, Componentes con Primera Letra En Mayuscula
// - Graficas con Apex Charts es mas sencillo
class App extends Component {
//  constructor(props) {
//    super(props);
//  }

  render() {
    return (
      <>
        <Topbar />
        <div className="container-fluid">
          <div className="row">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Navbar />
              <HashRouter>
                <Routes>
                  <Route exact path='/' element={<Introduccion />} />
                  <Route path='/determinantes' element={<Determinantes />} />
                  <Route path='/ssa' element={<SSA />} />
                  <Route path='/entorno' element={<Entorno />} />
                  <Route path='/consumidor' element={<Consumidor />} />
                  <Route path='/dietas' element={<Dietas />} />
                  <Route path='/resultados' element={<Resultados />} />
                </Routes>
              </HashRouter>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default App;