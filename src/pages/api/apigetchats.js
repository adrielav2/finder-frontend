import axios from 'axios';
const getChats = async (userid,otrouser) => {
    try {
      const response = await axios.get(`http://localhost:3001/getChats?userid=${userid}&otrouser=${otrouser}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log('Error al hacer la consulta', error);
    }
  }
  
  export { getChats };