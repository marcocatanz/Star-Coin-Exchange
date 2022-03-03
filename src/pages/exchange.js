import { Exchanger} from "../components/exchanger";
import { Toggler } from "../components/toggler";
import * as s from '../styles/style';
import { useSelector } from "react-redux";
import { Coin } from "../components/coin";
import { Canvas } from "@react-three/fiber";
import { Plane } from '@react-three/drei';
import { Suspense } from "react";
import { Popup } from "../components/popup";
export const Exchange = () => {
    const popup = useSelector((state) => state.popup);
    const loading = useSelector((state) => state.loading);
    const message = useSelector((state) => state.message);

    return(
        <s.Container>
            <Toggler></Toggler>
            <br></br>
            <s.Row>
                <s.ModelContainer>
                    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 5, 0] }}>
                        <Plane  args={[10, 10]} />
                        <Suspense fallback={null}>
                           <Coin></Coin>
                       </Suspense>
                   </Canvas>
                </s.ModelContainer>

                <Exchanger></Exchanger>
                
                <s.ModelContainer>
                    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 5, 0] }}>
                        <Plane  args={[10, 10]} />
                        <Suspense fallback={null}>
                           <Coin></Coin>
                       </Suspense>
                   </Canvas>
                </s.ModelContainer>
                
            </s.Row>
        </s.Container>        
    );
}