'use client'
// components/Map.js
import { MapContainer, TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import DynamicLineWidth from './DynamicLineWidth';
import { MapProps } from './types';

import './map.css'; // Import the CSS for the drawer
import { useState } from 'react';
import SlidingDrawer from '../slidingDrawer/slidingDrawer';

  
const Map = ({ geojsonData, children }: MapProps) => {
  return (
    <MapContainer center={[45.53514, -122.6355]} zoom={12} style={{ height: '800px' }}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      {/* {geojsonData && <GeoJSON key={JSON.stringify(geojsonData)} data={geojsonData} onEachFeature={onEachFacility} />} */}
      <DynamicLineWidth  key={JSON.stringify(geojsonData)} geojsonData={geojsonData} />
      {children}
    </MapContainer>
  );
};

// 45°31'08.9"N 122°38'07.8"W
export default Map;