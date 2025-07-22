# Developer Portfolio Website

## Overview

This is a modern, interactive developer portfolio website built for Sushil Sanjay Rahatole. The application showcases a full-stack developer's work, skills, and experience through a visually stunning and highly interactive interface. The portfolio is designed to look professionally crafted rather than AI-generated, featuring custom layouts, smooth animations, and a clean user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript for type safety and better development experience
- **UI Framework**: Radix UI components with shadcn/ui for consistent, accessible design system
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animation**: Framer Motion for smooth, interactive animations and page transitions
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form handling
- **Theme Management**: Custom theme provider supporting dark/light modes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for consistency across frontend and backend
- **Database**: PostgreSQL configured with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **Development Setup**: Vite for fast development builds and hot module replacement

### Build and Development
- **Build Tool**: Vite for frontend bundling with esbuild for backend compilation
- **Development Server**: Custom Express server with Vite middleware for HMR
- **TypeScript Configuration**: Shared tsconfig with path mapping for clean imports
- **Package Management**: npm with lockfile for consistent dependencies

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated greeting with dynamic typing effects and interactive visuals
2. **About Section**: Personal introduction with tech stack visualization using React Icons
3. **Projects Section**: Interactive project cards with hover effects, tech stack badges, and links
4. **Contact Section**: Functional contact form with real-time validation and database storage

### UI Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Theme Toggle**: Dark/light mode switching with persistent preferences
- **Scroll Spy**: Automatic section highlighting based on scroll position
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Glass Morphism**: Modern glassmorphism effects for cards and navigation

### Animation Features
- **Framer Motion**: Page transitions, scroll-triggered animations, and micro-interactions
- **Floating Shapes**: Animated background elements for visual interest
- **Hover Effects**: Interactive button and card hover states
- **Scroll Animations**: Elements animate into view as user scrolls

## Data Flow

### Contact Form Processing
1. User fills out contact form with validation
2. React Hook Form handles client-side validation using Zod schemas
3. Form submission triggers React Query mutation
4. Data sent to `/api/contact` endpoint via POST request
5. Backend validates data using shared Zod schema
6. Contact message stored in PostgreSQL database via Drizzle ORM
7. Success/error feedback displayed to user via toast notifications

### Content Management
- Static content for personal information and projects stored in component files
- Dynamic content (contact messages) stored in PostgreSQL database
- Shared TypeScript schemas ensure type safety across frontend and backend

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for UI and state management
- **UI Components**: Radix UI primitives, shadcn/ui components for consistent design
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Animation**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form, Hookform Resolvers for form handling
- **Validation**: Zod for runtime type checking and validation

### Backend Dependencies
- **Database**: Drizzle ORM, @neondatabase/serverless for database operations
- **Server**: Express.js, tsx for TypeScript execution
- **Utilities**: date-fns for date manipulation, nanoid for unique IDs

### Development Tools
- **Build Tools**: Vite, esbuild for fast builds and development
- **TypeScript**: Full TypeScript support across the entire stack
- **PostCSS**: Autoprefixer and Tailwind CSS processing

## Deployment Strategy

### Production Build
- Frontend built using Vite to `dist/public` directory
- Backend compiled using esbuild to `dist/index.js`
- Static assets served by Express in production mode
- Environment variables for database connection and configuration

### Database Setup
- PostgreSQL database provisioned via Neon Database
- Database schema managed through Drizzle migrations
- Connection string provided via `DATABASE_URL` environment variable
- Schema files shared between frontend and backend for type consistency

### Development Workflow
- `npm run dev`: Starts development server with HMR
- `npm run build`: Creates production build
- `npm run start`: Runs production server
- `npm run db:push`: Pushes schema changes to database

### Environment Configuration
- Development: Vite dev server with Express API routes
- Production: Express server serving static files and API
- Database: PostgreSQL via Neon with connection pooling
- Theme: Persistent theme preferences via localStorage