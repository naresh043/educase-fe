# Educase Frontend (PopX)

A modern React-based frontend application for user authentication and profile management, built as part of the Educase platform. This app provides a simple and intuitive interface for users to sign up, log in, and view their profiles.

## Features

- **Landing Page**: Welcome screen with navigation to signup and login.
- **User Signup**: Form to create a new account with validation for full name, phone, email, password, company, and agency status.
- **User Login**: Secure login with email and password, using local storage for session management.
- **Profile Page**: Display user information including name, email, and profile picture.
- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly UI.
- **Form Validation**: Client-side validation with error messages for better user experience.
- **Routing**: Seamless navigation between pages using React Router DOM.

## Tech Stack

- **React 19**: Latest version of React for building the user interface.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: For client-side routing.
- **Axios**: HTTP client for API requests (ready for backend integration).
- **ESLint**: Code linting for maintaining code quality.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd educase-fe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- **Landing**: Visit the root URL to see the welcome page.
- **Signup**: Click "Create Account" to register a new user. Fill in all required fields and submit.
- **Login**: Click "Already Registered? Login" to sign in with your credentials.
- **Profile**: After logging in, you'll be redirected to the profile page showing your account details.

Note: This app currently uses local storage for data persistence. In a production environment, integrate with a backend API for secure user management.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run lint`: Run ESLint to check code quality.
- `npm run preview`: Preview the production build locally.

## Project Structure

```
src/
├── components/          # Reusable components
├── pages/               # Page components (Landing, Login, SignUp, ProfileCard)
├── assets/              # Static assets
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License.
