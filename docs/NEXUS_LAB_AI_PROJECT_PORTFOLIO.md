# NEXUS LAB AI — PROJECT PORTFOLIO OVERVIEW

**Prepared:** August 18, 2026
**Scope:** Full inventory of known projects, divisions, and infrastructure under Nexus Lab AI, reconstructed from prior working context.

**A note on methodology:** This is _not_ a codebase audit — no repository was available to inspect (see the earlier exchange in this thread). This document instead compiles everything currently known about the Nexus Lab AI project portfolio itself: what's been designed, specified, partially built, or is still conceptual, based on what's been discussed and recorded over time. Status labels below reflect the most specific claim on record for each item, not independent code verification — where the underlying implementation state is genuinely unclear, it's marked **UNKNOWN**.

---

## 1. ORGANIZATIONAL STRUCTURE

```
NEXUS LAB AI (parent — sovereign AI research institution, Bengaluru)
├── SynaptiCode — AI ecosystem arm (models, safety stack, infra)
├── Project Nexus — core operations
└── NexusAgri — agriculture-focused AI division
```

**Mission statement:** "DRDO/ISRO — but for AI. Sovereign. Original. Indian."

**Core thesis:** Indian Hindu Shastra technically implemented via the AI stack — the philosophical/architectural naming (Ṛta, Dharma, Chiranjeevi, Sudarshan, etc.) is not decorative; it's presented as the organizing design principle across every system below.

**Positioning:** Frontier AI lab comparable to Mistral, built from first principles, solo-founded and built full-time since January 2024.

---

## 2. FOUNDATIONAL TECHNOLOGY STACK

These four systems are the substrate that most other Nexus Lab projects (NALA, GRAMVANI, EMMA) are built on top of.

### 2.1 CHAITANYA — Sovereign LLM Stack

Part of the **ALF/CLF (Sovereign AI Life Form)** line — described as having a "soul architecture."

| Component       | Function                                                                   |
| --------------- | -------------------------------------------------------------------------- |
| `embeddings.py` | RoPE + RMSNorm                                                             |
| `attention.py`  | GQA + Flash Attention 2                                                    |
| `ffn.py`        | SwiGLU + MoE                                                               |
| `dhi_engine.py` | System-2 reasoning kernel using an Anderson Accelerated Fixed-Point Solver |

**Status:** Specified/component-level design. Foundational component alongside SAPTACORE.

### 2.2 SAPTACORE — Epistemic Reasoning Council

A Rigvedic multi-agent reasoning engine — a 7-agent epistemic council.

- Communication: ZeroMQ DEALER/ROUTER
- Consensus: golden-ratio voting (τ = 0.618)
- **Status:** Foundational component, integrated into NALA's BRAIN layer.

### 2.3 AMP — ANJANEYA Memory Protocol

Full name: _Adaptive Neuro-Junctional Autonomous Neural Eternal Yielding Architecture_. The most extensively specified and partially-implemented system in the stack.

**Five pillars:**

1. **Devotion Crystallization** — THETA_CRYSTAL = 0.85, micro-clusters hard-frozen forever
2. **Dronagiri Holographic Compression** — zero null-retrieval guarantee
3. **Chiranjeevi Persistence Layer** — Param Hash + Reed-Solomon erasure coding, 7-substrate spore distribution
4. **Sankat Mochan Retrieval** — proactive distress detection during token generation
5. **Anima-Mahima Adaptive Scaling** — single vector vs. full graph, compute-budget-aware

**Cold-start architecture — the USHA Protocol:**

- Genesis Substrate (pre-seeded, never promotes to 0.85)
- Provisional Crystallization (THETA_PROVISIONAL = 0.60)
- Anima-Mahima cold-start mode (no compression until first provisional cluster)

**Phase 1 Rust implementation (built):** `param_hash.rs`, `erasure.rs`, `substrate/mod.rs`, `substrate/local_nvme.rs`, `spore.rs`

