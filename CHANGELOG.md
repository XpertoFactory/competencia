# Changelog

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
