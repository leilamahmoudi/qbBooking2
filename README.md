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

## Project Structure

The main files and their purposes are:
