# 🍽️ Recipe Generator – AI-Powered Web App

## 🔗 Live Demo
https://nexium-zainab-grand-project.vercel.app

## ✨ Features
- Magic link email login (Supabase)
- AI recipe generation via n8n + OpenRouter
- Save recipes with Supabase
- View your saved and curated recipes
- Fully deployed with CI/CD on Vercel

## 🧠 Tech Stack
- React + Tailwind CSS
- Supabase Auth & DB
- n8n + OpenRouter (Mistral 7B)
- Brevo SMTP
- Vercel (deployment)

## 📁 Folder Structure
/docs/ → PRD + wireframes
/api/ → n8n workflow, Supabase notes
/app/ → React frontend
/ai/ → AI workflow and testing

## 📦 Setup Instructions
- Clone repo
- Add `.env` with `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- `npm install && npm run dev`

## 👏 Credits
- Supabase
- OpenRouter / Mistral
- n8n Cloud
