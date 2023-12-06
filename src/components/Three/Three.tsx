import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame, ThreeElements } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader.js';

export function Box(props: ThreeElements['mesh']) {
  const ldr = useLoader(LDrawLoader, '../../../public/Po-Matoran-Carver.ldr');
  return (
    <primitive object={ldr} />
  )
}
