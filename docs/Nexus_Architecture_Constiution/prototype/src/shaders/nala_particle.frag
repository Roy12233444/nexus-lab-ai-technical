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

    // Soft Gaussian-like alpha falloff towards edges
    float alpha = smoothstep(0.5, 0.05, dist);

    // Dynamic color gradient based on horizontal orientation and noise
    float mixFactor = smoothstep(-0.4, 0.4, vPosition.x + (vNoise * 0.2));
    vec3 baseColor = mix(uColorCyan, uColorGold, mixFactor);

    // Boost glow based on epistemic coherence (Pramana sync)
    baseColor *= (1.0 + (uPramanaSync * 0.4));

    gl_FragColor = vec4(baseColor, alpha * 0.85);
}
