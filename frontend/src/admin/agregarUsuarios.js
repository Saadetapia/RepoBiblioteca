// import { useState } from "react";
// // import Table from 'react-bootstrap/Table';
// // import Form from 'react-bootstrap/Form';
// import {
//   TextField,
//   Button,
//   Box,
//   Select,
//   MenuItem,
//   InputLabel,
// } from "@material-ui/core";
// import logo from "../img/logo_Integrador.jpeg";
// import axios from "axios";

// function AgregarUsuarios() {
//   const [matricula, setMatricula] = useState("");
//   const [nombrealumno, setNombrealumno] = useState("");
//   const [apellidoP, setApellidoP] = useState("");
//   const [apellidoM, setApellidoM] = useState("");
//   const [correo, setCorreo] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [edad, setEdad] = useState("");
//   const [carrera, setCarrera] = useState("");
//   const [genero, setGenero] = useState("");
//   const [usuario, setUsuario] = useState("");
//   const [password, setPassword] = useState("");

//   const handleMatriculaChange = (event) => {
//     setMatricula(event.target.value);
//   };
//   const handleNombrealumnoChange = (event) => {
//     setNombrealumno(event.target.value);
//   };
//   const handleApellidoPChange = (event) => {
//     setApellidoP(event.target.value);
//   };

//   const handleApellidoMChange = (event) => {
//     setApellidoM(event.target.value);
//   };

//   const handleCorreoChange = (event) => {
//     setCorreo(event.target.value);
//   };

//   const handleTelefonoChange = (event) => {
//     setTelefono(event.target.value);
//   };

//   const handleEdadChange = (event) => {
//     setEdad(event.target.value);
//   };

//   const handleCarreraChange = (event) => {
//     setCarrera(event.target.value);
//   };

//   const handleGeneroChange = (event) => {
//     setGenero(event.target.value);
//   };

