# Express.js & TypeScript API

This project is a simple backend API built with Express.js and TypeScript. It provides CRUD operations for two entities: `users` and `products`.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
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
  /models
    - user.tsx       # User model definition
    - product.tsx    # Product model definition
  /routes
    - userRoutes.tsx     # Routes for user CRUD operations
    - productRoutes.tsx  # Routes for product CRUD operations
  - index.tsx       # Main application entry point
```

### `models`

- `user.tsx`: Defines the `User` interface with properties `id`, `name`, and `email`.
- `product.tsx`: Defines the `Product` interface with properties `id`, `name`, and `price`.

### `routes`

- `userRoutes.tsx`: Contains all the routes related to users. This includes creating a user, reading all users, reading a single user by ID, updating a user by ID, and deleting a user by ID.
  
- `productRoutes.tsx`: Similar to `userRoutes.tsx`, but for products.

### `index.tsx`

This is the main entry point for the application. It sets up the Express server, middleware, and routes.

## API Endpoints

### Users

- **Create User**: `POST /users`
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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
