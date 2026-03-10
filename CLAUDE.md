# CLAUDE.md - Project Instructions for Claude Code

## Project Overview

Competency evaluation platform for the insurance sector. Evaluates employees/candidates across professional skills, soft skills, readiness for change, cognitive abilities, personality, DISC behavioral styles, aptitude, and technical knowledge.

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Auth**: Firebase Authentication (email/password)
- **Functions**: Firebase Cloud Functions v7 (Node.js 22)
- **i18n**: next-intl (Spanish + English)
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
firebase deploy --only hosting
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy  # deploy all
```

## Architecture

### Routing
All pages are under `src/app/[locale]/` with next-intl locale routing (es/en).

### Auth Pattern
- `src/app/[locale]/admin/layout.tsx` wraps all admin routes with `<AuthProvider>`
- Individual admin pages wrap their content with `<AuthGuard>` (NOT the layout, to avoid blocking the login page)
- Admin role is checked via the `admins` Firestore collection

### Firestore CRUD
- All database operations go through `src/lib/firebase/firestore.ts`
- Collections: profiles, competencyCategories, questions, evaluations, results, archetypeProfiles, resources, settings, evaluationLinks, cognitiveTests, personalityTests, aptitudeTests, discTests, testSessions, combinedResults, technicalTests, jobProfiles, employees, probationEvaluations, reviewCampaigns, reviewAssignments, reviewSummaries, climateSurveys, climateResponses, climateSurveyResults, admins

### Localization
- Translation files: `src/messages/es.json` and `src/messages/en.json`
- All user-facing strings use `useTranslations()` from next-intl
- Data model uses `LocalizedString` type: `{ es: string; en: string }`

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

## Firebase Project

- Project ID: `xperto-candidates-hub`
- Region: us-central1
- Blaze plan (required for Cloud Functions)
