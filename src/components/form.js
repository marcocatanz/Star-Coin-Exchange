import * as s from '../styles/style';
import { useSelector, useDispatch } from 'react-redux';
import { requestConnect, connectFailed, updateValues, connectSuccess } from '../redux/action';
import { useEffect } from 'react';
import { togglePopup } from '../redux/action';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';



export const BuyForm = () => {

    const dispatch = useDispatch();
    let ethValue = useSelector((state) => state.ethValue);
    let starValue = useSelector((state) => state.starValue);
    let connected = useSelector((state) => state.connected);
    let disabled = true;
    if (connected == true){
        disabled = false;
    }

    const connectWallet = async (e) => {
        e.preventDefault();
        dispatch(togglePopup());
        dispatch(requestConnect());
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
            dispatch(connectFailed("Please Install MetaMask"));
        }      
    }

    const calculateStar = () => {
        document.getElementById("starValue").value = (document.getElementById("ethValue").value)*100;
        dispatch(updateValues(
            {
                ethValue: document.getElementById("ethValue").value,
                starValue: document.getElementById("starValue").value
            }
        ))
    }
    const calculateEth = () => {
        document.getElementById("ethValue").value = (document.getElementById("starValue").value)/100;
        dispatch(updateValues(
            {
                ethValue: document.getElementById("ethValue").value,
                starValue: document.getElementById("starValue").value
            }
        ))
    }
    const swap = (e) => {
        e.preventDefault();
        dispatch(togglePopup());
    }


    return(
        <form onSubmit={(e) => swap(e)}>
               <s.Text>swap</s.Text>
               <s.InputContainer>
                   <s.Input disabled={disabled} onChange={() => calculateStar()} id="ethValue" type="number" placeholder='0' min={0} step="any" ></s.Input>
                   <s.Text>Eth</s.Text>
               </s.InputContainer>
               <s.Text>for</s.Text>
               <s.InputContainer>
                   <s.Input disabled={disabled} onChange={() => calculateEth()} id="starValue" type="number" placeholder='0'min={0} step="any"  ></s.Input>
                   <s.Text>Star Coins</s.Text>
               </s.InputContainer>
               {
               connected == false 
               ?
                <s.ConnectButton onClick={(e) => connectWallet(e)}>Connect Wallet</s.ConnectButton>
               :
                ethValue > 0 
                ? 
                  <s.SwapButton bgc={"rgba(117, 201, 183, 1)"} type='submit'>Swap</s.SwapButton>
                :
                  <s.DisabledButton bgc={"rgba(117, 201, 183, 0.4)"}  type='submit'>Enter Amount</s.DisabledButton>
                }
        </form>
    );
}



export const SellForm = () => {

    const dispatch = useDispatch();
    let ethValue = useSelector((state) => state.ethValue);
    let starValue = useSelector((state) => state.starValue);
    let connected = useSelector((state) => state.connected);
    let disabled = true;
    if (connected == true){
        disabled = false;
    }

    const connectWallet = async (e) => {
        e.preventDefault();
        dispatch(togglePopup());
        await dispatch(requestConnect());
        const networkID = await window.ethereum.request({ method: 'net_version'});
        console.log(networkID);
        if (networkID == 1645772723623){
            try{
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                dispatch(connectSuccess());
                setTimeout(() => {  
                     dispatch(togglePopup()); 
                }, 500);
            }catch(error){
               dispatch(connectFailed("Failed to Connect"));
            }     
        }else{
            setTimeout(() => {  
                dispatch(connectFailed("Switch to Rinkeby Network")); 
            }, 500);
            
        }      
    }

    const calculateStar = () => {
        document.getElementById("starValue").value = (document.getElementById("ethValue").value)*100;
        dispatch(updateValues(
            {
                ethValue: document.getElementById("ethValue").value,
                starValue: document.getElementById("starValue").value
            }
        ))
    }
    const calculateEth = () => {
        document.getElementById("ethValue").value = (document.getElementById("starValue").value)/100;
        dispatch(updateValues(
            {
                ethValue: document.getElementById("ethValue").value,
                starValue: document.getElementById("starValue").value
            }
        ))
    }
    const swap = (e) => {
        e.preventDefault();
        dispatch(togglePopup());
    }


    return(
        <form onSubmit={(e) => swap(e)}>
               <s.Text>swap</s.Text>
               <s.InputContainer>
                   <s.Input disabled={disabled} onChange={() => calculateEth()} id="starValue" type="number" placeholder='0'min={0} step="any"  ></s.Input>
                   <s.Text>star coins</s.Text>
               </s.InputContainer>
               <s.Text>for</s.Text>
               <s.InputContainer>
                   <s.Input disabled={disabled} onChange={() => calculateStar()} id="ethValue" type="number" placeholder='0' min={0} step="any" ></s.Input>
                   <s.Text>eth</s.Text>
               </s.InputContainer>
               {
               connected == false 
               ?
                <s.ConnectButton onClick={(e) => connectWallet(e)}>Connect Wallet</s.ConnectButton>
               :
                ethValue > 0 
                ? 
                  <s.SwapButton bgc={"rgba(117, 201, 183, 1)"} type='submit'>Swap</s.SwapButton>
                :
                  <s.DisabledButton bgc={"rgba(117, 201, 183, 0.4)"}  type='submit'>Enter Amount</s.DisabledButton>
                }
        </form>
    );
}
