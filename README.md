# Aditi S Yaranal — Personal Portfolio

A modern dark personal portfolio built with React, Vite, Framer Motion and Lucide icons.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract this ZIP.
2. Open the extracted `aditi-portfolio` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Before publishing — personal details to review
- Confirm the CGPA and education details.
- Add the correct LinkedIn profile URL in `src/main.jsx`.
- Add GitHub repository URLs for SheSync and Scheme Sahayak if those repositories are public.
- Add a PDF resume at `public/Aditi_Yaranal_Resume.pdf` and uncomment/replace a resume link if you want a download button.
- Verify each skill and technology is something you can explain in an interview.
- Add verified certification details if desired.

## Deploy to Vercel
1. Create a GitHub repository named `aditi-portfolio`.
2. Push the extracted project folder to that repository.
3. Sign in at https://vercel.com using GitHub.
4. Choose **Add New → Project**, then import `aditi-portfolio`.
5. Keep the defaults (Framework: Vite, Build command: `npm run build`, Output directory: `dist`).
6. Click **Deploy**. Vercel will provide a public `*.vercel.app` URL.

## Update later
Edit `src/main.jsx` and `src/styles.css`, commit and push to GitHub. Vercel automatically redeploys connected repositories.
