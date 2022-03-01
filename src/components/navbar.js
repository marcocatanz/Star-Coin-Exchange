import * as s from '../styles/style';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { changePage, requestConnect, connectFailed, connectSuccess, toggleDropdown, viewWallet, togglePopup} from '../redux/action';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faWallet, faBars } from '@fortawesome/free-solid-svg-icons';
import { AccountPage } from './wallet';
import { useEffect } from 'react';
import Identicon from 'identicon.js';
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

export const NavBar = () => {

    const dispatch = useDispatch();
    const connected = useSelector((state) => state.connected);
    const dropdown = useSelector((state) => state.dropdown);
    const [toggleNav, setToggleNav] = useState("closed");
    let account;
 
    const checkConnection = async () => {
       const accounts = await web3.eth.getAccounts();
       const networkID = await window.ethereum.request({ method: 'net_version'});
       if (accounts.length > 0 && networkID == 4){
         dispatch(connectSuccess());
      }
    }

    useEffect(() => {
       checkConnection();
    });

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect( ()=>{
         const resizeWindow = () => {
         setScreenWidth(window.innerWidth);
    }
        window.addEventListener('resize', resizeWindow);
    }, []);

    const toggleMobileNav = () => {
        if (toggleNav == "closed"){
            setToggleNav("open");
        }else{
            setToggleNav("closed");
        }
        console.log(toggleNav)
    }

    const connectWallet = async (e) => {
        e.preventDefault();
        toggleMobileNav();
        dispatch(togglePopup());
        await dispatch(requestConnect());
        if (window.ethereum){
            const networkID = await window.ethereum.request({ method: 'net_version'});
            console.log(networkID);
            if (networkID == 4){
                try{
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    dispatch(togglePopup());
                    dispatch(connectSuccess());
                }catch(error){
                dispatch(connectFailed("Failed to Connect"));
                }     
            }else{
                setTimeout(() => {  
                    dispatch(connectFailed("Switch to Rinkeby Network")); 
                }, 500);   
            }
        }else{
            dispatch(connectFailed("Install MetaMask"));
        }      
    }

    return(
        <>
        { screenWidth > 500
        ? (
            <s.Nav>
            <s.LogoContainer><s.NavLogo to="/">Star Coin</s.NavLogo></s.LogoContainer>
            
            <s.NavMenu>
                <s.NavItem to="exchange">Exchange</s.NavItem>
                {
                    connected == false 
                    ?
                      <s.NavButton onClick={(e) => connectWallet(e)}>Connect Wallet</s.NavButton>
                    :
                     <s.Account icon={faWallet} onClick={(e)=>dispatch(toggleDropdown())}></s.Account> 
                       
                }
            </s.NavMenu>

                {                   
                    <AccountPage></AccountPage>                     
                }

             </s.Nav>)
        :(
            <s.Nav>
              <s.LogoContainer><s.NavLogo onClick={()=>toggleMobileNav()} to="/">Star Coin</s.NavLogo></s.LogoContainer>
            
            <s.NavMenu>
                <s.Bars onClick={() => toggleMobileNav()} icon={faBars}></s.Bars>

            </s.NavMenu>

                {
                    toggleNav == "open"
                    ? (
                    <s.NavMobileBackground>
                        <s.NavMenuMob>
                            <s.ItemCointainer>
                                <s.NavItem onClick={()=>toggleMobileNav()} to="exchange">Exchange</s.NavItem>
                            </s.ItemCointainer>
                            <s.ItemCointainer>
                                {
                                connected == false 
                                ?
                                 <s.NavButton onClick={(e) => connectWallet(e)}>Connect Wallet</s.NavButton>
                                :
                                 <s.Account icon={faWallet} onClick={()=>{
                                     toggleMobileNav();
                                     dispatch(toggleDropdown());
                                     }}>
                                </s.Account>
                                }
                            </s.ItemCointainer>
                        </s.NavMenuMob>
                    </s.NavMobileBackground>
                    ): null
                }

                {
                   
                    <AccountPage></AccountPage> 
                    
                }

             </s.Nav>
        )
        }
        </>
       
    );
}