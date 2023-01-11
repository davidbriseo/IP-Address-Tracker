import React from "react"
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'

function Map(props){


    function ChangeView() {
        const map = useMap();
        map.setView(props.coord, 15);
        // return null
  
        return props.coord === null ? null : (
            <Marker position={props.coord}>
            <Popup>You are here</Popup>
            </Marker>
        )
    }

    return(
        <div className="map">
            <MapContainer 
                center={[19.432608, -99.133209]} 
                zoom={13} 
                scrollWheelZoom={true}
            >
                <ChangeView scrollWheelZoom={true}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
        
            </MapContainer>
        </div>
    )
}

export default Map