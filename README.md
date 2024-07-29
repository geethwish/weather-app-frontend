# WeatherApp

This is the frontend application for a Weather App, built with Angular 18. It provides a user-friendly interface to interact with weather data and related features.

## Description

WeatherApp is an Angular-based frontend application designed to display weather information. It integrates with a backend API to fetch and display weather data, manage user authentication, and provide a seamless user experience.

## Features

- User registration
- Display current weather conditions
- Search weather by city
- User authentication
- Responsive design
- Toast notifications for user feedback
- FontAwesome icons for a better UI adn Integrated with tailwind for better quality UI
- Integration with ng-zorro-antd for UI components

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v18 or later)
- npm (v8 or later)
- Angular CLI (v18 or later)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/geethwish/weather-app-frontend.git
   ```

2. Navigate to the project directory:

   ```
   cd weather-app-frontend
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `src/environments/environment.ts` file and add necessary environment variables:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: "http://localhost:3000",
   };
   ```

5. Create a `src/environments/environment.prod.ts` file for production environment variables:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: "https://api.production.com",
   };
   ```

## Usage

To run the application in development mode:

```
npm start
```

To build the application for production:

```
npm run build
```

To watch for changes and rebuild automatically:

```
npm run watch
```

To run tests:

```
npm test
```

## Scripts

- `npm start`: Starts the development server
- `npm run build`: Builds the project for production
- `npm run watch`: Builds the project in watch mode for development
- `npm test`: Runs the test suite

## Dependencies

- Angular: Core framework
- Axios: HTTP client for API requests
- ng-zorro-antd: UI component library
- Tailwind css - CSS framework
- ngx-toastr: Toast notifications
- FontAwesome: Icons

## Dev Dependencies

- Angular CLI: Command-line interface for Angular
- Jasmine: Testing framework
- Karma: Test runner
- TailwindCSS: Utility-first CSS framework
- TypeScript: Superset of JavaScript

## Author

Geeth Wishkamal

## License

This project is licensed under the MIT License.

## Additional Notes

- Make sure to update the `apiUrl` in the environment files to match your backend API's URL.
- Customize the environment files as needed for different environments (development, staging, production).
