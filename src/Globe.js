import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const SantaGlobe = ({ locations, setCurrentCity }) => {
  const globeRef = useRef();
  const [santaPos, setSantaPos] = useState(locations[0]); // Santa's initial position
  const [currentIndex, setCurrentIndex] = useState(0); // Track Santa's current city

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next city
      const nextIndex = (currentIndex + 1) % locations.length;
      const nextCity = locations[nextIndex];
      setSantaPos(nextCity); // Update Santa's position
      setCurrentCity(nextCity.city); // Update the current city in the navbar
      setCurrentIndex(nextIndex); // Update the index
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, locations, setCurrentCity]);

  const arcsData = locations.map((loc, idx) => ({
    startLat: loc.lat,
    startLng: loc.lng,
    endLat: locations[(idx + 1) % locations.length].lat,
    endLng: locations[(idx + 1) % locations.length].lng,
    color: idx === currentIndex ? 'green' : 'red', // Highlight the current city line
  }));

  return (
    <div className="globe-container">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        arcsData={arcsData}
        arcColor={(d) => d.color}
        arcStroke={1}
        htmlElementsData={[santaPos]}
        htmlElement={(d) => {
          const santaDiv = document.createElement('div');
          const santaImg = document.createElement('img');
          santaImg.src = require('./santa.png');
          santaImg.style.width = '60px';
          santaImg.style.height = 'auto';
          santaDiv.appendChild(santaImg);
          return santaDiv;
        }}
      />
    </div>
  );
};

export default SantaGlobe;
