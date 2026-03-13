# skaills — Intelligent Skills Evaluation Platform

A comprehensive competency evaluation platform that uses AI-powered analysis to assess professional skills, soft skills, readiness for change, cognitive abilities, personality traits, DISC behavioral styles, aptitude, and technical knowledge.

**Live:** [skaills.io](https://skaills.io)

## Features

- **49 Evaluation Profiles** - Across 16 sectors (insurance, education, healthcare, retail, finance, HR, technology, banking, hospitality, legal practice, etc.) and 5 levels (executive to operative)
- **Competency Evaluations** - 960+ trilingual questions (5 types: multiple choice, scale, ranking, open text, scenario)
- **Cognitive Tests** - Timed IQ-style assessments with percentile scoring
- **Personality Tests** - Big Five (OCEAN) personality profiling via Likert scale
- **DISC Assessments** - Forced-choice behavioral style profiling
- **Aptitude Tests** - Numerical, verbal, and analytical reasoning
- **Technical Tests** - Case study-based knowledge evaluation
- **Job-Fit Scoring** - Weighted multi-dimensional candidate-to-role matching with gap analysis
- **Candidate Comparison** - Side-by-side radar chart comparison with benchmarks
- **Evaluation History** - Searchable database with CSV/Excel export
- **Profiles Page** - Dedicated browsable profile directory with sector/level filters
- **Recruitment Process** - Position management, candidate tracking, and recruitment campaigns with wizard
- **Recruitment Campaigns** - Step-by-step campaign wizard with built-in templates (Standard, Career Day) and insights
- **Candidate Management** - Full candidate pipeline with status tracking, file uploads, checklists, scoring, and invitation system
- **Candidate Portal** - Self-service profile editing for candidates with multi-org support
- **Post-Hire Tools** - Employee management, probation tracking, 360/180 reviews, climate surveys
- **Resources** - Expert opinion articles, best practices guides (for HR departments, organizations, and professionals), FAQs, and career planning wizard
- **Benefits Page** - Value proposition with ROI metrics for businesses, individuals, and HR companies
- **AI Staff** - Custom-built AI agents aligned with your organization's culture, values, and processes
- **User Management** - Super admins can view all users, their evaluations, and assign them to organizations
- **AI Analysis** - Optional AI-powered evaluation via Claude, OpenAI, or Gemini
- **PDF Export** - Downloadable evaluation reports
- **Shareable Links** - Generate evaluation links for candidates
- **About Page** - Mission statement, complete evaluation suite overview, and service offerings
- **Features Page** - Trilingual guide for evaluators and candidates with platform capabilities overview
- **Contact Form** - Public contact form with 12 interest categories, saved to Firestore with admin management UI
- **Career Planning Wizard** - Interactive 4-step career growth tool with personalized plans and external AI readiness links
- **Trilingual** - Full Spanish, English, and French support via next-intl
- **Organizations** - Multi-tenant org management with roles (owner/admin/member/viewer) and email invitations
- **Plans & Pricing** - Individual and corporate pricing tiers with AI Agents & AI Employees showcase
- **User Authentication** - Centralized via xAId (Xperto Authentication Intelligence) with Token Bridge pattern, email/password and Google sign-in
- **Admin Panel** - Protected dashboard with role-based access (admin link in user dropdown)
- **API Key Management** - Configure AI provider keys from the admin settings UI
- **Branded Assets** - Custom favicon (logomark) and OpenGraph share image

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Firebase (Firestore, Auth, Cloud Functions)
- **Charts**: Recharts
- **i18n**: next-intl (ES/EN/FR)
- **PDF**: jspdf + html2canvas
- **AI**: Anthropic Claude, OpenAI, Google Gemini (optional)

## Project Structure

```
src/
  app/[locale]/              # Next.js pages (locale-aware routing: es/en/fr)
    admin/                   # Admin panel (auth-protected)
      candidates/            # Candidate management & invitations
      climate/               # Climate surveys
      recruitment/           # Recruitment process (positions & campaigns)
      comparison/            # Candidate comparison
      employees/             # Employee management
      history/               # Evaluation history
      job-fit/               # Job-fit analysis
      job-profiles/          # Job profile management
      login/                 # Admin login
      organizations/         # Organization management
      probation/             # Probation evaluations
      reviews/               # 360/180 reviews
      settings/              # App settings (AI key management)
      users/                 # User management for super admins
    about/                   # About page (mission, suite overview)
    ai-staff/                # AI Staff service page
    auth/                    # User login, registration, forgot-password, no-access
    benefits/                # Value proposition and ROI page
    candidate/               # Candidate self-service portal
    contact/                 # Contact form page
    evaluation/[profileId]/  # Competency evaluation flow
    features/                # Platform features and instructions
    pricing/                 # Plans & pricing page
    profiles/                # Browsable profile directory
    resources/               # Expert articles, best practices, FAQs, career planning
    results/[evaluationId]/  # Results display
    tests/                   # Test hub (cognitive, personality, DISC, aptitude)
  components/                # Reusable UI components
    auth/                    # AuthProvider, AuthGuard
    evaluation/              # Evaluation step components
    layout/                  # Header, Footer
    org/                     # OrgProvider, OrgSwitcher
    resources/               # PersonaQuote, ArticleLayout
    results/                 # Results display components
    ui/                      # Shared UI primitives
  lib/
    firebase/                # Firestore CRUD layer
    scoring/                 # Scoring engines (cognitive, personality, DISC, aptitude, job-fit)
    seed-data/               # Seed data (profiles, questions, test configs)
    pdf/                     # PDF export utilities
  messages/                  # i18n translation files (es.json, en.json, fr.json)
  types/                     # TypeScript type definitions
functions/                   # Firebase Cloud Functions (AI analysis, recommendations)
scripts/                     # Utility scripts (seed, create-admin)
```

## Quick Start

See [INSTALL.md](INSTALL.md) for detailed setup instructions.

```bash
# Install dependencies
npm install

# Copy environment file and configure
cp .env.example .env.local

# Run development server
npm run dev
```

## Deployment

```bash
# Deploy to Firebase Hosting
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy --only hosting

# Deploy only specific services
firebase deploy --only firestore:rules
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy --only functions

# Deploy everything
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy
```

## License

Private - All rights reserved.
