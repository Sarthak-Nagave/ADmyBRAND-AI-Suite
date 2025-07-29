# ADmyBRAND AI Suite - SaaS Landing Page

## Overview

This is a modern, production-ready SaaS landing page for ADmyBRAND AI Suite - a fictional AI-powered marketing automation platform. The application is built using a full-stack architecture with React frontend and Express backend, featuring a comprehensive set of sections including hero, features, pricing, testimonials, FAQ, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React SPA built with Vite
- **Backend**: Express.js REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth interactions
- **Validation**: Zod for type-safe form validation

## Key Components

### Frontend Architecture
- **Component Library**: Built on shadcn/ui with custom components for pricing cards, feature cards, testimonials, and contact forms
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query for server state and React Hook Form for form state
- **Styling**: Tailwind CSS with CSS variables for theming support
- **Animations**: Framer Motion for scroll animations, hover effects, and transitions

### Backend Architecture
- **API Structure**: RESTful endpoints for contact form submission and newsletter signup
- **Data Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware
- **Storage**: Configurable storage interface (currently in-memory, extensible to database)

### Component Structure
```
/components
  /sections     - Main page sections (hero, features, pricing, etc.)
  /ui          - Reusable UI components (buttons, cards, forms, etc.)
```

## Data Flow

1. **Contact Form Submission**: Form data is validated client-side with React Hook Form + Zod, then sent to `/api/contact` endpoint
2. **Newsletter Signup**: Email validation and submission to `/api/newsletter` endpoint
3. **Real-time Feedback**: Toast notifications for user actions and form submissions
4. **Smooth Navigation**: Scroll-based navigation with smooth scrolling to sections

## External Dependencies

### Core Dependencies
- **@radix-ui/***: Accessible UI primitives for components
- **framer-motion**: Animation library for smooth interactions
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form state management and validation
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the application
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast bundling for production

## Deployment Strategy

### Development Setup
- **Dev Server**: Vite dev server with HMR for frontend
- **API Development**: Express server with auto-reload via tsx
- **Database**: PostgreSQL with migrations via Drizzle Kit

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle handles schema migrations and connections
- **Static Assets**: Express serves built frontend assets in production

### Database Configuration
- Uses Drizzle ORM with PostgreSQL dialect
- Migrations stored in `./migrations` directory
- Schema defined in `shared/schema.ts` for type safety
- Configurable via `DATABASE_URL` environment variable

### Key Features
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Performance Optimized**: Code splitting, lazy loading, and optimized images
- **Accessibility**: ARIA labels and semantic HTML throughout
- **SEO Ready**: Proper meta tags and semantic structure
- **Form Validation**: Client and server-side validation with user-friendly error messages
- **Modern UI/UX**: Glassmorphism effects, smooth animations, and modern design patterns

The application is designed to be production-ready with proper error handling, validation, and a scalable architecture that can easily be extended with additional features or integrated with external services.