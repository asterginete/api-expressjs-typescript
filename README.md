# API ExpressJS TypeScript

A comprehensive backend application with various features including user management, product management, order processing, notifications, and more.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Scheduled Jobs](#scheduled-jobs)
- [Utilities](#utilities)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Management**: Register, login, and manage user profiles.
- **Product Management**: Add, update, delete, and list products.
- **Order Processing**: Place and manage orders.
- **Notifications**: Send and manage notifications.
- **Search**: Elasticsearch integration for product search.
- **Database**: MongoDB integration for data persistence.
- **Caching**: Redis integration for caching.
- **Email**: Nodemailer integration for sending emails.
- **Logging**: Comprehensive logging using Winston.
- **Error Handling**: Global error handler for handling exceptions.
- **Validation**: Input validation using express-validator.
- **Rate Limiting**: API rate limiting to prevent abuse.
- **Authentication & Authorization**: JWT-based authentication and role-based authorization.
- **Scheduled Jobs**: Cron jobs for tasks like sending weekly newsletters, database backups, and more.

## Prerequisites

- Node.js
- MongoDB
- Redis
- Elasticsearch

## Installation

1. Clone the repository:

```bash
git clone https://github.com/asterginete/api-expressjs-typescript.git
cd api-expressjs-typescript
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and set up your environment variables:

```env
MONGODB_URI=mongodb://localhost:27017/myapp
REDIS_URL=redis://localhost:6379
ELASTICSEARCH_URI=http://localhost:9200
JWT_SECRET=jwt_secret
EMAIL_FROM=no-reply@example.com
```

4. Start the services (MongoDB, Redis, Elasticsearch).

5. Run the application:

```bash
npm start
```

## Usage

Once the server is running, you can access the API at `http://localhost:3000/api`.

## API Endpoints

- **Users**:
  - POST `/api/users/register`: Register a new user.
  - POST `/api/users/login`: Login a user.
  - GET `/api/users/profile`: Fetch user profile.
  - PUT `/api/users/profile`: Update user profile.
  - DELETE `/api/users/:userId`: Delete a user.

- **Products**:
  - POST `/api/products`: Add a new product.
  - GET `/api/products`: List all products.
  - GET `/api/products/:productId`: Fetch a specific product.
  - PUT `/api/products/:productId`: Update a product.
  - DELETE `/api/products/:productId`: Delete a product.

... (similarly for orders and notifications)

## Scheduled Jobs

- **Weekly Newsletter**: Sends a newsletter every Sunday at 9 AM.
- **Database Backup**: Backs up the database every day at 2 AM.
- **Clean Up Logs**: Cleans up log files every month on the 1st at 3 AM.
- **Update Search Index**: Updates the Elasticsearch index every day at 4 AM.

## Utilities

- **Logger**: Provides comprehensive logging for the application.
- **Error Handler**: Handles exceptions and sends appropriate responses.
- **Validator**: Validates input data for API requests.
- **Paginator**: Provides pagination utilities for listing endpoints.

## Contributing

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the ISC License.
