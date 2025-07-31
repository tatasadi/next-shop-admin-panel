# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a full-stack e-commerce admin panel with separate frontend and backend applications:

- **Frontend**: Next.js 15 application in `/frontend` directory using App Router, TypeScript support disabled
- **Backend**: Express.js REST API in `/backend` directory using MongoDB with Mongoose

## Development Commands

### Frontend (Next.js)
```bash
cd frontend
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend (Express.js)
```bash
cd backend
npm run dev          # Start development server with nodemon
npm start            # Start production server
```

## Architecture Overview

### Frontend Architecture
- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: Tailwind CSS v4
- **State Management**: TanStack React Query for server state
- **HTTP Client**: Axios with interceptors for token refresh
- **Language**: Persian/Farsi (RTL layout)
- **Font**: Vazir font family for Persian text

### Backend Architecture
- **Framework**: Express.js with class-based application structure
- **Database**: Azure Cosmos DB with MongoDB API using Mongoose ODM
- **Authentication**: JWT tokens with refresh token mechanism
- **File Structure**: MVC pattern with controllers, models, routes, validators, and middlewares

### Key Backend Components
- **Application Class**: Main server class in `/backend/app/server.js` handles server setup, DB connection, middleware configuration
- **Routes**: Organized by feature (admin, user, product, category, payment, cart)
- **Middleware**: Authentication (`verifyAccessToken`), permissions, validation
- **Models**: Mongoose schemas for User, Product, Category, Coupon, Payment

### Frontend Route Structure
- **User Routes**: `/auth`, `/products`, `/cart`, `/complete-profile`
- **Profile Routes**: `/profile/me`, `/profile/payments`
- **Admin Routes**: `/admin` with sub-routes for products, categories, coupons, users, payments

### Key Services
- **HTTP Service**: Centralized Axios instance with automatic token refresh
- **Feature Services**: authServices, productService, categoryService, etc.
- **Custom Hooks**: useAuth, useProducts, useCategories, etc.

## Environment Configuration

### Backend Environment Variables
- `PORT`: Server port (default: 5000)
- `APP_DB`: Azure Cosmos DB connection string (MongoDB API format)
- `ALLOW_CORS_ORIGIN`: CORS origin configuration
- `COOKIE_PARSER_SECRET_KEY`: Cookie parser secret

### Frontend Environment Variables
- `NEXT_PUBLIC_API_URL`: Backend API base URL

## Deployment

### Backend Deployment (Azure App Service)
- **GitHub Actions**: Automated deployment via `.github/workflows/deploy-backend.yml`
- **Configuration Files**: 
  - `backend/web.config` - IIS configuration for Azure App Service
  - `backend/.deployment` - Deployment configuration
- **Required Secrets**: 
  - `AZURE_WEBAPP_NAME` - Your Azure App Service name
  - `AZURE_WEBAPP_PUBLISH_PROFILE` - Download from Azure portal

### Environment Variables for Production
- Set these in Azure App Service Configuration:
  - `APP_DB` - Azure Cosmos DB connection string
  - `ALLOW_CORS_ORIGIN` - Frontend URL (e.g., https://yourfrontend.vercel.app)
  - `COOKIE_PARSER_SECRET_KEY` - Random secret string
  - `PORT` - Automatically set by Azure (usually 80 or 8080)

## Development Notes

- The application uses Persian language and RTL layout
- Authentication uses JWT with automatic refresh token handling
- Admin routes are protected with authentication middleware
- The frontend uses React Query for efficient data fetching and caching
- Components are organized by feature and include reusable UI components
- Custom hooks abstract data fetching logic
- The backend follows a clean MVC architecture with proper error handling