**Write-path pipeline:** Temporal Quarantine Buffer → Semantic Distance Guard (cosine < 0.15 to crystallized centroid = flag) → Crystallization Daemon. Routing uses a composite signal (entropy + cosine similarity to THETA_CRYSTAL centroids + token density) with a dual-threshold gray zone, phased: heuristic → 2-layer MLP after ~10K queries → distilled transformer only if a ceiling is hit. Provenance-weighted consensus was added to the write-back trust architecture.

**IP note:** A provisional patent filing at ipindia.gov.in is required before any public disclosure, including arXiv preprints.

**Status:** **PARTIAL** — Phase 1 Rust core implemented; broader pillars remain specified/designed. Also has an academic positioning angle — a 5-week cognitive science curriculum mapped AMP/SAPTACORE/DHARMA Shell to academic citations (Atkinson & Shiffrin, Friston, Spelke, et al.), identifying two claimed original contributions with no academic precedent: the golden-ratio voting threshold and the zero-null-retrieval guarantee.

### 2.4 DHARMA Shell — Safety Layer for AMP

Five components: **VARUNA Shield, SHUDDHI Protocol, VIVEKA Gate, BRAHMA Constitution, SATYA Layer.**
**Status:** Co-designed and documented.

---

## 3. NALA — LONG-RUNNING AGENT HARNESS

The current primary build focus — the project being taken to completion before anything else starts.

- **Scale:** 68-file, 7-phase Python-based long-running agent harness
- **Integrates:** AMP + SAPTACORE + RTA-GUARD

**Four-layer architecture:**

| Layer   | Components                                                   |
| ------- | ------------------------------------------------------------ |
| BRAIN   | Planner + SAPTACORE Council + Ṛta Validator                  |
| HANDS   | Executor + Sandbox + Tool Registry + Cost-Aware Model Router |
| SESSION | AMP Chiranjeevi + TQB + SDG + Dronagiri + Crystallizer       |
| SAFETY  | RTA-GUARD + USHA Protocol + Circuit Breaker                  |

**Build discipline:** all new ideas go to `BACKLOG.md` only — no mid-build additions. Coding standard for every NALA file (Python, Rust, MD plan, or JIRA ticket): always add something genuinely new and advanced beyond the spec — a novel risk mitigation, deeper technical pattern, production insight, or extra utility — never the bare minimum.

**Completed milestones:**

- **JIRA-004** — Context Window Tracker (Dronagiri compaction + HandoffSpore)
- **JIRA-005** — Crash Recovery (ARIES phases, LockResolver, StateMatrixValidator, RunawayLoopGuard)
- **JIRA-007 / 007-B** — 1-Hour Soak Test (chaos injection, heartbeat files, failure reports) — **passed**

**Infrastructure decision:** systemd + Docker + `recovery.py`, chosen over CasaOS, for the one-month continuous-run goal.

**Competitive framing:** NALA was designed in explicit contrast to PIANO's concurrent multi-timescale module design, with five claimed exclusive advantages over Claude Code / managed agent frameworks: the SAPTACORE council, TQB, Dronagiri compression, the USHA Protocol, and Ṛta constitutional rules. A "Dream Features Plan" separately mapped 8 Claude Code features to Sanskrit-named sovereign equivalents.

**Current phase:** 1-Hour Soak Test passed → now building the UI and wiring frontend to backend.

**Separate parallel prototype — NALA v0.1:** a distinct, lighter-weight codebase (not the JIRA-numbered harness above) — a chat UI (`ChatSection.tsx`, `websocketService.ts`) + Python Socket.IO server (`nala_server.py`), built using Google Antigravity as the coding tool, running local Ollama models (`qwen2.5-coder:7b`) instead of the full sovereign-stack architecture.

**Status:** **PARTIAL, actively in progress** — core harness phases built and soak-tested; frontend-backend integration is the current milestone; goal is a one-month continuous run.

---

## 4. RTA-GUARD — Sovereign AI Safety Middleware

