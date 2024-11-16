# Job Application Backend

This is the backend for the Job Application Dashboard, built using NestJS. The backend serves as the API and business logic layer for managing job applications. It is deployed on Render.

## Live Demo

You can view the live version of the API at [Job Application Backend on Render](https://ja-dashboard.onrender.com).

## Features

- **RESTful API**: Provides endpoints for managing job applications, users, and related data.
- **Authentication**: Implements JWT-based authentication for secure access to the API routes.
- **Optimized Performance**: Uses NestJS's modular architecture for efficient request handling.
- **Database Integration**: Supports database interactions using TypeORM (PostgreSQL/MySQL).
- **Docker Support**: Optionally runs in a containerized environment using Docker.
- **Environment Configurations**: Supports environment variables for deployment.

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM**: Object-relational mapping (ORM) for interacting with databases.
- **PostgreSQL/MySQL**: Database management systems (you can choose based on your configuration).
- **JWT**: JSON Web Tokens for user authentication and authorization.
- **Docker**: For containerization and running the application in isolated environments.
- **Render**: Cloud platform for deploying and hosting the application.

## Setup

### 1. Clone the Repository

Clone the repository to your local machine using:

```bash
git clone https://github.com/EMarvelM/ja-dashboard.git
cd ja-dashboard/backend/job-application-bashboard/

```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install

```

### 3. Run the Application Locally

To run the application in development mode, use the following command:

```bash
npm run start:dev

```
This will start the backend server on http://localhost:3000.


### 4. Build for Production

To create a production-ready build, use:

```bash
npm run build

```
After the build is complete, you can start the application in production mode:

```bash
npm run start:prod

```
This will run the backend in production mode.
