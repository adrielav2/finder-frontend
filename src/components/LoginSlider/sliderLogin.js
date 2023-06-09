import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyles.js";
import { login }  from "../../pages/api/apilogin"
import Link from 'next/link';
import { useRouter } from 'next/router'
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
  height: 700px;
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

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Button2 = styled.button`
  width: 100%;
  padding: 12px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #000000;
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;

  &:hover {
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

function Login() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dados, setDados] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(dados.email, dados.password);
    const responseData = await response;
    console.log("data"+ responseData)
    if (responseData["Resultado"] === "true") {

      setIsLoggedIn(true);
      const resultado = responseData.Resultado
      const userId = responseData.userid;
      console.log('userid:'+ userId)
      console.log('Resultadao:'+ resultado)
      let url= `/main?id=${userId}`
      router.push(url)
    
    } else {
      // Si el login falla, haz algo aquí (por ejemplo, muestra un mensaje de error)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Iniciar sesión</Title>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            value={dados.email}
            onChange={handleChange}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            value={dados.password}
            onChange={handleChange}
            name="password"
          />
          <Button type="submit">Entrar</Button>
          <Link href="/register">
          <Button2>Crear cuenta</Button2>
          </Link>
        </Form>
      </Wrapper>
    </>
  );
}
  
  export default Login;