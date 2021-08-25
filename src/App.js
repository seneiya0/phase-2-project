import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import ParksList from './ParksList'

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
      <div>
        <ParksList allParks={allParks} />
      </div>
    </div>
  );
}

export default App;
