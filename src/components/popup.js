import * as s from '../styles/style';
import { useDispatch, useSelector } from 'react-redux';
import { attemptBuy, buyFail, connectSuccess, togglePopup } from '../redux/action';
import { faXmark, faAnglesDown, faExclamationCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { requestConnect, connectFailed, updateValues, buySuccess } from '../redux/action';
import Web3 from 'web3';
const web3 = new Web3(window.ethereum);

const Exchange = new web3.eth.Contract(require('../contracts/Exchange.json').abi, '0x267aBd60601240eF53f963fFf29d110F743e27de');
const StarCoin = new web3.eth.Contract(require('../contracts/StarCoin.json').abi, '0x5041baf6999C5D6c853c3e32A70cA6A1c0BB8B29');

export const Popup = () => {
    const dispatch = useDispatch();

    let ethValue = useSelector((state)=>state.ethValue);
    let starValue = useSelector((state)=>state.starValue);
    const toggler = useSelector((state) => state.toggler);
    const loading = useSelector((state) => state.loading);
    const message = useSelector((state) => state.message);
    const error = useSelector((state) => state.error);
    const connected = useSelector((state) => state.connected);
 

const connectWallet = async (e) => {
        e.preventDefault();
        dispatch(requestConnect());
        if (window.ethereum){
            const networkID = await window.ethereum.request({ method: 'net_version'});
            console.log(networkID);
            if (networkID == 4){
                try{
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    dispatch(connectSuccess());
                    dispatch(togglePopup());
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
const installMetaMask = async () => {
   await window.location.reload();
}
const buy = async (e) => {
        dispatch(attemptBuy());
        const networkID = await window.ethereum.request({ method: 'net_version'});
        if (networkID == 4){
            try{
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                await Exchange.methods.buy().send({
                    from: account,
                    value: web3.utils.toWei(ethValue, "ether")
                });
                dispatch(buySuccess());
                dispatch(togglePopup());
                console.log("you bought star coins");
            }catch(error){
                dispatch(buyFail());
            }
        }else{
            setTimeout(() => {  
                    dispatch(connectFailed("Switch to Rinkeby Network")); 
                }, 500);
        }
    }
    const sell = async () => {
        dispatch(attemptBuy());
        const networkID = await window.ethereum.request({ method: 'net_version'});
        if (networkID == 4){
            try{
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                await StarCoin.methods.approve("0x267aBd60601240eF53f963fFf29d110F743e27de", web3.utils.toWei(starValue, 'ether')).send({
                    from: account
                });
                await Exchange.methods.sell(web3.utils.toWei(starValue, 'ether')).send({
                        from: account
                });
                dispatch(buySuccess());
                dispatch(togglePopup());
                console.log("you sold star coins");
            }catch(error){
                dispatch(buyFail());
            }
        }else{
            setTimeout(() => {  
                    dispatch(connectFailed("Switch to Rinkeby Network")); 
                }, 500);
        }    
    }

    return(
        <s.PopupBackground>
        <s.Popup>
            <s.closeIcon onClick={()=>dispatch(togglePopup())}><s.Xmark icon={faXmark}></s.Xmark></s.closeIcon>
            <s.PopupContainer>
                {
                loading == false ? (
                    toggler == "buy" ? (
                        <>
                          <s.TextTitle>Confirm Swap</s.TextTitle>
                          <s.Text>{ethValue} eth</s.Text>
                          <s.Arrow icon={faAnglesDown}></s.Arrow>
                          <s.Text>{starValue} star coins</s.Text>
                          <s.ConfirmButton onClick={(e) => buy()}>Confirm Swap</s.ConfirmButton>
                       </>
                    ):(
                        <>
                          <s.TextTitle>Confirm Swap</s.TextTitle>
                          <s.Text>{starValue} star coins</s.Text>
                          <s.Arrow icon={faAnglesDown}></s.Arrow>
                          <h3>{ethValue} eth</h3>
                          <s.ConfirmButton onClick={(e) => sell(e)}>Confirm Swap</s.ConfirmButton>
                        </>
                    )
                ):(
                    error == false ?(
                        <>
                        <s.Spinner src={require('../assets/loading.gif')}></s.Spinner>
                        <s.Text>{message}</s.Text>
                        </>
                    ):(
                        <>
                        <s.Error icon={faExclamationCircle}></s.Error>
                        <s.Text c="red">{message}</s.Text>
                        {
                            connected == true 
                            ? toggler == "buy"
                                 ? <s.ConfirmButton onClick={()=>buy()}>Try Again</s.ConfirmButton>
                                 : <s.ConfirmButton onClick={()=>sell()}>Try Again</s.ConfirmButton>
                            : window.ethereum 
                              ? <s.ConfirmButton onClick={(e)=>connectWallet(e)}>Try Again</s.ConfirmButton>
                              : (
                                  <>
                                  <a href="https://metamask.io/" target="_blank">Install MetaMask</a>
                                  <s.ConfirmButton onClick={(e)=>installMetaMask(e)}>Try Again</s.ConfirmButton>
                                 </>
                                )
                            
                        }
                        
                        </>
                    )
                )
                }
            </s.PopupContainer>
        </s.Popup>
        </s.PopupBackground>
    );
   
}
