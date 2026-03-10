# Changelog

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
