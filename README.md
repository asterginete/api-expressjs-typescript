# Express.js & TypeScript API

This project is a simple backend API built with Express.js and TypeScript. It provides CRUD operations for two entities: `users` and `products`, and includes authentication and authorization features.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Authentication and Authorization](#authentication-and-authorization)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-name>
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

The server will start on port 3000.

## Project Structure

```
/src
  /auth
    - authMiddleware.ts
    - authService.ts
  /models
    - user.ts
    - product.ts
  /routes
    - userRoutes.ts
    - productRoutes.ts
  - index.ts
/types
  - types.d.ts
```

### `models`

- `user.ts`: Defines the `User` interface with properties `id`, `name`, `email`, `password`, and `role`.
- `product.ts`: Defines the `Product` interface with properties `id`, `name`, and `price`.

### `auth`

- `authService.ts`: Contains utility functions for generating and verifying JWT tokens, as well as hashing and comparing passwords.
- `authMiddleware.ts`: Middleware functions for authenticating and authorizing users.

### `routes`

- `userRoutes.ts`: Contains routes related to users, including registration and login.
- `productRoutes.ts`: Contains routes related to products.

### `types`

- `types.d.ts`: Extends the Express `Request` type to include a `user` property for authentication.

## API Endpoints

### Users

- **Register**: `POST /users/register`
- **Login**: `POST /users/login`
- **Get All Users**: `GET /users`
- **Get User by ID**: `GET /users/:id`
- **Update User by ID**: `PUT /users/:id`
- **Delete User by ID**: `DELETE /users/:id`

### Products

- **Create Product**: `POST /products`
- **Get All Products**: `GET /products`
- **Get Product by ID**: `GET /products/:id`
- **Update Product by ID**: `PUT /products/:id`
- **Delete Product by ID**: `DELETE /products/:id`

## Authentication and Authorization

The API uses JSON Web Tokens (JWT) for authentication. Users can register and log in to receive a token, which must be included in the `Authorization` header for protected routes.

Authorization is role-based, with two roles available: `user` and `admin`. Some routes may require a specific role to access.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
