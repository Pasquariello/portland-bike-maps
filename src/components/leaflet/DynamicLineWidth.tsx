'use client'

import { Feature, Geometry } from "geojson";
import { useEffect, useState } from "react";
import { useMap, GeoJSON} from "react-leaflet";
import { GeoJSON as LeafletGeoJSON } from 'leaflet'; // Leaflet types
import ReactDOMServer from 'react-dom/server';
import { FacilityProperties, GeoJson, PopupContentProps } from "./types";


const PopupContent = ({status, facilityType, segmentName}: PopupContentProps) => {

  const fullDescripion: {[key: string]: string} = {
    ABL: 'Advisory Bike Lane',
    BBBL: 'Bike Lane Buffered by Bus Lane',
    BL: 'Bike Lane',
    BBL: 'Buffered Bike Lane',
    ESR: 'Enhanced Shared Roadway',
    LSB: 'Local Service Bikeway',
    NG: 'Neighborhood Greenway',
    PBL: 'Protected Bike Lane',
    SBBL: 'Shared Bus-Bike Lane',
    SIR: 'Separated in-roadway',
    TRL: 'Off-Street Path/Trail',
  }


  return (
      <div>
          <h3>Name: {segmentName}</h3>
          <p>Type: {fullDescripion[facilityType]}</p>
          <p>Status: {status}</p>
      </div>
  )
}


// Component to update line width based on zoom
const DynamicLineWidth = ({geojsonData}: GeoJson) => {
    const [zoomLevel, setZoomLevel] = useState<number>(0);
    const map = useMap();
  
    useEffect(() => {
      const handleZoom = () => {
        setZoomLevel(map.getZoom());
      };

  
      // Listen for zoom level changes
      map.on('zoomend', handleZoom);
  
      // Set the initial zoom level
      setZoomLevel(map.getZoom());
  
      // Clean up the event listener when the component unmounts
      return () => {
        map.off('zoomend', handleZoom);
      };
    }, [map]);


  const onEachFacility = (facility: Feature<Geometry, FacilityProperties>, layer: LeafletGeoJSON) => {
   
    const facilityType = facility.properties.Facility;
    const { Status, SegmentName } = facility.properties;
    const color = getFacilityColor(facilityType);

    layer.setStyle({
        color,
        dashArray: facility.properties.Status === 'PLANNED' ? '2, 10' : '',  // 2px dash and 10px gap for a dotted effect
    });

    const popupContent = ReactDOMServer.renderToString(
        <PopupContent status={Status} segmentName={SegmentName} facilityType={facilityType} />
      );

    layer.bindPopup(popupContent)
  };

  // Function to get color based on facility type
  const getFacilityColor = (type: string) => {

//     1. Sky Blue (#4A90E2)

//     Reasoning: Blue generally has a high contrast against dark backgrounds and is often distinguishable by most people with color vision deficiencies.
//     Accessible for: Most types of color blindness, including Deuteranopia (green-blind) and Protanopia (red-blind).

// 2. Lime Green (#8BC34A)

//     Reasoning: Lime green is bright and stands out clearly on dark backgrounds. It's a vibrant color that contrasts well without being too harsh.
//     Accessible for: People with color blindness can generally distinguish green from other colors, especially on dark backgrounds.

// 3. Vivid Orange (#FF9800)

//     Reasoning: Orange is bright and highly visible, making it easy to see on dark backgrounds. It has a good level of contrast with a dark theme and is distinct from other colors.
//     Accessible for: This color is distinguishable by those with most types of color blindness and provides strong contrast.

// 4. Crimson Red (#D32F2F)

//     Reasoning: Red on a dark background provides excellent contrast. Crimson red, in particular, is rich and vivid, making it stand out without overwhelming the user.
//     Accessible for: Although red can be problematic for some people with color blindness, this shade is a good choice when paired with high contrast (dark background).

    const CLASS_ONE = '#8BC34A';
    const CLASS_TWO = '#FF9800';
    const CLASS_THREE = '#4A90E2';
    const CLASS_FOUR = '#D32F2F'

    // const CLASS_ONE = '#003366';
    // const CLASS_TWO = '#006400';
    // const CLASS_THREE = '#4B0082';
    // const CLASS_FOUR = '#333333'
  
  
    const options = {
        ABL: CLASS_TWO, // Class 2
        BBBL: CLASS_TWO, // Class 2
        BL: CLASS_TWO, // Class 2
        BBL: CLASS_TWO, // Class 2
        ESR: CLASS_THREE, // Class 3
        LSB: CLASS_THREE, // Class 3
        NG: CLASS_ONE, // Class 1
        PBL: CLASS_FOUR, // Class 4
        SBBL: CLASS_TWO, // Class 2
        SIR: CLASS_FOUR, // Class 4
        TRL: CLASS_ONE, // Class 1
    }
    return options[type as keyof typeof options] || '#000000'
  };
  
    // Function to calculate line weight based on zoom level
    const getLineWeight = (zoom: number) => {
      if (zoom >= 16) return 8;
      if (zoom >= 15) return 4;
      if (zoom >= 13) return 3;
      if (zoom >= 10) return 2;
      if (zoom >= 8) return 1;
      return 2; // Default line weight
    };
  
    return (
      <GeoJSON
        data={geojsonData}
        style={{
          weight: getLineWeight(zoomLevel), // Dynamically change line width
        }}
        onEachFeature={onEachFacility} 
      />
    );
  };

  export default DynamicLineWidth