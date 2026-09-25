# NALA Architecture Enforcement Protocol

## Strict Contract for Architecture-Preserving Implementation by Antigravity

**Status:** Canonical implementation-control specification  
**Scope:** NALA runtime, agent, conversation, state, authorization, execution, memory, events, checkpoint/recovery, verification, and observability  
**Doctrine:** Forensic-first, contract-first, invariant-first, vertical-slice, proof-driven migration

---

## 1. Purpose

This protocol exists because a feature can appear to work while the architecture underneath it is wrong.

NALA must distinguish:

1. Behavioral feature completion
2. Architectural correctness
3. Adversarial proof of architectural correctness

Antigravity is not authorized to optimize for the first at the expense of the second or third.

A requested capability is complete only when:

> **The requested behavior works through the canonical architecture, the correct domain boundaries own it, all applicable invariants survive adversarial verification, persistence and recovery semantics are proven where required, and no forbidden bypass path remains.**

---

## 2. Core Doctrine

### 2.1 Architecture is a contract, not a suggestion

The canonical NALA architecture is normative.

Antigravity SHALL NOT reinterpret architectural boundaries merely because existing implementation makes another approach easier.

If implementation reality conflicts with the canonical architecture:

**STOP implementation at that boundary.**

Do not silently redesign. Do not create a workaround. Do not add a compatibility layer merely to make the task appear complete. Do not hide the conflict inside a helper, UI component, route, singleton, adapter, or fallback.

Instead report:

- conflict;
- affected files/modules;
- violated contract;
- violated invariant;
- dependency blocking implementation;
- migration required;
- concrete implementation options;
- risks of each option.

Architectural changes require explicit authorization.

---

## 3. Authority Hierarchy

When sources disagree, Antigravity MUST NOT resolve the conflict by convenience.

Use this hierarchy:

```text
1. Explicitly approved canonical architecture
2. Canonical domain model and contracts
3. Explicit invariants
4. Approved dependency/migration plan
5. Approved vertical-slice specification
6. Tests derived from the contracts
7. Existing implementation
8. UI behavior / demos / temporary telemetry
```

Therefore:

> **Existing code is forensic evidence, not architectural truth.**

A legacy implementation that contradicts the canonical contract must be migrated or removed; it must not silently redefine the contract.

---

## 4. Antigravity's Authority Boundary

Antigravity is an **implementation executor**, not an autonomous architecture designer.

### Antigravity MAY

- inspect the repository;
- trace execution paths;
- identify dependencies;
- implement explicitly approved contracts;
- refactor within an approved boundary;
- add tests;
- add instrumentation;
- remove obsolete code when migration explicitly authorizes removal;
- report architectural conflicts.

### Antigravity MUST NOT independently

- redefine domain ownership;
- redefine identity semantics;
- redefine lifecycle semantics;
- redefine state authority;
- redefine persistence authority;
- redefine authorization semantics;
- redefine recovery semantics;
- redefine event authority;
- introduce a second source of truth;
- move policy into UI;
- make UI state authoritative;
- make transport state authoritative;
- weaken an invariant;
- weaken a hard safety gate;
- silently change a contract;
- invent fallback semantics;
- declare a migration complete without proof.

---

## 5. Definition of Done

A task is **NOT DONE** merely because:

- code compiles;
- a test passes;
- an endpoint responds;
- the UI displays the requested feature;
- a demo works;
- a happy-path test passes;
- telemetry reports success;
- a mock returns the expected value.

The minimum definition of done is:

```text
REQUEST
  ↓
CANONICAL CONTRACT
  ↓
DOMAIN OWNER
  ↓
BOUNDARY
  ↓
INVARIANTS
  ↓
IMPLEMENTATION
  ↓
POSITIVE TESTS
  ↓
NEGATIVE TESTS
  ↓
FAILURE INJECTION
  ↓
PERSISTENCE / RECOVERY PROOF (when applicable)
  ↓
LEGACY BYPASS SEARCH
  ↓
REGRESSION
  ↓
ARCHITECTURAL AUDIT
  ↓
EVIDENCE REPORT
  ↓
DONE
```

If any required stage is missing, the task remains incomplete.

---

## 6. Non-Negotiable Architectural Invariants

These invariants are foundational and SHALL be preserved unless explicitly superseded by an approved canonical architecture revision.

