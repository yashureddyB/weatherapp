import React, { useState } from "react";

const Body = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [rainProb, setRainProb] = useState(null);
  const [error, setError] = useState("");
  const getWeather = async (e) => {
    e.preventDefault();
    setError("");
    setWeather(null);
    if (!location) {
      setError("Please enter a location.");
      return;
    }
    const apiKey = "df18e09e46567e651745c5dd034dde0d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod !== 200) {
      setError("Location not found. Please try again.");
      return;
    }
    
      setWeather(data);
      setLocation("");
  };

  return (
    <div className="Body">
      <div className="body-text">
        <h1>
          Want to know if you need an umbrella ⛱ or sunglasses 🕶 today? Check your
          local weather now
        </h1>
      </div>

      <div className="body-form">
        <form onSubmit={getWeather}>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {weather && weather.main && (
        <div className="weather-card">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>🌤 Condition: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
          

        </div>
      )}
      <p>
        Our mission is simple — to make weather information accessible,
        accurate, and meaningful for everyone. We combine advanced data
        technology with a clean, user-friendly design to ensure you get the most
        important updates without the clutter. Every forecast we provide is
        backed by trusted meteorological sources and enhanced with smart
        visualization, so you not only see the numbers but understand what they
        mean. From sunny skies to sudden storms, our platform is here to keep
        you informed, alert, and prepared — every single day.
      </p>
    </div>
  );
};

export default Body;
