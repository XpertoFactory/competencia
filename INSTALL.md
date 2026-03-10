# skaills — Installation Guide

## Prerequisites

- Node.js 22+
- npm 9+
- Firebase CLI (`npm install -g firebase-tools`)
- Google Cloud CLI (`gcloud`) - optional, for advanced admin operations
- A Firebase project on the Blaze (pay-as-you-go) plan (required for Cloud Functions)

## 1. Clone and Install

```bash
git clone https://github.com/XpertoFactory/competencia.git
cd competencia
npm install
```

## 2. Firebase Project Setup

### Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Upgrade to the **Blaze plan** (required for Cloud Functions)

### Enable Services

1. **Firestore**: Go to Build > Firestore Database > Create Database
   - Select your preferred region
   - Start in production mode (rules will be deployed later)

2. **Authentication**: Go to Build > Authentication > Get Started
   - Enable **Email/Password** sign-in method
   - Create your first admin user via the Authentication console

3. **Web App**: Go to Project Settings > General > Your Apps
   - Click "Add app" > Web
   - Copy the Firebase config object

### Authenticate Firebase CLI

```bash
firebase login
firebase use --add  # Select your project
```

## 3. Environment Configuration

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## 4. Seed the Database

### Create a Service Account Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/) > IAM & Admin > Service Accounts
2. Find your Firebase service account (e.g., `firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com`)
3. Click the three dots > Manage Keys > Add Key > Create new key > JSON
4. Save as `sa-key.json` in the project root (this file is gitignored)

### Run the Seed Script

```bash
GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/sa-key.json npx tsx scripts/seed.ts
```

This seeds: profiles (30 roles with sector/level categorization), competency categories, archetype profiles, resources, questions (480+), test configs, and app settings.

### Create the Admin Document

After creating a user in Firebase Auth, create their admin document. Replace `YOUR_USER_UID` with the UID from the Authentication console:

```bash
# Option A: Using the create-admin script (requires sa-key.json)
# Edit scripts/create-admin.ts with the correct UID first
GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/sa-key.json npx tsx scripts/create-admin.ts

# Option B: Using gcloud CLI (if authenticated)
ACCESS_TOKEN=$(gcloud auth print-access-token)
curl -X PATCH \
  "https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/admins/YOUR_USER_UID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "fields": {
      "uid": {"stringValue": "YOUR_USER_UID"},
      "email": {"stringValue": "your-email@example.com"},
      "role": {"stringValue": "admin"},
      "createdAt": {"timestampValue": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"}
    }
  }'

# Option C: Manually in Firebase Console
# Go to Firestore > Start collection "admins" > Document ID = YOUR_USER_UID
# Add fields: uid (string), email (string), role (string: "admin"), createdAt (timestamp)
```

### Delete the Service Account Key

After seeding, delete the key for security:

```bash
rm sa-key.json
```

## 5. Deploy

### Deploy Firestore Rules

```bash
firebase deploy --only firestore:rules
```

### Deploy Cloud Functions

Cloud Functions require the Blaze plan. Use `FUNCTIONS_DISCOVERY_TIMEOUT=120` to avoid deployment timeouts with heavy dependencies (AI SDKs):

```bash
cd functions && npm install && cd ..
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy --only functions
```

### AI Configuration (Optional)

To enable AI-powered analysis, set environment variables for your Cloud Functions:

```bash
firebase functions:secrets:set CLAUDE_API_KEY
firebase functions:secrets:set OPENAI_API_KEY
firebase functions:secrets:set GEMINI_API_KEY
```

### Deploy Hosting

```bash
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy --only hosting
```

### Deploy Everything

```bash
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy
```

## 6. Development

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Use Firebase Emulators

```bash
# Start emulators
npm run emulators

# Start with persistent data
npm run emulators:seed

# Seed the emulator
npm run seed:emulator
```

Set `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=true` in `.env.local` to connect to emulators.

## Troubleshooting

### Cloud Functions timeout during deploy

Use the timeout prefix:
```bash
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy --only functions
```

### Permission denied when seeding

Ensure `GOOGLE_APPLICATION_CREDENTIALS` points to an absolute path:
```bash
GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/sa-key.json npx tsx scripts/seed.ts
```

### Admin can't log in

1. Verify the user exists in Firebase Authentication
2. Verify the `admins` collection has a document with the user's UID
3. Verify Firestore rules are deployed: `firebase deploy --only firestore:rules`
