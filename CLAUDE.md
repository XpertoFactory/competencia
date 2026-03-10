# CLAUDE.md - Project Instructions for Claude Code

## Project Overview

**skaills** — Intelligent skills evaluation platform. Evaluates employees/candidates across professional skills, soft skills, readiness for change, cognitive abilities, personality, DISC behavioral styles, aptitude, and technical knowledge. 30 evaluation profiles across 12 sectors and 5 levels.

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Auth**: Firebase Authentication (email/password)
- **Functions**: Firebase Cloud Functions v7 (Node.js 22)
- **i18n**: next-intl (Spanish + English + French)
- **Charts**: Recharts
- **PDF**: jspdf + html2canvas
- **AI**: Claude, OpenAI, Gemini (optional, in Cloud Functions)

## Key Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run seed         # Seed Firestore (requires GOOGLE_APPLICATION_CREDENTIALS)
npm run seed:emulator # Seed local emulator

# Firebase deployment - ALWAYS use FUNCTIONS_DISCOVERY_TIMEOUT=120 prefix for functions
firebase deploy --only firestore:rules
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy --only functions
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy --only hosting
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy  # deploy all
```

## Architecture

### Routing
All pages are under `src/app/[locale]/` with next-intl locale routing (es/en/fr).

### Auth Pattern
- `src/app/[locale]/admin/layout.tsx` wraps all admin routes with `<AuthProvider>`
- Individual admin pages wrap their content with `<AuthGuard>` (NOT the layout, to avoid blocking the login page)
- Admin role is checked via the `admins` Firestore collection

### Firestore CRUD
- All database operations go through `src/lib/firebase/firestore.ts`
- Collections: profiles, competencyCategories, questions, evaluations, results, archetypeProfiles, resources, settings, evaluationLinks, cognitiveTests, personalityTests, aptitudeTests, discTests, testSessions, combinedResults, technicalTests, jobProfiles, employees, probationEvaluations, reviewCampaigns, reviewAssignments, reviewSummaries, climateSurveys, climateResponses, climateSurveyResults, admins

### Localization
- Translation files: `src/messages/es.json`, `src/messages/en.json`, `src/messages/fr.json`
- All user-facing strings use `useTranslations()` from next-intl
- Data model uses `LocalizedString` type: `{ es: string; en: string; fr?: string }`
- French (`fr`) is optional in LocalizedString for backward compatibility

### Profile System
- 30 evaluation profiles with `sectors: ProfileSector[]` and `level: ProfileLevel`
- 12 sectors: insurance, education, retail-services, healthcare, transportation, finance-accounting, compliance-legal, human-resources, commercial-business, collections-credit, customer-service, general-management
- 5 levels: executive, managerial, professional-specialist, administrative, operative
- Questions in `src/lib/seed-data/questions.ts` (main) + 8 separate files

### Scoring Engines
Located in `src/lib/scoring/`:
- `cognitive.ts` - IQ percentile scoring
- `personality.ts` - Big Five OCEAN traits
- `disc.ts` - DISC behavioral profile
- `aptitude.ts` - Numerical/verbal/analytical
- `job-fit.ts` - Weighted multi-dimensional job matching

### Cloud Functions
Located in `functions/src/`:
- `index.ts` - Entry point, Firestore trigger for auto-analysis
- `analysis/` - Evaluation analysis pipeline
- `recommendations/` - Training path generation
- `ai/` - AI provider abstraction (Claude, OpenAI, Gemini)

## Conventions

- Components are client-side (`'use client'`) when they use hooks or interactivity
- Seed data files are in `src/lib/seed-data/` with barrel exports via `index.ts`
- Types are centralized in `src/types/index.ts`
- Firebase config is in `.env.local` (not committed)
- Service account keys (`sa-key.json`, `*-sa-key*.json`) are gitignored
- App name is **skaills** (all lowercase) everywhere in the UI

## Firebase Project

- Project ID: `xperto-candidates-hub`
- Hosting site: `xperto-competencia`
- Domain: `skaills.io`
- Region: us-central1
- Blaze plan (required for Cloud Functions)
