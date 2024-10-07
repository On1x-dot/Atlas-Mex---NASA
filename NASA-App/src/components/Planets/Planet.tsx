// src/components/Planet.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Cambia la ruta al modelo GLTF
const PlanetModel = '../assets/other-assets/Planet1/Planet1Model.gltf';

const PlanetComponent: React.FC = () => {
  // Cargar el modelo usando useGLTF
  const { scene } = useGLTF(PlanetModel);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default PlanetComponent;

