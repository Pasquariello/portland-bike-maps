'use client'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import DynamicLineWidth from './DynamicLineWidth';
import { MapProps } from './types';
import './map.css'; // Import the CSS for the drawer

  
const Map = ({ geojsonData, children }: MapProps) => {
  return (
    <MapContainer center={[45.53514, -122.6355]} zoom={12} style={{ height: '800px' }}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      <DynamicLineWidth  key={JSON.stringify(geojsonData)} geojsonData={geojsonData} />
      <Marker position={[45.5155342,-122.6753466]}>
        <Popup>
          <p style={{fontSize: 16}}>Hi, Alta! &#128075;</p>
        </Popup>
      </Marker>
      {children}
    </MapContainer>
  );
};

export default Map;