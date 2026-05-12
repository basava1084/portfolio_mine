import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Sphere, Cloud, Stars, Environment, ContactShadows } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const EtherealScene = () => {
  const { scrollYProgress } = useScroll();
  const coreRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    const progress = scrollYProgress.get();
    const time = clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.2 + progress * 5;
      coreRef.current.position.y = Math.sin(time * 0.5) * 0.2 + progress * -10;
      coreRef.current.scale.setScalar(1 + progress * 2);
    }

    if (groupRef.current) {
      groupRef.current.rotation.z = time * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* High-Key Lighting */}
      <Environment preset="apartment" />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" castShadow />
      
      {/* The Pearlescent Core (The Hero of the Movie) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={coreRef}>
          <Sphere args={[2, 128, 128]}>
            <MeshTransmissionMaterial
              backside
              backsideThickness={1}
              thickness={1.5}
              chromaticAberration={0.05}
              anisotropy={0.5}
              clearcoat={1}
              clearcoatRoughness={0}
              distortion={0.1}
              distortionScale={0.1}
              temporalDistortion={0.1}
              color="#ffffff"
              attenuationDistance={1}
              attenuationColor="#ffffff"
              ior={1.2}
            />
          </Sphere>
        </mesh>
      </Float>

      {/* Volumetric Clouds (The "Movie" Atmosphere) */}
      <group position={[0, -5, -10]}>
        <Cloud opacity={0.5} speed={0.4} width={20} depth={5} segments={20} color="#ffffff" />
        <Cloud position={[-10, 0, -5]} opacity={0.3} speed={0.4} width={10} depth={5} segments={10} color="#f3f4f6" />
        <Cloud position={[10, 5, -8]} opacity={0.3} speed={0.4} width={10} depth={5} segments={10} color="#ffffff" />
      </group>

      {/* Floating Glass Panes */}
      <FloatingPanes count={10} />

      {/* Pure White Dust */}
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      <ContactShadows 
        position={[0, -10, 0]} 
        opacity={0.2} 
        scale={40} 
        blur={2} 
        far={20} 
        color="#000000" 
      />
    </group>
  );
};

const FloatingPanes = ({ count }) => {
  const panes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, -5 - Math.random() * 10],
      rot: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: [2 + Math.random() * 4, 1 + Math.random() * 2, 0.1]
    }));
  }, [count]);

  return (
    <group>
      {panes.map((pane, i) => (
        <mesh key={i} position={pane.pos} rotation={pane.rot}>
          <boxGeometry args={pane.scale} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.1} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>
      ))}
    </group>
  );
};

export default EtherealScene;
