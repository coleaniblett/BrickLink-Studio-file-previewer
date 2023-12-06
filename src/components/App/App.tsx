import React from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { LDrawLoader } from "three/examples/jsm/loaders/LDrawLoader.js";
import { Suspense } from "react";

const Scene = () => {
  const ld = useLoader(LDrawLoader, '../../../public/Po-Matoran-Carver.ldr');
  return <primitive object={ld} />;
}

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default App;
