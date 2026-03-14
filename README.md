# Hotela HR Management Backend

This is the backend service for Hotela HR Management, providing a robust, simple, and clean API for managing HR operations.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, unopinionated web framework.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: Native MongoDB object modeling for Node.js.
- **TypeScript**: Typed superset of JavaScript.
- **Zod**: TypeScript-first schema declaration and validation library.

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB server or Atlas Cluster

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables. Copy `.env.example` to `.env` and adjust specific database details if required.
   ```bash
   cp .env.example .env
   ```
   > Ensure you have a running MongoDB database instance that matches your `DATABASE_URL`.

3. Start the development server:
   ```bash
   npm run dev
   ```
   The backend will start at `http://localhost:5000`. Base API path is `http://localhost:5000/api`.

## API Endpoints

### Employees
- `GET /api/employees` - List all employees
- `GET /api/employees/:id` - Get a specific employee by ID
- `POST /api/employees` - Create a new employee
- `PUT /api/employees/:id` - Update an employee detail
- `DELETE /api/employees/:id` - Delete an employee

### Attendance
- `GET /api/attendance` - List all attendance records
- `POST /api/attendance/checkin` - Check in an employee for a date
- `POST /api/attendance/checkout` - Check out an employee for a date

### Leaves
- `GET /api/leaves` - List all leave records
- `POST /api/leaves` - Create a new leave request
- `PUT /api/leaves/:id` - Update a leave request
- `DELETE /api/leaves/:id` - Delete a leave request

### Payroll
- `GET /api/payroll` - List all payroll records
- `POST /api/payroll` - Create a new payroll record
- `PUT /api/payroll/:id` - Update an existing payroll record
- `DELETE /api/payroll/:id` - Delete a payroll record
