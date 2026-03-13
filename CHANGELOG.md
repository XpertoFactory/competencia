# Changelog

## [0.9.3] - 2026-03-13

### xAId Authentication Integration
- Migrated authentication to xAId (Xperto Authentication Intelligence) centralized auth platform using Token Bridge pattern
- Dual Firebase app architecture: `xperto-candidates-hub` for data, `xperto-aid` for authentication
- New Token Bridge Cloud Function (`functions/src/tokenBridge.ts`) — verifies xAId tokens, mints local custom tokens, syncs `admins` and `orgMembers` collections
- Complete auth module rewrite (`src/lib/firebase/auth.ts`) with session-based auth (4-hour TTL in localStorage)
- Updated AuthProvider to use xAId sessions for role detection
- Updated Header admin check to use session-based `isAdmin()`
- All login/register pages rewritten to use xAId auth functions
- New Forgot Password page (`/auth/forgot-password`)
- New No Access page (`/auth/no-access`) for users without skaills app access
- Linked 10 organizations between skaills Firestore and xAId via `xaidOrgId` field

### Legal Practice Sector
- New `legal-practice` sector added to ProfileSector type
- 6 new evaluation profiles: Managing Partner (executive), Practice Area Director (managerial), Senior Attorney (professional-specialist), Corporate Counsel (professional-specialist), Paralegal (administrative), Legal Secretary (operative)
- 18 competency categories with trilingual names and descriptions
- 108 new trilingual questions (ES/EN/FR) — 3 multiple-choice, 1 scale, 1 scenario, 1 open-text per category
- Total profiles: 49 across 16 sectors

### Plans & Pricing Page
- New `/pricing` page with Individual and Corporate plan tiers
- Individual: Free, Pro ($29/mo), Premium ($79/mo)
- Corporate: Starter ($199/mo), Business ($499/mo), Enterprise (custom)
- AI Agents & AI Employees showcase section
- Feature highlights and CTA sections
- Pricing link added to Value dropdown in navigation (desktop + mobile)
- Full trilingual support (ES/EN/FR)

### Translation Updates
- Added auth keys: `forgotPassword`, `forgotPasswordTitle`, `forgotPasswordSubtitle`, `resetPassword`, `resetPasswordSent`, `backToLogin`, `noAccess`, `noAccessMessage`
- Added `legal-practice` sector label in all 3 languages
- Added `pricing` navigation key and 80+ pricing translation keys per language

## [0.9.2] - 2026-03-11

### Best Practices
- New `/resources/best-practices/hr-departments` — comprehensive guide covering modern hiring, multi-dimensional evaluation, AI adoption, skills mapping, process automation, and change management for HR teams
- New `/resources/best-practices/organizations` — guide for organizations covering learning cultures, employee transformation, innovation adoption, AI integration, strategic workforce planning, and wellbeing through change
- New `/resources/best-practices/professionals` — guide for individuals covering career ownership, skills transformation, AI literacy, personal branding, resilience, and navigating organizational change
- Each article includes expert commentary from all 4 ibizai team personas (Carlos Miranda Levy, Billy Nakamura-Jensen, Naila Okafor-Reyes, Ainthony Moreau-Chen)
- Best Practices section on Resources hub page updated from "Coming Soon" placeholder to 3-card grid linking to articles

### Resources Hub Internationalization
- Resources hub page (`/resources`) fully internationalized with 41 translation keys per language
- All section titles, descriptions, article titles/excerpts, and UI labels now use `useTranslations('resources')` instead of hardcoded English
- Full trilingual support (ES/EN/FR)

### Navigation on Resource Pages
- Added Header and Footer to all 13 resource pages (8 opinion articles, 2 FAQ pages, 3 best practices)
- Previously these pages had no site navigation — now consistent with rest of site

