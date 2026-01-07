import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, useState, useMemo } from 'react';

const Particles = ({ darkMode }) => {
  const ref = useRef();
  
  // Create particles with correct size (multiple of 3)
  const [sphere] = useState(() => {
    try {
      const p = random.inSphere(new Float32Array(6000), { radius: 1.5 });
      // Ensure no NaN values
      for (let i = 0; i < p.length; i++) {
        if (isNaN(p[i])) p[i] = 0;
      }
      return p;
    } catch (e) {
      console.error("Error generating particles:", e);
      return new Float32Array(6000).fill(0);
    }
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  const particleColor = useMemo(() => {
    return darkMode ? '#818cf8' : '#6366f1';
  }, [darkMode]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={particleColor}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={2}
        />
      </Points>
    </group>
  );
};

const FloatingShapes = ({ darkMode }) => {
  const shapes = useRef();
  const [positions] = useState(() => {
    const positions = [];
    for (let i = 0; i < 50; i++) {
      positions.push([
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      ]);
    }
    return positions;
  });

  useFrame((state) => {
    if (shapes.current) {
      shapes.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      shapes.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={shapes}>
      {positions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshBasicMaterial
            color={darkMode ? '#667eea' : '#4facfe'}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

export default function ParticleBackground({ darkMode }) {
  return (
    <div className="particle-background">
      <Canvas camera={{ position: [0, 0, 1] }} style={{ background: 'transparent' }}>
        <Particles darkMode={darkMode} />
        <FloatingShapes darkMode={darkMode} />
      </Canvas>
    </div>
  );
}