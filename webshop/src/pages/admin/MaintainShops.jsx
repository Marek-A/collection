import { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";
import Spinner from 'react-bootstrap/Spinner';

function MaintainShops() {
  const [shops, setShops] = useState([]);
  const shopNameRef = useRef();
  const openTimeRef = useRef();
  const closingTimeRef = useRef();
  const cityRef = useRef();
  const longRef = useRef();
  const latRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.shopsDbUrl1)
      .then(res => res.json())
      .then(json => setShops(json || []));
    setLoading(false);
  }, []);

  const addShops = () => {
    shops.push({
      "name": shopNameRef.current.value,
      "openTime": openTimeRef.current.value,
      "closingTime": closingTimeRef.current.value,
      "city": cityRef.current.value,
      "longitude": longRef.current.value,
      "latitude": latRef.current.value
    });
    fetch(config.shopsDbUrl1, { "method": "PUT", "body": JSON.stringify(shops) })
      .then(() => {
        setShops(shops.slice());
        shopNameRef.current.value = "";
        openTimeRef.current.value = "";
        closingTimeRef.current.value = "";
        cityRef.current.value = "";
        longRef.current.value = "";
        latRef.current.value = "";
      });
  }

  const deleteShop = (index) => {
    shops.splice(index, 1);
    fetch(config.shopsDbUrl1, { "method": "PUT", "body": JSON.stringify(shops) })
      .then(() => setShops(shops.slice()));
  }

  //---------LOADER BEFORE RETURN--------------
  if (isLoading === true) {
    return (<Spinner animation="grow" variant="dark" />
    )
  }

  return (
    <div>
      <label>Shop name</label><br />
      <input ref={shopNameRef} type="text" /><br />
      <label>Open time</label><br />
      <input ref={openTimeRef} type="time" /><br />
      <label>Closing time</label><br />
      <input ref={closingTimeRef} type="time" /><br />
      <label>City</label><br />
      <input ref={cityRef} type="text" /><br />
      <label>Longitude -X</label><br />
      <input ref={longRef} placeholder="58.8243" type="text" /><br />
      <label>Latitude -Y</label><br />
      <input ref={latRef} placeholder="35.5786" type="text" /><br />
      <button onClick={addShops}>Add new shop</button><br /><br />
      {shops.map((element, index) => <div key={index}>
        <div>{element.name}</div>
        <div>{element.openTime}</div>
        <div>{element.closingTime}</div>
        <div>{element.city}</div>
        <div>{element.longitude}</div>
        <div>{element.latitude}</div>
        <button onClick={() => deleteShop(index)}>X</button></div>)}
    </div>

  )
}

export default MaintainShops