import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DottedMatrixPointsProps {
  pointCount?: number;
  activity?: number;
  audioLevel?: number;
  pramanaSync?: number;
}

export default function DottedMatrixPoints({ 
  pointCount = 50000,
  activity = 0.5,
  audioLevel = 0.3,
  pramanaSync = 0.8
}: DottedMatrixPointsProps) {
  const meshRef = useRef<THREE.Points>(null);
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uActivity: { value: activity },
    uAudioLevel: { value: audioLevel },
    uPointSize: { value: 8.0 }, // Balanced point size
    uColorCyan: { value: new THREE.Vector3(0.0, 0.5, 0.8) }, // Darker cyan for white background
    uColorGold: { value: new THREE.Vector3(0.8, 0.4, 0.0) }, // Darker gold for white background
    uPramanaSync: { value: pramanaSync }
  }), [activity, audioLevel, pramanaSync]);

  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 64, 64);
    const positions = geo.attributes.position.array as Float32Array;
    const randoms = new Float32Array(positions.length / 3);
    
    for (let i = 0; i < randoms.length; i++) {
      randoms[i] = Math.random();
    }
    
    geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
    return geo;
  }, []);

  // VERTEX SHADER - Original spec implementation with simplex noise
  const vertexShader = `
uniform float uTime;
uniform float uActivity;
uniform float uAudioLevel;
uniform float uPointSize;

attribute float aRandom;

varying vec3 vPosition;
varying float vNoise;

// Simplex noise helper function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
    vPosition = position;

    // Organic breathing wave
    float noise = snoise(vec3(position * 2.0 + uTime * 0.3));
    vNoise = noise;

    vec3 newPosition = position;

    // Displacement scaling based on activity state
    float displacement = (noise * 0.05) + (sin(uTime * 2.0 + aRandom * 10.0) * 0.02);
    
    // Voice / audio ripple response
    displacement += (sin(position.y * 10.0 + uTime * 5.0) * uAudioLevel * 0.08);

    // Active thinking expansion
    if (uActivity > 0.5) {
        displacement += noise * (uActivity * 0.06);
    }

    newPosition += normal * displacement;

    vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Perspective point attenuation
    gl_PointSize = (uPointSize / -mvPosition.z) * (1.0 + (noise * 0.3));
}
`;

  // FRAGMENT SHADER - Optimized for white background visibility
  const fragmentShader = `
uniform vec3 uColorCyan;
uniform vec3 uColorGold;
uniform float uPramanaSync;

varying vec3 vPosition;
varying float vNoise;

void main() {
    // Make circular particles instead of square quads
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) {
        discard;
    }

    // Harder edge for better visibility on white background
    float alpha = smoothstep(0.5, 0.2, dist);

    // Dynamic color gradient based on horizontal orientation and noise
    float mixFactor = smoothstep(-0.4, 0.4, vPosition.x + (vNoise * 0.2));
    vec3 baseColor = mix(uColorCyan, uColorGold, mixFactor);

    // Boost glow based on epistemic coherence (Pramana sync)
    baseColor *= (1.0 + (uPramanaSync * 0.4));

    // Higher alpha for visibility on white background
    gl_FragColor = vec4(baseColor, alpha * 1.0);
}
`;

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      material.uniforms.uActivity.value = activity;
      material.uniforms.uAudioLevel.value = audioLevel;
      material.uniforms.uPramanaSync.value = pramanaSync;
      
      // Add rotation for additional animation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <shaderMaterial
        uniforms={uniforms as any}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        depthWrite={false}
        blending={THREE.NormalBlending} // Changed from Additive for white background
      />
    </points>
  );
}
