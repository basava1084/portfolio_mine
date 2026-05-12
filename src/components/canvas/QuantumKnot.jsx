import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const QuantumKnot = () => {
  const knotRef = useRef();
  
  // Create a complex procedural "Knot" geometry
  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(4, 1.2, 300, 40, 2, 3);
    return geo;
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    if (knotRef.current) {
      knotRef.current.rotation.x = time * 0.3;
      knotRef.current.rotation.y = time * 0.2;
      
      // Procedural "Pulse" using noise-like sine waves
      const s = 1 + Math.sin(time * 0.5) * 0.1;
      knotRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={knotRef} geometry={geometry}>
          <MeshTransmissionMaterial
            backside
            backsideThickness={2}
            thickness={2}
            chromaticAberration={0.5}
            anisotropy={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.2}
            color="#ffffff"
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            ior={1.5}
          />
        </mesh>
      </Float>

      {/* The "Big" Part: A massive particle swarm that follows the knot */}
      <ParticleSwarm count={5000} />
    </group>
  );
};

const ParticleSwarm = ({ count }) => {
  const pointsRef = useRef();
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 10 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 2;
      
      temp[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      temp[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      temp[i * 3 + 2] = radius * Math.cos(phi);
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
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
        size={0.08}
        color="#3b82f6"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default QuantumKnot;
