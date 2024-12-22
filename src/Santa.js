import React, { useEffect, useState } from 'react';

const SantaAnimation = ({ locations }) => {
  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % locations.length);
      setCurrentLocation(locations[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [locations, index]);

  return <div className="santa-location">Santa is now in {currentLocation.city}!</div>;
};

export default SantaAnimation;
