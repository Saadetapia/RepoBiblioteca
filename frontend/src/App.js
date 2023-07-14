import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import CryptoJS from "crypto-js";
import Inicio from "./components/inicio";
import LoginAdmin from "./admin/login_Admin";
import LoginUssers from "./usuario/login_Ussers";
import SolicitudPrestamoExterno from "./usuario/SolicitudPrestamoExterno";
import SolicitudPrestamoIntero from "./usuario/SolicitudPrestamoInterno";
import AgregarUssers from "./admin/agregarUsuarios";
import AgregarLibro from "./admin/agregar_Libro";
import NavbarAdmin from "./navbar/NavbarAdmin";
import NavbarUsuarios from "./navbar/NavbarUsuarios";
import InicioAdmin from "./admin/InicioAdmin";
import InicioUsuario from "./usuario/InicioUsuario";
import LibrosDisponibles from "./usuario/LibrosDisponibles";

// import "./components/css/navbar.css";
//import axios from 'axios';

// // Components
// import Header from "./components/Header";
// import BlogForm from "./components/BlogForm";
// import Blogs from "./components/Blogs";

function App() {
  /*const cifrar = (texto) => {
    var textoCifrado = CryptoJS.AES.encrypt(texto, "@borjascript").toString();
    return textoCifrado;
  };

  const descifrar = (texto) => {
    var bytes = CryptoJS.AES.decrypt(texto, "@borjascript");
    var textoCifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoCifrado;
  };*/
  return (
    <Router>
      <div class="container">
        {/* <p>texto cifrado: {cifrar("hola")}</p>
        <p>
          texto decifrado:
          {descifrar("U2FsdGVkX1+qVv1v+iSgKLE/VJC/rnNUC65e7xOha0k=")}
        </p> */}

        {/* <NavbarAdmin /> */}
        {/* <br />
        <div className="btn-group">
          <NavLink to="/" exact className="btn btn-dark">
            inicio
          </NavLink>
          <NavLink to="/admin" exact className="btn btn-dark">
            admin
          </NavLink>
          <NavLink to="/agregar_Usuarios" exact className="btn btn-dark">
            agregar usuarios
          </NavLink>
          <NavLink to="/agregar_Libro" exact className="btn btn-dark">
            agregar libro
          </NavLink>
          <NavLink to="/usuario" exact className="btn btn-dark">
            usuarios
          </NavLink>
          <NavLink to="/solicitud" exact className="btn btn-dark">
            solicitud
          </NavLink>
        </div>
        <hr /> */}
        <Switch>
          <Route path="/" exact>
            <Inicio />
            {/* Admin */}
          </Route>
          <Route path="/admin" exact>
            <LoginAdmin />
          </Route>
          <Route path="/admin/inicio" exact>
            <NavbarAdmin />
            <InicioAdmin />
          </Route>
          <Route path="/admin/agregarUsuarios" exact>
            <NavbarAdmin />
            <AgregarUssers />
          </Route>
          <Route path="/admin/agregarLibro" exact>
            <NavbarAdmin />
            <AgregarLibro />
          </Route>
          {/* Usuario */}
          <Route path="/usuario" exact>
            <LoginUssers />
          </Route>
          <Route path="/usuario/inicio" exact>
            <NavbarUsuarios />
            <InicioUsuario />
          </Route>
          <Route path="/usuario/libros_Disponibles" exact>
            <NavbarUsuarios />
            <LibrosDisponibles />
          </Route>
          <Route path="/usuario/prestamo_Externo" exact>
            <NavbarUsuarios />
            <SolicitudPrestamoExterno />
          </Route>
          <Route path="/usuario/prestamo_Interno" exact>
            <NavbarUsuarios />
            <SolicitudPrestamoIntero />
          </Route>
        </Switch>
      </div>
    </Router>
    // const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //   axios.get('/get/')
    //   .then((response) => {
    //     setBlogs(response.data)
    //   }).catch(() => {
    //     alert('Algo fue mal!')
    //   })
    // }, [])

    // return (

    //   <>
    //   <Header/>
    //   <div className="container p-4">
    //    <BlogForm blogs={blogs} setBlogs={setBlogs}/>
    //    <Blogs blogs={blogs} setBlogs={setBlogs}/>

    //   </div>

    //   </>
  );
}

export default App;