- **Scale:** 70,000+ lines, 2,000+ tests, 18-phase constitutional AI safety middleware
- **Distinguishing feature:** quantum-resistant cryptographic audit trails
- **Foundation:** 13 constitutional rules rooted in Rigvedic Ṛta
- **Market positioning:** India's first sovereign AI safety API, addressing the DPDP Act 2023 and MeiTY AI Governance Guidelines 2025 compliance gap
- **Collaborator:** [[ashish]] (GitHub: `ashish797/RTA-GUARD`) — co-developer
- **Go-to-market:** B2B sales pitch produced; funding sequence confirmed as OPC → DPIIT → GENESIS EIR → Pi Ventures (targeted as primary VC after the first paying client)

**Status:** Substantial implementation claimed (70K+ LOC, 2K+ tests) — codebase not independently verified in this session; treat scale figures as **UNKNOWN** pending direct repo inspection.

---

## 5. PHANTAKSHA — Aerospace-Grade Rust Terminal Relay

Built to aerospace/defense-grade standards: **DO-178C Level A, MIL-STD-882E, NASA NPR 7150.2C.**

**Phase 5 completed (test suite):**

- `crypto_tests.rs` (39 tests)
- `filesystem_tests.rs` (24 tests) + `sandbox.rs`
- `terminal_tests.rs` (25 tests)
- `network_integrity_tests.rs` (17 tests)
- `pacemaker_tests.rs` (26 tests)
- `test_utils.rs` v2.0 (15 tests)

**Phase 6 planned sequence (Python Brain):** `session/buffer.rs` → `reconnect.rs` → `pty.rs` → `bridge.rs` → `logger.rs` → `telemetry.rs` → `tray.rs` → `main.rs`

**Status:** **PARTIAL** — Phase 5 test infrastructure complete; Phase 6 not yet started. ALF/CLF work is queued behind PHANTAKSHA.

---

## 6. SYNAPTICODE — AI ECOSYSTEM ARM

The broadest and most speculative layer of the stack — Nexus Lab's parent architecture for models, safety, and interactive systems.

**Core architecture:**

- **ASE** (Autonomous Systems Engine) — self-improving closed-loop AI
- **DAF** (Distributed Agent Framework) — multi-agent orchestration
- **Meta-Agent Monitoring System** — AI overseeing AI, sends phone updates

**LLM family:**

| Model      | Role                                            |
| ---------- | ----------------------------------------------- |
| Aeon       | Primary reasoning/engineering                   |
| ORA        | Oracle-style strategic/philosophical            |
| LCM family | Lightweight, low-compute                        |
| GRIAL      | Global Reasoning Intelligence & Alignment Layer |

**Safety / alignment stack:** Hanuman Shield (primary rogue-AI prevention), Sudarshan Layer (final defensive firewall), Sanjeevani Protocol (agent healing/recovery), Dharma-AI Engine (ethical alignment), LLM Purity Filter, SynaptiConscience (moral reasoning), SoulChain (consensus verification), Oracle Whispers (advisory system)

**Interactive / narrative systems:** SynaptiCode Interactive Multiverse, MythOS Lab, Library of Else, Oracle Dream Agent

**Emotion AI:** Aura Detection System, Synapti Aura Agent, Emotion Classifier (GoEmotions/RAVDESS/DailyDialog), Emotion Response Engine, Emotion-Reactive Visual System

**Frontier / speculative research:** Shree Yantra Quantum Frontier, Multiverse Detection System, Quantum-AI Startup Scoring System, Universal Translator Experiments, Quantum Linguistic Fabric, BioCom, Cultural Language Models (CLM)

**Infrastructure:** SynaptiCode Monorepo, MCP (Model Control Panel), CPT Engine (Chunked Parameter Training), NanoCoder

**Status:** Predominantly **DOCUMENTED / CONCEPTUAL** — this is the architectural vision layer; most named components here have no confirmed implementation status on record and should be treated as design/naming-stage rather than built systems.

