import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { register }  from "../../pages/api/apiregister"
import { useRouter } from 'next/router'
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const jump = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  height: 70vh;
  margin-bottom: 10%;
`;


const Input = styled.input`
  width: 100%;
  padding: 12px;
  background-color: #f7f7f7;
  color: #666;
  margin-bottom: 1rem;
  border-radius: 5px;
  outline: 0;
  border: none;
  font-size: 16px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 12px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #f03d4e;
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;

  &:hover {
    background-color: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  background-color: #f7f7f7;
  color: #666;
  margin-bottom: 1rem;
  border-radius: 5px;
  outline: 0;
  border: none;
  font-size: 16px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;
const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SignUpButton = styled(Button)`
  background-color: #2a2a29;
  margin-top: 10px;
  &:hover {
    background-color: #444444;
  }
`;
const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px;
`;

const DateIcon = styled.i`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  text-align: center;
`;

export const PopupTitle = styled.h3`
  margin-top: 0;
`;

export const PopupText = styled.p`
  margin-bottom: 20px;
`;

export const PopupButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0062cc;
  }
`;

function RegisterPage() {
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [resumen, setResumen] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const fechaFormateada = new Date(startDate).toISOString();
        const response = await register(nombre, apellido1, fechaFormateada, contrasena, email, resumen);
      const resultado = response.Resultado;
      if (resultado === 'True') {
        setPopupMessage('Registro exitoso');
        setShowPopup(true);
        setTimeout(() => {
          router.push('/logIn');
        }, 2000);
      } else {
        throw new Error('Error en el registro');
      }
    } catch (error) {
      setPopupMessage('Error en el registro: ' + error.message); // 4. Mostrar un mensaje de error
      setShowPopup(true);
    }
  };


  const [startDate, setStartDate] = useState(null); 
  return (
    <Wrapper>
      {showPopup && (
        <Popup>
          <h3>Registro exitoso!</h3>
          <p>Tu cuenta ha sido creada exitosamente.</p>
          <Button onClick={() => setShowPopup(false)}>Cerrar</Button>
        </Popup>
      )}
      <Form onSubmit={handleSubmit}>
        <Title>Registrarse</Title>
        <br/>
        <label htmlFor="username">Nombre de usuario</label>
        <Input
          type="text"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label htmlFor="apellido">Apellido</label>
        <Input
          type="text"
          name="apellido"
          id="apellido"
          value={apellido1}
          onChange={(e) => setApellido1(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <Input
          type="password"
          name="contrasena"
          id="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <label htmlFor="Bio">Bio</label>
        <Input
          type="text"
          name="bio"
          id="bio"
          value={resumen}
          onChange={(e) => setResumen(e.target.value)}
          required
        />


<label htmlFor="birthdate">Fecha de nacimiento:</label>
<DatePickerWrapper>
  <CustomDatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    dateFormat="dd/MM/yyyy"
    showYearDropdown
    scrollableYearDropdown
    yearDropdownItemNumber={100}
    placeholderText="Selecciona una fecha"
  />
  <DateIcon className="fa fa-calendar" />
</DatePickerWrapper>
        <Button type="submit">Registrarse</Button>
      </Form>
    </Wrapper>
  );
};

export default RegisterPage;