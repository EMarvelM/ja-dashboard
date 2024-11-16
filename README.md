# Job Application Dashboard

A full-stack application for managing job applications, built with Next.js frontend and NestJS backend. The system provides a modern, user-friendly interface for tracking job applications while maintaining a robust and secure backend API.

## Live Demo

- **Frontend**: [Job Application Dashboard](https://ja-dashboard-two.vercel.app/)
- **Backend API**: [Job Application API](https://ja-dashboard.onrender.com)

## Project Structure

```
ja-dashboard/
├── frontend/
│   └── job-application/      # Next.js frontend application
└── backend/
    └── job-application-dashboard/    # NestJS backend application
```

## Technology Stack

### Frontend
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Features**:
  - Responsive design
  - Static and dynamic pages
  - Modern UI/UX
  - Type-safe development

### Backend
- **Framework**: NestJS
- **Database**: PostgreSQL/MySQL with TypeORM
- **Authentication**: JWT
- **Deployment**: Render
- **Features**:
  - RESTful API
  - Secure authentication
  - Database integration
  - Docker support

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend/job-application/
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
npm start
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend/job-application-dashboard/
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run start:dev
```

4. Build for production:
```bash
npm run build
npm run start:prod
```

The backend API will be available at `http://localhost:3000`

## Deployment

- Frontend is deployed on Vercel
- Backend is deployed on Render -> in a case were unable the deployment did not fail but stopped running as a result of inactivity

## Project Status

This project is actively maintained and updated. Feel free to contribute or report issues.

## Repository

```bash
git clone https://github.com/EMarvelM/ja-dashboard.git
```
