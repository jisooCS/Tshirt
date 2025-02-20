import React from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import BackDrop from "./BackDrop";

export default function CanvasModel() {
  return (
    <Canvas
    
    shadows
    camera={ {fov:15}}
  
    gl={{preserveDrawingBuffer:true}}
    className="w-full max-w-full h-full transition-all ease-in )"
    
    
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <BackDrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
}
