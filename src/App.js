import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar'

function App() {
  const [allParks, setAllParks] = useState([])

  useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks?limit=465&api_key=pqoHqZvfTYo5q5m2iP19obTQxYClyv4qi9IAeOaI')
    .then(r => r.json())
    .then(parkData => setAllParks(parkData.data))
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <h1>hello</h1>
    </div>
  );
}

export default App;
