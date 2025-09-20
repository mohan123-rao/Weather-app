import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

const Home = () => {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)

  const getWeather = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("https://weather-app-backend-1-khlx.onrender.com/getWeather", { city })
      setWeatherData(res.data)
      console.log("✅ Weather Data:", res.data)
    } catch (error) {
      console.error(error)
      alert("Failed to fetch weather")
    }
  }

  // Background color logic
  const getBackground = () => {
    if (!weatherData || !weatherData.main)
      return "linear-gradient(to bottom, #83a4d4, #b6fbff)"

    const temp = weatherData.main.temp
    const clouds = weatherData.clouds ? weatherData.clouds.all : 0

    if (temp < 10) return "linear-gradient(to bottom, #2193b0, #6dd5ed)"
    if (temp >= 10 && temp < 25) {
      if (clouds > 50) return "linear-gradient(to bottom, #757f9a, #d7dde8)"
      return "linear-gradient(to bottom, #56ccf2, #2f80ed)"
    }
    if (temp >= 25) return "linear-gradient(to bottom, #ff512f, #dd2476)"
    return "linear-gradient(to bottom, #83a4d4, #b6fbff)"
  }

  return (
    <div className="home"
      style={{
        backgroundImage: getBackground(),
        height: '100vh',
        color: '#fff',
        padding: '20px'
      }}
    >
      <h1>🌥️ Weather App</h1>

      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter city or village"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <h3>🌡️ Temp: {weatherData.main?.temp}°C</h3>
          <h3>☁️ Weather: {weatherData.weather?.[0]?.description}</h3>
          <h4>💨 Wind Speed: {weatherData.wind?.speed} km/h</h4>
          <h4>💧 Humidity: {weatherData.main?.humidity}%</h4>
          <h4>🔽 Pressure: {weatherData.main?.pressure} hPa</h4>
        </div>
      )}
    </div>
  )
}

export default Home
