import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Text, useScroll } from '@react-three/drei';
import { useScroll as useFramerScroll } from 'framer-motion';
import * as THREE from 'three';
import { LayerMaterial, Depth, Noise } from 'lamina';

const PrismaticMonolith = () => {
  const { scrollYProgress } = useFramerScroll();
  const monolithRef = useRef();
  const outerRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    const progress = scrollYProgress.get();
    const time = clock.getElapsedTime();

    if (monolithRef.current) {
      // Shifting rotation
      monolithRef.current.rotation.x = time * 0.2 + progress * Math.PI;
      monolithRef.current.rotation.y = time * 0.3 + progress * Math.PI * 2;
      
      // Powerful scaling effect
      const s = 1 + Math.sin(time * 0.5) * 0.1 + progress * 2;
      monolithRef.current.scale.set(s, s, s);
    }

    if (outerRef.current) {
      outerRef.current.rotation.z = time * -0.1;
      outerRef.current.scale.setScalar(1.5 + progress * 4);
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* The Monolith Core */}
        <mesh ref={monolithRef}>
          <octahedronGeometry args={[2, 0]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={5}
            thickness={2}
            chromaticAberration={0.5}
            anisotropy={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#ffffff"
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
          />
        </mesh>

        {/* Internal Shifting Data Nodes */}
        <InternalGeometry count={12} />
      </Float>

      {/* Outer Debris Field (Chaotic Geometry) */}
      <group ref={outerRef}>
        <DebrisField count={50} />
      </group>

      {/* Floating Prismatic Light Leaks */}
      <LightLeaks />
    </group>
  );
};

const InternalGeometry = ({ count }) => {
  const group = useRef();
  const items = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
      scale: Math.random() * 0.5 + 0.1,
    }));
  }, [count]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <mesh key={i} position={item.pos.map(v => v * 1.5)}>
          <boxGeometry args={[item.scale, item.scale, item.scale]} />
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={5} />
        </mesh>
      ))}
    </group>
  );
};

const DebrisField = ({ count }) => {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      t: Math.random() * 100,
      factor: 20 + Math.random() * 10,
      speed: 0.01 + Math.random() / 200,
      xFactor: Math.random() * 10,
      yFactor: Math.random() * 10,
      zFactor: Math.random() * 10,
    }));
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (xFactor + Math.cos(t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (yFactor + Math.sin(t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (zFactor + Math.cos(t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0.1} />
    </instancedMesh>
  );
};

const LightLeaks = () => {
  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, -10]}>
          <planeGeometry args={[10, 10]} />
          <LayerMaterial transparent blending={THREE.AdditiveBlending}>
            <Depth 
              colorA="#3b82f6" 
              colorB="#000000" 
              alpha={0.2} 
              mode="normal" 
              near={0} 
              far={5} 
              origin={[0, 0, 0]} 
            />
            <Noise colorA="#ffffff" colorB="#000000" alpha={0.05} mode="overlay" />
          </LayerMaterial>
        </mesh>
      ))}
    </group>
  );
};

export default PrismaticMonolith;
