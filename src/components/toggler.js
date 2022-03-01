import * as s from '../styles/style';
import { useDispatch, useSelector } from "react-redux";
import { toggleBuy, toggleSell } from "../redux/action";

export const Toggler = () => {
    const dispatch = useDispatch();

    const toggler = useSelector((state) => state.toggler);

    let buyColor;
    let sellColor;

    if(toggler == "buy"){
        buyColor="#75c9b7";
    }else{
        sellColor="#75c9b7"
    }

    const _toggleBuy = () => {
        dispatch(toggleBuy());      
    }
    const _toggleSell = () => {
        dispatch(toggleSell());      
    }

    return(
        <s.TogglerContainer>
            <s.Button bgc={buyColor} onClick={()=>_toggleBuy()}>Buy</s.Button>
            <s.Button bgc={sellColor} onClick={()=>_toggleSell()}>Sell</s.Button>
        </s.TogglerContainer>
    );    
}