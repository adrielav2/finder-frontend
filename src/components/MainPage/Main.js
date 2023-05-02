import React, { useState, useEffect } from 'react';
import { MainBody, MainCard, ChatCard, ProfileImage, ProfileName, ProfileWrapper, AboutMeContainer, AboutMeTitle, List, LikeButton, DislikeButton, Chat, ChatImage, ChatsTitle, LogoutBtn, ProfileBtn} from './MainElements';
import { Nav, NavLink, Icon } from './MainElements.js';
import { GiNestedHearts, GiCancel } from 'react-icons/gi';
import Link from 'next/link'
import axios from 'axios';

export async function getServerSideProps({query}) {
    try {
        const { id } = query;
        const response = await axios.get(`http://localhost:3001/chatusersinfo?userid=${id}`);
        const data = response.data;
        return {
            props: {
            data
            }
        };
    } catch (error) {
        console.log('Error al recuperar los chats:', error);
      }
  }

function NavBar() {
	return (
		<>
			<Nav>
				<Icon></Icon> 
				<NavLink href="/">Finder</NavLink>
                <Link href="/">
					<LogoutBtn>Cerrar Sesión</LogoutBtn>
				</Link>
                <Link href="/">
					<ProfileBtn>Mi Perfil</ProfileBtn>
				</Link>
			</Nav>
		</>
	);
}

function MainPage({data}) {

    const [showDiv, setShowDiv] = useState(false);

    const handleButtonClick = () => {
        setShowDiv(!showDiv);
      };

    return (
    <MainBody>
        <NavBar/>
            <MainCard>
            <button onClick={handleButtonClick}>Toggle Div</button>
            {showDiv ? (
                <ProfileWrapper>
                    <ProfileName>John Doe</ProfileName>
                    <ProfileImage src="profileholder.png" alt="Your image"/>
                </ProfileWrapper>
            ) : null}
            {showDiv ? (
                <AboutMeContainer> 
                    <AboutMeTitle>Sobre Mi</AboutMeTitle>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit eleifend lectus, quis bibendum nulla consequat eu. Nulla convallis velit mauris, non hendrerit mi bibendum id.</p>
                    <AboutMeTitle>Intereses</AboutMeTitle>
                        <List>
                            <li>Programming</li>
                            <li>Music</li>
                            <li>Movies</li>
                        </List>
                </AboutMeContainer>
            ) : null}
            </MainCard>
        <LikeButton><GiNestedHearts size={60} color="#2FDA71"/></LikeButton>
        <DislikeButton><GiCancel size={60} color="#D93030"/></DislikeButton>
        <ChatsTitle>Chats</ChatsTitle>
        <ChatCard>
        {data.map(({ nombre, apellido1 }) => (
            <Chat> <ChatImage src="profileholder.png" alt={`${nombre}'s image`} />{`${nombre} ${apellido1}`}</Chat>
        ))}
        </ChatCard>
    </MainBody>
);
}
    
export default MainPage;