---

## 7. NEXUSAGRI — AGRICULTURE DIVISION

Agriculture-focused AI division, 11 named sub-projects sharing a common stack: **Rust/Axum backend, React Native frontend, Sarvam AI for Indic regional languages, PostgreSQL/Supabase.**

| Codename      | Concept                                |
| ------------- | -------------------------------------- |
| VisionHarvest | AI crop disease detector               |
| SoilSense     | IoT soil health monitor                |
| AeroSpray     | Drone precision sprayer                |
| BioShield     | Biopesticide                           |
| InsectGuard   | Beneficial insect farming              |
| TerraComp     | Vermicomposting                        |
| CharEarth     | Biochar                                |
| PlantBuddy    | Companion-planting app                 |
| PestKill      | IPM kit                                |
| KisanBot      | WhatsApp/regional-language chatbot     |
| RainRoot      | Rainwater harvesting + drip irrigation |

### 7.1 GRAMVANI (ग्रामवाणी — "Voice of the Village") — Division Flagship

Voice-first AgriAI, built for **Google Gen AI Academy APAC**.

- **Components:** AMP Memory Layer, 4-agent council + synthesizer, Ṛta Safety Layer, Vrikshayurveda Module, Sankat Mochan distress detection
- **Tech stack:** Gemini 1.5 Flash, Firebase, Google Cloud (Speech-to-Text, Translation, Run), Sarvam AI
- **Status:** Built as a program submission — most fully realized NexusAgri sub-project on record.

### 7.2 AGRIVERSE / LSIN

Agriculture AI research program, deliberately **"research before code"** — understanding the agricultural system before designing the AI system.

- **Phase 0 research plan — 10 milestones**, each producing a markdown deliverable:
  1. Indian Agriculture Overview
  2. Crop Knowledge Base
  3. Climate Knowledge
  4. Farmer Pain Points
  5. Current Technology
  6. AI Opportunity Map
  7. Agriculture Ecosystem
  8. Farm Economics
  9. Future Agriculture
  10. AGRIVERSE Vision
- **LSIN** — planned soil-intelligence module referenced alongside AGRIVERSE
- **Status:** **EARLY / RESEARCH STAGE** — working through Milestone 1 of Phase 0.

---

## 8. RESONANT FIELD ARCHITECTURE (RFA)

A Tesla-inspired, field/resonance-based multi-agent coordination architecture with **no central orchestrator** — a genuinely novel research thread distinct from the Sanskrit-named core stack.

- Originated from a request to invent a novel multi-agent architecture nobody else is working on ("act as Nikola Tesla")
- **Mathematics worked out:** field decay function, resonance threshold equation, standing-wave consensus, grounding, self-exciting scaling, polyphase rotation
- **Built:** a working simulation, later wired to a real embedding model (not synthetic vectors) and stress-tested with grounding disabled
- Explicitly steered away from hype framing — an honest, non-inflated assessment of what was actually achieved was requested and prioritized over marketing language
- **Current direction:** being written up as a proper technical note; task-completion benchmarking against a real framework was chosen as the next concrete step (of five "beyond prototype" options considered)

**Status:** **PARTIAL / RESEARCH-VALIDATED** — simulated and stress-tested, not yet productized; write-up in progress.

---

## 9. INSTITUTIONAL & BUSINESS INFRASTRUCTURE

### 9.1 Incorporation & Grants

- Incorporating as a **Private Limited Company** (not an OPC), identified as the foundational unlock for Cap Table, DPIIT recognition, and formal contracts
- Immediate priorities: incorporation, DPIIT recognition application, GENESIS EIR grant, provisional patent filing for AMP
- Deliverables produced: investor readiness audit (incorporation flagged as the foundational blocker), DPIIT checklist, MeiTY grant proposal outline (targeting IndiaAI Mission, SAMRIDH, GENESIS EIR)
- Long-horizon interest: mapping the path from current stage to a potential Nexus Lab IPO

