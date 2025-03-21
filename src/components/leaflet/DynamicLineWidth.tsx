'use client'

import { Feature, Geometry } from "geojson";
import { useEffect, useState } from "react";
import { useMap, GeoJSON} from "react-leaflet";
import { GeoJSON as LeafletGeoJSON } from 'leaflet'; // Leaflet types
import ReactDOMServer from 'react-dom/server';
import { FacilityProperties, GeoJson, PopupContentProps } from "./types";
import { CLASS_FOUR, CLASS_ONE, CLASS_THREE, CLASS_TWO } from "@/constants";


const PopupContent = ({status, facilityType, segmentName, yearBuilt}: PopupContentProps) => {

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
          
          <p><strong>Type:</strong> {facilityType}</p>
          <p><strong>Status:</strong> {status}</p>
          {yearBuilt && <p><strong>Year</strong> Built: {yearBuilt}</p>}

          <p><strong>Description:</strong></p>
          <p>{fullDescripion[facilityType]}</p>


      </div>
  )
}


const DynamicLineWidth = ({geojsonData}: GeoJson) => {
    const [zoomLevel, setZoomLevel] = useState<number>(0);
    const map = useMap();
  
    useEffect(() => {
      const handleZoom = () => {
        setZoomLevel(map.getZoom());
      };

      map.on('zoomend', handleZoom);
  
      setZoomLevel(map.getZoom());
  
      return () => {
        map.off('zoomend', handleZoom);
      };
    }, [map]);


  const onEachFacility = (facility: Feature<Geometry, FacilityProperties>, layer: LeafletGeoJSON) => {
   console.log(' facility.properties',  facility.properties);
    const facilityType = facility.properties.Facility;
    const { Status, SegmentName, YearBuilt} = facility.properties;
    const color = getFacilityColor(facilityType);

    layer.setStyle({
        color,
        dashArray: facility.properties.Status === 'PLANNED' ? '2, 10' : '',  // 2px dash and 10px gap for a dotted effect
    });

    const popupContent = ReactDOMServer.renderToString(
        <PopupContent status={Status} segmentName={SegmentName} facilityType={facilityType} yearBuilt={YearBuilt} />
      );

    layer.bindPopup(popupContent)
  };

  // Function to get color based on facility type
  const getFacilityColor = (type: string) => {

    const options = {
        ABL: CLASS_TWO,
        BBBL: CLASS_TWO,
        BL: CLASS_TWO,
        BBL: CLASS_TWO,
        ESR: CLASS_THREE,
        LSB: CLASS_THREE,
        NG: CLASS_ONE,
        PBL: CLASS_FOUR,
        SBBL: CLASS_TWO,
        SIR: CLASS_FOUR,
        TRL: CLASS_ONE,
    }
    return options[type as keyof typeof options] || '#000000'
  };
  
    // Function to calculate line weight based on zoom level
    const getLineWeight = (zoom: number) => {
      if (zoom >= 16) return 9;
      if (zoom >= 15) return 8;
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