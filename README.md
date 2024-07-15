# Hospital Management System

Welcome to the Hospital Management System (HMS) by Metric Coders! This application is designed to streamline hospital operations by providing efficient management of patients, doctors, appointments, and medical records. The system is built using Next.js for the front-end, Prisma as the ORM, Postgres for the database, Clerk for authentication, and Shadcn for the UI.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user authentication and management using Clerk.
- **Patient Management**: Manage patient records, including personal details, medical history, and current treatments.
- **Doctor Management**: Manage doctor profiles, specialties, and availability.
- **Appointment Scheduling**: Schedule, view, and manage appointments between patients and doctors.
- **Medical Records**: Maintain comprehensive medical records accessible to authorized personnel.
- **Responsive UI**: A user-friendly and responsive interface designed with Shadcn.

## Technologies Used

- **Next.js**: React framework for server-side rendering and generating static websites.
- **Prisma**: Modern ORM (Object-Relational Mapping) for Node.js and TypeScript.
- **Postgres**: Reliable and robust open-source relational database.
- **Clerk**: Authentication and user management service.
- **Shadcn**: UI components library.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [Postgres](https://www.postgresql.org/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (optional, you can use npm as well)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/hospital-management-system.git
    cd hospital-management-system
    ```

2. **Install dependencies**:
    ```bash
    yarn install
    ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:
    ```env
    DATABASE_URL="postgresql://username:password@localhost:5432/hospital-management-system"
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    ```

4. **Set up the database**:
    ```bash
    npx prisma migrate dev --name init
    ```

### Running the Application

1. **Start the development server**:
    ```bash
    yarn dev
    ```

2. **Open your browser** and navigate to `http://localhost:3000`.

## Configuration

The application uses environment variables for configuration. Ensure you have a `.env` file in the root of your project with the following content:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/hospital-management-system"
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
```

Replace `<your-clerk-frontend-api>` and `<your-clerk-api-key>` with your actual Clerk API keys.

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!