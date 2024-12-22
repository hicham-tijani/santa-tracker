import React, { useState } from 'react';
import Globe from './Globe';

const locations = [
  { lat: 40.7128, lng: -74.0060, city: 'New York' },
  { lat: 48.8566, lng: 2.3522, city: 'Paris' },
  { lat: 35.6895, lng: 139.6917, city: 'Tokyo' },
  { lat: -33.8688, lng: 151.2093, city: 'Sydney' },
  { lat: 22.559, lng: 17.083, city: 'Windhoek, Namibia' },
  { lat: -37.8136, lng: 144.9631, city: 'Melbourne' },
  { lat: -23.5505, lng: -46.6333, city: 'São Paulo' },
  { lat: -31.4201, lng: -64.1888, city: 'Córdoba, Argentina' },
  { lat: -33.4489, lng: -70.6693, city: 'Santiago, Chile' },
  { lat: 37.9838, lng: 23.7275, city: 'Athens, Greece' },
  { lat: 36.1699, lng: -115.1398, city: 'Las Vegas' },
];

const santaImage = require('./santa.png');

function App() {
  const [currentCity, setCurrentCity] = useState(locations[0].city); 

  return (
    <div className="App">
      {/* Navbar with Current City */}
      <div
        className="header-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          backgroundColor: '#61151a',
          color: 'white',
          textAlign: 'center',
          height: '100px',
        }}
      >
        <img
          src={santaImage}
          alt="Santa"
          style={{
            width: '130px',
            marginRight: '20px',
            marginLeft: '80px',
          }}
        />
        <h1 className="text-3xl font-bold">Santa Tracker</h1>
        {/* Current City */}
        <h2 style={{ marginLeft: '700px', fontSize: '1.2rem' }}>Currently in: {currentCity}</h2>
      </div>

      <div style={{ position: 'relative', height: '600px' }}>
        <Globe locations={locations} setCurrentCity={setCurrentCity} />
      </div>

    </div>
  );
}

export default App;
