# Integrate Your App with xAId Authentication

> **Purpose:** Run this guide from a Claude Code session in your app's repository to integrate it with xAId centralized authentication. Claude Code can reference the xAId repository for architecture details.
>
> **Usage:** Open Claude Code in your app's repo, then paste the prompt below.

---

## Prompt for Claude Code

Copy and paste the following into a Claude Code session opened in your app's repository:

---

### START PROMPT

I want to integrate this app with **xAId** (Xperto Authentication Intelligence) — our centralized auth platform.

**xAId repository** (read-only reference): `/mnt/c/Users/carlo/Documents/GitHub/xaid`

Before writing any code, read these files from the xAId repo for context:
- `/mnt/c/Users/carlo/Documents/GitHub/xaid/CLAUDE.md` — full architecture overview
- `/mnt/c/Users/carlo/Documents/GitHub/xaid/README.md` — access model, Token Bridge pattern, API endpoints, data models
- `/mnt/c/Users/carlo/Documents/GitHub/xaid/INSTALL.md` — "Integrating an App with xAId" section has the step-by-step guide and Token Bridge Cloud Function template

Then explore this app's repository to understand its current architecture, auth system, Firebase setup, and tech stack.

#### What xAId provides
- Centralized auth via Firebase project `xperto-aid` (email/password + Google OAuth)
- User, organization, and role management via admin dashboard at https://xperto-aid.web.app
- `/auth/verify` endpoint that validates tokens, returns user data + app access + org roles
- Auto-registration for `open` and `hybrid` apps (creates `userApps` record with `defaultIndividualRole`)
- Two-layer role model: individual role (own content) + per-org role (org content)
- Organization management — users belong to orgs, orgs are linked to apps, each user gets a per-org role
- `/auth/verify` response includes `organizations[]` with each org's roles — use this for org-scoped content visibility

#### What this app needs
1. **Token Bridge Cloud Function** deployed to this app's Firebase project — converts xAId tokens to local custom tokens (same UID)
2. **xAId Firebase app** initialized in the client alongside existing Firebase app(s) — xAId handles auth, existing project keeps its data
3. **Auth flow replacement** — login via xAId (email/password + Google), call Token Bridge, sign into local project with custom token
4. **Role-based access** — replace any hardcoded admin checks with xAId role checks from the session data
5. **Session management** — store xAId session data (individual role, org roles) for permission checks
6. **Domain authorization** — if using a custom domain, add it to authorized domains in both Firebase projects

#### App-specific configuration

> **FILL IN BEFORE PASTING** (replace the values below):

- **App ID in xAId**: `________` (e.g., `benefait`, `lawra`, `ibizai`)
- **Access type**: `________` (`open`, `invite-only`, or `hybrid`)
- **Default individual role**: `________` (e.g., `member`, `creator`, `viewer`)
- **Custom roles for this app**: `________` (e.g., `admin, editor, viewer` — these are app-defined but stored in xAId)
- **App's Firebase project ID**: `________` (e.g., `xperto-benefait`)
- **App's custom domain**: `________` (e.g., `benefait.insur.land`, or none)
- **Tech stack**: `________` (e.g., `Astro 5 + Svelte 5`, `vanilla JS`, `React + Vite`)
- **Firebase SDK type**: `________` (e.g., `modular v12`, `compat CDN v10.7`)
- **Existing auth method**: `________` (e.g., `hardcoded ADMIN_UID`, `Firebase Auth direct`, `none`)
- **Pages requiring auth**: `________` (e.g., `admin panel only`, `all pages`, `specific routes`)
- **Uses organization-scoped content?**: `________` (`yes` or `no` — if yes, content is tied to orgs and visibility depends on org membership)
- **Organizations for this app**: `________` (e.g., `org-acme, org-beta` — or `none yet`, orgs are created in xAId admin dashboard)

#### Integration steps to execute

1. **Explore** this app's codebase — understand current auth, Firebase config, page structure
2. **Plan** the integration — identify files to modify, new files to create, what to keep vs replace
3. **Present the plan** to me before writing code — list all changes with rationale
4. **After I approve**, implement in this order:
   a. Add xAId Firebase config (xperto-aid project credentials)
   b. Initialize xAId Firebase app in the client (alongside existing apps)
   c. Create/update Token Bridge Cloud Function in `functions/`
   d. Implement auth flow: login via xAId → Token Bridge → local sign-in
   e. Replace hardcoded admin/role checks with xAId role-based checks
   f. Store session data (individual role, org roles) for permission checks
   g. If app uses org-scoped content: add `orgId` field to content documents, query by org membership, implement org context switching
   h. Update any auth UI (login forms, admin gates, etc.)
   i. Handle no-access flow for invite-only apps
5. **Update documentation** — README, CHANGELOG, CLAUDE.md in this repo
6. **Update xAId repo** — add/update entry in Connected Applications table in README.md, add changelog entry

#### Important constraints

- **Do NOT modify xAId's backend** — the API, Cloud Functions, and Firestore collections are stable
- **Do NOT remove existing Firebase projects** — the app keeps its own Firebase project for data; xAId only handles auth
- **Preserve existing functionality** — public pages, data operations, and UI should continue working
- **Keep the same UID** — the Token Bridge mints custom tokens with the same UID from xAId, so existing Firestore data remains accessible
- **xAId Firebase config** (for client-side initialization):
  ```
  apiKey: "AIzaSyBrLJBPMCs_CYzMBVyFDVOranMFGECMcRw"
  authDomain: "xperto-aid.firebaseapp.com"
  projectId: "xperto-aid"
  storageBucket: "xperto-aid.firebasestorage.app"
  messagingSenderId: "882768498219"
  appId: "1:882768498219:web:5b3c37ff842f29a1c5e3f3"
  ```
- **xAId API URL**: `https://us-central1-xperto-aid.cloudfunctions.net/api`
- **Token Bridge function template**: See xAId INSTALL.md — the function calls `/auth/verify` and mints a local custom token

### END PROMPT

---

## Reference: xAId Connected Applications

Current apps and their configurations (from xAId README):

| App | App ID | Access Type | Default Role | Domain |
|-----|--------|-------------|--------------|--------|
| Estrategia | `xtrategia` | hybrid | creator | xtrategia.xperto.solutions |
| Benefait | `benefait` | hybrid | member | benefait.insur.land |
| CEMI Academy | `cemi-academy` | hybrid | student | — |
| Lawra | `lawra` | open | member | lawra.org |
| iBIZai | `ibizai` | open | member | ibizai.io |
| aiLearning | `ailearning` | open | member | ailearning.global |
| mAImusic | `maimusic` | open | member | maimusic.org |
| aiVideo | `aivideo` | open | member | aivideo.rocks |
| Rutas | `rutas` | hybrid | viewer | rutas.xperto.solutions |
| Compliance | `compliance` | hybrid | viewer | compliance.xperto.solutions |
| Xperto ConcilIA | `concilia` | hybrid | — | — |
| Xperto tAIm | `taim` | hybrid | — | — |
| Xperto ServAIce | `servaice` | hybrid | — | — |
| Car Concierge | `car-concierge` | hybrid | — | — |
| skaills | `skaills` | hybrid | — | — |
| Insureversia | `insureversia` | open | member | — |
| Quantum Insureversia | `quantum-insureversia` | invite-only | — | — |

## Reference: Completed Integration (Estrategia)

Estrategia's integration is the reference implementation. Key files:
- `js/firebase-config.js` — dual Firebase config (xAId + local)
- `js/firebase-init.js` — initializes two Firebase apps
- `js/firebase-auth.js` — login via xAId, Token Bridge call, session mapping
- `js/auth.js` — role checks, org-aware access, no-access screen
- `functions/index.js` — Token Bridge Cloud Function

Repository: `/mnt/c/Users/carlo/Documents/GitHub/estrategia`
