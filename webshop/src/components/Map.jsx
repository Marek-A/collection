import '../css/Shops.css'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from '../css/pin.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import { useEffect, useState } from 'react';
import config from "../data/config.json";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [10, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
    const [shops, setShops] = useState([]);
    useEffect(() => {
        fetch(config.shopsDbUrl1)
            .then(res => res.json())
            .then(json => {
                setShops(json || []);
            });
    }, []);

    return (
        <div>
            <div className="map-container">
                <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
                    <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {shops.map(element =>
                        <Marker key={element.name} position={[element.longitude, element.latitude]}>
                            <Popup>
                                {element.name}. <br /> Open time {element.openTime}-{element.closingTime}
                            </Popup>
                        </Marker>)}
                </MapContainer>
            </div>
        </div>)
}

export default Map;
