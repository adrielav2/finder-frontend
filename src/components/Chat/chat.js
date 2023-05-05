import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { getChats } from '@/pages/api/apigetchats';
import { enviarMensaje } from '@/pages/api/apienviarmensaje';
import { useRouter } from 'next/router'
import { FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link';


const jump = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
`;

const ChatContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  height: 70vh;
  margin-top: 50px;
  margin-bottom: 200px;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ChatBody = styled.div`
  padding: 10px;
  overflow-y: scroll;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 10px;
  display: flex; /*agregado*/
`;

const ChatInput = styled.input`
  width: calc(100% - 90px);
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  border-style: solid;

`;
const ChatInputContainer = styled.div` /*agregado*/
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const MessageAvatar = styled(FaUser)`
  font-size: 24px;
  margin: ${({ isCurrentUser }) => isCurrentUser ? 'left' : 'right'};
`;


const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageText = styled.p`
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${({ isCurrentUser }) => isCurrentUser ? '#fff' : '#f03d4e'};
`;

const Button = styled.button`
  width: 80px;
  padding: 15px;
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
  margin-top: -5px;

  &:hover {
    background-color: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

export const Nav = styled.nav`
	background: linear-gradient(rgb(253, 41, 123), rgb(255, 101, 91));
	height: 80px;
	display: flex;
	justify-content: center;
	font-weight: 700;
`;

export const NavLink = styled.h2`
	color: #000000;
	font-size: 2rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	@media screen and (max-width: 400px) {
		position: relative;
		top: 10px;
		left: 25px;
	}
`;

export const Icon = styled(FaHandsHelping)`
	font-size: 2rem;
	position: absolute;
	color: #000000;
	top: 3%;
	left: 40px;
`;

export const LogoutBtn = styled.button`
	min-width: 170px;
	font-size: 1rem;
	padding: 0.8rem;
	border-radius: 100px;
	border: none;
	background: ##FFFFFF;
	color: #000;
	transition: 0.2s ease-out;
	position: absolute;
	right: 40px;
	top: 3%;
	&:hover {
		background: #FDE74C;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	};
`;

const Button3 = styled.button`
  position: absolute;
  width: 100%;
  max-height: 50px;
  max-width: 300px;
  padding: 12px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #000000;
  border: none;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;
  top: 700px;
  right: 630px;

  &:hover {
    background-color: #000000;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const Chat = ({ messages }) => {
  const [loadedMessages, setLoadedMessages] = useState([]);
  const [chat, setChat] = useState(null); 
  const router = useRouter();
  const { id, otherid } = router.query;
  console.log(router.query)
  const currentUser = id; // ID del usuario actual
  const otherUser = otherid
  const [message, setMessage] = useState(''); // variable para almacenar el mensaje del chat
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleButtonClick = (event) => {
    console.log("id "+currentUser)
    console.log("otherid "+ otherUser)
    console.log(message)
    enviarMensaje(currentUser,otherUser,message)
  }

  const handleVolver = async () => {
    const url=`/main?id=${id}`
    router.push(url)
  };


  useEffect(() => {
    const intervalId = setInterval(async () => {
      const result = await getChats(id,otherUser);
      if (result && Array.isArray(result)) {
        
        setChat(result);
        // Agregar propiedad isCurrentUser a cada mensaje
        setLoadedMessages(result.map(message => ({
          ...message,
          isCurrentUser: message.enviador === currentUser
        })));
      }
    }, 2000);
  
    return () => clearInterval(intervalId);
  }, []);

  function NavBar() {

    return (
      <>
        <Nav>
          <Icon></Icon> 
          <NavLink>Finder</NavLink>
            <Link href="/">
            <LogoutBtn>Cerrar Sesión</LogoutBtn>
            </Link>
        </Nav>
      </>
    );
  }

  return (
    <div>
    <NavBar />
    <ChatContainer>
      <ChatHeader>
        <h3>Chat</h3>
      </ChatHeader>
      <ChatBody> 
        { loadedMessages && loadedMessages.map((message, index) => (
          <MessageContainer key={index}>
            <MessageAvatar isCurrentUser={message.isCurrentUser}/>
            <MessageContent>
              <MessageText isCurrentUser={message.isCurrentUser}>{message.caption}</MessageText>
            </MessageContent>
          </MessageContainer>
        ))}
        <ChatInputContainer>
        <ChatInput type="text" placeholder="" value={message} onChange={handleMessageChange} />
        <Button onClick={handleButtonClick}>Enviar</Button>
        </ChatInputContainer>
      </ChatBody>
    </ChatContainer>
    <Button3 onClick={handleVolver}>Volver</Button3>
    </div>
  );
};

export default Chat; 