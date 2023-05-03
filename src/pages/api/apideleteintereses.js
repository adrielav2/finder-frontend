import axios from 'axios';
const deleteIntereses = async (userid) => {
    try {
      const response = await axios.get(`http://localhost:3001/deleteIntereses?userid=${userid}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log('Error al hacer la consulta', error);
    }
  }
  
  export { deleteIntereses };