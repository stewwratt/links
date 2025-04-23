import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, shaderMaterial, Ring } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

// Custom shader material for glow effect
const GlowMaterial = shaderMaterial(
    {
        time: 0,
        color: new THREE.Color(0.1, 0.3, 0.9),
    },
    // Vertex shader
    `
    varying vec3 vPosition;
    varying vec3 vNormal;
    uniform float time;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      
      float pulse = sin(time * 0.5) * 0.05 + 1.0;
      vec3 pos = position;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos * pulse, 1.0);
    }
  `,
    // Fragment shader
    `
    varying vec3 vPosition;
    varying vec3 vNormal;
    uniform vec3 color;
    uniform float time;
    
    void main() {
      float rim = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
      vec3 rimColor = mix(vec3(0.5, 0.7, 1.0), vec3(0.3, 0.5, 1.0), sin(time) * 0.5 + 0.5);
      
      gl_FragColor = vec4(mix(color, rimColor, rim), rim * 0.7);
    }
  `
);

// Custom shader for inner gradient effect
const InnerGlowMaterial = shaderMaterial(
    {
        time: 0,
        color1: new THREE.Color(0.2, 0.4, 0.9),
        color2: new THREE.Color(0.6, 0.2, 0.8),
    },
    // Vertex shader
    `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    uniform float time;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec3 pos = position;
      pos += normal * sin(position.x * 5.0 + time) * 0.05;
      pos += normal * sin(position.y * 5.0 + time * 0.8) * 0.05;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    // Fragment shader
    `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform float time;
    
    void main() {
      // Create complex gradient pattern
      float pattern = sin(vUv.x * 10.0 + time) * sin(vUv.y * 10.0 + time * 0.7) * 0.5 + 0.5;
      pattern += sin(length(vPosition) * 8.0 - time * 2.0) * 0.2;
      
      // Mix colors based on pattern
      vec3 finalColor = mix(color1, color2, pattern);
      
      // Add depth with lighting
      float lighting = dot(vNormal, normalize(vec3(sin(time * 0.2), cos(time * 0.2), 1.0))) * 0.5 + 0.5;
      finalColor *= lighting * 1.5;
      
      gl_FragColor = vec4(finalColor, 0.8);
    }
  `
);

extend({ GlowMaterial, InnerGlowMaterial });

// Animated floating particles
function FloatingParticles() {
    const particles = useRef();
    const [positions, setPositions] = useState(() => {
        const count = 50;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 1.0 + Math.random() * 0.4;

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }
        return positions;
    });

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (particles.current) {
            particles.current.rotation.y = t * 0.1;
            particles.current.rotation.z = t * 0.05;

            // Pulse particles size
            particles.current.material.size = Math.sin(t * 0.6) * 0.03 + 0.06;
        }
    });

    return (
        <points ref={particles}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#7db9e8"
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.7}
            />
        </points>
    );
}

// Animated sphere component
function AnimatedSphere({ onComplete }) {
    const sphere = useRef();
    const glow = useRef();
    const innerSphere = useRef();
    const [time, setTime] = useState(0);

    // Spring animations for main sphere
    const { scale } = useSpring({
        from: { scale: 0.9 },
        to: { scale: 1 },
        config: { tension: 100, friction: 10 },
        loop: { reverse: true },
    });

    // Spring animations for inner sphere
    const { innerScale } = useSpring({
        from: { innerScale: 0.7 },
        to: { innerScale: 0.8 },
        config: { tension: 120, friction: 12 },
        delay: 200,
        loop: { reverse: true },
    });

    // Handle loading completion
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        setTime(t);

        // Animate distortion with more complexity
        if (sphere.current) {
            sphere.current.distort = THREE.MathUtils.lerp(
                sphere.current.distort,
                Math.sin(t * 0.2) * 0.3 + 0.5,
                0.1
            );

            sphere.current.rotation.y = t * 0.08;
            sphere.current.rotation.z = t * 0.05;
        }

        // Animate inner sphere
        if (innerSphere.current) {
            innerSphere.current.material.time = t;

            // Animate color transition
            const color1 = new THREE.Color();
            const color2 = new THREE.Color();

            color1.setHSL((Math.sin(t * 0.1) * 0.1 + 0.6) % 1, 0.7, 0.5);
            color2.setHSL((Math.sin(t * 0.15 + 2.0) * 0.1 + 0.6) % 1, 0.8, 0.6);

            innerSphere.current.material.color1 = color1;
            innerSphere.current.material.color2 = color2;

            innerSphere.current.rotation.y = -t * 0.05;
            innerSphere.current.rotation.z = t * 0.03;
        }

        // Animate glow
        if (glow.current) {
            glow.current.material.time = t;

            // Animate color based on time with more saturation
            const hue = (Math.sin(t * 0.1) * 0.1 + 0.6) % 1;
            const color = new THREE.Color();
            color.setHSL(hue, 0.9, 0.6);
            glow.current.material.color = color;
        }
    });

    // Create dynamic color based on time
    const color = new THREE.Color();
    color.setHSL(
        (Math.sin(time * 0.1) * 0.1 + 0.6) % 1, // Blue-purple hue range
        0.9, // Higher saturation
        0.5  // Slightly dimmer for contrast
    );

    return (
        <group>
            {/* Main sphere */}
            <animated.mesh scale={scale}>
                <Sphere args={[0.9, 128, 128]} ref={sphere}>
                    <MeshDistortMaterial
                        color={color}
                        attach="material"
                        distort={0.5}
                        speed={3}
                        roughness={0.1}
                        metalness={0.9}
                        emissive={color}
                        emissiveIntensity={0.7}
                        transparent
                        opacity={0.9}
                    />
                </Sphere>
            </animated.mesh>

            {/* Inner sphere with gradient effect */}
            <animated.mesh scale={innerScale} ref={innerSphere}>
                <Sphere args={[0.7, 64, 64]}>
                    <innerGlowMaterial
                        transparent
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                    />
                </Sphere>
            </animated.mesh>

            {/* Outer glow */}
            <Sphere args={[1.3, 64, 64]} ref={glow}>
                <glowMaterial
                    transparent
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>

            {/* Floating particles */}
            <FloatingParticles />

            {/* Light ring effects */}
            <Ring
                args={[1.1, 1.15, 64]}
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
            >
                <meshBasicMaterial
                    color="#5e8bf4"
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                />
            </Ring>

            <Ring
                args={[1.2, 1.23, 64]}
                rotation={[Math.PI / 3, 0, 0]}
                position={[0, 0, 0]}
            >
                <meshBasicMaterial
                    color="#7db9e8"
                    transparent
                    opacity={0.2}
                    blending={THREE.AdditiveBlending}
                />
            </Ring>
        </group>
    );
}

// Main Loading component
function LoadingAnimation({ onComplete }) {
    return (
        <div className="loading-container">
            <Canvas camera={{ position: [0, 0, 3.5] }} dpr={[1, 2]}>
                <ambientLight intensity={0.6} />
                <pointLight position={[2, 1, 4]} intensity={1.8} color="#5e8bf4" />
                <pointLight position={[-2, -1, -4]} intensity={1.2} color="#7db9e8" />
                <pointLight position={[0, 0, 2]} intensity={0.8} color="white" />
                <AnimatedSphere onComplete={onComplete} />
            </Canvas>
        </div>
    );
}

export default LoadingAnimation; 