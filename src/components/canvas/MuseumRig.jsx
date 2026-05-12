import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  PerspectiveCamera,
} from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

import CrystalMetaverse from './CrystalMetaverse';

const MuseumRig = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white" style={{ zIndex: -1 }}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={35} />
        <Environment preset="studio" />
        <ambientLight intensity={1.5} />
        
        <SceneContent />
      </Canvas>
    </div>
  );
};

const SceneContent = () => {
  const { scrollYProgress } = useScroll();
  const groupRef = useRef();
  
  useFrame((state) => {
    const progress = scrollYProgress.get();
    state.camera.position.z = 50 - progress * 400;
    state.camera.lookAt(0, 0, state.camera.position.z - 50);
  });

  return (
    <group ref={groupRef}>
      <CrystalMetaverse />
    </group>
  );
};

export default MuseumRig;