### Style Unification
- All public pages now use the dark hero design pattern (from-gray-900 via-gray-800 to-gray-900 with animated blur orbs and grid overlay)
- Pages updated: Landing, About, Features, Benefits, Contact
- Fixed hardcoded English strings in Benefits page (heroTagline, whitelabelSolutionLabel, 9 includedItem keys) — now trilingual

### Translation Fixes
- Added missing translation keys: `landing.tagline`, `landing.learnMore`, `admin.userManagement`, `admin.users`, `instructions.sections.resources` (FR)
- Added `benefits.heroTagline`, `benefits.whitelabelSolutionLabel`, `benefits.includedItem1-9` across all 3 languages

## [0.9.1] - 2026-03-11

### About Page
- New `/about` page explaining skaills mission, complete evaluation suite, and service offerings
- Sections: Hero, Mission, Complete Suite (evaluations, individuals, HR departments, white-label, AI Staff), Explore links grid, Bottom CTA
- Full trilingual support (ES/EN/FR)

### Navigation Restructuring
- Replaced flat nav links with dropdown menus for better information architecture
- New **Value** dropdown: About, Features, Benefits
- **AI Staff** remains a standalone link
- New **Resources** dropdown: Opinion, Best Practices, FAQs
- **Evaluations** dropdown unchanged (Profiles, Specialized)
- Mobile nav restructured with matching section headers

### Features Page Title
- Changed title from "Instructions" to "Features & Capabilities" across all 3 languages

### Career Advancement & Growth Planning Wizard
- New `/resources/career-planning` page with 4-step interactive wizard
- Step 1: Sector selection (15 industries)
- Step 2: Experience level (5 levels) + AI readiness self-assessment
- Step 3: Skills identification (8 skill areas, select at least 2)
- Step 4: Career aspirations (8 goal options)
- Generates personalized career development plan with strengths, growth areas, and action items
- Links to sector-specific external AI readiness assessments (ibizai.io, lawra.org, insureversia.com, ailearning.global, maimusic.org, 100.cemi.ai)
- Links to sector-specific external learning programs
- Recommends relevant internal opinion articles and FAQ pages based on user's profile
- Career Planning link added to Resources dropdown navigation and Resources hub page
- Full trilingual support (ES/EN/FR) with 100+ translation keys

### OG Image Optimization
- Resized OpenGraph share image from 1800×900 to 1200×630 (universal OG standard)
- Added padding so logo survives WhatsApp square cropping without getting cut off
- Reduced file size from 338KB to 100KB for faster preview generation

### Contact Us
- New `/contact` page with professional contact form
- Contact modal component for use throughout the site
- Form fields: name, email, interest (12 categories), company, role, sector, message
- Interest categories: White-Label, Reseller, Corporate License, Individual License, Training, Speaking, Consulting, Content Suggestions, Error Reports, Improvement Suggestions, General, Other
- Submissions saved to Firestore `contactSubmissions` collection
- New `/admin/contact` page for admins to view, filter, and manage submissions
- Admin features: status tracking (new/read/replied/archived), internal notes, reply via email, search, delete
- Contact added as last sub-item in Value dropdown navigation
- Contact Submissions link added to admin sidebar and quick actions
- Full trilingual support (ES/EN/FR)

### Firestore Rules
- Added security rules for contactSubmissions (public create, admin read/update/delete)
- Added missing rules for candidates, candidateInvites, positions, and recruitmentCampaigns collections

### Fixes
- Fixed AI Staff page outline buttons appearing white on dark backgrounds (added `bg-transparent`)
- Fixed same issue on About page CTA section

## [0.9.0] - 2026-03-11

### Resources Section
- New `/resources` hub page with three sections: Opinion, Best Practices (coming soon), FAQs
- 8 expert opinion articles on HR, careers, and AI (with commentary from 4 personas)
- 2 FAQ pages: HR Management FAQs and Career Planning FAQs (12 questions each, accordion-style)
- Shared `PersonaQuote` and `ArticleLayout` components for article pages
- 4 expert personas: Carlos Miranda Levy (founder), Billy Nakamura-Jensen, Naila Okafor-Reyes, Ainthony Moreau-Chen
- Resources link added to Header navigation (desktop and mobile)
- Features page updated with Resources section

