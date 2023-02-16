import '../css/Shops.css'
import { useEffect, useState } from 'react';
import Map from '../components/Map';
import config from "../data/config.json";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function Shops() {
  const [coordinaates, setCoordinates] = useState({ lngLat: [58.8243, 25.5786], zoom: 11 });
  const [shops, setShops] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.shopsDbUrl1)
      .then(res => res.json())
      .then(json => {
        setShops(json || [])
        setLoading(false);
      });
  }, []);

  //---------LOADER BEFORE RETURN--------------

  if (isLoading === true) {
    return (<Spinner animation="grow" variant="dark" />
    )
  }
  return (

    <div className="shops-body-container">
      <Map mapCoordinaates={coordinaates} />
      <div className="map-text-container">
        <h1>From bustling cities to charming towns, we've got you covered. Start exploring now!</h1>
      </div>
      <div className='map-buttons-container'>
        <Button className='map-buttons' onClick={() => setCoordinates({ lngLat: [58.8, 24.5], zoom: 7 })}>All Shops</Button>
        <Button className='map-buttons' onClick={() => setCoordinates({ lngLat: [59.45, 24.75], zoom: 11 })}>North Estonia</Button>
        <Button className='map-buttons' onClick={() => setCoordinates({ lngLat: [58.3833, 26.7167], zoom: 11 })}>South Estonia</Button>
        <Button className='map-buttons' onClick={() => setCoordinates({ lngLat: [58.5, 22.25], zoom: 7 })}>West Estonia</Button>
        {shops.map(element =>
          <Button className='map-buttons' key={element.name} onClick={() => setCoordinates({ lngLat: [element.longitude, element.latitude], zoom: 13 })}>{element.name}</Button>)}
      </div>
    </div>

  )
}

export default Shops;