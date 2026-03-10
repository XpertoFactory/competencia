# skaills — Intelligent Skills Evaluation Platform

A comprehensive competency evaluation platform that uses AI-powered analysis to assess professional skills, soft skills, readiness for change, cognitive abilities, personality traits, DISC behavioral styles, aptitude, and technical knowledge.

**Live:** [skaills.io](https://skaills.io)

## Features

- **30 Evaluation Profiles** - Across 12 sectors (insurance, education, healthcare, retail, finance, HR, etc.) and 5 levels (executive to operative)
- **Competency Evaluations** - 480+ trilingual questions (5 types: multiple choice, scale, ranking, open text, scenario)
- **Cognitive Tests** - Timed IQ-style assessments with percentile scoring
- **Personality Tests** - Big Five (OCEAN) personality profiling via Likert scale
- **DISC Assessments** - Forced-choice behavioral style profiling
- **Aptitude Tests** - Numerical, verbal, and analytical reasoning
- **Technical Tests** - Case study-based knowledge evaluation
- **Job-Fit Scoring** - Weighted multi-dimensional candidate-to-role matching with gap analysis
- **Candidate Comparison** - Side-by-side radar chart comparison
- **Evaluation History** - Searchable database with CSV/Excel export
- **Post-Hire Tools** - Employee management, probation tracking, 360/180 reviews, climate surveys
- **AI Analysis** - Optional AI-powered evaluation via Claude, OpenAI, or Gemini
- **PDF Export** - Downloadable evaluation reports
- **Shareable Links** - Generate evaluation links for candidates
- **Instructions Page** - Trilingual guide for evaluators and candidates with step-by-step instructions
- **Trilingual** - Full Spanish, English, and French support via next-intl
- **Admin Panel** - Protected dashboard with Firebase Auth
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
      climate/               # Climate surveys
      comparison/            # Candidate comparison
      employees/             # Employee management
      history/               # Evaluation history
      job-fit/               # Job-fit analysis
      job-profiles/          # Job profile management
      login/                 # Admin login
      probation/             # Probation evaluations
      reviews/               # 360/180 reviews
      settings/              # App settings
    evaluation/[profileId]/  # Competency evaluation flow
    instructions/            # Instructions for evaluators and candidates
    results/[evaluationId]/  # Results display
    tests/                   # Test hub (cognitive, personality, DISC, aptitude)
  components/                # Reusable UI components
    auth/                    # AuthProvider, AuthGuard
    evaluation/              # Evaluation step components
    layout/                  # Header, Footer
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