### I-01 — Identity Separation

Agent identity MUST NOT be inferred from:

- UI position;
- list index;
- name;
- display order;
- socket;
- browser tab;
- conversation title.

Stable identity MUST be represented by stable identifiers.

Minimum causal chain:

```text
agent_id
→ conversation_id
→ message_id
→ state_id / state_version
→ action_id
→ execution_id
→ checkpoint_id
→ artifact_id
```

### I-02 — Agent/Conversation Separation

```text
Agent ≠ Conversation
```

An agent may have multiple conversations. A conversation belongs to an agent. Switching a conversation MUST NOT mutate another agent's conversation.

### I-03 — Conversation/Memory Separation

```text
Conversation ≠ Memory
```

Conversation history is interaction history. Memory is promoted, durable knowledge. A raw transcript MUST NOT automatically become long-term memory.

### I-04 — Context/Memory Separation

```text
Context ≠ Memory
```

The context window is a constructed runtime input. It is not itself the persistent memory system.

### I-05 — State Authority

There MUST be one authoritative current-state representation.

UI state, socket state, temporary objects, telemetry, or duplicated caches MUST NOT silently become competing authorities.

### I-06 — State Mutation Boundary

Persistent agent-state mutation MUST pass through the canonical state-transition boundary.

Skills and tools may produce results/observations. They MUST NOT silently mutate authoritative persistent state outside the approved transition mechanism.

### I-07 — Authorization Before Execution

No action requiring authorization may execute without an authoritative authorization decision.

A UI approval indicator, request ID, log entry, or boolean such as `approved=True` is not sufficient by itself.

### I-08 — Approval Must Bind to the Exact Action

Human approval MUST be bound to the exact executable action, including the authoritative identity, run/conversation, action, state version, tool, canonicalized arguments, policy context/version, and expiry as required by the final approved contract.

Any material change to the approved action MUST invalidate the approval.

### I-09 — No Unbounded Human Wait

A worker MUST NOT block forever waiting for human approval.

Every approval request requires explicit lifecycle semantics, including pending, approved, rejected, expired, cancelled, invalidated, and consumed where applicable.

### I-10 — Mode Is Policy, Not UI Preference

`AUTONOMOUS`, `INTERACTIVE`, or equivalent modes MUST NOT be arbitrary client-controlled switches.

Effective autonomy must come from authoritative policy.

### I-11 — Every Execution Is Attributable

Every state-changing action must be attributable to an identity chain sufficient for audit:

```text
actor
→ agent
→ conversation/run
→ action
→ authorization
→ execution
→ result
→ state transition
```

### I-12 — Recovery Must Not Blindly Replay Ambiguous Actions

After crash/restart, NALA MUST NOT blindly replay an action whose external execution status is ambiguous.

### I-13 — Event History Is Not Current State

Events represent historical facts. Current state represents current truth.

### I-14 — UI Is a Projection

The UI is a projection of authoritative runtime state. It MUST NOT own identity, authorization, state, execution, or recovery truth.

### I-15 — Transport Is Not Authority

WebSockets, HTTP, browser events, queues, and frontend events are transport mechanisms. They must be validated against authoritative domain state before privileged changes.

---

## 7. Forbidden Implementation Patterns

The following patterns are prohibited unless an architectural change has been approved.

### F-01 — UI-only implementation
Adding a button, card, modal, badge, or status indicator without implementing the canonical lifecycle.

### F-02 — Telemetry-as-enforcement
Logging that an action was authorized without enforcing authorization.

### F-03 — Mock-as-production
A mock executor, fake approval, simulated persistence layer, or synthetic success path presented as the real implementation.

### F-04 — Legacy wrapper deception
Wrapping a legacy bypass path and declaring the canonical architecture implemented while the old path remains authoritative.

### F-05 — Parallel subsystem
Creating a second state manager, memory manager, approval manager, event system, conversation store, or executor instead of migrating the authoritative path.

### F-06 — Hidden fallback
Never silently fall back to an old unsafe path when canonical logic fails.

Forbidden pattern:

```python
try:
    canonical_authorize(action)
except Exception:
    execute_legacy(action)
```

### F-07 — Feature-specific global state
Do not introduce global dictionaries/singletons merely to make a feature work when identity-bound durable state is required.