### Benefits (Value Proposition) Page
- New `/benefits` page focused on ROI and measurable value
- Three audience tabs: For Businesses, For Individuals, For HR Companies & Professionals
- Business benefits: cost reduction (60%), time savings (85%), HR operations efficiency, recruitment (3x faster), retention (40%), productivity (25%)
- Individual benefits: career path savings, earning potential (+30%), accelerated growth (2x)
- White-label platform pitch for HR companies with 4 feature cards and included tools checklist
- Key stats hero bar and bottom CTA section

### AI Staff Page
- New `/ai-staff` page: custom-built AI agents for organizations
- Hero section: "Can't find the right person? We'll create them for you."
- 6 AI agent roles: Assistant, Supervisor, Consultant, Advisor, Analyst, Coordinator
- 6 differentiators: built for your org, culture-aligned, team-integrated, continuously tuned, domain-trained, secure
- 4-step "How It Works" timeline: Discovery, Design, Integration, Optimization
- 6 department use cases: HR, Finance, Operations, Sales, Support, Legal
- AI Staff sections added to Features and Benefits pages

### Admin User Management
- New `/admin/users` page for super administrators
- User list with search, filter (all/with org/without org), and stats cards
- User detail view with profile info, organization memberships, and evaluations
- Assign users to organizations with role selection (viewer/member/admin/owner)
- Remove users from organizations with confirmation
- Click-through to evaluation results
- Sidebar link and quick action added to admin dashboard

### Navigation Updates
- Header nav order: Home, Features, Benefits, AI Staff, Resources, Evaluations
- All new pages with full trilingual support (ES/EN/FR)

### New Pages
- `/resources` — Resources hub (Opinion, Best Practices, FAQs)
- `/resources/opinion/*` — 8 opinion articles
- `/resources/faqs/*` — 2 FAQ pages
- `/benefits` — Value proposition with audience-specific tabs
- `/ai-staff` — Custom AI agents service page
- `/admin/users` — User management for super administrators

### New Firestore Functions
- `getAllUserProfiles()` — Get all registered users
- `getOrganizationsList()` — Get all organizations

## [0.8.0] - 2026-03-11

### Recruitment Process
- New Recruitment Process module: manage positions, candidates, and campaigns from a unified dashboard
- Position management: create, open/close/hold positions with department, description, and max candidates
- Link positions to Job Profiles for automatic candidate scoring
- Recruitment dashboard with real-time stats: open positions, total/active candidates, active campaigns
- Recruitment Campaigns with 5-step wizard: Planning → Preparation → Execution → Post-Review → Follow Up
- Two built-in campaign templates: Standard Recruitment and Career Day (customizable, duplicable)
- Campaign wizard with per-step checklist items, notes, and contextual insights/recommendations
- Campaign status tracking: draft, active, completed, cancelled
- Link campaigns to positions and candidates
- Admin sidebar updated: Candidates replaced with Recruitment (includes Positions + Candidates + Campaigns)
- Features page updated with Recruitment section
- Full trilingual support (ES/EN/FR) with 80+ new translation keys

### New Pages
- `/admin/recruitment` — Recruitment dashboard with positions, stats, and quick access to candidates/campaigns
- `/admin/recruitment/campaigns` — Campaign list with search, filters, wizard, and detail view

### New Collections
- `positions` — Organization-specific positions with status tracking
- `recruitmentCampaigns` — Campaign records with step-by-step process tracking

### New Types
- `Position`, `PositionStatus` — Position entity with draft/open/closed/on-hold status
- `RecruitmentCampaign`, `CampaignStatus`, `CampaignStep`, `CampaignStepKey`, `CampaignStepItem`

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
