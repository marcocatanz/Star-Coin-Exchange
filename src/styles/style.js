import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


//page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bgc}
`;
export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

//Coin Models
export const ModelContainer = styled.div`
  height: 500px;
  width: 500px;
`;

//navbar
export const Nav  = styled.nav`
  background-color: #16123f;
  height: 50px;
  width:100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  color: white;
  font-family: 'Space Mono', monospace;
  z-index: 10;
`;
export const LogoContainer = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  height: 50px;
  width: 50%;
  @media screen and (max-width: 500px){
     padding-left: 20px;
  }
`;
export const NavLogo = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: white;
  &: hover{
      cursor: pointer;
      color:#e8cd5f;
  }
  
`;
export const NavMenu = styled.div`
  display: flex;#e8cd5f
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  width: 50%;
  padding-right: 10px;
`;
export const NavItem = styled(Link)`
  font-size: 25px;
  text-decoration: none;
  color: white;
  &: hover{
      cursor: pointer;
      color: #e8cd5f;
  }
  @media screen and (max-width: 500px){
     color: black;
  }
`;
export const Account = styled(FontAwesomeIcon)`
   color: white;
   height: 30px;
   width: 100px;
   &: hover{
       cursor: pointer;
       color: #e8cd5f;
   }
   @media screen and (max-width: 500px){
     color: black;
  }
`;
export const Bars = styled(FontAwesomeIcon)`
   color: white;
   height: 40px;
   margin-left: 50px;
   &: hover{
       cursor: pointer;
       color: #e8cd5f;
   }
`;

//Mobile navbar
export const NavMobileBackground = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   height:100vh;
   width: 100vw;
   background-color: rgba(0, 0, 0, 0.5);
   position: fixed;
   z-index: -3;
`;
export const NavMenuMob = styled.div`
  margin-top: 50px;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 120px;
`;
export const ItemCointainer = styled.div`
  width: 100%;
  height: 50px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

//exchange component
export const ExchangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 500px;
  width: 500px;
  border-radius: 100px;
  @media screen and (max-width: 650px){
     width: 450px;
  }
  @media screen and (max-width: 500px){
     width: 400px;
  }
  @media screen and (max-width: 400px){
     width: 350px;
  }
  
  @media screen and (max-height: 640px){
     height: 400px;
  }
  @media screen and (max-height: 545px){
     height: 350px;
  }
`;
export const TogglerContainer = styled.div`
  background-color: white;
  height: 50px;
  width: 500px;
  @media screen and (max-width: 650px){
     width: 400px;
  }
  @media screen and (max-width: 650px){
     width: 350px;
  }

  @media screen and (max-height: 640px){
     width: 350px;
  }
`;
export const ExchangeInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:  400px;
  height: 400px;
  @media screen and (max-width: 500px){
     width: 350px;
  }
  @media screen and (max-width: 400px){
     width: 300px;
  }
`;
export const Form = styled.form``;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 100px;
  padding-right:5px;
  width: 100%;
  height: 80px;
  margin-top: 10px;
  border: 2px solid grey;
  &:hover{
      border: 2px solid black;
  }
  @media screen and (max-height: 545px){
      width: 300px;
      height: 50px;
  }
`;
export const Input = styled.input`
  justify-self: flex-end;
  font-size: 20px;
  border: none;
  background: none;
  text-align: right;
  outline: none;
  margin-right: 10px;
  -webkit-appearance: none;
  @media screen and (max-width: 400px){
     font-size: 15px;
  }

  @media screen and (max-height: 545px){
      margin-right:0px;
      font-size: 20px;
  }
`;

export const TokenSymbol = styled(FontAwesomeIcon)`
   height:30px;
   height: 30px;
   color: black;
`;
export const EthSymbol = styled.img`
   height:30px;
   height: 30px;
   color: black;
`;

