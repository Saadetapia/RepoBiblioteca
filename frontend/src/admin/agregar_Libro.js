// // import React, { Component } from 'react';

// // class agregar_Libro extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       title: '',
// //       description: '',
// //       image: null
// //     };
// //   }

// //   handleTitleChange = (event) => {
// //     this.setState({ title: event.target.value });
// //   };

// //   handleDescriptionChange = (event) => {
// //     this.setState({ description: event.target.value });
// //   };

// //   handleImageChange = (event) => {
// //     this.setState({ image: event.target.files[0] });
// //   };

// //   handleSubmit = (event) => {
// //     event.preventDefault();
// //     // aquí podrías enviar la información del título, descripción y imagen a un servidor o guardarla en algún lugar
// //     console.log(this.state);
// //   };

// //   render() {
// //     return (
// //       <div className="container w-75 mt-5 rounded shadow">

// //       <form onSubmit={this.handleSubmit}>
// //         <label>
// //           Título:
// //           <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
// //         </label>
// //         <br />
// //         <br />
// //         <label>
// //           Sinopsis:
// //           <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
// //         </label>
// //         <br />
// //         <br />
// //         <label>
// //           Imagen:
// //           <input type="file" onChange={this.handleImageChange} />
// //         </label>
// //         <br />
// //         <br />
// //         <div class="container-fluid h-100 col text-center">
// //         <button  type="submit">Enviar</button>
// //         </div>
// //       </form>
// //       </div>
// //     );
// //   }
// // }

// // export default agregar_Libro;

// //////////////////////////////

// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import logo from "../img/logo_Integrador.jpeg";
// import axios from "axios";

// function Agregar_Libros() {
//   const [codigo, setCodigo] = useState("");
//   const [cantidad, setCantidad] = useState("");
//   const [nombrelibro, setNombrelibro] = useState("");
//   const [actor, setActor] = useState("");
//   const [descripcion, setDescripcion] = useState("");
//   // const [imagen, setImagen] = useState(null);

//   const handleCodigoChange = (e) => {
//     setCodigo(e.target.value);
//   };

//   const handleCantidadChange = (e) => {
//     setCantidad(e.target.value);
//   };

//   const handleNombrelibroChange = (e) => {
//     setNombrelibro(e.target.value);
//   };

//   const handleActorChange = (e) => {
//     setActor(e.target.value);
//   };

//   const handleDescripcionChange = (e) => {
//     setDescripcion(e.target.value);
//   };

//   // const handleImagenChange = (e) => {
//   //   setImagen(e.target.files[0]);
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       codigo: codigo,
//       cantidad: cantidad,
//       nombrelibro: nombrelibro,
//       actor: actor,
//       descripcion: descripcion,
//     };
//     try {
//       await axios.post("http://127.0.0.1:8000/api/libro/", data);
//       alert("Libro guardado");
//     } catch (error) {
//       console.error(error);
//       alert("Error al guardar libro intentelo otra vez");
//     }
//   };

//   return (
//     <div className="container w-75 bg-light mt-5 rounded shadow">
//       <div className="col bg-white p-1 rounded-end">
//         <div className="text-end">
//           <img src={logo} alt="" width="20% px" />
//         </div>

//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="codigo">
//             <Form.Label>Codigo Libro:</Form.Label>
//             <Form.Control
//               type="text"
//               required
//               placeholder="Ingrese el codigo del libro"
//               value={codigo}
//               onChange={handleCodigoChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="cantidad">
//             <Form.Label>Cantidad de libros existentes:</Form.Label>
//             <Form.Control
//               type="text"
//               required
//               placeholder="Ingrese la cantidad de libros"
//               value={cantidad}
//               onChange={handleCantidadChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="nombrelibro">
//             <Form.Label>Nombre del Libro:</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Ingrese el Nombre del Libro"
//               value={nombrelibro}
//               onChange={handleNombrelibroChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="actor">
//             <Form.Label>Nombre del Actor:</Form.Label>
//             <Form.Control
//               type="text"
//               required
//               placeholder="Ingrese el Nombre del Actor"
//               value={actor}
//               onChange={handleActorChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="descripcion">
//             <Form.Label>Descripción:</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={1}
//               placeholder="Ingrese la descripción"
//               required
//               value={descripcion}
//               onChange={handleDescripcionChange}
//             />
//           </Form.Group>

//           <Form.Group controlId="imagen">
//             <Form.Label>Imagen:</Form.Label>
//             <Form.Control type="file" accept="image/*" />
//           </Form.Group>
//           <br />
//           <div className="container text-lg-center">
//             <Button className="btn btn-primary text-center" type="submit">
//               Dar de alta
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }
// export default Agregar_Libros;

import React, { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faImage } from '@fortawesome/free-solid-svg-icons';

const Formulario = () => {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellido: "",
    imagen: null,
  });

  const [listaDatos, setListaDatos] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(-1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosPersonales({ ...datosPersonales, [name]: value });
  };

  const handleImageChange = (event) => {
    const imagen = event.target.files[0];
    setDatosPersonales({ ...datosPersonales, imagen });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editandoIndex !== -1) {
      // Editar datos existentes
      const nuevosDatos = [...listaDatos];
      nuevosDatos[editandoIndex] = datosPersonales;
      setListaDatos(nuevosDatos);
      setEditandoIndex(-1);
    } else {
      // Agregar nuevos datos
      setListaDatos([...listaDatos, datosPersonales]);
    }

    setDatosPersonales({ nombre: "", apellido: "", imagen: null });
  };

  const handleDelete = (index) => {
    setListaDatos(listaDatos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const datosEditados = listaDatos[index];
    setDatosPersonales(datosEditados);
    setEditandoIndex(index);
  };

  return (
    <div className="container">
      <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={datosPersonales.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={datosPersonales.apellido}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Imagen:</label>
            <input
              type="file"
              className="form-control-file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {datosPersonales.imagen && (
              <div className="mt-3">
                <img
                  src={URL.createObjectURL(datosPersonales.imagen)}
                  alt="Imagen seleccionada"
                  className="mt-2"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            {editandoIndex !== -1 ? "Guardar Edición" : "Guardar"}
          </button>
        </form>
      </div>
      <div>
        <h2>Datos Guardados</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaDatos.map((datos, index) => (
              <tr key={index}>
                <td>{datos.nombre}</td>
                <td>{datos.apellido}</td>
                <td>{datos.imagen ? datos.imagen.name : ""}</td>
                <td>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleDelete(index)}
                  >
                    Borrar
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
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

export default Formulario;
