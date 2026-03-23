import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork() {
    const pointsCount = 120;
    const linesRef = useRef();
    const pointsRef = useRef();

    // Create an elegant, abstract sphere of connected points
    const { points, geometry } = useMemo(() => {
        const pts = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

        for (let i = 0; i < pointsCount; i++) {
            const y = 1 - (i / (pointsCount - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y); // radius at y
            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            // Scale it up softly
            pts.push(new THREE.Vector3(x * 3.5, y * 3.5, z * 3.5));
        }

        // Create lines between points that are close to form "ideas connecting"
        const lineIndices = [];
        for (let i = 0; i < pointsCount; i++) {
            for (let j = i + 1; j < pointsCount; j++) {
                if (pts[i].distanceTo(pts[j]) < 1.8) { // Connection threshold
                    lineIndices.push(i, j);
                }
            }
        }

        const geom = new THREE.BufferGeometry().setFromPoints(pts);
        geom.setIndex(lineIndices);

        return { points: pts, geometry: geom };
    }, [pointsCount]);

    useFrame((state) => {
        if (linesRef.current && pointsRef.current) {
            // Soft, beautiful rotating motion
            linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            linesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
            <group>
                {/* The nodes (ideas) */}
                <points ref={pointsRef} geometry={geometry}>
                    <pointsMaterial color="#8b5cf6" size={0.06} sizeAttenuation={true} transparent opacity={0.9} />
                </points>
                {/* The connecting lines (the bridge/structure) */}
                <lineSegments ref={linesRef} geometry={geometry}>
                    <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} linewidth={1} />
                </lineSegments>
            </group>
        </Float>
    );
}

export default function Canvas3D() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 8] }} dpr={[1, 2]}>
                <ambientLight intensity={1} />
                <NeuralNetwork />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