//   const handleUsuarioChange = (event) => {
//     setUsuario(event.target.value);
//   };
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (
//       !matricula ||
//       !nombrealumno ||
//       !apellidoP ||
//       !apellidoM ||
//       !correo ||
//       !telefono ||
//       !edad ||
//       !carrera ||
//       !genero ||
//       !usuario ||
//       !password
//     ) {
//       alert("Por favor complete todos los campos obligatorios");
//       return;
//     }

//     // if (isNaN(edad)) {
//     //   alert('El campo edad debe ser un número');
//     //   return;
//     // }

//     const data = {
//       matricula: matricula,
//       nombrealumno: nombrealumno,
//       apellidoP: apellidoP,
//       apellidoM: apellidoM,
//       correo: correo,
//       telefono: telefono,
//       edad: edad,
//       carrera: carrera,
//       genero: genero,
//       usuario: usuario,
//       password: password,
//     };
//     // axios.post('http://127.0.0.1:8000/api/user/',data)
//     // .then((response)=>{
//     //   console.log(response.data);
//     // })
//     // .catch((error)=>{
//     //   console.error(error);
//     // });

//     try {
//       await axios.post("http://127.0.0.1:8000/api/user/", data);
//       alert("Estudiante guardado correctamente");
//     } catch (error) {
//       console.error(error);
//       alert("error al guadar usuario");
//     }
//   };

//   return (
//     <div className="container w-75 bg-light mt-5 rounded shadow">
//       <div className="col bg-white p-1 rounded-end">
//         <div className="text-end">
//           <img src={logo} alt="" width="20% px" />
//         </div>
//         <form onSubmit={handleSubmit}>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             marginBottom={2}
//           >
//             <TextField
//               label="Matricula"
//               value={matricula}
//               onChange={handleMatriculaChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Nombre del Alumno"
//               value={nombrealumno}
//               onChange={handleNombrealumnoChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Apellido Paterno"
//               value={apellidoP}
//               onChange={handleApellidoPChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Apellido Materno"
//               value={apellidoM}
//               onChange={handleApellidoMChange}
//               margin="normal"
//             />
//             <TextField
//               label="Correo Electronico"
//               value={correo}
//               onChange={handleCorreoChange}
//               margin="normal"
//               type="email"
//               required
//             />
//             <TextField
//               label="Telefono"
//               value={telefono}
//               type="number"
//               onChange={handleTelefonoChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Edad"
//               value={edad}
//               type="number"
//               onChange={handleEdadChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Usuario"
//               value={usuario}
//               onChange={handleUsuarioChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Contraseña"
//               value={password}
//               onChange={handlePasswordChange}
//               margin="normal"
//               required
//             />
//             <Box
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//               marginBottom={2}
//             >
//               <InputLabel id="carrera">Carreras</InputLabel>
//               <Select
//                 labelId="carrera"
//                 value={carrera}
//                 onChange={handleCarreraChange}
//                 margin="normal"
//                 required
//               >
//                 <MenuItem value="Software">Ingeniería de Software</MenuItem>
//                 <MenuItem value="Ingenieria">Maestría en Ingeniería</MenuItem>
//                 <MenuItem value="Mecatronica">Ingeniería Mecatrónica</MenuItem>
//                 <MenuItem value="Financiera">Ingeniería Financiera</MenuItem>
//                 <MenuItem value="Ambiental">
//                   Ingeniería en Tecnología Ambiental
//                 </MenuItem>
//                 <MenuItem value="Automotrices">
//                   Ingeniería en Sistemas Automotrices
//                 </MenuItem>
//                 <MenuItem value="Nanotecnología">
//                   Ingeniería en Nanotecnología
//                 </MenuItem>
//                 <MenuItem value="Transporte">
//                   Ingeniería en Logística y Transporte
//                 </MenuItem>
//                 <MenuItem value="Energía">Ingeniería en Energía</MenuItem>
//                 <MenuItem value="Animacion">
//                   Ingeniería en Animación y Efectos Visuales
//                 </MenuItem>
//                 <MenuItem value="Agroindustrial">
//                   Ingeniería Agroindustrial
//                 </MenuItem>
//                 <MenuItem value="LenguasExtranjeras">
//                   Centro de Estudios de Lenguas Extranjeras
//                 </MenuItem>
//               </Select>
//             </Box>

//             <Box
//               display="flex"
//               flexDirection="column"
//               alignItems="left"
//               marginBottom={2}
//             >
//               <InputLabel id="genero">Género</InputLabel>
//               <Select
//                 labelId="genero"
//                 value={genero}
//                 onChange={handleGeneroChange}
//                 margin="normal"
//                 required
//               >
//                 <MenuItem value="Masculino">Masculino</MenuItem>
//                 <MenuItem value="Femenino">Femenino</MenuItem>
//                 <MenuItem value="binario">No binario</MenuItem>
//                 <MenuItem value="indefinido">Prefiero no decirlo</MenuItem>
//               </Select>
//             </Box>
//             <br />
//             <Box mt={2}>
//               <Button variant="contained" color="primary" type="submit">
//                 Dar de alta
//               </Button>
//             </Box>
//           </Box>
//         </form>
//       </div>
//       <br />
//       {/* <div>
//     <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//           <th>Username</th>
//           <th>Username</th>
//           <th>Username</th>
//           <th>Username</th>
//           <th>Username</th>
//           <th>Username</th>
//           <th>Username</th>
//           <th>Username</th>
//           <th>Username</th>
          
//           <th>Username</th>
//         </tr>
//       </thead>
     
//     </Table>
//     </div> */}
//     </div>
//   );
// }

// export default AgregarUsuarios;

import React, { useState } from 'react';

const FormularioDatosPersonales = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState('');
  const [datos, setDatos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [indiceEditar, setIndiceEditar] = useState(-1);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim() !== '' && apellido.trim() !== '' && genero !== '') {
      const nuevoDato = {
        nombre,
        apellido,
        genero,
      };

      if (indiceEditar !== -1) {
        const nuevosDatos = [...datos];
        nuevosDatos[indiceEditar] = nuevoDato;
        setDatos(nuevosDatos);
        setIndiceEditar(-1);
      } else {
        setDatos([...datos, nuevoDato]);
      }

      setNombre('');
      setApellido('');
      setGenero('');
    }
  };

  const handleBorrarDato = (index) => {
    setDatos(datos.filter((_, i) => i !== index));
  };

  const handleEditarDato = (index) => {
    const datoEditar = datos[index];
    setNombre(datoEditar.nombre);
    setApellido(datoEditar.apellido);
    setGenero(datoEditar.genero);
    setIndiceEditar(index);
  };

  const handleBusquedaChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  const datosFiltrados = datos.filter((dato) => {
    const nombreCompleto = `${dato.nombre} ${dato.apellido}`;
    return nombreCompleto.toLowerCase().includes(terminoBusqueda.toLowerCase());
  });

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido:</label>
            <input
              type="text"
              className="form-control"
              value={apellido}
              onChange={handleApellidoChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Género:</label>
            <select
              className="form-select"
              value={genero}
              onChange={handleGeneroChange}
            >
              <option value="">Seleccionar</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            {indiceEditar !== -1 ? 'Actualizar' : 'Guardar'}
          </button>
        </form>
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar..."
          value={terminoBusqueda}
          onChange={handleBusquedaChange}
        />
      </div>
      <div className="mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Género</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.map((dato, index) => (
              <tr key={index}>
                <td>{dato.nombre}</td>
                <td>{dato.apellido}</td>
                <td>{dato.genero}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleBorrarDato(index)}
                  >
                    Borrar
                  </button>
                  <button
                    className="btn btn-primary ms-2"
                    onClick={() => handleEditarDato(index)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormularioDatosPersonales;