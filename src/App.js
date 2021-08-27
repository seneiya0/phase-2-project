import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'
import ParksList from './ParksList'
import ParkPage from './ParkPage';

function App() {
  const [allParks, setAllParks] = useState([])
  const [duplicate, setDuplicate] = useState([])
  const [aPark, setAPark] = useState({})
const [page, setPage] = useState('/park_list')

  useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks?limit=465&api_key=pqoHqZvfTYo5q5m2iP19obTQxYClyv4qi9IAeOaI')
    .then(r => r.json())
    .then(parkData => {
      setAllParks(parkData.data)
      setDuplicate(parkData.data)})
  }, [])
// console.log(allParks)

function searchPark(text){
  const searchResults = duplicate.filter(park => {
    return park.addresses[0].stateCode.includes(text)
  })
  setAllParks(searchResults)
}

function showParkInfo(park){
    setAPark(park) 
}

  return (
    <div className="App">      
      <Navbar searchPark={searchPark} onChangePage={setPage}/>
        <BrowserRouter>
          <Switch>
            <div className='park-page'>
              <Route path="/park_list">
                <ParksList allParks={allParks} showParkInfo={showParkInfo} />
              </Route>
              <Route path="park_page">
                <ParkPage aPark={aPark} />
              </Route>
              {/* <Route exact path="*">
                <h1>404: Path does not exist</h1>
              </Route> */}
            </div>
          </Switch>
        </BrowserRouter>
    </div>
  )};
  export default App;