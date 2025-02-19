const API_URLS = {
    geonames: "http://localhost:8081/location",
    weatherbit: "http://localhost:8081/weather",
    pixabay: "http://localhost:8081/image"
};

let tripData = {
    location: "",
    startDate: "",
    endDate: "",
    weather: "",
    image: ""
};

export const handleAddTrip = async () => {
    const location = document.getElementById("location").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    
    const geoRes = await fetch(`${API_URLS.geonames}?city=${location}`);
    const geoData = await geoRes.json();
    if (!geoData.geonames.length) return alert("Location not found");

    const { lat, lng } = geoData.geonames[0];

    
    const weatherRes = await fetch(`${API_URLS.weatherbit}?lat=${lat}&lon=${lng}`);
    const weatherData = await weatherRes.json();
    tripData.weather = weatherData.data[0].weather.description;

  
    const imageRes = await fetch(`${API_URLS.pixabay}?city=${location}`);
    const imageData = await imageRes.json();
    tripData.image = imageData.hits.length ? imageData.hits[0].webformatURL : "default.jpg";

   
    tripData.location = location;
    tripData.startDate = startDate;
    tripData.endDate = endDate;

  
    await fetch("http://localhost:8081/addTrip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tripData)
    });

    alert("Trip added successfully!");
};
