import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const NeuralCore = () => {
  const { scrollYProgress } = useScroll();
  const groupRef = useRef();
  const coreRef = useRef();

  // Create complex neural network lines
  const count = 60;
  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < count; i++) {
      const points = [];
      const radius = 2 + Math.random() * 3;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI * 2;
      
      for (let j = 0; j < 12; j++) {
        points.push(new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ).multiplyScalar(1 + Math.sin(j * 0.3) * 0.2));
      }
      l.push(points);
    }
    return l;
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const progress = scrollYProgress.get();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15 + progress * 2;
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.1;
      
      // Powerful scaling and movement on scroll
      const s = 1 + progress * 3;
      groupRef.current.scale.set(s, s, s);
      groupRef.current.position.y = progress * -5;
    }

    if (coreRef.current) {
      coreRef.current.distort = 0.3 + progress * 0.7;
      coreRef.current.speed = 2 + progress * 8;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* The Central Energetic Singularity */}
        <mesh>
          <Sphere args={[1.5, 128, 128]}>
            <MeshDistortMaterial
              ref={coreRef}
              color="#3b82f6"
              emissive="#60a5fa"
              emissiveIntensity={3}
              distort={0.3}
              speed={2}
              roughness={0}
              metalness={1}
            />
          </Sphere>
        </mesh>

        {/* Dynamic Orbital Tech Rings */}
        {[3, 3.5, 4].map((radius, i) => (
          <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            <torusGeometry args={[radius, 0.015, 16, 100]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#06b6d4" : "#8b5cf6"} 
              emissive={i % 2 === 0 ? "#06b6d4" : "#8b5cf6"}
              emissiveIntensity={2}
              transparent 
              opacity={0.4} 
            />
          </mesh>
        ))}

        {/* Dense Particle Cloud */}
        <NeuralNodes count={2000} />
      </Float>

      {/* Complex Energy Web */}
      <group>
        {lines.map((points, i) => (
          <line key={i}>
            <bufferGeometry attach="geometry" setFromPoints={points} />
            <lineBasicMaterial 
              attach="material" 
              color={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"} 
              transparent 
              opacity={0.15} 
              blending={THREE.AdditiveBlending}
            />
          </line>
        ))}
      </group>
    </group>
  );
};

const NeuralNodes = ({ count }) => {
  const pointsRef = useRef();
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 5;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      temp[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      temp[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      temp[i * 3 + 2] = radius * Math.cos(phi);
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default NeuralCore;
