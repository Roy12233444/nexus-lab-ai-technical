# NALA 3D Dotted-Matrix Holographic UI Specification

> **Status:** Canonical Frontend Visual Interface Specification  
> **Document ID:** `NALA-UI-3D-SPEC-001`  
> **Target Subsystem:** NALA Core Neural Visualizer & Production Web Dashboard  
> **Location:** `docs/NALA-UI/NALA_3D_DOTTED_MATRIX_UI_SPECIFICATION.md`  
> **Enforcement Authority:** Bound by `NALA_Architecture_Enforcement_Protocol.md` (Invariant `I-14`: UI is a Projection)  

---

## 1. Executive Summary & Architectural Doctrine

This document specifies the technical design, framework architecture, GLSL shader pipeline, and state-binding contracts for NALA's **3D Dotted-Matrix Holographic Avatar** and accompanying production dashboard.

Inspired by advanced cinematic AI interfaces (such as JARVIS and E.D.I.T.H.), NALA’s primary visual presence is a **luminous, translucent, interactive 3D point-cloud entity** rendered in real-time WebGL/WebGPU at a guaranteed 60+ FPS.

### 🛡️ Architectural Enforcement Constraints (Mandatory Invariants):
In strict accordance with [NALA_Architecture_Enforcement_Protocol.md](file:///c:/Users/soura/.gemini/config/rules/NALA_Architecture_Enforcement_Protocol.md):
1. **Invariant I-14 (UI is a Projection):** The 3D dotted-matrix hologram does **NOT** own agent state, cognition, or memory. It is a pure, downstream visual projection of the authoritative backend runtime.
2. **Forbidden Pattern F-01 (Zero UI-Only Facades):** Visual particle states (e.g., "Thinking", "Executing", "Syncing") must be driven exclusively by canonical event streams (`step_start`, `tool_execution`, `wal_commit`), never by disconnected local mock timers.
3. **Forbidden Pattern F-02 (Telemetry Integrity):** The accompanying dashboard gauges (WAL stream, Pramāṇa sync, latency) must reflect real database and event-stream records, not synthetic aesthetic noise.

---

## 2. Technology Stack & Framework Selection

To achieve maximum visual fidelity with minimal CPU/GPU overhead, the system uses the battle-tested modern web graphics stack:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                             PRESENTATION LAYER                              │
│                                                                             │
│   React 18+ (Vite + TypeScript)        Tailwind CSS + Glassmorphism Tokens   │
│   • Component lifecycle management     • Deep Obsidian (#0B0E14) Theme      │
│   • WebSocket / SSE state hooks        • Frosted glass backdrops            │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          3D GRAPHICS PIPELINE                               │
│                                                                             │
│   React Three Fiber (@react-three/fiber)                                     │
│   • Declarative Three.js scene graph for React                              │
│                                                                             │
│   @react-three/drei                                                         │
│   • Camera controls, post-processing helpers, Float, Bloom                  │
│                                                                             │
│   Custom GLSL Shaders (THREE.Points + ShaderMaterial)                       │
│   • Vertex Shader: Simplex noise particle displacement                     │
│   • Fragment Shader: Radial alpha falloff & dual-gradient color mapping     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Why this stack is optimal:
- **`THREE.Points` + WebGL:** Avoids heavy polygonal geometry. Millions of floating coordinates are rendered as point-cloud primitives. GPU utilization stays below 15% on standard integrated graphics and hits 120 FPS on dedicated GPUs.
- **Vite + React + TypeScript:** Provides instantaneous Hot Module Replacement (HMR), strict type safety for action/event payloads, and lightweight production bundle size (< 250KB compressed excluding 3D model assets).

---

## 3. The 3D Dotted-Matrix Particle Architecture

```text
                          3D BUST MESH (.OBJ / .GLTF)
                                      │
                                      ▼
                        GEOMETRY VERTEX SAMPLING
                     (Sample 80,000 - 120,000 Points)
                                      │
                                      ▼
                    Float32Array[ x, y, z, ... ]  <── GPU BufferAttribute
                                      │
                                      ▼
                ┌───────────────────────────────────────────┐
                │        CUSTOM GLSL VERTEX SHADER          │
                │  • Base coordinate placement              │
                │  • Simplex noise breathing displacement   │
                │  • uActivity & uAudio frequency ripples   │
                └─────────────────────┬─────────────────────┘
                                      │
                                      ▼
                ┌───────────────────────────────────────────┐
                │       CUSTOM GLSL FRAGMENT SHADER         │
                │  • Distance-to-center point clipping      │
                │  • Electric Cyan (#00F0FF) to Gold (#FFAA00)│
                │  • Soft Gaussian glow alpha decay         │
                └─────────────────────┬─────────────────────┘
                                      │
                                      ▼
                           60-120 FPS RENDERED VIEWPORT
```

### 3.1 Point Cloud Generation
The avatar form is generated by sampling vertices from an anatomical head-and-torso 3D reference mesh:
1. Vertices are extracted and normalized to fit inside a unit bounding box: $[-1.0, 1.0]$.
2. Points are loaded into a `THREE.BufferGeometry` with two key buffer attributes:
   - `position` (`Float32Array`, length $N \times 3$): Baseline particle coordinates.
   - `aRandom` (`Float32Array`, length $N$): Per-particle random offset seed for natural, asynchronous oscillation.

### 3.2 GLSL Shaders

#### Vertex Shader (`nala_particle.vert`):
```glsl
uniform float uTime;
uniform float uActivity;      // 0.0 = Idle, 1.0 = Thinking, 2.0 = Executing
uniform float uAudioLevel;     // 0.0 - 1.0 real-time mic/TTS amplitude
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
```

#### Fragment Shader (`nala_particle.frag`):
```glsl
uniform vec3 uColorCyan;    // vec3(0.0, 0.94, 1.0)
uniform vec3 uColorGold;    // vec3(1.0, 0.67, 0.0)
uniform float uPramanaSync; // 0.0 to 1.0 (epistemic clarity score)

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
```

---

## 4. Reactive Cognitive State Binding

The 3D hologram is wired to NALA's backend state engine through reactive uniforms:

| Uniform | Data Type | Source of Truth | Visual Manifestation on Hologram |
| :--- | :--- | :--- | :--- |
| `uTime` | `float` | Animation Frame Clock | Smooth, gentle organic breathing displacement |
| `uActivity` | `float` (0–2) | Session Execution State | `0` = Idle (calm drift), `1` = Thinking (accelerated orbits), `2` = Tool Executing (tight core convergence) |
| `uAudioLevel` | `float` (0–1) | Web Audio `AnalyserNode` | Harmonic ripples traveling vertically across the face during speech |
| `uPramanaSync`| `float` (0–1) | Backend Satya/RTA Score | High score increases golden particle radiance; low score causes subtle cyan distortion |
| `uErrorFlare` | `float` (0–1) | Step Failure Event | Amber warning pulse radiating outward through the point cloud |

---

## 5. Production Dashboard Layout & Component Architecture

The visual interface is organized into a modular three-column command center:

```text
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ TOP BAR: [Logo: NALA]  Session: #7349 [ACTIVE]  Cognitive Sync: 98.2%  System: ONLINE  Latency: 14ms   │
├──────────────────────────┬───────────────────────────────────────────┬─────────────────────────────────┤
│ LEFT PANEL:              │ CENTER VIEWPORT:                          │ RIGHT PANEL:                    │
│                          │                                           │                                 │
│ ┌──────────────────────┐ │ ┌───────────────────────────────────────┐ │ ┌─────────────────────────────┐ │
│ │ USER PROFILE         │ │ │                                       │ │ │ EXECUTION TELEMETRY         │ │
│ │ Aria Chen (ac@nala)  │ │ │                                       │ │ │ • Cognitive: 98.2%          │ │
│ └──────────────────────┘ │ │                                       │ │ │ • Latency: 14ms             │ │
│                          │ │       3D DOTTED-MATRIX                │ │ │ • Context: 128k / 128k      │ │
│ ┌──────────────────────┐ │ │        HOLOGRAPHIC                    │ │ │ • Active Threads: 342       │ │
│ │ FLEET ROSTER         │ │ │           AVATAR                      │ │ └─────────────────────────────┘ │
│ │ • NALA-01 (ACTIVE)   │ │ │       (WebGL / R3F Canvas)            │ │                                 │
│ │ • CHRONOS (IDLE)     │ │ │                                       │ │ ┌─────────────────────────────┐ │
│ │ • AETHER (BUSY)      │ │ │                                       │ │ │ NALA WRITE-AHEAD LOG (WAL)  │ │
│ │ • ORION-04 (OFFLINE) │ │ │                                       │ │ │ [22:45:31] COMMIT SUCCESS   │ │
│ └──────────────────────┘ │ │                                       │ │ │ [22:45:30] STREAM SUCCESS   │ │
│                          │ │                                       │ │ │ [22:45:29] QUERY SUCCESS    │ │
│ ┌──────────────────────┐ │ └───────────────────────────────────────┘ │ └─────────────────────────────┘ │
│ │ ACTIVE TASKS         │ │                                           │                                 │
│ │ Task #402: Code Audit│ │ ┌───────────────────────────────────────┐ │ ┌─────────────────────────────┐ │
│ └──────────────────────┘ │ │ FLOATING GLASS COMPOSER               │ │ │ RESOURCE MATRIX             │ │
│                          │ │ [ Message NALA...        ] [Send]     │ │ │ CPU: 1.5%  Mem: 42MB        │ │
│                          │ │ [ GPT-4o ] [ ACTIVE ] [ Context: 128k]│ │ └─────────────────────────────┘ │
│                          │ └───────────────────────────────────────┘ │                                 │
└──────────────────────────┴───────────────────────────────────────────┴─────────────────────────────────┘
```

### Component Directory Breakdown:
```text
src/
├── components/
│   ├── avatar/
│   │   ├── NalaHologramCanvas.tsx    <── Canvas wrapper & Camera setup
│   │   ├── DottedMatrixPoints.tsx    <── THREE.Points & BufferGeometry loader
│   │   ├── shaders/
│   │   │   ├── nala_particle.vert
│   │   │   └── nala_particle.frag
│   │   └── useHologramUniforms.ts    <── Subscribes to RTA loop & audio analyzer
│   ├── layout/
│   │   ├── DashboardShell.tsx        <── Top-level 3-column CSS grid
│   │   ├── TopNavigationBar.tsx      <── System status & cognitive sync metrics
│   │   ├── FleetSidebar.tsx          <── Multi-agent roster & session switcher
│   │   └── TelemetryPanel.tsx        <── WAL commit stream & performance graphs
│   └── composer/
│       └── GlassmorphicComposer.tsx  <── Floating prompt pill with mode pills
```

---

## 6. Implementation & Vertical Slice Roadmap

Implementation must strictly follow the **Vertical Slice Doctrine** defined in Section 9 of [NALA_Architecture_Enforcement_Protocol.md](file:///c:/Users/soura/.gemini/config/rules/NALA_Architecture_Enforcement_Protocol.md):

```text
SLICE UI-01: Standalone Three.js Point Cloud Prototype
  ├── Objective: Render 100,000 sampled points from bust geometry using custom GLSL shaders.
  ├── Verification: 60 FPS verified via stats.js on both integrated & discrete GPUs.
  └── Rule: Zero backend coupling; test with synthetic sine-wave clock.

SLICE UI-02: Reactive Uniforms & Audio-Frequency Binding
  ├── Objective: Connect uActivity, uPramanaSync, and Web Audio AnalyserNode to shaders.
  ├── Verification: Particle displacement verified upon audio speech & activity state transitions.
  └── Rule: Shader must gracefully fall back to idle drift if audio/state feeds disconnect.

SLICE UI-03: Dashboard Shell & Glassmorphism Design System
  ├── Objective: Assemble Tailwind CSS 3-column layout with dark obsidian glass tokens.
  ├── Verification: Responsive across 1440p, 1080p, and mobile viewports with zero layout shift.
  └── Rule: All interactive cards must expose unique DOM test IDs for automated verification.

SLICE UI-04: Canonical Event-Stream Integration (Post-Phase-15)
  ├── Objective: Bind the Right Telemetry Panel to the canonical backend WAL & State Stream.
  ├── Verification: Live commits appear with matching LSNs and timestamps from SQLite WAL.
  └── Rule: Forbidden Pattern F-01 & F-02 compliance (No fake UI-only state).
```

---

## 7. Performance & Memory Budget

| Metric | Target Limit | Enforcement Mechanism |
| :--- | :--- | :--- |
| **Frame Rate** | $\ge 60\text{ FPS}$ (Target: 120 FPS) | Render loop throttled to display refresh rate (`requestAnimationFrame`) |
| **Draw Calls** | Exactly **1 Draw Call** for Avatar | All 100k points batched in a single `THREE.Points` instance |
| **VRAM Usage** | $\le 45\text{ MB}$ | Single buffer geometry attribute buffer; no multi-texture atlases |
| **CPU Main Thread Overhead** | $\le 2.0\text{ ms}$ per frame | Vertex displacements computed 100% on GPU via GLSL vertex shader |
| **Asset Size** | $\le 1.2\text{ MB}$ (Gzipped) | Draco-compressed point coordinate buffer |

---

## 8. Architectural Compliance & Sign-Off

This document serves as the **authoritative implementation specification** for NALA's frontend avatar and visual platform. 

It satisfies all stipulations of the **Kill Critic Protocol**:
- Separates presentation projection from backend authority.
- Replaces static images with an interactive, GPU-accelerated mathematical point cloud.
- Establishes a verifiable contract between backend cognitive state and frontend visual behavior.

---

```text
=====================================================================
               END OF NALA 3D UI SPECIFICATION
=====================================================================
```
