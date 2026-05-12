import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Instances, Instance, Float } from '@react-three/drei';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const CrystalMetaverse = () => {
  const { scrollYProgress } = useScroll();
  const instancesRef = useRef();
  const ringsRef = useRef();
  
  const count = 3000;
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 600
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.8 + 0.1,
      speed: Math.random() * 0.05 + 0.01,
    }));
  }, [count]);

  useFrame((state) => {
    const progress = scrollYProgress.get();
    if (instancesRef.current) {
      instancesRef.current.rotation.z = state.clock.getElapsedTime() * 0.02 + progress * 8;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = -progress * 15;
    }
  });

  return (
    <group>
      {/* 💎 3,000 Glass Crystals */}
      <Instances ref={instancesRef} range={count}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial backside thickness={0.5} color="#ffffff" transmission={1} />
        {particles.map((p, i) => (
          <Instance key={i} position={p.position} rotation={p.rotation} scale={p.scale} />
        ))}
      </Instances>

      {/* 💫 The Velocity Rings (Fly-through effect) */}
      <group ref={ringsRef}>
        {[...Array(50)].map((_, i) => (
          <mesh key={i} position={[0, 0, -i * 15]}>
            <torusGeometry args={[15 + i * 0.2, 0.02, 16, 100]} />
            <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
          </mesh>
        ))}
      </group>

      {/* 🌠 Particle Wind */}
      <PointsWind count={5000} />
    </group>
  );
};

const PointsWind = ({ count }) => {
  const points = useRef();
  const { scrollYProgress } = useScroll();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = -Math.random() * 1000;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const progress = scrollYProgress.get();
    if (points.current) {
      points.current.position.z = progress * 1000;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#3b82f6" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
    </points>
  );
};

export default CrystalMetaverse;