### F-08 — Client-controlled authority
Do not trust client-supplied mode, role, approval, identity, or authorization as sufficient authority.

### F-09 — Approval without action binding
Do not approve a human-readable description while executable parameters can change.

### F-10 — Happy-path-only verification
One successful workflow is not architectural proof.

### F-11 — Silent contract modification
Do not change field meanings, lifecycle states, ownership, persistence semantics, or boundary responsibilities without authorization.

### F-12 — Compatibility by architectural duplication
Do not permanently maintain contradictory old and new authorities merely to avoid migration work.

---

## 8. Architectural Conflict Protocol

Whenever:

```text
Existing code ≠ canonical contract
```

Antigravity MUST enter **ARCHITECTURAL CONFLICT** state.

Required report:

```text
ARCHITECTURAL CONFLICT

Conflict:
...

Canonical requirement:
...

Existing behavior:
...

Violated invariant:
...

Affected files:
...

Current owner:
...

Required canonical owner:
...

Dependency blockers:
...

Migration required:
...

Risk if patched locally:
...

Options:
A. ...
B. ...

Implementation status:
BLOCKED — awaiting architectural decision.
```

No implementation should continue across the blocked boundary.

---

## 9. Vertical Slice Contract

Every implementation slice MUST be specified before coding.

```text
SLICE ID:
SLICE NAME:

OBJECTIVE:

CANONICAL CONTRACT:

DOMAIN OWNER:

INPUTS:

OUTPUTS:

STATE CHANGES:

PERSISTENCE REQUIREMENTS:

EVENTS:

AUTHORITY BOUNDARY:

DEPENDENCIES:

INVARIANTS:

POSITIVE TESTS:

NEGATIVE TESTS:

FAILURE INJECTION:

RECOVERY REQUIREMENTS:

FORBIDDEN IMPLEMENTATIONS:

FILES/MODULES ALLOWED:

FILES/MODULES FORBIDDEN:

REGRESSION SCOPE:

PROOF REQUIRED:
```

---

## 10. One Contract → One Boundary → One Slice

Implementation MUST proceed in small coherent slices:

```text
ONE CONTRACT
    ↓
ONE BOUNDARY
    ↓
ONE VERTICAL SLICE
    ↓
STATIC TESTS
    ↓
RUNTIME TESTS
    ↓
FAILURE INJECTION
    ↓
REGRESSION
    ↓
PERSISTENCE CHECK
    ↓
ARCHITECTURAL AUDIT
    ↓
NEXT SLICE
```

The next slice MUST NOT begin if the previous slice leaves a broken invariant.

---

## 11. Positive and Negative Verification

Every meaningful contract requires both.

### Positive verification

Prove:

> The intended path works.

### Negative verification

Prove:

> Forbidden paths do not work.

Examples:

```text
valid policy
→ valid authorization
→ matching action
→ execution succeeds
```

and:

```text
no authorization
→ execution rejected
```

```text
modified parameters
→ old authorization rejected
```

```text
expired authorization
→ execution rejected
```

```text
wrong agent
→ authorization rejected
```

```text
wrong run/conversation
→ authorization rejected
```

Isolation:

```text
Agent A → Conversation A
Agent B → Conversation B
```

Negative:

```text
Agent A cannot read/mutate B's authoritative conversation state.
```

Recovery:

```text
checkpoint
→ process crash
→ restart
→ valid recovery
```

Negative:

```text
ambiguous external action
→ MUST NOT blindly replay
```

---

## 12. Failure Injection Is Mandatory

For lifecycle-critical architecture, normal execution is insufficient evidence.

Relevant failure modes include:

- process termination;
- worker termination;
- network disconnect;
- frontend disconnect;
- duplicate request;
- stale request;
- delayed response;
- expired approval;
- modified action after approval;
- restart during pending approval;
- restart during execution;
- corrupted/incomplete state;
- duplicated event;
- reordered transport delivery;
- missing event;
- concurrent agent operations;
- concurrent conversation switching;
- tool failure;
- verifier failure;
- persistence failure.

The exact matrix depends on the slice.

---

## 13. Persistence Verification

Whenever a contract claims durability, in-memory success is not evidence.

The test must include:

