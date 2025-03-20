// src/components/Map.tsx
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap(props: any) {
  const { position, zoom } = props

  return (
  // <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ border: '1px solid red', height: "1000px", width: "800px" }}>
    
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ border: '1px solid red', height: "1000px", width: "800px" }}>

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
          {/* <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> */}
    </Marker>
  </MapContainer>
  )
}