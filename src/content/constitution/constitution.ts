/**
 * Nexus LAB AI — Canonical Architecture Constitution & Enforcement Protocol
 * Authoritative registry of system invariants, completion equations, and governance laws.
 */

export interface Invariant {
  id: string;
  category: 'Identity & Separation' | 'State & Mutation' | 'Authorization & HITL' | 'Execution & Recovery' | 'Projections & Transport';
  title: string;
  summary: string;
  formalRule: string;
  positiveProof: string;
  negativeProof: string;
  adversarialTest: string;
}

export interface ForbiddenPattern {
  id: string;
  name: string;
  violation: string;
  remedy: string;
  codeSnippet?: string;
}

export interface PipelineStage {
  step: number;
  name: string;
  gate: string;
  evidence: string;
}

export const CONSTITUTION_DATA = {
  metadata: {
    title: 'The Nexus Architecture Constitution',
    shortTitle: 'Architecture Constitution',
    subtitle: 'Strict Normative Protocol for Architecture-Preserving Autonomous Systems',
    status: 'CANONICAL SYSTEM SPECIFICATION — V1.0',
    scope: 'Universal across all Nexus LAB AI agent runtimes, state substrates, authorization gates, and enterprise products.',
    doctrine: 'Forensic-first, contract-first, invariant-first, vertical-slice, proof-driven migration.',
    axiom: 'A feature can appear to work while the architecture underneath it is fundamentally flawed. In Nexus LAB AI, architectural violation is task failure.',
    stats: {
      invariantsCount: 15,
      antiPatternsCount: 12,
      pipelineStagesCount: 13,
      governingAxiomsCount: 9,
    },
  },

  axioms: [
    { rule: 'Roots before fruits', detail: 'Durable execution and state substrates take absolute priority over superficial user-facing features.' },
    { rule: 'State before memory', detail: 'A deterministic, versioned current-state authority must exist before implementing loose semantic memory.' },
    { rule: 'Sessions before infinite history', detail: 'Clean, isolated conversational boundaries must precede unconstrained message streams.' },
    { rule: 'Policy before autonomy', detail: 'Hard architectural guardrails and risk engines must govern execution before enabling self-directed agency.' },
    { rule: 'Authorization before execution', detail: 'Every tool invocation requires an explicit, exact-action cryptographic or structural binding artifact.' },
    { rule: 'Verification before self-improvement', detail: 'Deterministic verifiers must validate outputs before agent feedback loops are committed.' },
    { rule: 'Recovery before long-running execution', detail: 'Crash-restart resilience and anti-replay guards must be proven before running multi-step tasks.' },
    { rule: 'Contracts before infrastructure', detail: 'Domain models and invariant contracts define database schemas and cloud wiring—never the inverse.' },
    { rule: 'Proof before completion', detail: 'A task is only complete when behavior works canonically and survives adversarial stress tests.' },
  ],

  tripartitePillars: [
    {
      level: 'Level 01',
      title: 'Behavioral Feature Completion',
      desc: 'The API returns 200 OK, a UI button is clickable, or a standard workflow runs without crashing. On its own, this is superficial evidence and legally insufficient for completion.',
      badge: 'Insufficient',
      badgeColor: 'amber',
    },
    {
      level: 'Level 02',
      title: 'Architectural Correctness',
      desc: 'Execution passes through the canonical domain owner, state mutations obey transition boundaries, and authorizations are validated by server-side policy engines.',
      badge: 'Mandatory',
      badgeColor: 'sky',
    },
    {
      level: 'Level 03',
      title: 'Adversarial Proof of Correctness',
      desc: 'The system survives mid-flight process termination, corrupted state, replay attacks, tampered parameters, and proves zero legacy bypass routes exist.',
      badge: 'Absolute Law',
      badgeColor: 'emerald',
    },
  ],

  completionEquation: {
    formula: 'COMPLETION = Behavior × Contract × Invariants × Boundary × Persistence × Recovery × Adversarial Verification',
    explanation:
      'Feature completion is not an accumulative percentage—it is a strict zero-tolerance mathematical product. If any required factor is 0 (e.g. state does not survive a restart, or a hidden legacy bypass exists), the total completion is identically 0.',
    factors: [
      { name: 'Behavior', label: 'Expected functional outcome achieved' },
      { name: 'Contract Compliance', label: 'Strict adherence to domain interfaces' },
      { name: 'Invariant Preservation', label: 'All 15 system laws remain intact' },
      { name: 'Boundary Integrity', label: 'Zero unauthorized side-effects or bypasses' },
      { name: 'Persistence Correctness', label: 'Durable writes survive process termination' },
      { name: 'Recovery Correctness', label: 'Anti-replay recovery without ambiguous replays' },
      { name: 'Adversarial Verification', label: 'Survives hostile failure injections' },
    ],
  },

  invariants: [
    {
      id: 'I-01',
      category: 'Identity & Separation',
      title: 'Causal Identity Separation',
      summary: 'Stable, unforgeable IDs across the entire execution chain.',
      formalRule: 'agent_id → conversation_id → message_id → state_id → action_id → execution_id → checkpoint_id → artifact_id.',
      positiveProof: 'Every action emitted contains an unbroken, cryptographically traceable lineage back to its root agent and run.',
      negativeProof: 'Swapping, forging, or omitting an ID in the chain immediately rejects execution.',
      adversarialTest: 'Inject forged execution_id across foreign conversation boundaries; verify immediate cryptographic rejection.',
    },
    {
      id: 'I-02',
      category: 'Identity & Separation',
      title: 'Agent ≠ Conversation Independence',
      summary: 'Conversations belong strictly to one agent; switching must never bleed context.',
      formalRule: 'agent_id 1:N conversation_id. Active conversation switching must have zero cross-agent side-effects.',
      positiveProof: 'Switching active conversation reloads isolated state cleanly without retained foreign memory.',
      negativeProof: 'Agent A cannot read, mutate, or query Agent B’s conversation state.',
      adversarialTest: 'Execute concurrent asynchronous requests switching conversations while mutating state; verify strict tenant isolation.',
    },
    {
      id: 'I-03',
      category: 'Identity & Separation',
      title: 'Conversation ≠ Memory Separation',
      summary: 'Interaction transcripts are historical records, not automatic long-term memory.',
      formalRule: 'Transcripts are append-only audit facts. Memory promotion requires explicit extraction, reflection, and policy gating.',
      positiveProof: 'Raw errors and ephemeral chat logs are archived without contaminating semantic vector memory.',
      negativeProof: 'Agent long-term memory cannot be populated directly by an unverified chat stream.',
      adversarialTest: 'Feed adversarial prompt injections into conversation; verify they fail memory curation gatekeeper checks.',
    },
    {
      id: 'I-04',
      category: 'Identity & Separation',
      title: 'Context Window ≠ Memory Substrate',
      summary: 'LLM working context is transient input, not durable storage.',
      formalRule: 'Context window is ephemeral working memory. Durable memory must reside in strongly typed, versioned persistence.',
      positiveProof: 'Context reconstruction pulls deterministically from durable storage.',
      negativeProof: 'Loss of context window memory during network disconnect does not corrupt or erase durable agent knowledge.',
      adversarialTest: 'Simulate worker termination mid-inference; confirm zero loss in durable memory index.',
    },
    {
      id: 'I-05',
      category: 'State & Mutation',
      title: 'Single State Authority',
      summary: 'Exactly one authoritative source of truth for runtime state.',
      formalRule: 'Exactly one current-state authority exists per scope. UI, WebSockets, and caches are read-only projections.',
      positiveProof: 'State reloads always query the single authoritative backend state engine.',
      negativeProof: 'Frontend state changes cannot bypass backend state transitions.',
      adversarialTest: 'Dispatch conflicting state updates directly via WebSocket; verify backend authority rejects desynchronization.',
    },
    {
      id: 'I-06',
      category: 'State & Mutation',
      title: 'State Mutation Boundary',
      summary: 'State mutations must pass through canonical transition guards.',
      formalRule: 'state_t+1 = transition(state_t, action, validation). Direct field assignment is strictly prohibited.',
      positiveProof: 'Every state mutation produces an auditable, versioned diff and emits an authoritative lifecycle event.',
      negativeProof: 'Direct in-memory mutations without schema validation trigger a fatal state corruption exception.',
      adversarialTest: 'Inject an invalid state transition payload; verify transition rollbacks to last valid checkpoint.',
    },
    {
      id: 'I-07',
      category: 'Authorization & HITL',
      title: 'Authorization Before Execution',
      summary: 'No tool or action executes without an explicit, verifiable authorization artifact.',
      formalRule: 'executor.run(action) REQUIRES verify(authorization_artifact). A simple boolean flag is forbidden.',
      positiveProof: 'Tool engine asserts the presence and validity of a signed authorization artifact before invoking syscalls.',
      negativeProof: 'Calling the tool executor with null or expired authorization immediately halts execution.',
      adversarialTest: 'Attempt to bypass authorization gate via direct internal helper calls; confirm hardened boundary rejection.',
    },
    {
      id: 'I-08',
      category: 'Authorization & HITL',
      title: 'Exact Action Parameter Binding',
      summary: 'Approvals are cryptographically bound to the exact executable payload.',
      formalRule: 'approval_signature = sign(hash(action_name, canonical_json(parameters), context_hash)).',
      positiveProof: 'Tool invocation succeeds when parameters match the approved cryptographic hash identically.',
      negativeProof: 'Modifying a single parameter (e.g. changing filepath or arguments) after approval voids the authorization.',
      adversarialTest: 'Approve action with parameter arg=A, then mutate payload to arg=B before execution; verify immediate rejection.',
    },
    {
      id: 'I-09',
      category: 'Authorization & HITL',
      title: 'Full Lifecycle for Human Approvals',
      summary: 'Human-in-the-loop approvals are durable state entities, not ephemeral dialogs.',
      formalRule: 'approval_state ∈ { REQUESTED, PENDING, APPROVED, REJECTED, EXPIRED, CANCELLED, INVALIDATED }.',
      positiveProof: 'Pending approvals survive server reboots, network reconnects, and browser refreshes.',
      negativeProof: 'Closing browser modal does not delete or auto-approve pending actions.',
      adversarialTest: 'Kill backend server while approval is PENDING; reboot server; confirm approval remains safely PENDING with TTL.',
    },
    {
      id: 'I-10',
      category: 'Authorization & HITL',
      title: 'Autonomy is Policy, Not UI State',
      summary: 'Autonomy level is governed by server-side policy engines, never client toggles.',
      formalRule: 'effective_autonomy = min(agent_policy, action_risk_assessment, tenant_constraints).',
      positiveProof: 'High-risk operations trigger human review regardless of client UI settings.',
      negativeProof: 'Client sending mode="autonomous" cannot bypass mandatory safety policies.',
      adversarialTest: 'Send client payload claiming unrestricted autonomy on high-risk filesystem action; confirm forced HITL intervention.',
    },
    {
      id: 'I-11',
      category: 'Execution & Recovery',
      title: 'Complete Execution Attribution',
      summary: 'Every execution side-effect is permanently auditable.',
      formalRule: 'All tool invocations log initiating agent, run, policy evaluation, and result hash.',
      positiveProof: 'Full forensic audit trails exist for every external API call, file write, and model invocation.',
      negativeProof: 'Anonymous or unattributable execution cannot be scheduled.',
      adversarialTest: 'Strip attribution headers from execution pipeline; verify pipeline rejects processing.',
    },
    {
      id: 'I-12',
      category: 'Execution & Recovery',
      title: 'Anti-Replay Crash Recovery',
      summary: 'Recovery must never blindly replay ambiguous external side-effects.',
      formalRule: 'recovery_policy(ambiguous_action) = require_operator_review | query_idempotency_key.',
      positiveProof: 'System safely reconstructs in-flight state without duplicate external charges or data mutations.',
      negativeProof: 'Crash during external API write does not cause automated double-fire on restart.',
      adversarialTest: 'Simulate power loss exactly at external network dispatch; restart and verify idempotency guard holds.',
    },
    {
      id: 'I-13',
      category: 'State & Mutation',
      title: 'Event History ≠ Current State',
      summary: 'Events are append-only audit facts; state is current reality.',
      formalRule: 'state = fold(events, initial_state) OR validated checkpoint snapshot. Events cannot masquerade as state.',
      positiveProof: 'State engines distinguish between the historical ledger and the active decision-making snapshot.',
      negativeProof: 'Mutating the event log does not alter currently held memory without formal reprocessing.',
      adversarialTest: 'Deliver reordered or duplicate events; verify state engine applies deduplication and causal ordering.',
    },
    {
      id: 'I-14',
      category: 'Projections & Transport',
      title: 'UI Is Strictly a Projection',
      summary: 'The frontend possesses zero authority over lifecycle truth.',
      formalRule: 'UI_state = project(canonical_backend_state). UI cannot authorize, execute, or recover state.',
      positiveProof: 'Closing, tampering with, or reloading the UI has zero impact on core autonomous state integrity.',
      negativeProof: 'UI claims of "approved" or "completed" are ignored until confirmed by signed backend state.',
      adversarialTest: 'Inject artificial "Task Completed" status into React state; verify server rejects premature termination.',
    },
    {
      id: 'I-15',
      category: 'Projections & Transport',
      title: 'Transport is Not Authority',
      summary: 'WebSockets and HTTP routes are delivery pipes, not decision gates.',
      formalRule: 'Transport payloads are untrusted inputs requiring full domain boundary validation.',
      positiveProof: 'All inbound transport payloads are validated against strict JSON schemas before reaching domains.',
      negativeProof: 'A valid WebSocket connection does not grant automatic authorization to invoke protected tools.',
      adversarialTest: 'Flood WebSocket with malformed binary and unsanitized command strings; confirm drop at perimeter.',
    },
  ] as Invariant[],

  pipelineStages: [
    { step: 1, name: 'Request Specification', gate: 'Formal Request Intake', evidence: 'Explicit problem statement and scope boundaries' },
    { step: 2, name: 'Canonical Contract', gate: 'Contract Definition', evidence: 'Interface schemas, inputs, outputs, error conditions' },
    { step: 3, name: 'Domain Ownership', gate: 'Single Owner Identification', evidence: 'Declared sovereign domain component' },
    { step: 4, name: 'Boundary Definition', gate: 'Perimeter Check', evidence: 'Allowed vs forbidden dependencies declared' },
    { step: 5, name: 'Invariant Mapping', gate: 'Constitution Check', evidence: 'Mapping across applicable Invariants I-01 through I-15' },
    { step: 6, name: 'Implementation', gate: 'Strict Slice Implementation', evidence: 'Code scoped strictly to allowed files' },
    { step: 7, name: 'Positive Verification', gate: 'Expected Path Testing', evidence: 'Deterministic proof that intended capability works' },
    { step: 8, name: 'Negative Verification', gate: 'Forbidden Path Rejection', evidence: 'Tampered inputs and invalid roles blocked' },
    { step: 9, name: 'Failure Injection', gate: 'Adversarial Stress Test', evidence: 'Crashes, disconnects, and stale states survived' },
    { step: 10, name: 'Persistence Proof', gate: 'Restart Verification', evidence: 'Disk write → process termination → reboot → state verified' },
    { step: 11, name: 'Legacy Bypass Audit', gate: 'Zero-Bypass Scan', evidence: 'Automated search confirming no backdoors exist' },
    { step: 12, name: 'Regression Audit', gate: 'Entropy & Safety Check', evidence: 'Zero regression across surrounding subsystems' },
    { step: 13, name: 'Architectural Done', gate: 'Signed Proof Report', evidence: 'Comprehensive post-implementation evidence dossier' },
  ] as PipelineStage[],

  forbiddenPatterns: [
    {
      id: 'F-01',
      name: 'UI-Only Implementation',
      violation: 'Adding a button, card, modal, or status indicator without the canonical backend state machine.',
      remedy: 'Implement full backend domain authority before rendering user-facing controls.',
    },
    {
      id: 'F-02',
      name: 'Telemetry-as-Enforcement',
      violation: 'Logging that an action was authorized without an actual software gate preventing unauthorized execution.',
      remedy: 'Enforce blocking gates in the execution kernel; telemetry only observes the result.',
    },
    {
      id: 'F-03',
      name: 'Mock-as-Production',
      violation: 'Using simulated success paths or mock executors as evidence of real feature completion.',
      remedy: 'Adversarial proof must execute against real databases, persistent disks, and actual model kernels.',
    },
    {
      id: 'F-04',
      name: 'Legacy Wrapper Deception',
      violation: 'Wrapping an insecure legacy function with a modern API while the old unsafe route remains authoritative.',
      remedy: 'Deprecate and permanently delete legacy bypass paths from the codebase.',
    },
    {
      id: 'F-05',
      name: 'Parallel Subsystem Sprawl',
      violation: 'Creating a second competing state manager or event bus instead of migrating the authoritative path.',
      remedy: 'Single state authority: migrate the existing system or formally replace it.',
    },
    {
      id: 'F-06',
      name: 'Hidden Unsafe Fallbacks',
      violation: 'Catching canonical security exceptions and silently falling back to insecure legacy code.',
      remedy: 'Fail explicitly and loudly when canonical authorization fails.',
      codeSnippet: 'try:\n    canonical_authorize(action)\nexcept Exception:\n    execute_legacy(action) # FORBIDDEN BYPASS',
    },
    {
      id: 'F-07',
      name: 'Feature-Specific Global State',
      violation: 'Introducing global singletons or module-level dictionaries to pass state without identity binding.',
      remedy: 'State must be scoped strictly to the identity chain (tenant, agent, run).',
    },
    {
      id: 'F-08',
      name: 'Client-Controlled Authority',
      violation: 'Trusting client-supplied mode, roles, or approval headers without server verification.',
      remedy: 'Zero-trust architecture: server policy engines derive all permissions.',
    },
    {
      id: 'F-09',
      name: 'Approval Without Action Binding',
      violation: 'Getting user approval for a human-readable string while executable arguments can be modified.',
      remedy: 'Cryptographically bind approvals to the SHA-256 hash of canonical action parameters.',
    },
    {
      id: 'F-10',
      name: 'Happy-Path-Only Verification',
      violation: 'Declaring a feature done because a single demo workflow succeeded once.',
      remedy: 'Pass the 13-stage DoD pipeline including hostile failure injection and persistence tests.',
    },
    {
      id: 'F-11',
      name: 'Silent Contract Mutation',
      violation: 'Altering lifecycle states, field definitions, or boundary responsibilities without architectural authorization.',
      remedy: 'Submit a formal Architecture Change Request (ACR) before altering canonical schemas.',
    },
    {
      id: 'F-12',
      name: 'Compatibility by Architectural Duplication',
      violation: 'Maintaining contradictory old and new authorities indefinitely to avoid refactoring effort.',
      remedy: 'Execute clean, phased migrations with mandatory sunset dates for legacy code.',
    },
  ] as ForbiddenPattern[],
};
