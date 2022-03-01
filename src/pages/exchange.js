import { Exchanger} from "../components/exchanger";
import { Toggler } from "../components/toggler";
import * as s from '../styles/style';
import { useSelector } from "react-redux";
import { Popup } from "../components/popup";
export const Exchange = () => {
    const popup = useSelector((state) => state.popup);
    const loading = useSelector((state) => state.loading);
    const message = useSelector((state) => state.message);

    return(
        <s.Container>
             <Toggler></Toggler>
             <br></br>
             <Exchanger></Exchanger>
        </s.Container>        
    );
}