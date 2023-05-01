import React, { useState } from 'react';
import { MainBody, MainCard, ChatCard, ProfileImage, ProfileName, ProfileWrapper, AboutMeContainer, AboutMeTitle, List, LikeButton, DislikeButton, Chat, ChatImage, ChatsTitle, LogoutBtn, ProfileBtn} from './MainElements';
import { Nav, NavLink, Icon } from './MainElements.js';
import { GiNestedHearts, GiCancel } from 'react-icons/gi';
import Link from 'next/link'



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

function MainPage() {
    return (
    <MainBody>
        <NavBar/>
            <MainCard>
                <ProfileWrapper>
                    <ProfileName>John Doe</ProfileName>
                    <ProfileImage src="profileholder.png" alt="Your image"/>
                </ProfileWrapper>
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
            </MainCard>
        <LikeButton><GiNestedHearts size={60} color="#2FDA71"/></LikeButton>
        <DislikeButton><GiCancel size={60} color="#D93030"/></DislikeButton>
        <ChatsTitle>Chats</ChatsTitle>
        <ChatCard>
            <Chat> <ChatImage src="profileholder.png" alt="Your image" />Alex</Chat>
            <Chat> <ChatImage src="profileholder.png" alt="Your image" />Michael</Chat>
            <Chat> <ChatImage src="profileholder.png" alt="Your image" />Maria</Chat> 
        </ChatCard>
    </MainBody>
);
}
    
export default MainPage;