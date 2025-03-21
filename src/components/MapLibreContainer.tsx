'use client'
import { useEffect, useState } from 'react';
import Map from './mapLibre/Map';

export default function MapLibreContainer() {
  const [geojsonData, setGeojsonData] = useState(null);

  // Fetch GeoJSON data when the page loads
  useEffect(() => {
    fetch('/data/Portland_Bicycle_Facilities_Active_Planned_2025.geojson')
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        setGeojsonData(data)
    })
      .catch((error) => console.error('Error loading GeoJSON:', error));
  }, []);

  return (
    <div>
    
      {geojsonData && (

        <Map 
            geojsonData={geojsonData}
        // style={mapStyle} center={initialCenter} zoom={initialZoom}
        >
          {/* Other map-related components can go here */}
        </Map>
      )}

    </div>
  );
}