```text
write
→ commit according to storage contract
→ process termination
→ restart
→ reload
→ verify authoritative state
```

For approvals, runs, checkpoints, state, conversations, and other durable objects, define:

- storage authority;
- write ordering;
- commit point;
- recovery behavior;
- invalidation behavior;
- corruption handling.

---

## 14. Authorization Enforcement Contract

This is especially important because the Phase 9 and Phase 10 forensic autopsies identified the authorization/HITL boundary as a critical architectural gap.

Canonical conceptual path:

```text
Proposed Action
      ↓
Canonical Action
      ↓
Risk Assessment
      ↓
Policy Evaluation
      ↓
Autonomy Decision
      ↓
HITL if required
      ↓
Authorization Artifact
      ↓
Execution Boundary
      ↓
Authorization Verification
      ↓
Tool Execution
      ↓
Observation
      ↓
Verification
      ↓
State Commit
```

The executor MUST NOT rely on:

- UI approval;
- socket events;
- English descriptions;
- request IDs alone;
- mode alone;
- telemetry;
- an in-memory flag.

The final authorization schema and cryptographic details must be established by the canonical post-forensic synthesis. Forensic candidate fields are design evidence, not permission to prematurely freeze implementation details.

---

## 15. HITL Contract

Human intervention must be a durable lifecycle fact, not a blocking UI dialog.

Conceptual lifecycle:

```text
REQUESTED
   ↓
PENDING
   ├── APPROVED
   ├── REJECTED
   ├── EXPIRED
   ├── CANCELLED
   └── INVALIDATED
```

An approval must be attributable to:

- proposed action;
- requesting agent;
- run/conversation;
- state/policy context;
- approver/rejector;
- timestamp;
- authorization constraints;
- current validity.

Human feedback MUST NOT disappear because an in-memory object was removed.

---

## 16. Recovery Contract

Recovery is a first-class lifecycle operation.

```text
discover durable runs/checkpoints
        ↓
classify lifecycle state
        ↓
identify pending/ambiguous actions
        ↓
apply recovery policy
        ↓
resume / pause / expire / require review
        ↓
emit authoritative recovery events
        ↓
reconstruct runtime projection
```

Recovery MUST NOT infer truth from UI state.

---

## 17. Event Contract

Events are historical facts and transport/projection inputs.

The final canonical event envelope must contain the fields approved by the architecture, with sufficient identity and ordering metadata.

Do not equate:

```text
transport order
=
causal order
=
persistence order
```

These semantics must be explicitly defined.

WebSocket delivery is not event authority.

---

## 18. Tool/Execution Contract

Tools require an explicit boundary.

As applicable, define:

- tool identity;
- caller identity;
- action identity;
- input schema;
- canonical argument representation;
- authorization requirement;
- execution identity;
- result schema;
- failure semantics;
- side-effect classification;
- verification expectations.

The executor MUST NOT become an uncontrolled escape hatch around authorization, state transition, or verification.

---

## 19. Memory Contract

Memory must preserve:

```text
Active Context
      ↓
Session Memory
      ↓
Long-Term Agent Memory
```

Promotion into long-term memory must be explicit and governed.

A transient error, raw tool output, or arbitrary conversation fragment MUST NOT automatically become durable agent memory.

Memory must be agent-scoped and attributable.

---

## 20. Agent Contract

Preserve the approved identity and policy fields:

```text
agent_id
name
role
capabilities
policy_profile
memory_namespace
active_conversation_id
created_at
updated_at
```

Capabilities must not be decorative metadata. If a capability is declared but not enforced, report the gap.

---

## 21. Conversation Contract

The canonical Conversation Manager should own lifecycle operations such as:

```text
create
list
load
switch
append
archive
restore
rename
search
```

The exact storage layout must be resolved during canonical synthesis; conflicting forensic proposals MUST NOT be silently merged.

Core invariant:

```text
conversation_id
→ belongs to one agent
→ contains durable interaction records
→ has explicit lifecycle
→ is not interchangeable with session transport
```

---

## 22. State Contract

State is authoritative current agent/runtime state.

Conceptual fields include:

```text
version
goal
subgoals
beliefs
observations
uncertainties
commitments
plan
progress
active_task
active_constraints
capabilities
environment_snapshot
recent_actions
recent_results
policy_context
recovery_context
```

State must be:

