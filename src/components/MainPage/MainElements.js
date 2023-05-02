import styled from 'styled-components';
import { FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link';

export const MainBody = styled.div`
	background: linear-gradient(to right, rgb(253, 41, 123), rgb(255, 101, 91));
	height: 100vh;
	background-position: center;
	background-size: cover;
`;

export const MainCard = styled.div`
	background: white;
    height: 60vh;
	width: 60%;
    position: absolute;
    top: 50%;
    left: 65%;
    display: flex;
    transform: translate(-50%, -50%);
    border-radius: 50px;
`;

export const ChatCard = styled.div`
	background: white;
    height: 75vh;
	  width: 26%;
    position: absolute;
    top: 57%;
    right: 59%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;

export const Chat = styled.div`
  height: 60px;
  width: 90%;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 15px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const ChatImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatsTitle = styled.h2`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  top: 110px;
  left: 55px;
`;

export const MainTitle = styled.h1`
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  top: 110px;
  left: 300px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  float: left;
  margin-left: 50px;
  max-width: 75%;
  max-height: 75%;
  height: auto;
  margin-top: 60px;
`;

export const ProfileName = styled.h2`
  font-size: 24px;
  font-weight: normal;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 60px;
  clear: left;
  text-align: center;
`;

export const AboutMeContainer = styled.div`
  float: right;
  max-width: 50%;
  margin-top: 60px;
  margin-left: 40px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const AboutMeTitle = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const List = styled.ul`
  list-style: disc;
  margin-left: 20px;
`;

export const LikeButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  color: white;
  position: absolute;
  bottom: 20px;
  right: 600px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const DislikeButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  color: white;
  position: absolute;
  bottom: 20px;
  right: 320px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Nav = styled.nav`
	background: linear-gradient(#574141, transparent);
	height: 80px;
	display: flex;
	justify-content: center;
	font-weight: 700;
`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: 2rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	@media screen and (max-width: 400px) {
		position: relative;
		top: 10px;
		left: 25px;
	}
`;

export const Icon = styled(FaHandsHelping)`
	font-size: 2rem;
	position: absolute;
	color: #FFF;
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

export const ProfileBtn = styled.button`
	min-width: 170px;
	font-size: 1rem;
	padding: 0.8rem;
	border-radius: 100px;
	border: none;
	background: ##FFFFFF;
	color: #000;
	transition: 0.2s ease-out;
	position: absolute;
	right: 220px;
	top: 3%;
	&:hover {
		background: #FDE74C;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	};
`
  export const StartBtn = styled.button`
	min-width: 170px;
	font-size: 1rem;
	padding: 0.8rem;
	border-radius: 100px;
	border: none;
	background: linear-gradient(to right, rgb(253, 41, 123), rgb(255, 101, 91));
	color: #000;
	transition: 0.2s ease-out;
	position: absolute;
  left: 50%;
  transform: translate(-50%, 400%);
	&:hover {
		background: #FDE74C;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	};

`;
	
