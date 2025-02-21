# Travel App

## Project Overview
This is a travel planning web application that allows users to search for destinations and retrieve information such as location details, weather forecasts, and related images. The app integrates multiple APIs to enhance the travel planning experience.

## Features
- Fetches geolocation data using the Geonames API
- Retrieves weather forecasts from Weatherbit API
- Displays relevant images using Pixabay API
- Service workers for offline support
- Webpack bundling and optimizations

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>=18)
- npm (comes with Node.js)

### Clone the Repository
```sh
git clone https://github.com/shahdeid2003/travel-app.git
cd travel-app
```

### Install Dependencies
```sh
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```
GEONAMES_USERNAME=yourUsername
WEATHERBIT_API_KEY=yourApiKey
PIXABAY_API_KEY=yourApiKey
```

## Running the Application
### Start the Development Server
```sh
npm run dev
```
This will open the application in your default web browser.

### Build for Production
```sh
npm run build
```
This generates an optimized production-ready version in the `dist/` folder.

### Start the Server
```sh
npm start
```
Runs the Express.js server to serve the built files.

## Code Quality Checks
### Linting
To ensure code quality, run:
```sh
npm run lint
```

## Testing
Run tests using Jest:
```sh
npm run test
```

## Dependencies
### Main Dependencies
- Express.js (Backend Server)
- Axios (API Requests)
- Body-parser (Middleware for parsing JSON data)
- Cors (Enables cross-origin requests)
- Dotenv (Manages environment variables)
- Node-fetch (Fetch API for the server)

### Development Dependencies
- Webpack (Module bundler)
- Babel (Transpiler for modern JavaScript support)
- Jest (Testing framework)
- ESLint (Code quality enforcement)
- Sass (CSS Preprocessing)

## Folder Structure
```
travel-app/
│── src/
│   ├── client/
│   │   ├── js/
│   │   │   ├── app.js
│   │   ├── views/
│   │   │   ├── index.html
│   │   ├── styles/
│   │   │   ├── main.scss
│   ├── server/
│   │   ├── server.js
│── dist/
│── webpack.config.js
│── package.json
│── README.md
│── .env
```

## Contributors
- **Shahd Eid**

## License
This project is licensed under the MIT License.

