# QbBooking2

QbBooking2 is a booking web application built using React.js and Tailwind CSS. Users can book one-way or two-way trips by selecting departure and return dates, which are validated to ensure correct input. The project also includes form validation and unit testing using Jest and React Testing Library.

## Features

- Select between **One-Way** or **Two-Way** trip types.
- Date pickers for **Departure Date** and **Return Date** (only for two-way trips).
- Real-time validation for dates:
  - Departure date must be today or later.
  - Return date must be on or after the departure date.
- Form input validation with error messages.
- Responsive design using **Tailwind CSS**.
- Unit tests written with **Jest** and **React Testing Library**.

## Technologies

- **React.js** - JavaScript library for building user interfaces.
- **Tailwind CSS** - Utility-first CSS framework.
- **Jest** - JavaScript testing framework.
- **React Testing Library** - Tool for testing React components.

## Getting Started

### Prerequisites

- Node.js (v14 or higher) and npm/yarn installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/qbBooking2.git
cd qbBooking2
```

2. Install dependencies and start the application:

```bash
npm install
```

3. Running Tests:

```bash
npm test
```

### Project Structure

```bash
qbBooking2/
│
├── public/                # Public files
├── src/                   # Source files
│   ├── components/        # React components
│   ├── utils/             # Utility functions (validation)
│   └── tests/             # Unit tests
├── package.json           # Project configuration and dependencies
└── README.md              # Project documentation
```
