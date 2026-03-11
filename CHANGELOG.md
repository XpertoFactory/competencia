# Changelog

## [0.7.0] - 2026-03-11

### Candidates Module
- Full candidate management system for organization managers
- Candidate profiles with personal info, process status, outcome tracking
- File uploads to Firebase Storage (CV, photo, certificates)
- Custom checklists with completion tracking per candidate
- Manager comments, scoring (0-100 slider), and recommendations
- Link candidates to one or more job positions
- View linked evaluation and test results per candidate
- 6-stage process pipeline: Interest Received → Contacted → Interviewed → Evaluated → Reference Check → Final Review
- 4 outcome states: Pending, Approved to Hire, Discarded, Preserved for Future
- 5 recommendation types: Hire, Discard, Contact, Keep Contact Info, No Recommendation
- Invitation system with shareable links and 30-day expiry
- Candidate portal at `/candidate` for self-service profile editing
- Candidates can view their status and linked positions (read-only)
- Candidates can upload/manage their own CV and photo
- Multi-organization support (users can be candidates in multiple orgs)
- Invitation acceptance flow with login/register redirect
- Admin sidebar and quick actions grid updated with Candidates link
- Full trilingual support (ES/EN/FR) with 100+ translation keys
- Firebase Storage initialized for file uploads

### New Pages
- `/admin/candidates` — Candidate list with search, status/outcome/position filters
- `/admin/candidates/[candidateId]` — 8-tab candidate detail (profile, files, process, checklist, assessment, comments, positions, evaluations)
- `/admin/candidates/invite` — Send invitation form with pending invites list
- `/candidate` — Candidate portal dashboard (list of organizations)
- `/candidate/[orgId]` — Per-org candidate self-service (edit profile, upload files)
- `/candidate/invite/[inviteId]` — Invitation acceptance page

### New Collections
- `candidates` — Candidate records scoped by organization
- `candidateInvites` — Invitation tokens with status tracking

## [0.6.0] - 2026-03-10

### New Sectors & Profiles
- Added 3 new sectors: Technology/IT (5 profiles), Banking (4 profiles), Hospitality/Tourism (4 profiles)
- 13 new evaluation profiles with trilingual competency categories and questions
- Extended `ProfileSector` type with `technology-it`, `banking`, `hospitality-tourism`

### Profiles Page & Navigation
- New `/profiles` page with sector/level filters and 3-column card grid
- Restructured navigation: "Evaluations" dropdown with "Profiles" and "Specialized" sub-items
- Click-outside handling for all dropdowns using ref-based mousedown pattern

### Results & Dashboard Enhancements
- Larger circular score gauges with localized level labels and gradient card backgrounds
- Category drill-down component with expandable sections and per-question scores
- Comparative benchmark component (candidate score vs profile average)
- Redesigned admin dashboard with summary stats row and recent evaluations table
- Enhanced PDF reports with cover page, executive summary, and better visual layout
- Richer CSV/Excel exports with 10 columns and filter-aware downloads

### Form Simplification
- Climate surveys: single Name/Description field per locale (was dual ES/EN)
- Reviews: single Campaign Name/Description field per locale (was dual ES/EN)
- Job profiles: single Title/Department/Description field per locale (was dual ES/EN)
- All form field labels translated according to active locale

### Translation Fixes
- Added 25+ missing review translation keys (status labels, role labels, score keys)
- Fixed hardcoded DISC/weight labels in job profiles page
- Fixed missing jobFit.noJobProfiles/noJobProfilesHint keys
- Changed "Linked Insurance Profile" to "Linked Profile" across all languages
- Translated climate survey question section labels (Questions, Add Question, Content, Category, Type)

### Fixes
- Fixed admin dropdown not showing (silent error in checkAdminStatus)
- Fixed dropdowns not opening in React 18 (replaced stopPropagation with ref-based contains pattern)
- Fixed email/password login error handling (added invalid-login-credentials code)
- Fixed Active/Inactive badges using hardcoded strings in job profiles list

## [0.5.0] - 2026-03-10

### Organizations
- Organization management: create, invite members by email, manage roles (owner/admin/member/viewer)
- OrgProvider context with org switching and membership management
- OrgSwitcher component for switching between organizations
- Firestore security rules and composite indexes for org collections
- Admin pages: org list (`/admin/organizations`) and org detail with member/invite management

### User Authentication
- Email/password registration and login for regular users (`/auth/register`, `/auth/login`)
- Google sign-in with account chooser (prompt: select_account) for both users and admins
- Separate auth flows: `/auth/login` for users, `/admin/login` for admins
- Auto-fix for admin doc ID mismatches (matches by email, creates correct doc)
- First user to sign in as admin is auto-promoted if no admins exist

### Admin UX
- Administration link moved from main nav to user dropdown menu
- Admin link only visible to users with admin role
- Click-outside closes dropdown menus (user menu, language switcher)

### AI Configuration
- API key management via admin settings UI (save, update, delete keys)
- Masked key display (shows last 4 characters only)
- Cloud Functions read API key from Firestore settings, fallback to env vars
- Default AI provider changed to Gemini 2.5 Flash

### Fixes
- Fixed middleware routing: added catch-all matcher for `/auth/*` routes (was causing 404/hydration errors)
- Fixed scale questions showing wrong labels (agree/disagree instead of frequency)
- Fixed organization creation failing with undefined description field
- Fixed footer logo appearing as white rectangle (removed CSS invert filter)
- Added missing `admin.organizations` translation key in French
- Set metadataBase to https://skaills.io (fixes OG image URL warnings)

## [0.4.0] - 2026-03-10

### Instructions Page
- Added `/instructions` page with two sections: evaluator guide and candidate guide
- Explains what is evaluated (8 evaluation types) and step-by-step process for each role
- Includes tips for both evaluators and candidates
- Full trilingual support (ES/EN/FR)
- Added "Instructions" link to the navigation menu

### Branded Assets
- Set up logomark (`skaills-logomark.png`) as favicon (16x16, 32x32, 180x180, 192x192, 512x512)
- Set up logo (`skaills-logo.png`) as OpenGraph share image (1800x900)
- Added `og:image`, `twitter:card`, and Apple touch icon metadata

## [0.3.0] - 2026-03-10

### Branding
- Renamed app from "Evaluación de Competencias" to **skaills**
- Taglines: "Intelligent Skills" (EN) / "Competencias Inteligentes" (ES) / "Compétences Intelligentes" (FR)
- Updated all UI surfaces: Header, Footer, landing page, PDF reports, HTML metadata
- Created logo prompt alternatives in `resources/logo-prompts.md`

## [0.2.0] - 2026-03-10

### French Language Support
- Added French (fr) as third language throughout the platform
- Translation file: `src/messages/fr.json`
- Updated Header with 3-language dropdown (ES/EN/FR)
- Added French translations to scoring engines, seed data, admin pages
- Made `LocalizedString.fr` optional for backward compatibility

### 30 Evaluation Profiles
- Added 30 trilingual evaluation profiles across 12 sectors and 5 levels
- 480+ competency questions with trilingual content (ES/EN/FR)
- Profiles: insurance technicians, educators (pre-school/primary/secondary), school principals, school psychologist, sales associate, pharmacist, pharmacy clerk, gas station attendant, ride-hailing driver, AML compliance officer, HR/business/collections/accounting/customer-service managers and officers, general manager, CFO, executive assistant, receptionist, technical support
- Question files: main questions.ts + 8 separate files for specific profiles

### Profile Categorization
- Added `ProfileSector` type (12 sectors: insurance, education, retail-services, healthcare, transportation, finance-accounting, compliance-legal, human-resources, commercial-business, collections-credit, customer-service, general-management)
- Added `ProfileLevel` type (5 levels: executive, managerial, professional-specialist, administrative, operative)
- Landing page filter dropdowns by sector and level

### Google Analytics
- Integrated Google Analytics tracking (G-F1607PB84W)

## [0.1.0] - 2026-03-09

### Phase 1: Core Foundation
- Seed data for competency questions (5 types across 3 categories)
- Firestore CRUD layer (`src/lib/firebase/firestore.ts`) wiring all pages to real data
- Fixed i18n translation coverage for all components

### Phase 2: Admin CRUD & Authentication
- Firebase Auth integration with email/password
- AuthProvider + AuthGuard pattern for admin routes
- Admin login page at `/admin/login`
- Admin settings page with app configuration
- Firestore security rules with `isAdmin()` role-based access

### Phase 3: PDF Export, Sharing & Evaluation Links
- PDF export for evaluation results (jspdf + html2canvas)
- Shareable evaluation links with unique tokens
- Social sharing functionality

### Phase 4: New Evaluation Types
- Cognitive test (20 timed IQ-style questions with percentile/IQ scoring)
- Personality test (50 Big Five OCEAN statements with Likert scale)
- DISC assessment (28 forced-choice pairs with behavioral profiling)
- Aptitude test (20 numerical/verbal/analytical questions)
- Test hub page at `/tests` with navigation to all test types
- Scoring engines for each test type (`src/lib/scoring/`)
- Seed data for all test configurations

### Phase 5: Technical Knowledge & Job-Fit
- Technical tests with case study-based evaluation
- Job profile CRUD with weighted requirements
- Job-fit scoring engine (multi-dimensional weighted matching)
- Gap analysis with priority classification (critical/important/minor)
- Admin pages for job profiles and job-fit analysis

### Phase 6: Candidate Comparison & Historical Database
- Side-by-side candidate comparison with Recharts RadarChart
- Evaluation history with search, filters, and pagination
- CSV/Excel export for evaluation data

### Phase 7: Post-Hire Evaluations
- Employee management with lifecycle tracking
- Probation period evaluations with score sliders and alerts
- 360/180 review campaign management with multi-rater assignments
- Anonymous climate surveys with question builder and results visualization

### Infrastructure
- Firebase project configured (`xperto-candidates-hub`)
- Firestore security rules deployed for all collections
- Cloud Functions deployed (v7, Node.js 22):
  - `onEvaluationComplete` - auto-analyzes completed evaluations
  - `generateRecommendations` - generates training path recommendations
- Firestore seeded with profiles, categories, archetypes, resources, questions, test configs, and settings
- Admin user document created in `admins` collection
