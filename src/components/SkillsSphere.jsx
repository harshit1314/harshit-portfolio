import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const skills = [
  { name: 'Java', color: '#f89820' },
  { name: 'React', color: '#61dafb' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'Spring', color: '#6db33f' },
  { name: 'Python', color: '#3776ab' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'MySQL', color: '#00758f' },
  { name: 'JavaScript', color: '#f0db4f' },
];

const SkillPoint = ({ position, skill }) => {
  const ref = useRef();
  
  useFrame(() => {
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <Text
      ref={ref}
      position={position}
      color={skill.color}
      fontSize={0.2}
      anchorX="center"
      anchorY="middle"
    >
      {skill.name}
    </Text>
  );
};

const SkillsSphere = () => {
  const points = skills.map((skill, i) => {
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;
    return {
      position: new THREE.Vector3().setFromSphericalCoords(2, phi, theta),
      skill
    };
  });

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {points.map((point, i) => (
        <SkillPoint key={i} position={point.position} skill={point.skill} />
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

export default SkillsSphere;