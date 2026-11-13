# FatherShops Web (Next.js)

Frontend for the FatherShops technical task. It uses the Laravel API:
https://github.com/YOUR-USERNAME/fathershops-api

## Setup
1. Start the Laravel API (`php artisan serve`).
2. Copy `.env.local.example` to `.env.local`.
3. Run:
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Pages
- `/` categories with images
- `/category/[id]` products of a category
- `/product/[id]` full product details
- Missing data shows a 404 page, and other failures show an error page with retry.