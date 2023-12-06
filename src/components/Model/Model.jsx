import { useLoader, useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader';
import * as THREE from 'three';


export default function Model() {
  let camera = useThree.camera;

  let ldraw = useLoader(LDrawLoader, '/models/car.ldr', async (loader) => {
    loader.setPath('https://raw.githubusercontent.com/gkjohnson/ldraw-parts-library/master/complete/ldraw/');
    loader.setPartsLibraryPath( 'https://raw.githubusercontent.com/gkjohnson/ldraw-parts-library/master/complete/ldraw/' );
    await loader.preloadMaterials( '/LDConfig.ldr' );
  });
  
  ldraw.position.set(0, 0, -300);
  ldraw.rotateX(Math.PI);
  

  return (
    <>
      <primitive object={ldraw} />
    </>
  )
}