- serializable;
- versioned;
- attributable;
- auditable;
- transition-controlled.

---

## 23. Observability Contract

Observability must describe reality, not simulate enforcement.

Useful lifecycle events include:

```text
AGENT_CREATED
CONVERSATION_CREATED
CONVERSATION_SWITCHED
MESSAGE_APPENDED
STATE_LOADED
STATE_TRANSITIONED
ACTION_PROPOSED
RISK_ASSESSED
AUTHORIZATION_REQUESTED
HITL_REQUESTED
HITL_APPROVED
HITL_REJECTED
HITL_EXPIRED
SKILL_STARTED
SKILL_COMPLETED
VERIFICATION_COMPLETED
CHECKPOINT_CREATED
RECOVERY_STARTED
RECOVERY_COMPLETED
```

The final event taxonomy must be established during canonical synthesis.

---

## 24. Test Requirements

Tests must be organized around contracts.

### Identity
- stable IDs;
- persistence;
- ownership.

### Isolation
- agent isolation;
- conversation isolation;
- memory isolation;
- authorization isolation.

### State
- deterministic transition;
- invalid transition rejection;
- persistence;
- restart behavior.

### Authorization
- policy enforcement;
- hard gates;
- exact-action binding;
- expiry;
- replay prevention;
- wrong-owner rejection;
- stale-state rejection.

### HITL
- request lifecycle;
- approval;
- rejection;
- expiry;
- cancellation;
- disconnect;
- restart;
- attribution.

### Execution
- unauthorized execution blocked;
- input validation;
- attribution;
- verification.

### Recovery
- crash recovery;
- ambiguous external-action handling;
- checkpoint integrity.

### Events
- identity;
- ordering semantics;
- persistence;
- replay;
- duplicate handling.

---

## 25. Anti-Cheating Verification Rules

Antigravity MUST NOT satisfy a test by weakening the system under test.

Prohibited examples:

- disabling safety checks;
- bypassing the canonical executor;
- replacing a real component with a mock while claiming integration proof;
- modifying production behavior only for tests;
- accepting invalid state merely to pass a fixture;
- skipping restart/persistence when durability is contractual;
- testing an internal helper instead of the real boundary;
- asserting telemetry instead of actual enforcement.

Tests must prove the real architecture.

---

## 26. Legacy Bypass Audit

Before completion, search for alternative paths that can produce the same privileged behavior:

```text
canonical executor
       +
direct executor
       +
chat shortcut
       +
legacy route
       +
background worker
       +
internal helper
       +
debug endpoint
       +
test-only path
```

If any path can bypass the canonical boundary, the slice is not complete.

Report:

```text
Bypass search performed:
YES / NO

Paths found:
...

Paths eliminated:
...

Paths intentionally retained:
...

Reason:
...
```

---

## 27. Scope Control

Each slice must specify:

```text
ALLOWED FILES
ALLOWED MODULES
ALLOWED DOMAIN CHANGES
```

and:

```text
FORBIDDEN FILES
FORBIDDEN DOMAIN CHANGES
FORBIDDEN SIDE EFFECTS
```

Changing unrelated architecture to make a slice easier is prohibited.

If a dependency outside the allowed scope must change, stop and request an expanded slice or migration decision.

---

## 28. Architectural Entropy Rule

Every change must reduce or preserve architectural entropy.

Do not introduce:

- duplicate ownership;
- duplicate state;
- duplicate lifecycle;
- contradictory APIs;
- hidden coupling;
- new global state;
- implicit authority;
- untracked persistence;
- undocumented compatibility behavior.

A change that makes the architecture harder to reason about requires explicit justification.

---

## 29. Required Pre-Implementation Report

Before writing code for a slice, Antigravity must produce:

```text
PRE-IMPLEMENTATION CONTRACT REPORT

1. Requested behavior
2. Canonical contract
3. Domain owner
4. Current implementation path
5. Current authoritative source
6. Required authoritative source
7. Dependencies
8. Invariants
9. Existing violations
10. Allowed files
11. Forbidden files
12. Positive tests
13. Negative tests
14. Failure injection
15. Persistence/recovery proof
16. Expected migration
17. Explicit non-goals
```

No code should be written until this report is internally consistent with the approved slice.

---

## 30. Required Post-Implementation Evidence Report

