const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
const weatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixabayURL = 'https://pixabay.com/api/?';

const geoNamesKey = 'YOUR_GEONAMES_USERNAME';
const weatherbitKey = 'YOUR_WEATHERBIT_KEY';
const pixabayKey = 'YOUR_PIXABAY_KEY';

const handleSubmit = async (event) => {
    event.preventDefault();

    const location = document.getElementById('location').value;
    
    if (!location) {
        alert('Please enter a location');
        return;
    }

    try {
        const geoData = await fetch(`${geoNamesURL}${location}&maxRows=1&username=${geoNamesKey}`);
        const geoResult = await geoData.json();
        if (geoResult.geonames.length === 0) {
            alert('Location not found');
            return;
        }
        
        const { lat, lng, countryName } = geoResult.geonames[0];

        const weatherData = await fetch(`${weatherbitURL}lat=${lat}&lon=${lng}&key=${weatherbitKey}`);
        const weatherResult = await weatherData.json();
        const forecast = weatherResult.data[0];

        const imageData = await fetch(`${pixabayURL}key=${pixabayKey}&q=${location}&image_type=photo`);
        const imageResult = await imageData.json();
        const imageUrl = imageResult.hits.length > 0 ? imageResult.hits[0].webformatURL : 'default-image.jpg';

        const tripData = {
            location,
            countryName,
            forecast: forecast.weather.description,
            temp: forecast.temp,
            imageUrl,
        };

        await fetch('/addTrip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tripData),
        });

        updateUI();
    } catch (error) {
        console.error('Error:', error);
    }
};

const updateUI = async () => {
    const res = await fetch('/getTrip');
    const trip = await res.json();

    document.getElementById('trip-info').innerHTML = `
        <h2>Your Trip to ${trip.location}, ${trip.countryName}</h2>
        <p>Weather: ${trip.forecast} - ${trip.temp}°C</p>
        <img src="${trip.imageUrl}" alt="${trip.location}">
    `;
};

export { handleSubmit };
