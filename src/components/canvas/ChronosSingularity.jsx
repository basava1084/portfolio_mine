import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Text } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const ChronosSingularity = () => {
  const { scrollYProgress } = useScroll();
  const groupRef = useRef();
  const coreRef = useRef();
  
  // Create a massive "Beyond" particle field (100,000 particles)
  const count = 100000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 20 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const progress = scrollYProgress.get();
    const time = clock.getElapsedTime();

    if (groupRef.current) {
      // Relativistic rotation - faster as you scroll
      groupRef.current.rotation.y = time * 0.1 + progress * 10;
      groupRef.current.rotation.z = time * 0.05 + progress * 5;
    }

    if (coreRef.current) {
      // 4D Morphing: Shifting scale and distortion
      const s = 1 + Math.sin(time * 0.2) * 0.5 + progress * 4;
      coreRef.current.scale.set(s, s, s);
      coreRef.current.rotation.x = time * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* The Morphing Fractal Core */}
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[2, 15]} />
          <MeshTransmissionMaterial
            backside
            thickness={3}
            chromaticAberration={1}
            anisotropy={1}
            distortion={1}
            distortionScale={1}
            temporalDistortion={0.5}
            color="#ffffff"
            ior={1.8}
            transmission={1}
          />
        </mesh>
      </Float>

      {/* 100,000 Particle Data Stream */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#3b82f6"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Dimensional Light Leaks */}
      <group>
        {[...Array(5)].map((_, i) => (
          <pointLight 
            key={i} 
            position={[Math.sin(i) * 20, Math.cos(i) * 20, (Math.random() - 0.5) * 50]} 
            intensity={5} 
            color="#60a5fa" 
          />
        ))}
      </group>
    </group>
  );
};

export default ChronosSingularity;
