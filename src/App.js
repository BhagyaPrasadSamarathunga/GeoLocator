import './App.css';
import React, { useState, useEffect} from 'react';
import osmtogeojson from 'osmtogeojson';
import GeoMap from './components/GeoMap';
import {DELTA, DEFAULTLATITUDE, DEFAULTLONGITUDE,OPENSTREETMAP_BASEURL} from './utils/constants';
import useFetch from './hooks/useFetch';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [lat, setLat] = useState(DEFAULTLATITUDE);
  const [lon, setLong] = useState(DEFAULTLONGITUDE);
  const [geoJSONData, setGeoJSONData] = useState(null);
  const [mapCenter, setMapCenter] = useState([DEFAULTLATITUDE, DEFAULTLONGITUDE]);
  const [geoJsonKey, setGeoJsonKey] = useState(0);
  const [data, fetchData, isLoading] = useFetch();


  useEffect(()=>{
    const handelOSMData = async () => {
      const responseText = await data.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(responseText, 'text/xml');
      const convertedData = osmtogeojson(xmlDoc);
      setGeoJSONData(convertedData);
      setMapCenter([lat, lon]);
      setGeoJsonKey((prevKey) => prevKey + 1);
    }
    if(data) {
      handelOSMData();
    }
   
  },[data, lat, lon]);

  const fetchGeoData = async () => {
    fetchData(`${OPENSTREETMAP_BASEURL}bbox=-${lon},${lat},${lon + DELTA},${lat + DELTA}`);
  }

  return (
    <div className="App">
      <div className='App-lat-long-container'>
        <div className='App-lat-long'>
          <p className='App-text-label'> Latitude</p>
          <input type="number" onChange={(e) => setLat(e.target.value)} value={lat} className='App-input-text'/>
        </div>

        <div className='App-lat-long'>
          <p className='App-text-label'>  Longitude</p>
          <input type="number" onChange={(e) => setLong(e.target.value)} value={lon} className='App-input-text'/>
        </div>
        <button className='Submit-button' onClick={fetchGeoData}>Display</button>
      </div>
      {isLoading && <div className='Spinner'><LoadingSpinner /></div>}
      <GeoMap
        mapCenter={mapCenter}
        geoJsonData={geoJSONData}
        geoJsonKey={geoJsonKey}
      />
    </div>
  );
}

export default App;
