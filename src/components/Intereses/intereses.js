import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { deleteIntereses } from '@/pages/api/apideleteintereses';
import { addIntereses } from '@/pages/api/apiaddintereses';
const interests = [
        {
            "interesusuarioid": 1,
            "name": "Viajar",
            "deleted": false
        },
        {
            "interesusuarioid": 2,
            "name": "Cocinar",
            "deleted": false
        },
        {
            "interesusuarioid": 3,
            "name": "Salir a cenar",
            "deleted": false
        },
        {
            "interesusuarioid": 4,
            "name": "Ir al cine",
            "deleted": false
        },
        {
            "interesusuarioid": 5,
            "name": "Hacer deporte",
            "deleted": false
        },
        {
            "interesusuarioid": 6,
            "name": "Bailar",
            "deleted": false
        },
        {
            "interesusuarioid": 7,
            "name": "Leer",
            "deleted": false
        },
        {
            "interesusuarioid": 8,
            "name": "Música",
            "deleted": false
        },
        {
            "interesusuarioid": 9,
            "name": "Ir de compras",
            "deleted": false
        },
        {
            "interesusuarioid": 10,
            "name": "Pasear en bicicleta",
            "deleted": false
        },
        {
            "interesusuarioid": 11,
            "name": "Hacer senderismo",
            "deleted": false
        },
        {
            "interesusuarioid": 12,
            "name": "Ir a la playa",
            "deleted": false
        },
        {
            "interesusuarioid": 13,
            "name": "Esquiar",
            "deleted": false
        },
        {
            "interesusuarioid": 14,
            "name": "Ver series de TV",
            "deleted": false
        },
        {
            "interesusuarioid": 15,
            "name": "Hacer voluntariado",
            "deleted": false
        },
        {
            "interesusuarioid": 16,
            "name": "Aprender nuevos idiomas",
            "deleted": false
        },
        {
            "interesusuarioid": 17,
            "name": "Jugar videojuegos",
            "deleted": false
        },
        {
            "interesusuarioid": 18,
            "name": "Ir a festivales de música",
            "deleted": false
        },
        {
            "interesusuarioid": 19,
            "name": "Hacer yoga",
            "deleted": false
        },
        {
            "interesusuarioid": 20,
            "name": "Arte y cultura",
            "deleted": false
        },
        {
            "interesusuarioid": 21,
            "name": "Fotografía",
            "deleted": false
        },
        {
            "interesusuarioid": 22,
            "name": "Meditar",
            "deleted": false
        },
        {
            "interesusuarioid": 23,
            "name": "Ir a conciertos",
            "deleted": false
        },
        {
            "interesusuarioid": 24,
            "name": "Ir a museos",
            "deleted": false
        },
        {
            "interesusuarioid": 25,
            "name": "Ir de camping",
            "deleted": false
        },
        {
            "interesusuarioid": 26,
            "name": "Jardinería",
            "deleted": false
        },
        {
            "interesusuarioid": 27,
            "name": "Cuidado de mascotas",
            "deleted": false
        },
        {
            "interesusuarioid": 28,
            "name": "Naturaleza",
            "deleted": false
        },
        {
            "interesusuarioid": 29,
            "name": "Tecnología",
            "deleted": false
        },
        {
            "interesusuarioid": 30,
            "name": "Vino y gastronomía",
            "deleted": false
        }

  // ...rest of the interests
];

const jump = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
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
const CheckboxContainer = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, auto);
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap
`;
const CheckboxLabel = styled.label`
  font-size: 18px;
  color: #333;
  cursor: pointer;
`;
const CheckboxInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #1abc9c;
    border: none;
  }
  &:checked + ${CheckboxLabel} {
    color: #1abc9c;
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
display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual ancho */
        grid-gap: 10px; /* Espacio de 10 píxeles entre las celdas */
  margin: 0 auto;
  width: 90%;
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  height: 50vh;
  margin-bottom: 10%;
`;

const InterestsCheckbox = () => {
    const [checkedItems, setCheckedItems] = useState([]);
  
    const handleCheckboxChange = (event) => {
      const { name } = event.target;
      setCheckedItems((prevCheckedItems) => {
        if (prevCheckedItems.includes(name)) {
          return prevCheckedItems.filter((item) => item !== name);
        } else {
          return [...prevCheckedItems, name];
        }
      });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const interesesids = interests
          .filter((interest) => checkedItems.includes(interest.name))
          .map((interest) => interest.interesusuarioid);
        console.log(interesesids); // Aquí se guardan los IDs
        deleteIntereses(1);
        console.log("entre aqui")
        interesesids.forEach((interesid) => {
          addIntereses(1, interesid);
        });
      };



  
    return (
 
      <Form onSubmit={handleSubmit}>
        {interests.map((interest) => (
          <CheckboxContainer key={interest.interesusuarioid}>
            <CheckboxInput
              type="checkbox"
              name={interest.name}
              checked={checkedItems.includes(interest.name)}
              onChange={handleCheckboxChange}
            />
            <CheckboxLabel>{interest.name}</CheckboxLabel>
          </CheckboxContainer>
        ))}
        <Button type="submit">Guardar intereses</Button>
        </Form>
    
    );
  };
  
  export default InterestsCheckbox;