Every completed slice must end with:

```text
POST-IMPLEMENTATION EVIDENCE REPORT

SLICE:
...

CONTRACT:
...

DOMAIN OWNER:
...

FILES CHANGED:
...

FILES NOT CHANGED:
...

INVARIANTS VERIFIED:
I-01 ✓
I-02 ✓
...

POSITIVE TESTS:
...

NEGATIVE TESTS:
...

FAILURE INJECTION:
...

PERSISTENCE TEST:
...

RESTART TEST:
...

BYPASS AUDIT:
...

REGRESSION:
...

ARCHITECTURAL CONFLICTS:
NONE / LIST

KNOWN LIMITATIONS:
...

EVIDENCE REFERENCES:
...

FINAL STATUS:
PROVEN / BLOCKED / INCOMPLETE
```

“PROVEN” must only be used when the required evidence exists.

---

## 31. Stop Conditions

Antigravity MUST STOP and report instead of improvising when:

1. canonical ownership is ambiguous;
2. two authorities conflict;
3. a required contract is missing;
4. a required invariant cannot be preserved;
5. implementation requires changing an unapproved boundary;
6. a legacy bypass remains;
7. persistence semantics are undefined;
8. recovery semantics are undefined;
9. approval cannot be bound to the exact action;
10. execution can bypass authorization;
11. tests cannot prove the required invariant;
12. the requested feature contradicts the canonical architecture;
13. a dependency outside the approved slice is required;
14. a hidden fallback appears necessary;
15. the only way to pass a test is to weaken the architecture.

Correct response:

```text
STOP — ARCHITECTURAL BLOCKER

Do not patch around this.

Report the conflict and wait for architectural authorization.
```

---

## 32. Explicit Non-Authority of UI

A visible feature is not proof.

These states are insufficient evidence:

```text
✓ Approval button visible
✓ Approval modal opens
✓ Status says approved
✓ UI says execution stopped
✓ UI says task complete
✓ UI displays "authorized"
```

The system must prove the corresponding authoritative runtime fact.

For example:

```text
UI says approved
        ↓
Does authoritative authorization exist?
        ↓
Is it bound to the exact action?
        ↓
Does executor verify it?
        ↓
Was it valid at execution time?
        ↓
Was it consumed according to policy?
```

Only then is approval real.

---

## 33. Explicit Non-Authority of Telemetry

Telemetry can report:

```text
risk = low
adaptive_score = 0.88
approval = true
mode = autonomous
```

None of these values enforce behavior by themselves.

Distinguish:

```text
OBSERVATION
vs.
DECISION
vs.
AUTHORITY
vs.
ENFORCEMENT
```

Telemetry must reflect authoritative results rather than substitute for them.

---

## 34. Explicit Non-Authority of Existing Tests

Existing tests are evidence about current behavior.

They are not automatically evidence of architectural correctness.

If a legacy test expects behavior that contradicts a canonical invariant:

1. identify the contradiction;
2. do not weaken the invariant;
3. migrate or replace the test under the approved migration plan.

---

## 35. Architecture Change Protocol

The canonical architecture may be revised, but only explicitly.

Required change record:

```text
ARCHITECTURE CHANGE REQUEST

Change ID:
...

Current contract:
...

Proposed contract:
...

Reason:
...

Forensic evidence:
...

Affected invariants:
...

Affected domains:
...

Affected dependencies:
...

Migration impact:
...

Test impact:
...

Recovery impact:
...

Backward compatibility impact:
...

Decision:
APPROVED / REJECTED / DEFERRED

Authority:
...

Date:
...
```

Until approved, the existing canonical contract remains authoritative.

---

## 36. Phase-Gated Migration Philosophy

After all 15 forensic autopsies:

**Do not simply implement Phase 0 → Phase 1 → Phase 2 → ...**

Instead:

```text
15 FORENSIC AUTOPSIES
        ↓
FORENSIC SYNTHESIS
        ↓
ROOT-CAUSE MAP
        ↓
CANONICAL DOMAIN MODEL
        ↓
OWNERSHIP / AUTHORITY MATRIX
        ↓
INVARIANTS
        ↓
CONTRACTS
        ↓
DEPENDENCY GRAPH
        ↓
MIGRATION PLAN
        ↓
VERTICAL SLICES
```

