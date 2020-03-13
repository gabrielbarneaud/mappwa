import React, { useState } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const CustomMap = ({onEventMap}) => {
    const position = [44.566667,  6.083333]
    const [markers, setMarkers] = useState([]);
    const map = (
        <Map center={position} zoom={13} onClick={(e)=> {
            setMarkers(prev => [... prev, e.latlng])
        }
        }>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {markers.map((position, idx) =>
                <Marker key={`marker-${idx}`} position={position}>
                    <Popup>
                        <span>Latitude : {position.lat}</span><br/>
                        <span>Longitude : {position.lng}</span><br/>
                        <button onClick={() => {
                            setMarkers(prev => prev.filter((val)=>val !== position));
                        }}>Supprimer</button>
                    </Popup>
                </Marker>
            )}
        </Map>
    )

    return map;
}

export default CustomMap;