import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  top:0 !important;
  position:sticky !important;
  background: #001219;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
    align-items:center;
    height:450px;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover{
    color:rgb(187, 36, 89) !important;
  }
  &.active {
    color: rgb(102, 6, 40);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
    margin-bottom:4px;
    margin-top:15px;
    font-size:20px !important;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-top:15px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
    margin-top:5px;
    margin-bottom:10px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 25px;
  background: rgb(187, 36, 89);
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
    margin-top:5px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(150, 24, 68);
    color: #fff;
  }

`;