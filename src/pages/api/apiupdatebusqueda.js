import axios from 'axios';


const updatePerfil = async (userid, rangodeedadminimo,rangodeedadmaximo,generoid) => {
  try {
    console.log("entro api")
    console.log(rangodeedadminimo)
    console.log(rangodeedadmaximo)
    const response = await axios.get(`http://localhost:3001/addPerfilbusqueda?&userid=${userid}&rangodeedadminimo=${rangodeedadminimo}&rangodeedadmaximo=${rangodeedadmaximo}&generoid=${generoid}`);
    return (response.data)
  } catch (error) {
    console.log('Error al iniciar sesión:', error);
  }
}

export {
  updatePerfil
};