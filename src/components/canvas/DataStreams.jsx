import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const DataStreams = () => {
  const count = 20;
  const streams = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      x: (Math.random() - 0.5) * 20,
      y: Math.random() * 20,
      z: (Math.random() - 0.5) * 10,
      speed: 0.1 + Math.random() * 0.2,
      chars: Array.from({ length: 10 }, () => 
        String.fromCharCode(0x30A0 + Math.random() * 96)
      ).join('\n')
    }));
  }, []);

  return (
    <group>
      {streams.map((stream, i) => (
        <DataStream key={i} {...stream} />
      ))}
    </group>
  );
};

const DataStream = ({ x, y, z, speed, chars }) => {
  const ref = useRef();
  
  useFrame(() => {
    if (ref.current) {
      ref.current.position.y -= speed;
      if (ref.current.position.y < -10) {
        ref.current.position.y = 10;
      }
    }
  });

  return (
    <Text
      ref={ref}
      position={[x, y, z]}
      fontSize={0.2}
      color="#3b82f6"
      font="https://fonts.gstatic.com/s/robotomono/v12/L0tkDF9qZE3JI9lK7FhMhc9gsWLB.woff"
      opacity={0.2}
      transparent
    >
      {chars}
    </Text>
  );
};

export default DataStreams;
