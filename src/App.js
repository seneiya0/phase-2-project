import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import ParksList from './ParksList'

function App() {
  const [allParks, setAllParks] = useState([])
  const [duplicate, setDuplicate] = useState([])

  useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks?limit=465&api_key=pqoHqZvfTYo5q5m2iP19obTQxYClyv4qi9IAeOaI')
    .then(r => r.json())
    .then(parkData => {
      setAllParks(parkData.data)
      setDuplicate(parkData.data)})
  }, [])
console.log(allParks)

function searchPark(text){
  const searchResults = duplicate.filter(park => {
    return park.addresses[0].stateCode.includes(text)
  })
  setAllParks(searchResults)
}

  return (
    <div className="App">
      <Navbar searchPark={searchPark}/>
      <div className='park-page'>
        <ParksList allParks={allParks} />

      </div>
    </div>
  );
}

function showParkInfo(park){
  allParks.map((park) => setAPark(park))
}


  return (
    <div className="App">      
      <Navbar searchPark={searchPark}/>
      <div className='park-page'>
        <ParksList allParks={allParks} />
        <ParkPage allParks={allParks} />
      </div>
    </div>
  )};
  export default App;