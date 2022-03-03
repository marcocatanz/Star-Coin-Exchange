import { Cylinder } from "@react-three/drei"
import { useRef } from "react";
import { useSpring, animated } from '@react-spring/three';
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export const Coin = () => {
    const texture = new useTexture(require('../assets/star2.jpg'))
     const ref = useRef();
      useFrame(({ clock }) => {
           const a = clock.getElapsedTime();
           ref.current.rotation.z = 0;
           ref.current.rotation.x = a;
           ref.current.rotation.y = 0.3;
      });

    return(
        <Cylinder ref={ref} args={[1,1,0.2,100]}>
             <meshBasicMaterial map={texture} attach="material" color="yellow" />
        </Cylinder>
    );
}