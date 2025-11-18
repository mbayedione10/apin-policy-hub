# Africa Policy Intelligence Network (APIN)

## Project Overview
A full-stack web application for the Africa Policy Intelligence Network think tank. This project was migrated from Lovable to Replit on November 18, 2025.

### Purpose
A panafriccan think tank website featuring:
- Publications and research papers
- Events and news
- Team member profiles
- Member organization directory
- Resource library

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Express.js
- **Build Tool**: Vite
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form + Zod validation

## Project Structure
```
├── client/              # Frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Static data files
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
│   ├── public/          # Static assets
│   └── index.html       # Entry HTML file
├── server/              # Backend application
│   ├── index.ts         # Express server entry point
│   ├── routes.ts        # API routes
│   └── vite.ts          # Vite development server integration
└── shared/              # Shared types and schemas
```

## Recent Changes
- **2025-11-18**: Migrated from Lovable to Replit fullstack template
  - Restructured project with client/server separation
  - Converted routing from react-router-dom to wouter
  - Added Express backend with Vite integration
  - Configured for Replit deployment (port 5000)

## Development

### Running the Application
The application is configured to run automatically. The workflow "Start application" runs:
```bash
npm run dev
```

This starts both the Express backend and Vite development server on port 5000.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## Configuration Notes
- The server binds to `0.0.0.0:5000` for Replit compatibility
- Vite is configured to serve from the `client` directory
- All frontend routes are handled by wouter for client-side routing
- Backend API routes should be added to `server/routes.ts`

## User Preferences
None specified yet.
