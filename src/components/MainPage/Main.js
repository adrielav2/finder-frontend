import React, { useState, useEffect } from 'react';
import { MainBody, MainCard, MainTitle, ChatCard, ProfileImage, ProfileName, ProfileWrapper, AboutMeContainer, AboutMeTitle, List, LikeButton, DislikeButton, Chat, ChatImage, ChatsTitle, LogoutBtn, ProfileBtn, StartBtn} from './MainElements';
import { Nav, NavLink, Icon } from './MainElements.js';
import { useRouter } from 'next/router'
import { getChatUsersInfo, getMatchesUsersInfo }  from "../../pages/api/apimain"
import { GiNestedHearts, GiCancel } from 'react-icons/gi';
import Link from 'next/link';
import axios from 'axios';

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

    const [showDiv, setShowDiv] = useState(false);
    const [startClicked, setStartClicked] = useState(false);
    const [matches, setMatches] = useState(null);
    const [currentMatch, setCurrentMatch] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();
    const { id } = router.query;

    const [chat, setChat] = useState(null);

    const handleStartButtonClick = async () => {
        setShowDiv(!showDiv);
        setStartClicked(true);
        const result = await getMatchesUsersInfo(id);
        setMatches(result);
        setCurrentMatch(result[currentIndex]);
      };

      const handleLike = () => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex + 1 < matches.length) {
          setCurrentMatch(matches[currentIndex + 1]);
        }
      };
    
      const handleDislike = () => {
        setCurrentIndex(currentIndex + 1);
        if (currentIndex + 1 < matches.length) {
          setCurrentMatch(matches[currentIndex + 1]);
        }
      };

      useEffect(() => {
        if(id !== undefined){
            async function fetchData() {
            const result = await getChatUsersInfo(id);
            setChat(result);
            }
            fetchData();
        }
        }, [id]);
    
        return (
            <MainBody>
              <NavBar />
              <MainCard>
                {/* This condition checks if the start button is clicked */}
                {startClicked ? null : <MainTitle>¡Encuentra tu gente!</MainTitle>}
                {startClicked ? null : (
                  <StartBtn onClick={handleStartButtonClick}>Empezar ahora</StartBtn>
                )}
                {/* This condition checks if showDiv is true and currentMatch exists */}
                {showDiv && currentMatch && (
                  <>
                    {/* ProfileWrapper is moved outside the AboutMeContainer */}
                    <ProfileWrapper>
                      <ProfileName>
                        {currentMatch.nombre} {currentMatch.apellido1}
                      </ProfileName>
                      <ProfileImage
                        src="profileholder.png"
                        alt={`${currentMatch.nombre}'s image`}
                      />
                    </ProfileWrapper>
                    <AboutMeContainer>
                      <AboutMeTitle>Sobre Mi</AboutMeTitle>
                      <p>{currentMatch.summary}</p>
                      <AboutMeTitle>Intereses</AboutMeTitle>
                      <List>
                        <li>{currentMatch.intereses_en_comun}</li>
                      </List>
                    </AboutMeContainer>
                  </>
                )}
                {/* This is the closing bracket of the MainCard component */}
              </MainCard>
              <LikeButton onClick={handleLike}>
                <GiNestedHearts size={60} color="#2FDA71" />
              </LikeButton>
              <DislikeButton onClick={handleDislike}>
                <GiCancel size={60} color="#D93030" />
              </DislikeButton>
              <ChatsTitle>Chats</ChatsTitle>
              {chat ? (
                <ChatCard>
                  {chat.map(({ nombre, apellido1 }) => (
                    <Chat>
                      {" "}
                      <ChatImage
                        src="profileholder.png"
                        alt={`${nombre}'s image`}
                      />
                      {`${nombre} ${apellido1}`}
                    </Chat>
                  ))}
                </ChatCard>
              ) : (
                <p>Loading data...</p>
              )}
            </MainBody>
          );
              }
      

    
export default MainPage;