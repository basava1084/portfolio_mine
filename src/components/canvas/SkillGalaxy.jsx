import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  { name: 'React', color: '#61dafb' },
  { name: 'Three.js', color: '#000000' },
  { name: 'Python', color: '#3776ab' },
  { name: 'GSAP', color: '#88ce02' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Tailwind', color: '#06b6d4' },
  { name: 'Framer', color: '#ff0055' },
  { name: 'AI/ML', color: '#3b82f6' },
  { name: 'Firebase', color: '#ffca28' },
  { name: 'DevOps', color: '#2496ed' },
];

const SkillGalaxy = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const radius = 6;
        
        const position = [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ];

        return (
          <SkillOrb 
            key={index} 
            position={position} 
            skill={skill} 
          />
        );
      })}
      
      {/* Central neural network lines */}
      <NeuralConnections radius={6} />
    </group>
  );
};

const SkillOrb = ({ position, skill }) => {
  const meshRef = useRef();
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <mesh ref={meshRef}>
          <Sphere args={[0.4, 32, 32]}>
            <MeshDistortMaterial
              color={skill.color}
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.8}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </mesh>
        
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/outfit/v6/QGYsz_MV7Be52psS.woff"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
};

const NeuralConnections = ({ radius }) => {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 20; i++) {
      p.push(new THREE.Vector3(
        (Math.random() - 0.5) * radius * 2,
        (Math.random() - 0.5) * radius * 2,
        (Math.random() - 0.5) * radius * 2
      ));
    }
    return p;
  }, [radius]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <lineSegments>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="#3b82f6" transparent opacity={0.1} />
    </lineSegments>
  );
};

export default SkillGalaxy;
