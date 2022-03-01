import { faXmark, faWallet } from '@fortawesome/free-solid-svg-icons';
import * as s from '../styles/style';
import { useDispatch, useSelector} from 'react-redux';
import { toggleDropdown } from '../redux/action';
import Web3 from 'web3';
import { useEffect, useState } from 'react';
import Identicon from 'identicon.js';
import { keyframes } from 'styled-components';
const web3 = new Web3(window.ethereum);


export const AccountPage = () => {

    const dispatch = useDispatch();
    const dropdown = useSelector((state) => state.dropdown);
    let visibility = "hidden";
    let animation;
    if(dropdown == "open"){
         visibility = "visible";
         animation = keyframes`
          0% {width: 0px; visibility: hidden;}
          100% {width: 400px; visibility: visible;}`
    }else{
       visibility = "hidden"; 
    }
    const [account, setAccount] = useState("");
    const [starBalance, setStarBalance] = useState(0);
    const [ethBalance, setEthBalance] = useState(0);
    const getAccount = async (e) => {
        const accounts = await web3.eth.getAccounts();
        const account = await accounts[0];
        const starcoin = new web3.eth.Contract(require('../contracts/StarCoin.json').abi, "0x5041baf6999C5D6c853c3e32A70cA6A1c0BB8B29");
        const starBalance = await starcoin.methods.balanceOf(account).call();
        const ethBalance = await parseFloat(web3.utils.fromWei((await web3.eth.getBalance(account)), 'ether')).toFixed(2);

        // const liquidity = await starcoin.methods.balanceOf("0x68562E9eCF7D12C758236346e87142291a597506").call();
        // console.log("Your Account: "+ account);
        // console.log("liquidity: " + liquidity);
        // console.log('balance: ' + balance);
        setAccount(account.toString());
        setStarBalance(web3.utils.fromWei(starBalance));
        setEthBalance(ethBalance);
    };
    useEffect(() => {
       getAccount();
    });
    return(
        <>
        <s.DropDownBackground vis={visibility}>
            <s.Dropdown an={animation}>
                <s.CloseIcon onClick={()=>dispatch(toggleDropdown())}><s.Xmark icon={faXmark}></s.Xmark></s.CloseIcon>
                    <s.DropdownContainer>
                        <>
                          <s.ProfileImage an={animation} vis={visibility}><s.WalletIcon icon={faWallet}></s.WalletIcon></s.ProfileImage>
                          <s.TextSmall>{account}</s.TextSmall>
                          <s.BalanceContainer>
                              <s.Text>Balance:</s.Text>
                            <s.TextBalance>{starBalance} STAR</s.TextBalance>
                            <s.TextBalance>{ethBalance} ETH</s.TextBalance>
                          </s.BalanceContainer>
                       </>
                    </s.DropdownContainer>
            </s.Dropdown>
        </s.DropDownBackground>
        </>
    );
}