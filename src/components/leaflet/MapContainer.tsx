/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useMemo, useState } from 'react';
import { open_sans } from '@/ui/fonts';
import dynamic from 'next/dynamic';
import SlidingDrawer from '../slidingDrawer/slidingDrawer';
import {CLASS_ONE, CLASS_TWO, CLASS_THREE, CLASS_FOUR} from '@/constants'
import Filters from './filters';

export default function LeafMapContainer() {

const Map = useMemo(() => dynamic(
  () => import('./Map'),
  { 
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
), [])


  const [geojsonData, setGeojsonData] = useState<any>();
  const [geojsonDataOrig, setGeojsonDataOrig] = useState<any>();

  const [open, setOpen] = useState(false);


  // Fetch GeoJSON data when the page loads
  useEffect(() => {
    fetch('/data/Portland_Bicycle_Facilities_Active_Planned_2025.geojson')
      .then((response) => response.json())
      .then((data) => {
        setGeojsonDataOrig(data)
        setGeojsonData(data);
    })
      .catch((error) => console.error('Error loading GeoJSON:', error));
  }, []);


  const toggleDrawer = () => {
    setOpen(!open)
  
  }

  const handleFilter = (data: any) => {
    setGeojsonData(data)

  }

  return (
    <div>
      <p className={`${open_sans.className}`} style={{fontSize: 16}}>Filter by type (select one or more):</p>
     <Filters data={geojsonDataOrig} handleFilter={handleFilter} />
      {geojsonData && (

        <Map geojsonData={geojsonData}>
          <button className="open-drawer-btn" onClick={toggleDrawer}>
            Open Key
          </button>
        </Map>
      )}
      <SlidingDrawer open={open} toggleDrawer={toggleDrawer} />

    </div>
  );
}
