'use client'
import { useEffect, useMemo, useState } from 'react';
// import Map from './Map';
import { open_sans } from '@/ui/fonts';
import dynamic from 'next/dynamic';
import SlidingDrawer from '../slidingDrawer/slidingDrawer';

export default function LeafMapContainer() {

const Map = useMemo(() => dynamic(
  () => import('./Map'),
  { 
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
), [])


  const [geojsonData, setGeojsonData] = useState({});
  const [geojsonDataOrig, setGeojsonDataOrig] = useState(null);

  const [activeClassFilter, setActiveClassFilter] = useState<string[]>([]);

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

  const CLASS_ONE = '#8BC34A';
  const CLASS_TWO = '#FF9800';
  const CLASS_THREE = '#4A90E2';
  const CLASS_FOUR = '#D32F2F';
  const FILTER_COLOR = '#3862a3'

  const filters = [
    {
      color: CLASS_ONE,
      value: 'CLASS_ONE',
      title: 'Class 1'
    },
    {
      color: CLASS_TWO,
      value: 'CLASS_TWO',
      title: 'Class 2'
    },
    {
      color: CLASS_THREE,
      value: 'CLASS_THREE',
      title: 'Class 3'
    },
    {
      color: CLASS_FOUR,
      value: 'CLASS_FOUR',
      title: 'Class 4'
    },
  ]

  const handleOnClick = (type: string) => {

    const newArray = activeClassFilter.includes(type) 
      ? activeClassFilter.filter(activeClassFilterType => activeClassFilterType !== type) 
      : [...activeClassFilter, type]

  
    setActiveClassFilter(newArray);

    
  //   const options2 = {
  //     CLASS_ONE: ['NG', 'TRL' ],
  //     CLASS_TWO: ['ABL', 'BBBL', 'BL', 'BBL', 'SBBL' ],
  //     CLASS_THREE: ['ESR', 'LSB'],
  //     CLASS_FOUR: ['PBL', 'SIR']
  // }

    const options = {
      ABL: 'CLASS_TWO', // Class 2
      BBBL: 'CLASS_TWO', // Class 2
      BL: 'CLASS_TWO', // Class 2
      BBL: 'CLASS_TWO', // Class 2
      ESR: 'CLASS_THREE', // Class 3
      LSB: 'CLASS_THREE', // Class 3
      NG: 'CLASS_ONE', // Class 1
      PBL: 'CLASS_FOUR', // Class 4
      SBBL: 'CLASS_TWO', // Class 2
      SIR: 'CLASS_FOUR', // Class 4
      TRL: 'CLASS_ONE', // Class 1
  }

    const filteredData = geojsonDataOrig?.features?.filter(data => newArray.includes(options[data.properties.Facility]));

    if (!newArray.length) { 
      setGeojsonData(geojsonDataOrig)
    } 
    else {
      setGeojsonData({
        ...geojsonData,
        features: filteredData
      });
    }

  }

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open)
  
  }

  return (
    <div>
      <p className={`${open_sans.className}`} style={{fontSize: 16}}>Filter by type:</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', gap: 20, marginBottom: 20}}>
          {filters.map(filter => {
            return (
              <div 
                key={filter.title} 
                onClick={() => handleOnClick(filter.value)}
                className={`${open_sans.className}`} style={{
                  //  border: activeClassFilter[filter.value] ? '2px solid black': '2px solid transparent',
                   border: activeClassFilter.includes(filter.value) ? '2px solid black': '2px solid transparent',  
  
                   cursor: 'pointer', padding: '16px 32px', color: 'white', background: filter.color, display: 'inline-block', borderRadius: 44}}
              >
                {filter.title}
              </div>
            )
          })}
        </div>
        <p 
          style={{color: '#3862ae', cursor: 'pointer'}}
          onClick={() => {
            setGeojsonData(geojsonDataOrig)
            setActiveClassFilter([]);
          }}
        >
          Reset
        </p>
      </div>
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
