import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Float, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

const Hologram = ({ position = [0, 0, 0] }) => {
  return (
    // Adding a specific loading state for your large 8MB image
    <Suspense fallback={<Html center><div className="text-primary font-mono text-xl animate-pulse">PROCESSING_LARGE_IMAGE (8MB)...</div></Html>}>
      <HologramContent position={position} />
    </Suspense>
  );
};

const HologramContent = ({ position }) => {
  const meshRef = useRef();
  
  // High-performance texture loading for large files
  const texture = useTexture('/me.jpg');
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group position={position}>
      <Float speed={1} rotationIntensity={0.1}>
        <mesh ref={meshRef}>
          {/* Scaled to match your high-res photo aspect ratio */}
          <planeGeometry args={[12, 16]} />
          <meshBasicMaterial 
            map={texture} 
            transparent={true}
            opacity={1}
            side={THREE.DoubleSide}
          />
        </mesh>

        <Text
          position={[0, -9, 0]}
          fontSize={1}
          color="#000000"
          font="https://fonts.gstatic.com/s/outfit/v11/QId5Fe92S9AZjGM3pGsI.woff"
          anchorX="center"
        >
          BASAVARAJ HG
        </Text>
      </Float>
    </group>
  );
};

export default Hologram;
