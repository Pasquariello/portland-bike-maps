/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useMemo, useState } from 'react';
import { open_sans } from '@/ui/fonts';
import dynamic from 'next/dynamic';
import SlidingDrawer from '../slidingDrawer/slidingDrawer';
import Filters from './filters';

export default function LeafMapContainer() {

const Map = useMemo(() => dynamic(
  () => import('./Map'),
  { 
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
), [])


  const [filteredGeojsonData, setFilteredGeojsonData] = useState<any>();
  const [geojsonData, setGeojsonData] = useState<any>();

  const [open, setOpen] = useState(false);


  // Fetch GeoJSON data when the page loads
  useEffect(() => {
    fetch('/data/Portland_Bicycle_Facilities_Active_Planned_2025.geojson')
      .then((response) => response.json())
      .then((data) => {
        setGeojsonData(data)
        setFilteredGeojsonData(data);
    })
      .catch((error) => console.error('Error loading GeoJSON:', error));
  }, []);


  const toggleDrawer = () => {
    setOpen(!open)
  
  }

  const handleFilter = (data: any) => {
    setFilteredGeojsonData(data)

  }

  return (
    <div>
      <p className={`${open_sans.className}`} style={{fontSize: 16}}>Filter by type (select one or more):</p>
     <Filters data={geojsonData} handleFilter={handleFilter} />
      {filteredGeojsonData && (

        <Map geojsonData={filteredGeojsonData}>
          <button className="open-drawer-btn" onClick={toggleDrawer}>
            Open Key
          </button>
        </Map>
      )}
      <SlidingDrawer open={open} toggleDrawer={toggleDrawer} />

    </div>
  );
}
