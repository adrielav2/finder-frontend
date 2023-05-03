import React, { useState, useEffect } from 'react';
import { MainBody, MainCard, MainTitle, ChatCard, ProfileImage, ProfileName, ProfileWrapper, AboutMeContainer, AboutMeTitle, List, LikeButton, DislikeButton, Chat, ChatImage, ChatsTitle, LogoutBtn, ProfileBtn, StartBtn, MainTitle2, ContinueBtn, MatchInfo} from './MainElements';
import { Nav, NavLink, Icon } from './MainElements.js';
import { useRouter } from 'next/router'
import { getChatUsersInfo, getMatchesUsersInfo, postUserAction }  from "../../pages/api/apimain"
import { GiNestedHearts, GiCancel } from 'react-icons/gi';
import Link from 'next/link';
import axios from 'axios';

function MainPage() {

    const [showDiv, setShowDiv] = useState(false);
    const [startClicked, setStartClicked] = useState(false);
    const [noMatches, setnoMatches] = useState(false);
    const [newMatch, setnewMatch] = useState(false);
    const [matches, setMatches] = useState(null);
    const [interest, setInterest] = useState([]);
    const [interest2, setInterest2] = useState([]);
    const [currentMatch, setCurrentMatch] = useState(null);
    const [otherUser, setotherUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();
    const { id } = router.query;

    const [chat, setChat] = useState(null);

    const handleStartButtonClick = async () => {
      setStartClicked(true);
      const result = await getMatchesUsersInfo(id);
      if (result.length !== 0){
        setCurrentIndex(currentIndex + 1);
        setShowDiv(!showDiv);
        setMatches(result);
        setCurrentMatch(result[currentIndex]);
        setotherUser(result[currentIndex]?.userid)
        setInterest2(result.map((item) => {
          return item?.intereses_en_comun;
        }));
        setInterest(result[currentIndex]?.intereses_en_comun?.split(','))
        
      }
      else{
        setnoMatches(true)
      }
    };

      const handleLike = async () => {
        if (currentIndex < matches.length) {
        setotherUser(currentMatch.userid)
        await postUserAction(id,otherUser,1)
        const result = await getChatUsersInfo(id);
        if (result.length > chat.length) {
          setChat(result)
          setnewMatch(true)
          setShowDiv(false);
        }
        else{
          setCurrentIndex(currentIndex + 1);
          setCurrentMatch(matches[currentIndex + 1]);
          setInterest(interest2[currentIndex].split(','))
        }
      }
      else if (currentIndex === matches.length){
        setnoMatches(true)
        setShowDiv(false)
      }
    };
    
      const handleDislike = async () => {
        if (currentIndex < matches.length) {
          setCurrentIndex(currentIndex + 1); 
          setCurrentMatch(matches[currentIndex + 1]);
          setInterest(interest2[currentIndex].split(','))
          setotherUser(currentMatch.userid)
          await postUserAction(id,otherUser,2)
        }
        else if (currentIndex === matches.length){
          setnoMatches(true)
          setShowDiv(false)
        }
      };

      const handleContinueClick = async () => {
        if (currentIndex === matches.length) {
          setnewMatch(false)
          setnoMatches(true)
        }
        else{
          setnewMatch(false)
          setShowDiv(true)
          setCurrentIndex(currentIndex + 1);
          setCurrentMatch(matches[currentIndex + 1]);
        }
      };

      const handleChatClick = async (key) => {
        let url= `/chat?id=${key}`
        router.push(url)
      };

      const handlePerfilClick = async () => {
        let url= `/intereses?id=${id}`
        router.push(url)
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

        function NavBar() {

          return (
            <>
              <Nav>
                <Icon></Icon> 
                <NavLink>Finder</NavLink>
                        <Link href="/">
                  <LogoutBtn>Cerrar Sesión</LogoutBtn>
                </Link>
                        <Link href="/intereses">
                  <ProfileBtn onClick={handlePerfilClick}> Mi Perfil</ProfileBtn>
                </Link>
              </Nav>
            </>
          );
        }
    
        return (
            <MainBody>
              <NavBar />
              <MainCard>
                {/* This condition checks if the start button is clicked */}
                {startClicked ? null : <MainTitle>¡Encuentra tu gente!</MainTitle>}
                {noMatches ? <MainTitle2>No hay más coincidencias :/</MainTitle2> : null}
                {newMatch ? <MainTitle2>¡Tienes una nueva coincidencia!</MainTitle2>  : null}
                {newMatch ? <MatchInfo>Presiona en su chat para enviar un nuevo mensaje :D</MatchInfo>  : null}
                {startClicked ? null : (
                  <StartBtn onClick={handleStartButtonClick}>Empezar ahora</StartBtn>
                )}
                {newMatch ? <ContinueBtn onClick={handleContinueClick}>Continuar :)</ContinueBtn> : null}
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
                      {interest.map((interest) => (<li>{interest}</li> ))}
                      </List>
                    </AboutMeContainer>
                  </>
                )}
                {/* This is the closing bracket of the MainCard component */}
              </MainCard>
              {showDiv ? (
                <div>
              <LikeButton onClick={handleLike}>
                <GiNestedHearts size={60} color="#2FDA71" />
              </LikeButton>
              <DislikeButton onClick={handleDislike}>
                <GiCancel size={60} color="#D93030" />
              </DislikeButton>
              </div>
              ) : null}
              <ChatsTitle>Chats</ChatsTitle>
              {chat ? (
                <>
                {chat.map(({ userid, nombre, apellido1 }) => (
                <ChatCard key={userid} onClick={() => handleChatClick(key)}>
                    <Chat>
                      {" "}
                      <ChatImage
                        src="profileholder.png"
                        alt={`${nombre}'s image`}
                      />
                      {`${nombre} ${apellido1}`}
                    </Chat>
                </ChatCard>
                ))}
              </>
              ) : ( 
                <p>Loading data...</p>
              )}
            </MainBody>
          );
              }
      

    
export default MainPage;