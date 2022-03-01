import * as s from '../styles/style';
import { useSelector, useDispatch } from 'react-redux';
import { BuyForm, SellForm } from './form';


export const Exchanger = () => {
    const toggler = useSelector((state) => state.toggler);

    return(
       <s.ExchangeContainer>
           {toggler == "buy" ? (
            <s.ExchangeInner>
                <BuyForm></BuyForm>
           </s.ExchangeInner>
           ):(
            <s.ExchangeInner>
                <SellForm></SellForm>
            </s.ExchangeInner>
           )}
       </s.ExchangeContainer>     
    )    
}