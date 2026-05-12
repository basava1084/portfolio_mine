import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';

const LiquidSingularity = () => {
  const meshRef = useRef();
  const { viewport } = useThree();

  // Custom Shader Fragment for Iridescence
  const materialProps = {
    backside: true,
    backsideThickness: 2,
    thickness: 1.5,
    chromaticAberration: 0.8,
    anisotropy: 1,
    clearcoat: 1,
    clearcoatRoughness: 0,
    distortion: 1,
    distortionScale: 1,
    temporalDistortion: 0.2,
    color: "#ffffff",
    attenuationDistance: 1,
    attenuationColor: "#ffffff",
    ior: 1.5,
  };

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // Liquid-like organic movement
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * viewport.width / 2, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * viewport.height / 2, 0.05);
      
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;

      // Pulse scaling
      const pulse = 1 + Math.sin(time * 2) * 0.05;
      meshRef.current.scale.setScalar(pulse * 2.5);
    }
  });

  return (
    <group>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} castShadow receiveShadow>
          <icosahedronGeometry args={[1, 15]} />
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </Float>

      {/* Floating Mercury Droplets */}
      <Droplets count={15} />

      {/* Cinematic Environment Lighting */}
      <Environment preset="studio" />
    </group>
  );
};

const Droplets = ({ count }) => {
  const group = useRef();
  const items = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.5 + 0.2,
    }));
  }, [count]);

  useFrame((state) => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.getElapsedTime() * items[i].speed) * 0.01;
        child.rotation.x += 0.01;
      });
    }
  });

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <mesh key={i} position={item.pos} scale={item.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={1} 
            roughness={0} 
            envMapIntensity={2} 
          />
        </mesh>
      ))}
    </group>
  );
};

export default LiquidSingularity;
