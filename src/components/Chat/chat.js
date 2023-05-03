import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { getChats } from '@/pages/api/apigetchats';
import { enviarMensaje } from '@/pages/api/apienviarmensaje';


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
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 10px;
`;

const ChatBody = styled.div`
  padding: 10px;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const MessageAvatar = styled(FaUser)`
  font-size: 24px;
  margin-right: 10px;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageText = styled.p`
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ isCurrentUser }) => isCurrentUser ? '#fff' : '#f03d4e'};
`;

const ChatInput = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;

  left: 0;
  right: 0;
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
const Chat = ({ messages }) => {
  const [loadedMessages, setLoadedMessages] = useState([]);
  const [chat, setChat] = useState(null); 
  const currentUser = 1; // ID del usuario actual
  const [message, setMessage] = useState(''); // variable para almacenar el mensaje del chat
  const sender = 2;
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleButtonClick = (event) => {
    console.log(message)
    enviarMensaje(currentUser,sender,message)

  }
 

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const result = await getChats(1,2);
      setChat(result);
      // Agregar propiedad isCurrentUser a cada mensaje
      setLoadedMessages(result.map(message => ({
        ...message,
        isCurrentUser: message.enviador === currentUser
      })));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ChatContainer>
      <ChatHeader>
        <h3>Chat</h3>
      </ChatHeader>
      <ChatBody> 
        { loadedMessages && loadedMessages.map((message, index) => (
          <MessageContainer key={index}>
            <MessageAvatar />
            <MessageContent>
              <MessageText isCurrentUser={message.isCurrentUser}>{message.caption}</MessageText>
            </MessageContent>
          </MessageContainer>
        ))}
        <ChatInput type="text" placeholder="Type your message" value={message} onChange={handleMessageChange} />
        <Button onClick={handleButtonClick}>Enviar</Button>
      </ChatBody>
    </ChatContainer>
  );
};

export default Chat; 