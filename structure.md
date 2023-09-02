/api-expressjs-typescript
|
|-- /src
|   |
|   |-- /config
|   |   |-- db.ts               # MongoDB connection setup
|   |   |-- redis.ts            # Redis connection setup
|   |   |-- elasticsearch.ts    # Elasticsearch connection setup
|   |   |-- email.ts            # Email service configuration
|   |   `-- rateLimit.ts        # Rate limiting configuration
|   |
|   |-- /models
|   |   |-- userSchema.ts       # Mongoose schema for users
|   |   |-- productSchema.ts    # Mongoose schema for products
|   |   |-- orderSchema.ts      # Mongoose schema for orders
|   |   `-- notificationSchema.ts # Mongoose schema for notifications
|   |
|   |-- /routes
|   |   |-- userRoutes.ts       # Routes related to user operations
|   |   |-- productRoutes.ts    # Routes related to product operations
|   |   |-- orderRoutes.ts      # Routes related to order operations
|   |   `-- notificationRoutes.ts # Routes related to notifications
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
|   |   |-- backupDatabase.ts   # Cron job for backing up the database
|   |   |-- cleanUpLogs.ts      # Cron job for cleaning up old logs
|   |   `-- updateSearchIndex.ts # Cron job for updating Elasticsearch indices
|   |
|   |-- /utils
|   |   |-- logger.ts           # Utility for logging
|   |   |-- errorHandler.ts     # Utility for handling errors
|   |   |-- paginator.ts        # Utility for paginating results
|   |   `-- validator.ts        # Utility for validating data
|   |
|   `-- index.ts                # Main application entry point
|
|-- /test                        # Test cases and testing utilities
|
|-- package.json                 # Project dependencies and scripts
|-- tsconfig.json                # TypeScript configuration
|-- .env                         # Environment variables
|-- Dockerfile                   # Docker configuration file
|-- .dockerignore                # Files and directories to ignore in Docker
|-- .gitignore                   # Files and directories to ignore in Git
`-- README.md                    # Project documentation
