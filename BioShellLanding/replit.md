# BioShell - Soil Restoration Platform

## Overview

BioShell is a full-stack web application showcasing an innovative biodegradable capsule solution for soil restoration in post-conflict and climate-damaged agricultural regions. The application serves as a marketing website and contact platform for the BioShell product, featuring company information, product details, team profiles, and a contact form system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system and Shadcn/ui components
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submissions
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: In-memory storage with interface for easy database integration
- **Development**: Hot module replacement via Vite middleware integration

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Defined in `shared/schema.ts` with Zod validation schemas
- **Tables**: 
  - `users` - User authentication (prepared for future use)
  - `contact_submissions` - Contact form submissions with timestamps
- **Migrations**: Drizzle Kit for database migrations

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact-submissions` - Retrieve all contact submissions (admin endpoint)

### UI Components
- **Design System**: Shadcn/ui components with custom BioShell theming
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Comprehensive UI components (buttons, forms, dialogs, etc.)
- **Typography**: Inter font family for clean, modern appearance

### Form Management
- **Validation**: Zod schemas for both client and server-side validation
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Toast Notifications**: Success/error feedback using toast system

## Data Flow

### Contact Form Submission
1. User fills out contact form (name, email, message)
2. Client-side validation using React Hook Form + Zod
3. Form data sent to `/api/contact` endpoint
4. Server validates data using shared Zod schema
5. Valid data stored in database via Drizzle ORM
6. Success response triggers toast notification
7. Form resets for new submissions

### Content Delivery
1. Static content served through Vite development server
2. React components render marketing sections
3. Smooth scrolling navigation between sections
4. Responsive images and optimized assets

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL driver for serverless deployment
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI primitives for components
- **drizzle-orm**: Type-safe ORM for database operations
- **react-hook-form**: Performant form library
- **zod**: Schema validation library
- **wouter**: Minimalist routing library

### Development Dependencies
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

### Database
- **PostgreSQL**: Primary database (configured for Neon in production)
- **Drizzle Kit**: Database migration and introspection tool

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both Vite dev server and Express API
- **Hot Reload**: Vite middleware integration for seamless development
- **Type Checking**: Continuous TypeScript compilation

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`

### Replit Deployment
- **Runtime**: Node.js 20 with PostgreSQL 16 module
- **Build Command**: `npm run build` (frontend + backend bundling)
- **Start Command**: `npm run start` (production server)
- **Port**: Application runs on port 5000
- **Autoscale**: Configured for automatic scaling

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

## Changelog

```
Changelog:
- June 14, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```