//buttons
export const NavButton = styled.button`
  border-left:none;
  background-color: #ffe26a;
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  border-radius: 100px;
  height: 40px;
  width: 200px;
  margin-left: 20px;
  font-size: 20px;
  &: hover{
      cursor: pointer;
  }
  @media screen and (max-width: 640px){
     font-size: 15px;
  }
  @media screen and (max-width: 500px){
     width: 90%;
     height: 100%;
     margin-top: 10px;
     margin-left: 0px;
     border-radius: 100px;
     font-size: 20px;

  }
  
`;
export const Button = styled.button`
  height: 100%;
  width: 50%;
  border-left:none;
  background-color: ${props => props.bgc};
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  font-size: 15px;
  &:hover{
    cursor: pointer;
  }
`;
export const ConnectButton = styled.button`
  margin-top: 20px;
  height: 50px;
  width: 100%;
  background-color: rgba(117, 201, 183, 0.4);
  justify-self: ${props => props.js};
  border-radius: 100px;
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  font-size: 20px;
  &:hover{
    cursor: pointer;
  }
`;
export const SwapButton = styled.button`
  margin-top: 20px;
  height: 50px;
  width: 100%;
  background-color: ${props => props.bgc};
  justify-self: ${props => props.js};
  border-radius: 100px;
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  font-size: 20px;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-height: 640px){
     width: 100%;
  }
  
`;
export const DisabledButton = styled.div`
  margin-top: 20px;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgc};
  justify-content: center;
  border-radius: 100px;
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  font-size: 20px;
`;
export const ConfirmButton = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 50px;
  background-color: #ffe26a;
  border-radius: 100px;
   font-family: 'Space Mono', monospace;
  font-size: 15px;
  font-weight: bold;
  &:hover{
      background-color: #e8cd5f;
      cursor: pointer;
  }
`;

//popup
export const PopupBackground = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height:100vh;
   width: 100vw;
   background-color: rgba(0, 0, 0, 0.5);
   position: fixed;
`;

export const Popup = styled.div`
  height: 400px;
  width: 400px;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
`;
export const PopupContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px; 
  width: 400px;
`;
export const closeIcon = styled.div`
   align-self: flex-end;
   height: 40px;
   width: 40px;
   z-index:2;
   &:hover{
    cursor: pointer;
  }
`;
export const Xmark = styled(FontAwesomeIcon)`
   height: 100%;
   width: 100%;
`;
export const Arrow = styled(FontAwesomeIcon)`
   height: 20px;
   width: 20px;
`;
export const Spinner = styled.img`
   height: 120px;
   width: 120px;
`;
export const Error = styled(FontAwesomeIcon)`
   height: 120px;
   width: 120px;
   color: red;
`;
export const Success = styled(FontAwesomeIcon)`
   height: 120px;
   width: 120px;
   color: green;
`;

//Account

export const Dropdown = styled.div`
  height: 100%;
  width: 400px;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  color: black;
  animation-name: ${props => props.an};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  visibility: hidden;
  @media screen and (max-width: 500px){
     height: 50%;
   }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  animation-name: ${props => props.an};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  visibility: ${props=>props.vis};
`;
export const DropDownBackground = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;
   height:100vh;
   width: 100vw;
   position: fixed;
   background-color: rgba(0, 0, 0, 0.5);
   visibility: ${props=>props.vis};
   @media screen and (max-width: 500px){
     font-size: 15px;
     align-items: center;
     justify-content: flex-end;
   }
`;
export const CloseIcon = styled.div`
   align-self: flex-start;
   height: 40px;
   width: 40px;
   z-index:2;
   color: black;
   &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 400px){
     margin-left: 10px;
  }
`;
export const ProfileImage = styled.div`
   height: 100px;
   width: 100px;
   z-index:2;
   animation-name: ${props => props.an};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  visibility: ${props=>props.vis};
  @media screen and (max-width: 500px){
     height:50px;
   }
`;
export const WalletIcon = styled(FontAwesomeIcon)`
   height: 100%;
   width: 100%;
   color: black;
   animation-name: ${props => props.an};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  visibility: ${props=>props.vis};
`;
export const BalanceContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  animation-name: ${props => props.an};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  visibility: ${props=>props.vis};
  @media screen and (max-width: 500px){
     margin-top: 0px;
   }
`;

//text
export const TextTitleLarge = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 100px;
  font-weight: bold;
  margin-bottom: 0px;
  text-align: ${props => props.ta};
  color: ${props => props.c};
`;

export const TextTitle = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 0px;
  text-align: ${props => props.ta};
  color: ${props => props.c};
`;
export const Text = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.c};
  text-align: ${props => props.ta};
`;
export const TextSmall = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.c};
  text-align: ${props => props.ta};
`;
export const TextBalance = styled.p`
  font-family: 'Space Mono', monospace;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 0px;
  text-align: ${props => props.ta};
  @media screen and (max-width: 500px){
     font-size: 25px;
   }
`;
export const TextLink = styled(Link)`
  text-decoration: none;
  color: #75c9b7;
  &:hover{
    color: white;
  }
`;
export const TextA = styled.a`
  text-decoration: none;
  color: #75c9b7;
  &:hover{
    color: white;
  }
`;