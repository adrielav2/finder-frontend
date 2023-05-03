import axios from 'axios';
const enviarMensaje = async (enviador,receptor,mensaje) => {
    try {
      const response = await axios.get(`http://localhost:3001/enviarMensaje?enviador=${enviador}&receptor=${receptor}&mensaje=${mensaje}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log('Error al hacer la consulta', error);
    }
  }
  
  export { enviarMensaje };