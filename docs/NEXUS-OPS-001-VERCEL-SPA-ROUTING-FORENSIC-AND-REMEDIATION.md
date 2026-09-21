# NEXUS-OPS-001: Vercel SPA Client-Side Routing Forensic Audit & Remediation Architecture

```
Document ID     : NEXUS-OPS-001-VERCEL-SPA-ROUTING-AUDIT
Operation       : OPERATION-EDGE-DISPATCH-001
Classification  : FORENSIC INFRASTRUCTURE AUDIT & YC READINESS GATE
Target Surface  : https://nexus-lab-ai-technical.vercel.app/
Status          : IDENTIFIED // REMEDIATION READY // P0 CRITICAL
Auditor         : Nexus LAB AI Sovereign Intelligence Engine (IQ-300 Baseline)
Date            : September 2026
```

---

## 1. Executive Summary & Criticality Assessment

During comprehensive browser testing of the public portal [**Nexus LAB AI — AI Systems Innovation Company**](https://nexus-lab-ai-technical.vercel.app/), an acute **Single-Page Application (SPA) Edge Routing Defect** was identified across all secondary sub-routes (`/research`, `/technology`, `/programs`, `/philosophy`, `/future`, `/challenge`).

```
+-------------------------------------------------------------------------------+
| CRITICALITY RATING: P0 (BLOCKER FOR INVESTOR & YC DUE DILIGENCE)              |
| When an investor or YC partner navigates via on-page clicks, the app renders. |
| BUT if they REFRESH the page, share a direct sub-link, or open in a new tab:  |
| RESULT -> HTTP 404 NOT_FOUND (Vercel Edge Proxy Failure)                      |
+-------------------------------------------------------------------------------+
```

If a Y Combinator partner or venture capitalist copies a sub-link (e.g. `nexus-lab-ai-technical.vercel.app/research`) to share with their investment committee, or opens it directly in a new browser tab, **they are served a blank error screen stating `404: NOT_FOUND`**. To non-technical reviewers, this looks like a broken, abandoned, or half-built prototype.

---

## 2. Deep Root-Cause Analysis (RCA): SPA vs. Edge File Server

To understand why this defect occurs, we examine the fundamental architectural difference between **Client-Side Virtual Routing** and **Edge Server Static File Resolution**.

```
                       IN-APP NAVIGATION (WORKS)
   User Clicks Link -> React Router / History API -> URL Changes -> Component Mounts
   [No Edge HTTP Request sent for HTML - purely in-memory execution inside JS DOM]

                   DIRECT BROWSER ACCESS / REFRESH (FAILS 404)
   Browser URL: /research -> HTTP GET /research -> Vercel Edge Server
                                                      |
                                    Looks for physical file: /research/index.html
                                                      |
                                           File does NOT exist!
                                                      |
                                          HTTP 404 NOT_FOUND
```

### 2.1 The Browser History API Mechanism
The Nexus LAB AI portal is built as a Single-Page Application (SPA) using Vite + React. 
* In an SPA, the browser initially downloads **only one HTML file**: `index.html`.
* When a user clicks navigation buttons (e.g., *Overview*, *Research*, *Technology*), the application calls `window.history.pushState(state, '', '/research')`.
* This updates the URL in the browser address bar without triggering a full page reload or sending an HTTP GET request to Vercel's edge network. The React virtual router simply unmounts the previous view and mounts the new view inside `<div id="root"></div>`.

### 2.2 The Edge Network Disconnect
When an investor:
1. Opens `https://nexus-lab-ai-technical.vercel.app/research` directly, or
2. Presses `F5` / `Ctrl+R` to refresh while on `/challenge`,

the browser sends a raw HTTP GET request to Vercel's global CDN edge:
```http
GET /challenge HTTP/2
Host: nexus-lab-ai-technical.vercel.app
```

Because Vercel is configured by default as a static file host, its edge router executes the following lookup pipeline:
1. Is there a static asset at `/challenge`? $\to$ **False**.
2. Is there a folder named `/challenge/` with an `index.html`? $\to$ **False** (the build output only contains root `index.html` and bundled JS/CSS in `/assets/`).
3. Does an edge rewrite rule exist to fallback to `/index.html`? $\to$ **None found!**
4. Vercel aborts and terminates the request with:
   ```json
   {
     "error": {
       "code": "NOT_FOUND",
       "message": "The deployment could not be found."
     }
   }
   ```

---

## 3. Mathematical & Forensic Evidence of Failure

| Action Performed | Request Path | Network Protocol | Origin Resolution | HTTP Status | User Experience |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Click *Research* from *Overview* | `window.history.pushState` | None (Client Memory) | In-Memory React DOM | N/A | **Pass (Renders UI)** |
| Click *Challenge* from *Research* | `window.history.pushState` | None (Client Memory) | In-Memory React DOM | N/A | **Pass (Renders UI)** |
| Direct Browser Hit / Refresh | `GET /research` | HTTP/2 over TLS | Vercel Edge Static CDN | `404 NOT_FOUND` | **Fatal Error Screen** |
| Direct Browser Hit / Refresh | `GET /technology` | HTTP/2 over TLS | Vercel Edge Static CDN | `404 NOT_FOUND` | **Fatal Error Screen** |
| Direct Browser Hit / Refresh | `GET /challenge` | HTTP/2 over TLS | Vercel Edge Static CDN | `404 NOT_FOUND` | **Fatal Error Screen** |
| Direct Browser Hit / Refresh | `GET /programs` | HTTP/2 over TLS | Vercel Edge Static CDN | `404 NOT_FOUND` | **Fatal Error Screen** |

---

## 4. The Engineering Remediation: Declarative Edge Rewriting

To permanently eliminate this failure mode across all edge nodes worldwide, Vercel must be instructed to route all client-side URL queries to the root `index.html` entry point while letting the client-side JavaScript router resolve the internal path.

### 4.1 The Configuration Specification: `vercel.json`
Create a `vercel.json` file in the **root directory** of the repository that powers `nexus-lab-ai-technical.vercel.app`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 4.2 How the Rewrite Engine Operates
* `"source": "/(.*)"` : Captures any arbitrary path (`/research`, `/technology`, `/programs/nested`, etc.) using standard POSIX regular expression wildcards.
* `"destination": "/index.html"` : Rewrites the origin dispatch internally without modifying the external browser URL bar.
* **Asset Passthrough Immunity** : Vercel's edge proxy natively prioritizes physical static files matching `/assets/index-*.js`, `/assets/index-*.css`, SVGs, and images. Those files are served directly with HTTP 200 and long-term cache headers. Only unresolved paths fallback to `/index.html`.

### 4.3 Advanced Hardened Configuration (Recommended)
If your application serves specific static assets, icons, or API routes, use the production-hardened variant:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/((?!api/|assets/|favicon.ico).*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 5. Verification Protocol & Post-Deployment Testing Gate

Once `vercel.json` is committed and deployed to the GitHub repository connected to Vercel, execute this automated verification protocol:

### Step 1: Terminal HTTP Probe (PowerShell / Bash)
Run a direct HTTP `GET` probe on cold routes to verify status code:

```powershell
# Test Direct Sub-Routes
$Routes = @("/overview", "/research", "/technology", "/programs", "/philosophy", "/future", "/challenge")

foreach ($Route in $Routes) {
    $Uri = "https://nexus-lab-ai-technical.vercel.app$Route"
    $Response = Invoke-WebRequest -Uri $Uri -Method Head -SkipHttpErrorCheck
    Write-Host "$Route -> StatusCode: $($Response.StatusCode)" -ForegroundColor ($Response.StatusCode -eq 200 ? "Green" : "Red")
}
```

**Expected Gate Criteria**:
* Every route MUST return `StatusCode: 200`.
* The response payload MUST contain `<!doctype html>` and mount `<div id="root"></div>`.

### Step 2: Browser Incognito Cold-Load Test
1. Open a completely new **Incognito / Private Window**.
2. Paste `https://nexus-lab-ai-technical.vercel.app/challenge` directly into the address bar.
3. Hit `Enter`.
4. **Verification**: The Challenge matrix and interactive truth tables must render immediately without bouncing through a 404 screen.

---

## 6. Strategic Alignment for Y Combinator Due Diligence

Y Combinator partners, angel syndicates, and venture associates conduct lightning-fast due diligence:
1. **The "Multi-Tab" Reading Pattern**: Investors middle-click links across your website, opening 4–5 tabs simultaneously (`/research`, `/technology`, `/programs`). Without this rewrite rule, **all 4 tabs immediately open to 404 errors**, causing immediate disqualification.
2. **Technical Polish as a Proxy for Competence**: YC evaluates engineering velocity and attention to detail. A startup claiming to build sovereign operating systems, mathematical resonance swarms, and memory kernels cannot have broken web routing.
3. **Seamless Presentation**: With this fix applied, Nexus LAB AI presents as an impenetrable, production-grade enterprise research and technology platform.

---

```
================================================================================
AUDIT COMPLETE: OPERATION-EDGE-DISPATCH-001
REMEDIATION READY FOR DEPLOYMENT INTO VERCEL REPOSITORY ROOT.
================================================================================
```
