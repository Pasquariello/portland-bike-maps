// src/types.ts
import { Geometry, FeatureCollection } from "geojson";


export interface FacilityProperties {
  SegmentName: string;
  Facility: string;
  Status: string;
}

export interface Facility {
  type: string;
  properties: FacilityProperties;
}

export interface PopupContentProps {
  status: string;
  facilityType: string;
  segmentName: string
}
export interface MapProps  extends GeoJson{
  children: React.ReactNode
}
  
export interface GeoJson {
  geojsonData: FeatureCollection<Geometry, FacilityProperties>;
}

