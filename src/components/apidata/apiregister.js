
  import axios from 'axios';
const register = async (nombre, apellido1, fechanacimiento, contrasena, email, resumen) => {
    try {
      const response = await axios.post(`http://localhost:3001/insertUsuario?nombre=${nombre}&apellido1=${apellido1}&fechanacimiento=${fechanacimiento}&contrasena=${contrasena}&email=${email}&resumen=${resumen}`);

      return response.data;
    } catch (error) {
      console.log('Error al crear cuenta', error);
    }
  }
  
  export { register };