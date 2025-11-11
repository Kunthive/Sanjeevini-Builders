# Sanjeevini Services Pvt Ltd - Website Documentation

## Overview

This document provides comprehensive documentation for the Sanjeevini Services Pvt Ltd website, a modern, mobile-first real estate development website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technology Stack](#technology-stack)
3. [Features & Improvements](#features--improvements)
4. [Mobile-First Design](#mobile-first-design)
5. [Project Details Enhancement](#project-details-enhancement)
6. [New Sections](#new-sections)
7. [EmailJS Configuration](#emailjs-configuration)
8. [Environment Variables](#environment-variables)
9. [Development Guide](#development-guide)
10. [Deployment](#deployment)
11. [Future Enhancements](#future-enhancements)

## Project Structure

```
sanjeevini-services/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage with hero, projects, testimonials, sustainability
│   ├── layout.tsx                 # Root layout with navigation and footer
│   ├── about/
│   │   └── page.tsx              # About page with vision, mission, and services
│   ├── projects/
│   │   ├── page.tsx              # Projects listing with filtering
│   │   ├── residential/
│   │   │   └── page.tsx          # Dedicated Residential Projects page
│   │   └── [slug]/
│   │       └── page.tsx          # Enhanced project detail pages
│   ├── team/
│   │   └── page.tsx              # Team page
│   └── contact/
│       └── page.tsx              # Contact page with EmailJS integration
├── components/
│   ├── navigation.tsx            # Mobile-responsive navigation
│   ├── footer.tsx                # Site footer
│   ├── icons.tsx                 # Custom SVG icons
│   └── ui/                       # Reusable UI components (Radix UI)
├── data/
│   └── projects.json             # Project data
├── public/                        # Static assets (images)
└── app/
    └── globals.css               # Global styles and Tailwind configuration
```

## Technology Stack

### Core Technologies
- **Next.js 16.0.0** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.x** - Type safety
- **Tailwind CSS 4.1.9** - Utility-first CSS framework

### Key Libraries
- **@emailjs/browser** - Email integration for contact forms
- **@radix-ui** - Accessible UI primitives
- **lucide-react** - Icon library
- **next-themes** - Dark mode support
- **@vercel/analytics** - Analytics integration

## Features & Improvements

### ✅ Completed Enhancements

#### 1. **Enhanced Project Detail Pages**
- **Comprehensive Project Data:**
  - Project scope with detailed descriptions
  - Architectural style information
  - Construction status (Completed/In Progress/Planned) with visual badges
  - Complete list of key materials used
  - Detailed construction methods employed
  - Location, team size, and project timeline
  - Enhanced gallery with Next.js Image optimization

- **Improved Visual Hierarchy:**
  - Mobile-optimized hero sections
  - Card-based layout for materials and methods
  - Status badges with color coding
  - Responsive image galleries

#### 2. **Dedicated Residential Projects Section**
- New dedicated route: `/projects/residential`
- Curated showcase of residential projects
- Enhanced project cards with highlights and key metrics
- Value proposition section highlighting residential expertise
- Direct navigation from main projects page

#### 3. **Client Testimonials Section**
- Added to homepage (`#testimonials`)
- Three featured testimonials with star ratings
- Client names, roles, and project associations
- Responsive grid layout (1 column mobile, 3 columns desktop)

#### 4. **Sustainability Commitment Section**
- New section on homepage (`#sustainability`)
- Four key sustainability pillars:
  - Green Materials
  - Energy Efficiency
  - Water Conservation
  - Waste Management
- Icon-based visual presentation

#### 5. **Mobile-First UX Improvements**
- **Thumb-Friendly Navigation:**
  - Minimum 44px touch targets (WCAG 2.1 AA compliance)
  - Bottom sheet mobile menu with safe area insets
  - Sticky filter bar on projects page
  - Optimized button spacing and sizes

- **Content Prioritization:**
  - Hero sections optimized for mobile viewports
  - Progressive content disclosure
  - Reduced visual clutter on smaller screens
  - Touch-optimized interactions

- **Visual Consistency:**
  - Consistent spacing system (4px base unit)
  - Unified color palette with proper contrast ratios
  - Coherent typography hierarchy
  - Smooth transitions and animations

#### 6. **Improved Information Architecture**
- Enhanced navigation structure
- Clear section hierarchy
- Strategic placement of CTAs
- Improved content flow

### 🔄 Technical Improvements

#### Performance Optimizations
- Next.js Image component for optimized loading
- Proper image sizing with `sizes` attribute
- Lazy loading for below-the-fold content
- Reduced bundle size with tree-shaking

#### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance (WCAG AA)

#### Code Quality
- TypeScript for type safety
- Consistent code formatting
- Reusable component patterns
- Proper error handling

## Mobile-First Design Principles

### Design Philosophy
1. **Progressive Enhancement:** Base experience works on all devices, enhanced on larger screens
2. **Touch-First:** All interactions designed for touch interfaces
3. **Content-First:** Critical content accessible immediately
4. **Performance:** Fast loading and smooth interactions on mobile networks

### Responsive Breakpoints
- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md)
- **Desktop:** > 1024px (lg, xl)

### Key Mobile Optimizations
- Collapsible navigation menu
- Optimized image sizes and formats
- Touch-friendly form inputs
- Reduced animation on mobile (respects `prefers-reduced-motion`)
- Safe area insets for notched devices

## Project Details Enhancement

### Enhanced Project Data Structure

Each project now includes:

```typescript
{
  name: string
  type: string
  category: "residential" | "commercial" | "restoration"
  location: string
  year: string
  team: string
  description: string
  overview: string
  projectScope: string              // NEW: Detailed scope description
  architecturalStyle: string       // NEW: Architectural style
  constructionStatus: "completed" | "in-progress" | "planned"  // NEW
  materials: string[]               // NEW: List of key materials
  constructionMethods: string[]     // NEW: Construction techniques
  features: string[]
  specifications: Array<{label: string, value: string}>
  gallery: string[]
  nextProject?: { slug: string; name: string }
}
```

### Visual Status Indicators
- **Completed:** Green badge
- **In Progress:** Blue badge
- **Planned:** Yellow badge

## EmailJS Configuration

### Setup Instructions

1. **Create EmailJS Account:**
   - Sign up at [EmailJS.com](https://www.emailjs.com)
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template

2. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_CONTACT_EMAIL=info@sanjeevinibuilders.com
   ```

3. **Email Template Variables:**
   The contact form sends the following variables:
   - `to_email`: Recipient email
   - `from_name`: Sender's name
   - `from_email`: Sender's email
   - `phone`: Phone number
   - `project_type`: Selected project type
   - `message`: Message content

### Security Considerations
- Public keys are safe to expose in client-side code
- Never expose service secrets in environment variables
- Consider rate limiting for production
- Implement form validation on both client and server

## Environment Variables

### Setup Instructions

1. Create a `.env.local` file in the root directory (copy from the example below):

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_CONTACT_EMAIL=info@sanjeevinibuilders.com
```

2. Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com)

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key | `user_xxxxxxxxxxxxx` |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID | `service_xxxxx` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Email template ID | `template_xxxxx` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Default contact email | `info@sanjeevinibuilders.com` |

### Optional Variables
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - For enhanced map features
- `NEXT_PUBLIC_ANALYTICS_ID` - For analytics tracking

**Note:** `.env.local` is gitignored and should never be committed to version control.

## Development Guide

### Prerequisites
- Node.js 18+ or later
- npm, yarn, or pnpm package manager

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Deployment

### Recommended Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting service

### Vercel Deployment Steps

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Add environment variables in Vercel settings
4. Deploy automatically on push to main branch

### Environment Variables in Production
Ensure all `NEXT_PUBLIC_*` variables are set in your deployment platform's environment settings.

## Changelog

### Version 2.0.0 (Current)

#### Added
- Enhanced project detail pages with comprehensive data
- Dedicated Residential Projects section (`/projects/residential`)
- Client Testimonials section on homepage
- Sustainability Commitment section
- Mobile-first UX improvements
- Enhanced project filtering with icons
- Status badges for project completion status
- Improved image optimization with Next.js Image component

#### Improved
- Mobile navigation experience
- Touch target sizes (minimum 44px)
- Content hierarchy and readability
- Visual consistency across pages
- Form accessibility and UX

#### Fixed
- Image loading performance
- Mobile viewport issues
- Navigation accessibility

### Version 1.0.0 (Initial)
- Basic website structure
- Project listings
- Contact form
- Team page
- About page

## Future Enhancements

### Short-Term (Next 1-2 Months)
- [ ] Add project filtering by status (completed/in-progress/planned)
- [ ] Implement search functionality for projects
- [ ] Add project comparison feature
- [ ] Enhanced gallery with lightbox
- [ ] Blog/news section for company updates
- [ ] Project timeline visualization
- [ ] Interactive floor plans
- [ ] 360° virtual tours

### Medium-Term (3-6 Months)
- [ ] Client portal for project updates
- [ ] Real-time chat support
- [ ] Project cost calculator
- [ ] Integration with CRM system
- [ ] Advanced analytics and tracking
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] PDF project brochures download

### Long-Term (6+ Months)
- [ ] AI-powered project recommendations
- [ ] AR/VR project visualization
- [ ] Live project progress tracking
- [ ] Client testimonial video gallery
- [ ] Sustainability impact calculator
- [ ] Mobile app development
- [ ] Integration with smart home systems

## Best Practices Applied

### UX/UI
- ✅ Mobile-first responsive design
- ✅ Thumb-friendly navigation zones
- ✅ Consistent visual hierarchy
- ✅ Clear call-to-action placement
- ✅ Loading states and feedback
- ✅ Error handling and messages

### Performance
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Efficient bundle sizes
- ✅ Caching strategies

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Color contrast compliance
- ✅ Screen reader compatibility

### SEO
- ✅ Semantic markup
- ✅ Meta tags and Open Graph
- ✅ Alt text for images
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly design

## Industry Best Practices

### Construction Industry Standards
- **Trust Building:** Testimonials, certifications, and portfolio showcase
- **Professional Presentation:** High-quality images and detailed project information
- **Clear Communication:** Easy contact methods and information architecture
- **Sustainability Focus:** Highlighting green building practices

### Real Estate Website Patterns
- **Project Showcasing:** Comprehensive project details with visual storytelling
- **Lead Generation:** Multiple contact methods (form, phone, WhatsApp)
- **Credibility Indicators:** Stats, testimonials, team profiles
- **Mobile Optimization:** Critical for on-the-go property browsing

## Support & Maintenance

### Regular Maintenance Tasks
- Update project portfolio quarterly
- Refresh testimonials
- Update team information
- Review and update contact information
- Monitor EmailJS usage and limits
- Update dependencies monthly
- Security audits

### Performance Monitoring
- Monitor Core Web Vitals
- Track page load times
- Monitor form submission rates
- Analyze user behavior patterns

## Company Information

**Sanjeevini Services Pvt Ltd**
- Address: #28, 27th Main, BTM Layout, Bengaluru, Karnataka – 560068
- Established: 2025
- Tagline: "Building Trust. Shaping Skylines. Creating Spaces That Last."
- Phone: 9481545865, 8073365694
- WhatsApp: 8867301822
- Email: info@sanjeevinibuilders.com

## About the Company

Sanjeevini Services Pvt Ltd is a Bengaluru-based real estate development company established in 2025. The firm specializes in premium residential apartments, villa communities, layout formation, and warehouse development. With a strong foundation built on quality, transparency, and timely delivery, Sanjeevini Services is committed to creating sustainable spaces that enhance lifestyles and deliver long-term value to its customers and investors.

## Core Services

- Residential Apartments
- Villa / Row House Development
- Layout Formation & Land Development
- Warehouse Development
- Property Maintenance & Facility Management
- Commercial / Mixed-use Projects

## Vision

To be one of Bengaluru's most trusted and innovative real estate brands, delivering value through quality, transparency, and design excellence.

## Mission

To build sustainable spaces that enrich lives and create long-term value for our customers and stakeholders.

## License

Copyright © 2025 Sanjeevini Services Pvt Ltd. All rights reserved.

---

**Documentation Version:** 2.1.0
**Last Updated:** January 2025
**Maintained By:** Development Team