The forensic phase order is evidence organization, not automatically the implementation order.

---

## 37. Canonical Authority Model

The target mental model is:

```text
                 ┌─────────────────────┐
                 │   Authoritative      │
                 │   Runtime Substrate  │
                 └──────────┬──────────┘
                            │
       ┌────────────┬───────┼────────┬────────────┐
       ↓            ↓       ↓        ↓            ↓
     Agent     Conversation  Run     State      Policy
       │            │        │        │            │
       └────────────┴────────┴────────┴────────────┘
                            │
                         Action
                            │
                    Authorization
                            │
                       Execution
                            │
                         Result
                            │
                      Verification
                            │
                     State Transition
                            │
                       Checkpoint
                            │
                         Recovery
```

Events provide historical evidence across this lifecycle.

UI and transport provide projections and delivery mechanisms.

They do not own the truth.

---

## 38. Critical Lesson From Phase 10

Phase 10 is a concrete example of why this protocol exists.

The forensic analysis identified:

- ephemeral approval state;
- approval not bound to executable action;
- executor not verifying an authorization artifact;
- client-controlled autonomy mode;
- autonomous paths bypassing meaningful policy enforcement;
- unbounded approval waits;
- restart amnesia;
- cross-agent/session approval risks;
- disconnected frontend approval flow;
- phantom halt behavior;
- adaptive telemetry not functioning as an enforcement gate.

These findings are forensic evidence.

They do NOT authorize prematurely choosing the final implementation schema.

The correct architectural response is to synthesize Phase 10 with the other autopsies before implementation.

---

## 39. Feature Completion Equation

Conceptually:

```text
COMPLETION =
Behavior
×
Contract Compliance
×
Invariant Preservation
×
Boundary Integrity
×
Persistence Correctness
×
Recovery Correctness
×
Adversarial Verification
```

If any required factor is zero:

```text
COMPLETION = 0
```

A UI demo cannot compensate for a broken authorization boundary.

A passing happy-path test cannot compensate for a restart failure.

A successful approval dialog cannot compensate for an executor bypass.

---

## 40. Final Antigravity Operating Instruction

Place this at the top of every NALA implementation task:

> You are implementing an existing canonical architecture. You are not authorized to redesign it while completing a feature.
>
> Treat the canonical architecture, domain model, contracts, invariants, ownership rules, and migration plan as binding specifications.
>
> Existing code is forensic evidence, not architectural authority.
>
> Do not optimize for minimal code changes, visual feature completion, demo success, or happy-path tests if doing so violates the canonical architecture.
>
> If the requested feature cannot be implemented without changing an architectural boundary, STOP and report the conflict. Do not invent a workaround.
>
> Every implementation must identify its domain owner, authoritative state, contract, invariants, allowed boundaries, forbidden paths, positive tests, negative tests, failure injection, persistence requirements, recovery requirements, and regression scope.
>
> A feature is not complete because the requested behavior appears to work.
>
> A feature is complete only when:
>
> **the requested behavior works through the canonical architecture, the correct authority owns the behavior, all applicable invariants survive adversarial verification, persistence/recovery semantics are proven where required, and no forbidden bypass path remains.**
>
> Architectural violation is task failure.
>
> When uncertain, STOP — do not improvise.

---

## 41. Final Principle

The purpose of this protocol is not to make implementation slower for its own sake. It prevents a more expensive failure:

```text
quick feature
    ↓
architectural shortcut
    ↓
hidden second authority
    ↓
more patches
    ↓
compatibility layers
    ↓
contradictory state
    ↓
recovery failures
    ↓
security failures
    ↓
unexplainable autonomous behavior
```

NALA is intended to become a persistent autonomous system. Therefore the substrate must be more trustworthy than the intelligence built on top of it.

The governing principles are:

> **Roots before fruits.**  
> **State before memory.**  
> **Sessions before infinite history.**  
> **Policy before autonomy.**  
> **Authorization before execution.**  
> **Verification before self-improvement.**  
> **Recovery before long-running execution.**  
> **Contracts before infrastructure.**  
> **Proof before completion.**

And above all:

> **A feature is not complete when the requested behavior appears to work; it is complete only when the behavior works through the canonical architecture and all defined invariants survive adversarial verification.**
