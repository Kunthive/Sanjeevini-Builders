# Sanjeevini Services Pvt Ltd

**Building Trust. Shaping Skylines. Creating Spaces That Last.**

A modern, production-ready real estate website built with Next.js 16, React 19, and TypeScript, optimized for both mobile and desktop experiences.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8)](https://tailwindcss.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or later
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Install dependencies
pnpm install

# Create environment variables file
cp .env.example .env.local

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see your application.

### Environment Setup

1. Sign up for [EmailJS](https://dashboard.emailjs.com)
2. Create an email service and template
3. Add your credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_CONTACT_EMAIL=info@sanjeevinibuilders.com
```

## 📱 Features

### Core Functionality
- **Mobile-First Design** - Optimized for smartphones with excellent desktop experience
- **Project Portfolio** - Comprehensive showcase of residential, commercial, and restoration projects
- **Contact Form** - Validated contact form with EmailJS integration
- **SEO Optimized** - Sitemap, robots.txt, and structured data (Schema.org)
- **Error Handling** - Custom 404 page and error boundaries
- **Loading States** - Smooth transitions and loading indicators

### Technical Highlights
- ✅ TypeScript with strict type checking
- ✅ Next.js 16 App Router with React Server Components
- ✅ Tailwind CSS 4 with CSS-first configuration
- ✅ Image optimization (WebP/AVIF)
- ✅ Form validation with Zod and React Hook Form
- ✅ Accessibility compliant (WCAG AA)
- ✅ Performance optimized (Core Web Vitals)

## 📂 Project Structure

```
sanjeevini-services/
├── app/                    # Next.js App Router
│   ├── (pages)/           # Application pages
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading states
│   ├── not-found.tsx      # Custom 404 page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # SEO robots.txt
├── components/            # Reusable components
│   ├── ui/               # UI component library (shadcn/ui)
│   ├── navigation.tsx    # Navigation component
│   └── footer.tsx        # Footer component
├── data/                  # Static data
│   └── projects.json     # Project information
├── public/                # Static assets
├── docs/                  # Documentation
└── .env.example          # Environment variables template
```

## 🛠️ Development

### Available Scripts

```bash
pnpm dev         # Start development server
pnpm build       # Create production build
pnpm start       # Start production server
pnpm lint        # Run ESLint
```

### Build Verification

```bash
# Ensure clean build
pnpm build

# Check for TypeScript errors
npx tsc --noEmit
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables

Add these in your deployment platform:

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_CONTACT_EMAIL`

## 📖 Documentation

- **[Implementation Summary](IMPLEMENTATION_SUMMARY.md)** - Completed features and fixes
- **[Problems & Improvements](PROBLEMS_AND_IMPROVEMENTS.md)** - Technical analysis and optimization guide
- **[Loading Animation Docs](docs/)** - Loading screen customization

## 🏗️ Project Information

### Company Details

**Sanjeevini Services Pvt Ltd**
- **Location:** #28, 27th Main, BTM Layout, Bengaluru, Karnataka – 560068
- **Established:** 2025
- **Phone:** +91-9481545865, +91-8073365694
- **WhatsApp:** +91-8867301822
- **Email:** info@sanjeevinibuilders.com

### Services

- Residential Apartments
- Villa / Row House Development
- Layout Formation & Land Development
- Warehouse Development
- Property Maintenance & Facility Management
- Commercial / Mixed-use Projects

## 👥 Team

- **Directors:** Diwakara V, Vijay Kummar M, Vijay Kumar P
- **Project Manager:** Sarvana Krishnan
- **Site Engineer:** Murthy
- **Interior Head:** Edwin Pinto
- **Lead Architect:** Appu

## 🔧 Technical Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16.0.0 |
| UI Library | React 19.2.0 |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 4.1.9 |
| Components | Radix UI (shadcn/ui) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | EmailJS |
| Analytics | Vercel Analytics |

## ✅ Production Readiness Checklist

- [x] TypeScript strict mode enabled
- [x] Build succeeds without errors
- [x] Environment variables configured
- [x] Error boundaries implemented
- [x] Loading states added
- [x] SEO optimization (sitemap, robots.txt, structured data)
- [x] Form validation with proper error handling
- [x] Mobile-responsive design
- [x] Accessibility compliance
- [x] Image optimization enabled
- [ ] EmailJS credentials configured (user action required)
- [ ] Production domain configured
- [ ] Analytics configured

## 📝 License

Copyright © 2025 Sanjeevini Services Pvt Ltd. All rights reserved.

---

**Built with ❤️ using Next.js**
