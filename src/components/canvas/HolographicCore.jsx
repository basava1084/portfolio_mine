import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const HolographicCore = () => {
  const sphereRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={sphereRef}>
        <Sphere args={[1, 64, 64]} scale={2}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
        
        {/* Wireframe overlay for tech feel */}
        <Sphere args={[1.05, 32, 32]} scale={2}>
          <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.1} />
        </Sphere>
      </mesh>
      
      {/* Particles around the core */}
      <Points count={500} />
    </Float>
  );
};

const Points = ({ count }) => {
  const pointsRef = useRef();
  
  const particles = useRef(new Float32Array(count * 3));
  for (let i = 0; i < count; i++) {
    particles.current[i * 3] = (Math.random() - 0.5) * 10;
    particles.current[i * 3 + 1] = (Math.random() - 0.5) * 10;
    particles.current[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    const { clock } = state;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export default HolographicCore;
