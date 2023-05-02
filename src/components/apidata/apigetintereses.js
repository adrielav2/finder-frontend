import axios from 'axios';
const getIntereses = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/intereses`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log('Error al hacer la consulta', error);
    }
  }
  
  export { getIntereses };
