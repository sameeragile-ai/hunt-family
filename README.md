# Hunt Family Dentistry — Award-Level Website Revamp

A production-ready, award-winning healthcare web application built for **Hunt Family Dentistry** in Frisco, Texas, owned and operated by **Dr. Dominique Hunt, DDS**.

---

## 🌟 Clinic Highlights & Trust Badges
- **Voted Best in Frisco 2024 & 2025**
- **Member of the American Dental Association (ADA)**
- **Hablamos Español** (Fully bilingual clinic and staff)
- **Accepts All Major PPO Plans** + Cherry & CareCredit 0% Financing
- **Technology**: iTero 3D Scanner, Ultra-Low Dose Panoramic X-Rays, Pearl AI Cavity Detection, Computer-Assisted Injection-Free Numbing
- **Comfort Amenities**: Ceiling & Wall TVs, Complimentary Coffee Bar, Noise-Cancelling Headphones, Plush Heated Blankets & Ergonomic Neck Pillows
- **Online Booking**: Directly integrated with [MeetKasper](http://huntfamily.meetkasper.com/schedule-appointment)
- **Flexible Financing**: Integrated with [Cherry](https://pay.withcherry.com/hunt-family-dentistry?utm_source=practice&m=21431)
- **Featured Specials**: $59 Emergency Exam & X-ray, $139 New Patient Exam/X-rays/Cleaning, $1,000 Off Invisalign
- **In-House Dental Savings Club**: Adult (13+) $150/yr, Kids (0-12) $100/yr ($0 deductibles, no waiting periods, 10–50% off other care)

---

## 🛠 Tech Stack
- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with custom theme tokens & fluid typography
- **Animation**: Motion (Framer Motion v12) for smooth 60fps transitions, tilts, count-ups & carousels
- **Icons**: Lucide React
- **Routing**: React Router with code-split lazy routes (`/`, `/services`, `/new-patients`, `/membership`, `/about`, `/contact`)
- **Chatbot & AI**: Gemini 3.8 Flash via `@google/genai` backend serverless function (`/api/chat.ts`), with built-in instant local FAQ matcher fallback
- **SEO & Schema**: LocalBusiness / Dentist Schema.org JSON-LD structured data, Open Graph social cards, Twitter cards, and semantic HTML

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your Gemini API key:
```env
GEMINI_API_KEY="your-gemini-api-key-here"
```
*(Note: If no API key is provided, the chatbot automatically falls back to its built-in bilingual local FAQ matcher, so the assistant never errors or breaks).*

### 3. Run Locally

#### Option A: Full-stack Dev Server (recommended)
Runs Express on port 3000 hosting both the Vite frontend and `/api/chat`:
```bash
npm run dev
```

#### Option B: Vercel Local Simulation
```bash
vercel dev
```

### 4. Build for Production
```bash
npm run build
```

---

## ☁️ Deploying to Vercel with Zero Changes

1. Push this repository to GitHub or GitLab.
2. Import the project into your **Vercel Dashboard**.
3. Under **Settings > Environment Variables**, add:
   - `GEMINI_API_KEY` = your Google Gemini API key.
4. Click **Deploy**.
5. Vercel automatically deploys the frontend and configures `/api/chat.ts` as a serverless function with the SPA rewrites defined in `vercel.json`.
