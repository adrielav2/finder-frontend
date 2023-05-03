import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { deleteIntereses } from '@/pages/api/apideleteintereses';
import { addIntereses } from '@/pages/api/apiaddintereses';
import { updatePerfil } from '@/pages/api/apiupdatebusqueda';
import { useRouter } from 'next/router'


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
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  font-size: 16px;
`;

const Form = styled.form`
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 16px;
  height: 90vh;
`;

const FormRight = styled.form`
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
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

const Button2 = styled.button`
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
const InterestsCheckbox = () => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [ageMin, setAgeMin] = useState("");
    const [ageMax, setAgeMax] = useState("");
    const [generoid, setGeneroid] = useState("");
    const router = useRouter();
    const { id } = router.query;



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
    const handleAgeMinChange = (event) => {
        setAgeMin(event.target.value);
      };
    
      const handleAgeMaxChange = (event) => {
        setAgeMax(event.target.value);
      };
    
      const handleGenderChange = (event) => {
        setGender(event.target.value);
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
          addIntereses(id, interesid);
        });
      };

      const handleSubmitPreferencias = (event) => {
        event.preventDefault();
        
        console.log(ageMin)
        console.log(ageMax)
        console.log(generoid)
        updatePerfil(id,ageMin,ageMax,generoid)



      };

  
      return (
        <Wrapper>
          <Form onSubmit={handleSubmit}>
          <Title>Selecciona tus intereses</Title>
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
    
          <FormRight onSubmit={handleSubmitPreferencias}>
          <Title>Selecciona tus preferencias de búsqueda</Title>
              <label htmlFor="ageMin">Edad mínima:</label>
              <input type="number" id="ageMin" name="ageMin" value={ageMin} onChange={handleAgeMinChange} />
            
          
              <label htmlFor="ageMax">Edad máxima:</label>
              <input type="number" id="ageMax" name="ageMax" value={ageMax} onChange={handleAgeMaxChange} />
            
            
              <label htmlFor="generoid">Género</label>
              <select
                name="generoid"
                id="generoid"
                value={generoid}
                onChange={(e) => setGeneroid(parseInt(e.target.value))}
                required
              >
                <option value="0">Selecciona género de intéres</option>
    
                <option value="1">Masculino</option>
    
                <option value="2">Femenino</option>
                
              </select>
              <Button2 type="submit">Guardar preferencias</Button2>
            
          </FormRight>
        </Wrapper>
      );
    };
    
    export default InterestsCheckbox;