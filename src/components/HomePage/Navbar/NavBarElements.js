import styled from 'styled-components';
import Link from 'next/link'
import { FaHandsHelping } from 'react-icons/fa';

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

export const LoginBtn = styled.button`
	min-width: 170px;
	font-size: 1rem;
	padding: 1rem 1rem;
	border-radius: 100px;
	border: none;
	background: ##FFFFFF;
	color: #000;
	transition: 0.2s ease-out;
	position: absolute;
	right: 40px;
	top: 2%;
	&:hover {
		background: #FDE74C;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	};
`;

export const Icon = styled(FaHandsHelping)`
	font-size: 2rem;
	position: absolute;
	color: #FFF;
	top: 3%;
	left: 40px;
`;
	
