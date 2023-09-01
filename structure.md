/api-expressjs-typescript
|
|-- /src
|   |
|   |-- /config
|   |   |-- db.ts               # MongoDB connection setup
|   |   |-- redis.ts            # Redis connection setup
|   |   `-- elasticsearch.ts    # Elasticsearch connection setup
|   |
|   |-- /models
|   |   |-- userSchema.ts       # Mongoose schema for users
|   |   `-- ...                 # Other database models
|   |
|   |-- /routes
|   |   |-- userRoutes.ts       # Routes related to user operations
|   |   `-- ...                 # Other route files
|   |
|   |-- /middlewares
|   |   |-- authMiddleware.ts   # Authentication & Authorization middlewares
|   |   |-- rateLimit.ts        # Rate limiting middleware
|   |   |-- validation.ts       # Input validation middleware
|   |   `-- errorHandling.ts    # Error handling middleware
|   |
|   |-- /services
|   |   |-- authService.ts      # Service for authentication-related operations
|   |   |-- emailService.ts     # Service for sending emails
|   |   |-- searchService.ts    # Service for search operations using Elasticsearch
|   |   `-- notificationService.ts # Service for sending notifications
|   |
|   |-- /jobs
|   |   |-- weeklyNewsletter.ts # Cron job for sending weekly newsletters
|   |   `-- ...                 # Other scheduled tasks
|   |
|   |-- /utils
|   |   |-- logger.ts           # Utility for logging
|   |   `-- ...                 # Other utilities
|   |
|   `-- index.ts                # Main application entry point
|
|-- /test                        # Test cases and testing utilities
|
|-- package.json                 # Project dependencies and scripts
|-- tsconfig.json                # TypeScript configuration
|-- .env                         # Environment variables
`-- ...                          # Other config files like .gitignore, Dockerfile, etc.
