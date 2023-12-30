import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { LDrawLoader } from "three/examples/jsm/loaders/LDrawLoader";
import { Suspense } from "react";
import Model from "../Model/Model";

export default function App() {
  

  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Environment preset="city" />
        <Suspense>
         <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
