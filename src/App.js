import * as s from './styles/style.js';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar.js';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Exchange } from './pages/exchange.js';
import { AboutPage } from './pages/about.js';
import { Popup } from './components/popup.js';
import { connectSuccess, connectFailed } from './redux/action.js';
import { AccountPage } from './components/wallet.js';
import Web3 from 'web3';


function App() {
  const web3 = new Web3(window.ethereum);
  const accounts = web3.eth.getAccounts();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const popup = useSelector((state) => state.popup);
  const connected = useSelector((state) => state.connected);
  const dropdown = useSelector((state) => state.dropdown);


       useEffect(() => {
         if(window.ethereum){
           window.ethereum.on("accountsChanged", (accounts) => {
                   window.location.reload();
            });
           
            window.ethereum.on('chainChanged', () => {
            window.location.reload();
            });
         }
        });
  

  return (
    <>
    <NavBar></NavBar>
    {
    popup == "open" 
    ?
     <Popup></Popup>
    :
     null
    }

    

    <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="exchange" element={<Exchange />} />
    </Routes>
     
    </>

  );
}

export default App;