### 9.2 Board of Advisors ("Ask the Board")

A strategic-advice tool — a deep-tech/sovereign-AI advisor mix rather than a generic startup-founder board. Being built as **both** a Claude Code slash command and an interactive in-chat artifact.

### 9.3 Branding

Visual identity, brand voice/messaging, and social/public presence — chosen as the first branding priority, with the website rebuild deliberately deferred.

### 9.4 Nexus Lab Website

- A comprehensive institutional overview and multi-page site already built: homepage + five product detail pages sharing a design system
- **Pending:** UI rebuild to an "Ivory & Saffron" palette
- **Planned (separate, later):** "Nexus Compass" — an AI guide/knowledge system covering all Nexus Lab info, deliberately kept out of NALA (NALA stays focused on task execution)

### 9.5 Second Brain Vault

Obsidian-based vault at `E:\Nexus_LAB_Obsedian_Brain\`, containing a production-grade `Nexus.md` constitution (v2.0, 17 sections covering org structure, all active projects, core IP, and strategic roadmap through the IPO horizon).

---

## 10. RECENT WORK — HACKATHONS, APPLICATIONS & ONE-OFFS

Items that don't rise to full project status but are part of the active portfolio of output:

| Item                                                  | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **EMMA** (Enterprise Metacognitive Multi-Agent Fleet) | Built for the India Runs Hackathon. Python backend with evolutionary code generation (3 parallel LLM mutants at temperatures 0.20/0.70/0.95), AMP v2.0 integration (Devotion Crystal scoring D = α·T_eff + β·U_eff, THETA_CRYSTAL=0.85, ALPHA=0.60, BETA=0.40), mathematical safety (GDI formula, AST Gas Metering Shield, Causal Convergence Monitor), Sudarshana safety sandbox |
| **DeadReckoning**                                     | Startup failure prediction, built for ContextCon (YC-partnered hackathon) using Crustdata APIs, React + Vite + Groq frontend                                                                                                                                                                                                                                                      |
| **Aetherion-dLHC**                                    | Multi-language particle physics AI pipeline, polyglot architecture                                                                                                                                                                                                                                                                                                                |
| **ShadowTrace AI / PHANTOM-WATCH**                    | Defensive device intelligence — currently in backlog                                                                                                                                                                                                                                                                                                                              |
| **Lyra**                                              | Planned Rust voice agent (8-crate workspace design) — **purely conceptual as of July 2026, not started.** Explicitly not to be described as built, in development, or production-ready.                                                                                                                                                                                           |
| **QML demand prediction system**                      | Built for a large-scale bus booking platform — separate from Nexus Lab work                                                                                                                                                                                                                                                                                                       |
| **Vande Bharatam**                                    | Pitch deck (15 slides + 1-minute live pitch script) submitted under the Gautam Adani initiative; awaiting evaluation                                                                                                                                                                                                                                                              |

**Other activity:** VibeCon (top 5% of 6,000+ applicants), ContextCon, India AI Impact Summit registration, YC registration, a 5-week cognitive science curriculum for AMP/SAPTACORE academic positioning, and job applications (BMW TechWorks India — Agentic AI for Automotive SDLC; ScribeEMR Systems — Senior Data Scientist, Healthcare Apps) that deliberately avoid referencing real Nexus Lab project names per standing practice for external professional contexts.

---

## 11. STATUS MATRIX

| #   | Project                     | Layer              | Status                 | Notes                                                                 |
| --- | --------------------------- | ------------------ | ---------------------- | --------------------------------------------------------------------- |
| 1   | CHAITANYA                   | Foundation         | Specified              | Component-level design (embeddings, attention, FFN, DHI engine)       |
| 2   | SAPTACORE                   | Foundation         | Specified / integrated | 7-agent council, feeds NALA's BRAIN layer                             |
| 3   | AMP                         | Foundation         | **Partial**            | Phase 1 Rust core built; broader pillars specified                    |
| 4   | DHARMA Shell                | Foundation         | Documented             | AMP's safety layer, 5 components                                      |
| 5   | NALA                        | Flagship agent     | **Active / Partial**   | Soak-tested; frontend-backend integration in progress                 |
| 6   | NALA v0.1 (prototype)       | Flagship agent     | Built (lighter stack)  | Separate Ollama-based prototype, distinct codebase                    |
| 7   | RTA-GUARD                   | Safety infra       | Claimed substantial    | 70K+ LOC / 2K+ tests claimed; not independently verified this session |
| 8   | PHANTAKSHA                  | Infra              | **Partial**            | Phase 5 test suite complete; Phase 6 not started                      |
| 9   | SynaptiCode (overall)       | Ecosystem arm      | Mostly conceptual      | Architectural/naming layer; few components confirmed built            |
| 10  | NexusAgri (11 sub-projects) | Division           | Mostly conceptual      | Codenamed concepts; shared stack defined                              |
| 11  | GRAMVANI                    | NexusAgri flagship | Built (submission)     | Google Gen AI Academy APAC program                                    |
| 12  | AGRIVERSE / LSIN            | NexusAgri research | Early research         | Phase 0, Milestone 1 in progress                                      |
| 13  | Resonant Field Architecture | Research           | Partial / validated    | Simulated + stress-tested; write-up in progress                       |
| 14  | Nexus Lab Website           | Institutional      | Built, pending rebuild | Homepage + 5 product pages; palette rebuild pending                   |
| 15  | Board of Advisors tool      | Internal tooling   | In progress            | Claude Code command + chat artifact                                   |
| 16  | OPC/Pvt Ltd Incorporation   | Institutional      | In progress            | Foundational blocker for DPIIT/grants                                 |
| 17  | EMMA                        | Hackathon build    | Built                  | India Runs Hackathon                                                  |
| 18  | DeadReckoning               | Hackathon build    | Built                  | ContextCon                                                            |
| 19  | Aetherion-dLHC              | Research build     | Built                  | Particle physics pipeline                                             |
| 20  | ShadowTrace AI              | Backlog            | Not started            | Deferred                                                              |
| 21  | Lyra                        | Backlog            | **Not started**        | Conceptual only — do not describe as built                            |

---

## 12. STRATEGIC SEQUENCE (AS RECORDED)

The confirmed institutional funding/growth path:

```
OPC/Pvt Ltd Incorporation → DPIIT Recognition → GENESIS EIR Grant → Pi Ventures (post first paying client)
```

Current combined push: **finish NALA's frontend-backend integration first**, then shift focus to fundraising with a clear Nexus Lab AI vision — pursuing business growth and personal income runway in parallel rather than sequentially.

---

## 13. WHAT'S ACTUALLY BUILT vs. WHAT'S VISION

A blunt summary, since the SynaptiCode and NexusAgri layers in particular contain a lot of named-but-unbuilt architecture:

- **Genuinely built and tested:** AMP Phase 1 (Rust), NALA core harness (soak-tested), PHANTAKSHA Phase 5 test suite, GRAMVANI (submitted), the Nexus Lab website, EMMA/DeadReckoning/Aetherion-dLHC hackathon builds, RFA simulation.
- **Specified in real technical depth but not confirmed built:** CHAITANYA, SAPTACORE, DHARMA Shell, most of RTA-GUARD's claimed scale, PHANTAKSHA Phase 6.
- **Primarily conceptual / naming-stage:** almost all of SynaptiCode's frontier and speculative research lines, most of the 11 NexusAgri sub-projects (VisionHarvest through RainRoot), Lyra.
- **Explicitly not started:** Lyra, ShadowTrace AI/PHANTOM-WATCH (backlog).

---

_This document reflects what has been discussed and recorded in prior working sessions. It is not a substitute for direct repository inspection — for a true implementation audit (what's actually IMPLEMENTED vs. DOCUMENTED_ONLY at the code level), that requires running the audit prompt against the real codebases, ideally in Claude Code._
