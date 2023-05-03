import axios from 'axios';
const addIntereses = async (userid,interesid) => {
    try {
      const response = await axios.get(`http://localhost:3001/addIntereses?userid=${userid}&interesid=${interesid}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log('Error al hacer la consulta', error);
    }
  }
  
  export { addIntereses };