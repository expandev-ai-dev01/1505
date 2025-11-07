# Catálogo de Bolos - Backend API

Backend REST API for the digital bakery catalog system.

## Project Overview

This is a Node.js/Express backend API built with TypeScript, designed to support a digital bakery catalog with product listings, filters, detailed product views, reviews, and shopping cart functionality.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Validation**: Zod
- **Architecture**: REST API with in-memory data storage

## Project Structure

```
src/
├── api/                    # API Controllers (feature endpoints will be added here)
├── routes/                 # Route definitions
│   ├── v1/                # Version 1 routes
│   │   ├── externalRoutes.ts  # Public routes
│   │   ├── internalRoutes.ts  # Authenticated routes
│   │   └── index.ts       # V1 router
│   └── index.ts           # Main router (version routing)
├── middleware/            # Express middleware
│   ├── error/            # Error handling
│   └── notFound/         # 404 handler
├── services/             # Business logic (feature services will be added here)
├── utils/                # Utility functions
│   ├── response/         # Response formatting
│   └── validation/       # Zod validation schemas
├── constants/            # Application constants
├── config/               # Configuration management
└── server.ts             # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
```

### Development

```bash
# Run in development mode with hot reload
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix
```

## API Versioning

The API uses URL path versioning:

- **Base URL**: `/api/v1`
- **Public endpoints**: `/api/v1/external/...`
- **Authenticated endpoints**: `/api/v1/internal/...`

## Environment Variables

See `.env.example` for all available configuration options:

- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 3000)
- `API_VERSION`: API version (default: v1)
- `CORS_ORIGINS`: Allowed CORS origins (comma-separated)

## Health Check

The API provides a health check endpoint:

```
GET /health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "v1"
}
```

## Response Format

### Success Response

```json
{
  "success": true,
  "data": {},
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Development Guidelines

- Follow TypeScript strict mode
- Use Zod for request validation
- Implement proper error handling
- Write tests for all business logic
- Follow ESLint configuration
- Use path aliases (@/) for imports
- Document code with TSDoc comments

## Next Steps

This is the foundation structure. Feature-specific implementations will be added:

1. Product catalog endpoints
2. Product filtering logic
3. Product details retrieval
4. Reviews system
5. Shopping cart management
6. Mock data services

## License

ISC