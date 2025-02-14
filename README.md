# Travel App - FEND Capstone Project

## Overview

The **Travel App** is part of the **Front-End Developer (FEND) Capstone** project. The application allows users to plan trips by entering their destination, the start and end dates, and get useful information like weather data and destination images using multiple third-party APIs. Users can add multiple destinations to the same trip and even get weather forecasts and trip countdowns.

## Features

- **Trip Planning**: Users can input their travel details, including the destination and trip dates.
- **Weather Data**: Get the current weather for the selected destination using the **Weatherbit API**.
- **Images**: Fetch relevant images of the destination using the **Pixabay API**.
- **Countdown Timer**: Display a countdown until the trip begins.
- **Multiple Destinations**: Add multiple destinations to the same trip.
- **Offline Functionality**: The app includes service workers for offline capabilities.

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v12 or higher)
- **npm** (v6 or higher)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/travel-app.git
   cd travel-app

2.Install dependencies:
    npm install

3. Set up your API keys by creating 


-Create a .env file in the root directory of your project.
-Add the following keys (replace with your own API keys):
GEONAMES_API_KEY=your_geonames_api_key
WEATHERBIT_API_KEY=your_weatherbit_api_key
PIXABAY_API_KEY=your_pixabay_api_key

4. Run the development server:
    npm start

5. To build for production (optimize and minify the files):
    npm run build
    
6. Run tests:
    npm run test


    
